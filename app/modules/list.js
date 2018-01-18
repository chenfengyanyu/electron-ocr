import React from 'react';
import { Motion, spring } from 'react-motion';

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
        [500, 350],
        [800, 600],
        [800, 400],
        [700, 500],
        [200, 650],
        [600, 600],
      ],
      currPhoto: 0,
    };
  }

  handleChange({ target: { value } }) {
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
    const [currWidth,
      currHeight] = photos[currPhoto];

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
      <div>
        <button onClick={this.clickHandler.bind(this, '')}>Previous</button>
        <input
          type="range"
          min={0}
          max={photos.length - 1}
          value={currPhoto}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.clickHandler.bind(this, NEXT)}>Next</button>
        <div className="demo4">
          <Motion style={{ height: spring(currHeight), width: spring(currWidth) }} >
            {container =>
              <div className="demo4-inner" style={container}>{configs.map((style, i) => <Motion key={i} style={style}>{st => <img className="demo4-photo" alt="" src={`image/test/${i}.png`} style={st} />}</Motion>)}</div>}
          </Motion>
        </div>
      </div>
    );
  }
}
