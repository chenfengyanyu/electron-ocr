import React from 'react';
import ReactDOM from 'react-dom';
import ActionBackup from 'material-ui/svg-icons/action/backup';
import Dropzone from 'react-dropzone';

const electron = window.require('electron');
const {ipcRenderer, shell} = electron;
const {dialog} = electron.remote;

const dropStyles = {
  width: '300px',
  height: '300px',
  position: 'relative',
  top: '50%',
  left: '50%',
  margin: '-150px 0 0 -150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const iconStyles = {
  width: '100px',
  height: '100px',
  fill: '#ececec',
  cursor: 'pointer'
};

class Upload extends React.Component {

  constructor(props) {
    super(props);
  }

  onDrop(files) {
    console.log('Received files: ', files);
    let myNotification = new Notification('Jartto', {
      body: 'Hello Everybody!'
    })
  }

  render() {
    return (
        <div className="box">
          <Dropzone onDrop={this.onDrop} style={dropStyles}>
            <ActionBackup style={iconStyles}/>
          </Dropzone>
      </div>
    );
  }
}

export default Upload;