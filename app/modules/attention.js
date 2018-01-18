import React from 'react';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import Chip from '../components/Chip';

const chipData = [{
  key: 0,
  bg: 'yellow',
  label: '大文件识别，为保证正确率，请先进行裁切！',
  icon: <SvgIconFace />,
}, {
  key: 1,
  bg: 'pink',
  label: '语音识别请精简文字数量！',
  icon: <SvgIconFace />,
}, {
  key: 2,
  bg: 'blue',
  label: '语音识别请精简文字数量！',
  icon: <SvgIconFace />,
}, {
  key: 3,
  bg: 'green',
  label: '语音识别请精简文字数量！',
  icon: <SvgIconFace />,
}];

const renderChip = data =>
  <Chip key={data.key} bg={data.bg} icon={data.icon} label={data.label} />;

const Attention = () => (
  <div>
    {chipData.map(renderChip)}
  </div>
);

export default Attention;
