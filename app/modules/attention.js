import React from 'react';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import { blue400, yellow400, pink400, green400, cyan400, grey800, deepPurple400, orange400 } from 'material-ui/styles/colors';
import Chip from '../components/Chip';

const styles = {
  fontSize: '40px',
};

const chipData = [{
  key: 0,
  bg: yellow400,
  label: '大文件识别，为保证正确率，请先进行裁切处理！',
  icon: <SvgIconFace style={styles} />,
}, {
  key: 1,
  bg: pink400,
  label: '语音合成请精简文字数量！',
  icon: <SvgIconFace />,
}, {
  key: 2,
  bg: blue400,
  label: '繁体字识别需调用付费接口！',
  icon: <SvgIconFace />,
}, {
  key: 3,
  bg: green400,
  label: '图片识别容易漏掉边缘文字，裁切注意图片留白！',
  icon: <SvgIconFace />,
}, {
  key: 4,
  bg: grey800,
  label: '识别过程图片和语音都不会存储，即临时文件！',
  icon: <SvgIconFace />,
}, {
  key: 5,
  bg: deepPurple400,
  label: '支持中英文混合的图片识别。',
  icon: <SvgIconFace />,
}, {
  key: 6,
  bg: cyan400,
  label: '请注意，语音合成速度较慢。',
  icon: <SvgIconFace />,
}, {
  key: 7,
  bg: orange400,
  label: '图片示例仅为了演示说明，暂不支持存储文件。',
  icon: <SvgIconFace />,
}];

const renderChip = data =>
  <Chip key={data.key} bg={data.bg} icon={data.icon} label={data.label} />;

const Attention = () => (
  <div className="_attention">
    {chipData.map(renderChip)}
  </div>
);

export default Attention;
