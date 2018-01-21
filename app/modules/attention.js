import React from 'react';
import Mic from 'material-ui/svg-icons/av/mic';
import Img from 'material-ui/svg-icons/image/image';
import One from 'material-ui/svg-icons/image/filter-1';
import Two from 'material-ui/svg-icons/image/filter-2';
import Three from 'material-ui/svg-icons/image/filter-3';
import Four from 'material-ui/svg-icons/image/filter-4';
import Five from 'material-ui/svg-icons/image/filter-5';
import Six from 'material-ui/svg-icons/image/filter-6';
import Seven from 'material-ui/svg-icons/image/filter-7';
import Eight from 'material-ui/svg-icons/image/filter-8';
import { blue400, yellow400, pink400, green400, cyan400, grey800, deepPurple400, orange400 } from 'material-ui/styles/colors';
import Chip from '../components/Chip';

const styles = {
  // fontSize: '40px',
  width: '22px',
  height: '22px',
};

const chipData = [{
  key: 0,
  bg: yellow400,
  label: '大图片识别，为保证正确率，请先进行裁切处理！',
  icon: <One style={styles} />,
}, {
  key: 1,
  bg: pink400,
  label: '语音合成请精简文字数量！',
  icon: <Two style={styles} />,
}, {
  key: 2,
  bg: blue400,
  label: '手写字体识别准确率偏低！',
  icon: <Three style={styles} />,
}, {
  key: 3,
  bg: green400,
  label: '图片识别容易漏掉边缘文字，裁切注意图片留白！',
  icon: <Four style={styles} />,
}, {
  key: 4,
  bg: grey800,
  label: '识别过程图片和语音都不会存储，即临时文件！',
  icon: <Five style={styles} />,
}, {
  key: 5,
  bg: deepPurple400,
  label: '支持中英文混合的图片识别。',
  icon: <Six style={styles} />,
}, {
  key: 6,
  bg: cyan400,
  label: '请注意，语音合成速度较慢。',
  icon: <Seven style={styles} />,
}, {
  key: 7,
  bg: orange400,
  label: '图片示例仅为了演示说明，暂不支持存储文件。',
  icon: <Eight style={styles} />,
}];

const renderChip = data =>
  <Chip key={data.key} bg={data.bg} icon={data.icon} label={data.label} />;

const Attention = () => (
  <div className="_attention">
    {chipData.map(renderChip)}
  </div>
);

export default Attention;
