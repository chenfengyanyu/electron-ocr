import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { lightGreenA700 } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';

const styles = {
  view: {
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
  },
  btn: {
    zIndex: 2,
  },
};

const Webview = props => (
  <div>
    <Link to="/" style={styles.btn}>
      <RefreshIndicator
        percentage={80}
        size={40}
        left={745}
        top={10}
        color={lightGreenA700}
        status="ready"
      />
    </Link>
    <webview style={styles.view} src={props.url} />
  </div>
);

export default Webview;
