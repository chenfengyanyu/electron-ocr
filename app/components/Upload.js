import React from 'react';
import ReactDOM from 'react-dom';
import ActionBackup from 'material-ui/svg-icons/action/backup';
import Dropzone from 'react-dropzone';

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
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        console.log('Received files: ', file);
        const fileAsBinaryString = reader.result;
        this.props.history.push({pathname:'/preview', myfile: file, binary: fileAsBinaryString});
      };
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');

      reader.readAsBinaryString(file);
    });
  }

  render() {
    return (
      <div className="box">
        
        <Dropzone onDrop={this.onDrop.bind(this)} style={dropStyles}>
          <ActionBackup style={iconStyles}/>
          <div className="desc">拖拽文件或点击上传</div>
        </Dropzone>
      </div>
    );
  }
}

export default Upload;