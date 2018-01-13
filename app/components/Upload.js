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

    this.goDetail = this.goDetail.bind(this);
  }

  onDrop(files) {
    // let self = this;
    // files.forEach(file => {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     console.log('Received files: ', files, this);
    //     const fileAsBinaryString = reader.result;
    //     // do whatever you want with the file content

    //     let myNotification = new Notification('Jartto', {
    //       body: 'Hello Everybody!'
    //     })
    //     this.props.history.push('/preview');
    //   };
    //   reader.onabort = () => console.log('file reading was aborted');
    //   reader.onerror = () => console.log('file reading has failed');

    //   reader.readAsBinaryString(file);
    // });
    // console.log(this.props);
    this.goDetail();
  }

  goDetail(){
    this.props.history.push('/preview');
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