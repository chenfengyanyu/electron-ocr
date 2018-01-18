import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  view: {
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
  },
};

const Webview = props => (
  <div>
    <FloatingActionButton>
      <ContentAdd />
    </FloatingActionButton>
    <webview style={style.view} src={props.url} />
  </div>
);

export default Webview;
