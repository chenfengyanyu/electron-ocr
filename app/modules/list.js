import React from 'react';
import { Motion, spring } from 'react-motion';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Next from 'material-ui/svg-icons/image/navigate-next';
import Previous from 'material-ui/svg-icons/image/navigate-before';
import Slider from 'material-ui/Slider';

const springSettings = {
  stiffness: 170,
  damping: 26,
};
const NEXT = 'show-next';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [
        [560, 280],
        [446, 88],
        [570, 238],
        [640, 200],
        [492, 207],
        [306, 56],
        [488, 318],
        [303, 77],
        [486, 176],
      ],
      currPhoto: 0,
    };

    this.getDataUri = this.getDataUri.bind(this);
    this.base64ToBlob = this.base64ToBlob.bind(this);
  }

  getDataUri(url) {
    return new Promise((resolve, reject) => {
      /* eslint-disable */
      let image = new Image();
      image.onload = function() {
        let canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;
        canvas.getContext('2d').drawImage(this, 0, 0);
        // Data URI
        resolve(canvas.toDataURL('image/png'));
      };

      image.src = url;
      // console.log(image.src);

      image.onerror = () => {
        reject(new Error('图片流异常'));
      };
    });
  }

  base64ToBlob(b64data, contentType, sliceSize) {
    sliceSize || (sliceSize = 512);
    return new Promise((resolve, reject) => {
      let byteCharacters = atob(b64data);
      let byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);

            let byteNumbers = [];
            for (let i = 0; i < slice.length; i++) {
                byteNumbers.push(slice.charCodeAt(i));
            }

            byteArrays.push(new Uint8Array(byteNumbers));
        }
        resolve(new Blob(byteArrays, {
          type: contentType
        }))
    })
  }


  clickHandler(btn) {
    let photoIndex = btn === NEXT ? this.state.currPhoto + 1 : this.state.currPhoto - 1;

    photoIndex = photoIndex >= 0 ? photoIndex : this.state.photos.length - 1;
    photoIndex = photoIndex >= this.state.photos.length ? 0 : photoIndex;

    this.setState({ currPhoto: photoIndex });
  }

  async imageChoose(index) {
    let dataUri = await this.getDataUri(`image/test/${index}.png`);
    let blob = await this.base64ToBlob(dataUri.split(',')[1], 'image/png');
    // console.log(dataUri,'dataUri');
    Object.assign(blob,{
      preview: URL.createObjectURL(blob),
      name: `图片示例：${index}.png`
    });
    console.log(blob,'blob');
    this.props.history.push({
      pathname:'/preview',
      myfile: blob,
      binary: dataUri,
    });
  }

  handleChange(event, value) {
    this.setState({ currPhoto: value });
  }

  render() {
    const { photos, currPhoto } = this.state;
    const [currWidth, currHeight] = photos[currPhoto];

    const widths = photos.map(([origW, origH]) => currHeight / origH * origW);

    const leftStartCoords = widths.slice(0, currPhoto).reduce((sum, width) => sum - width, 0);

    const configs = [];
    photos.reduce((prevLeft, [origW, origH], i) => {
      configs.push({
        left: spring(prevLeft, springSettings),
        height: spring(currHeight, springSettings),
        width: spring(widths[i], springSettings),
      });
      return prevLeft + widths[i];
    }, leftStartCoords);

    return (
      <div className="_list">
        <div className="demo4">
          <Motion style={{ height: spring(currHeight), width: spring(currWidth) }} >
            {container =>
              <div className="demo4-inner" style={container}>{configs.map((style, i) => <Motion key={i} style={style}>{st => <img onClick={this.imageChoose.bind(this, i)} className="photo" alt="" src={`image/test/${i}.png`} style={st} />}</Motion>)}</div>}
          </Motion>
        </div>
        <FloatingActionButton className="previous" backgroundColor="rgba(255, 255, 255, 0.6)" iconStyle={{ fill: '#333' }} mini onClick={this.clickHandler.bind(this, '')}>
          <Previous />
        </FloatingActionButton>
        <FloatingActionButton className="next" backgroundColor="rgba(255, 255, 255, 0.7)" iconStyle={{ fill: '#333' }} mini onClick={this.clickHandler.bind(this, NEXT)}>
          <Next />
        </FloatingActionButton>
        <div className="sliderbox">
          <Slider className="slider" min={0} max={photos.length - 1} value={currPhoto} step={1} onChange={this.handleChange.bind(this)} />
        </div>
      </div>
    );
  }
}
