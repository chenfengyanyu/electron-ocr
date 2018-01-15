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
    // this.state = { files: [] };
  }

  onDrop(files) {
    var file = files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      // console.log(event.target.result);
      this.props.history.push({pathname:'/preview',binary: event.target.result});
    };
    reader.readAsDataURL(file);
    // files.forEach(file => {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     console.log('Received files: ', file);
    //     const fileAsBinaryString = reader.result;
    //     // do whatever you want with the file content

    //     // console.log(encodeURI(fileAsBinaryString),'fileAsBinaryString');

    //     let myNotification = new Notification('图片上传成功', {
    //       body: '即将跳转图片预览页！'
    //     })
    //     this.props.history.push({pathname:'/preview', myfile: file, binary: fileAsBinaryString});
    //   };
    //   reader.onabort = () => console.log('file reading was aborted');
    //   reader.onerror = () => console.log('file reading has failed');

    //   reader.readAsBinaryString(file);
    // });
  }

  render() {
    return (
      <div className="box">
        <Dropzone onDrop={this.onDrop.bind(this)} style={dropStyles}>
          <ActionBackup style={iconStyles}/>
        </Dropzone>
      </div>
    );
  }
}

export default Upload;