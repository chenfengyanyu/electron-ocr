import React from 'react';
// import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Hearing from 'material-ui/svg-icons/av/hearing';
import Replay from 'material-ui/svg-icons/av/replay';
import Text from 'material-ui/svg-icons/av/album';
// import Howler from 'howler';
import { fullWhite } from 'material-ui/styles/colors';
import { generateRecognition, getAudio } from '../../service/api';

/* eslint-disable no-undef */
const electron = window.require('electron');
// const {ipcRenderer, shell} = electron;
// const { dialog } = electron.remote;
// const clipboard = electron.clipboard;

const styles = {
  button: {
    borderTop: '1px solid #f1f0f0',
    textAlign: 'center',
  },
  cardStyles: {
    width: '80%',
    margin: '10px auto 0',
    cursor: 'pointer',
    borderRadius: '5px',
    // overflow: 'auto'
  },
  titleStyles: {
    textAlign: 'justify',
    padding: '8px',
  },
  mediaStyles: {
    borderRadius: '5px 5px 0 0',
    height: '420px',
    display: 'flex',
    overflow: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'url(image/dot1.png) repeat 0 0 transparent',
  },
  videoStyles: {
    display: 'none',
  },
};

class Preview extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.location.myfile);
    this.state = {
      myfile: this.props.location.myfile,
      // src: 'image/placeholder.png',
      result: (this.props.location.myfile && this.props.location.myfile.name) || '正在识别中...',
      expanded: false,
      mp3: '',
    };

    this.blobToBase64 = this.blobToBase64.bind(this);
  }

  componentDidMount() {
    if (this.state.result === '正在识别中...') return;
    this.baseOCR();
  }

  goBack() {
    this.props.history.goBack();
  }

  async baseOCR(type) {
    let result = '';
    let notice = '';
    const allBase64 = await this.blobToBase64(this.state.myfile);
    // 去除 base64 文件头
    const bash64 = allBase64.replace(/^data:image\/(jpeg|png|gif);base64,/, '');
    // data:image/png;base64,data:image/jpeg;base64,
    if (type === 'enhanced') {
      result = await generateRecognition(bash64, 'general_enhanced');
      notice = '繁体字校准完成，已复制，可直接粘贴！';
    } else {
      result = await generateRecognition(bash64, 'general_basic');
      notice = '文字识别成功，已复制，可直接粘贴！';
    }
    const temp = result.words_result && result.words_result.map(item => item.words).join('');
    // console.log(result, '_result');
    electron.clipboard.writeText(temp);

    /* eslint-disable */
    let myNotification = new Notification('图片识别', {
      body: notice,
    });

    this.setState({
      result: temp,
      expanded: true,
    });
  }

  blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        resolve(e.target.result);
      };
      fileReader.readAsDataURL(blob);
      fileReader.onerror = () => {
        reject(new Error('文件流异常'));
      };
    });
  }

  handleExpandChange() {
    this.setState({ expanded: !this.state.expanded });
  }

  async palyAudio() {
    const mp3 = await getAudio(this.state.result);
    // let sound = new Howl({
    //   src: ['http://tsn.baidu.com/text2audio?tex=%25E9%25BE%2598%25E9%259D%2590%25E9%25BE%2597%25E9%25BD%25BE%25E9%25BD%2589%25E7%2588%25A9%25E8%2599%258C%25E9%25BA%25B7%25E7%2581%25A9%25E9%259F%258A&tok=24.6ab254bc7cb267858e2d4ae695676b37.2592000.1518764090.282335-10705454&cuid=cjcipps6d0000z3impond4ezv&ctp=1&lan=zh&per=4']
    // });
    // sound.play();
    this.setState({ mp3 });
  }

  render() {
    let img;
    if (this.props.location.myfile) {
      const { preview } = this.state.myfile;
      img = preview;
    } else {
      img = this.state.src;
    }
    const cardTpl = !this.state.expanded ? <div /> : <CardTitle style={styles.titleStyles} subtitle={this.state.result} subtitleStyle={{ fontSize: '12px', lineHeight: '18px' }} />;
    const audioTpl = <audio style={styles.videoStyles} src={this.state.mp3} autoPlay />;
    return (
      <Card style={styles.cardStyles}>
        <CardMedia style={styles.mediaStyles} overlayContentStyle={{ paddingTop: '0' }} overlayContainerStyle={{ paddingTop: '0' }} overlay={cardTpl} onClick={this.handleExpandChange.bind(this)}>
          <img src={img || this.state.src} alt="" />
        </CardMedia>
        <CardActions style={styles.button}>
          <RaisedButton
            href="#/"
            label="重新选择"
            secondary
            icon={<Replay />}
            onClick={this.goBack.bind(this)}
          />
          <RaisedButton
            target="_blank"
            label="繁体校准"
            primary
            icon={<Text />}
            onClick={this.baseOCR.bind(this,'enhanced')}
          />
          <RaisedButton
            target="_blank"
            label="语音播报"
            labelColor={fullWhite}
            icon={<Hearing color={fullWhite} />}
            backgroundColor="#a4c639"
            onClick={this.palyAudio.bind(this)}
          />
        </CardActions>
        {audioTpl}
      </Card>
    );
  }
}

export default Preview;