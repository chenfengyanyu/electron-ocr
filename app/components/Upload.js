import React from 'react';
import ReactDOM from 'react-dom';
import ActionBackup from 'material-ui/svg-icons/action/backup';

const iconStyles = {
  width: '100px',
  height: '100px',
  fill: '#ececec',
  position: 'relative',
  top: '50%',
  left: '50%',
  margin: '-50px 0 0 -50px',
  cursor: 'pointer'
};

class Upload extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <ActionBackup style={iconStyles}/>
      </div>
    );
  }
}

export default Upload;