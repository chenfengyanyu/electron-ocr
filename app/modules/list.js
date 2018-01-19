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
        [540, 394],
        [446, 88],
        [570, 238],
        [640, 200],
        [492, 207],
        [574, 464],
        [556, 436],
        [303, 77],
      ],
      currPhoto: 0,
    };
  }

  handleChange(event, value) {
    this.setState({ currPhoto: value });
  }

  clickHandler(btn) {
    let photoIndex = btn === NEXT ? this.state.currPhoto + 1 : this.state.currPhoto - 1;

    photoIndex = photoIndex >= 0 ? photoIndex : this.state.photos.length - 1;
    photoIndex = photoIndex >= this.state.photos.length ? 0 : photoIndex;

    this.setState({ currPhoto: photoIndex });
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
              <div className="demo4-inner" style={container}>{configs.map((style, i) => <Motion key={i} style={style}>{st => <img className="demo4-photo" alt="" src={`image/test/${i}.png`} style={st} />}</Motion>)}</div>}
          </Motion>
        </div>
        <FloatingActionButton className="previous" backgroundColor="rgba(255, 255, 255, 0.6)" iconStyle={{ fill: '#333' }} mini onClick={this.clickHandler.bind(this, '')}>
          <Previous />
        </FloatingActionButton>
        <FloatingActionButton className="next" backgroundColor="rgba(255, 255, 255, 0.7)" iconStyle={{ fill: '#333' }} mini onClick={this.clickHandler.bind(this, NEXT)}>
          <Next />
        </FloatingActionButton>
        <div className="sliderbox">
          <Slider className="slider" sliderStyle={{fill:'yellow'}} min={0} max={photos.length - 1} value={currPhoto} step={1} onChange={this.handleChange.bind(this)} />
        </div>
      </div>
    );
  }
}
