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
import { generateRecognition, getAudio, enhancedRecognition} from '../../service/api';
import { resolve } from 'dns';
import { debug } from 'util';
import Howler from 'howler';

const electron = window.require('electron');
// const {ipcRenderer, shell} = electron;
const {dialog} = electron.remote;
// const clipboard = electron.clipboard;


const styles = {
  button: {
    borderTop: '1px solid #f1f0f0',
    textAlign: 'center'
  },
  cardStyles: {
    width: '80%',
    margin: '10px auto 0',
    cursor: 'pointer'
  },
  titleStyles: {
    textAlign: 'justify',
    padding: '8px'
  },
  mediaStyles: {
    height: '420px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'url(image/dot1.png) repeat 0 0 transparent'
  },
  videoStyles: {
    display: 'none'
  }
};

class Preview extends React.Component {

  constructor(props) {
    super(props);
    // console.log(this.props.location.myfile);
    this.state = {
      myfile: this.props.location.myfile,
      binary: this.props.location.binary,
      src: 'image/placeholder.png',
      result: (this.props.location.myfile && this.props.location.myfile.name) || '正在识别中...',
      expanded: false,
      mp3: ''
    };

    this.blobToBase64 = this.blobToBase64.bind(this);
  }

  async baseOCR(type) {
    let base64, result = '';
    base64 = await this.blobToBase64(this.state.myfile);
    // data:image/png;base64,data:image/jpeg;base64,
    if(type === 'enhanced') {
      result = await enhancedRecognition(base64.replace(/^data:image\/(jpeg|png|gif);base64,/,''));
    } else {
      result = await generateRecognition(base64.replace(/^data:image\/(jpeg|png|gif);base64,/,''));
    }
    
    console.log(result,'_result');

    // clipboard.writeText(result);

    let myNotification = new Notification('图片识别', {
      body: '文字识别成功，写入粘贴板，可直接复制！'
    })

    this.setState({
      result: result.words_result && result.words_result.map(item => item.words).join(''),
      expanded: true
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

  handleExpandChange() {
    this.setState({expanded: !this.state.expanded});
  }

  async palyAudio() {
    let mp3 = await getAudio(this.state.result);
    // let sound = new Howl({
    //   src: ['http://tsn.baidu.com/text2audio?tex=%25E9%25BE%2598%25E9%259D%2590%25E9%25BE%2597%25E9%25BD%25BE%25E9%25BD%2589%25E7%2588%25A9%25E8%2599%258C%25E9%25BA%25B7%25E7%2581%25A9%25E9%259F%258A&tok=24.6ab254bc7cb267858e2d4ae695676b37.2592000.1518764090.282335-10705454&cuid=cjcipps6d0000z3impond4ezv&ctp=1&lan=zh&per=4']
    // });
    // sound.play();
    this.setState({mp3});
  }

  componentDidMount() {
    if(this.state.result === '正在识别中...') return;
    this.baseOCR();
  }

  render() {
    let img;
    if(this.props.location.myfile && this.props.location.myfile.name) {
      const {name, preview, path, type, size, lastModified} = this.state.myfile;
      // console.log(preview);
      img = preview;
    } else {
      img = this.state.src;
    }
    let _card = !this.state.expanded
                ? <div></div>
                : <CardTitle style={styles.titleStyles} subtitle={this.state.result} subtitleStyle={{fontSize:'12px',lineHeight: '18px'}}/>;
    let _audio = <audio style={styles.videoStyles} src={this.state.mp3} autoPlay />;
    return (
      <Card style={styles.cardStyles}>
        <CardMedia style={styles.mediaStyles} overlayContentStyle={{paddingTop:'0'}} overlayContainerStyle={{paddingTop:'0'}} overlay={_card} onClick={this.handleExpandChange.bind(this)}>
          <img src={img || this.state.src}  alt=""/>
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
            label="繁体识别"
            primary={true}
            icon={<Text />}
            onClick={this.baseOCR.bind(this,'enhanced')}
          />
          <RaisedButton
            target="_blank"
            label="语音播报"
            primary={true}
            icon={<Voice />}
            onClick={this.palyAudio.bind(this)}
          />
        </CardActions>
        {_audio}
      </Card>
    );
  }
}

export default Preview;