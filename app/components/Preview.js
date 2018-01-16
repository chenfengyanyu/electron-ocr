import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Voice from 'material-ui/svg-icons/av/mic';
import Replay from 'material-ui/svg-icons/av/replay';
import Text from 'material-ui/svg-icons/av/album';
import FontIcon from 'material-ui/FontIcon';
import { getAccessToken, generateRecognition } from '../../service/api';
import { resolve } from 'dns';
import { debug } from 'util';

const styles = {
  button: {
    textAlign: 'center'
  },
  cardStyles: {
    width: '80%',
    margin: '10px auto 0',
    cursor: 'pointer'
  }
};

class Preview extends React.Component {

  constructor(props) {
    super(props);
    // console.log(this.props.location.myfile);
    this.state = {
      myfile: this.props.location.myfile,
      binary: this.props.location.binary,
      src: 'image/t2.png',
      result: '即将要展示的文本'
    };

    this.blobToBase64 = this.blobToBase64.bind(this);
  }

  async textOcr() {
    let base64, result = '';
    base64 = await this.blobToBase64(this.state.myfile);
    result = await generateRecognition(base64.replace('data:image/jpeg;base64,',''));
    console.log(result,'_result');
    this.setState({
      result: result.words_result[0].words
    })
  }

  blobToBase64(blob, callback) {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        resolve(e.target.result);
      }
      fileReader.readAsDataURL(blob);
      fileReader.onerror = () => {
        reject(new Error('文件流异常'));
      }
    })
  };



  render() {
    let img;
    if(this.props.location.myfile && this.props.location.myfile.name) {
      const {name, preview, path, type, size, lastModified} = this.state.myfile;
      console.log(preview);
      img = preview;
    } else {
      img = this.state.src;
    }
    return (
      <Card style={styles.cardStyles}>
        <CardMedia
          overlay={< CardTitle title={"识别结果"} subtitle = {this.state.result} />}>
          <img src={img || this.state.src} height="420" alt=""/>
        </CardMedia>
        <CardActions style={styles.button}>
          <RaisedButton
            href="#/"
            label="重新上传"
            secondary={true}
            icon={<Replay />}
          />
          <RaisedButton
            target="_blank"
            label="文字识别"
            primary={true}
            icon={<Text />}
            onClick={this.textOcr.bind(this)}
          />
          <RaisedButton
            target="_blank"
            label="语音播报"
            primary={true}
            icon={<Voice />}
          />
        </CardActions>
      </Card>
    );
  }
}

export default Preview;