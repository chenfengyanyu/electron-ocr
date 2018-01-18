import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import SideMenu from './components/Menu';
import Preview from './components/Preview';
import Upload from './components/Upload';
import ListPage from './modules/list';
import About from './modules/about';
import Attention from './modules/attention';

/* eslint-disable */
// const electron = window.require('electron');
// const { ipcRenderer, shell } = electron;
// const { dialog } = electron.remote;

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    // primary1Color: white,
  }
});

const style = {
  refresh: {
    display: 'inline-block',
    position: 'absolute',
    opacity: '0.6',
  },
};


class MainWindow extends React.Component {

  constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.state = {
      
    };
  }

  goDetail(page){
    this.props.history.push(`/${page}`);
  }  

  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <SideMenu />
            <RefreshIndicator
              size={40}
              left={750}
              top={10}
              loadingColor="#FFB74D"
              status="loading"
              style={style.refresh}
            />
            <Switch>
              <Route path="/" exact component={Upload} />
              <Route path="/list" component={ListPage} />
              <Route path="/preview" component={Preview} />
              <Route path="/attention" component={Attention} />
              <Route path="/about" component={About} />
              <Redirect to="/" />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const mainWndComponent = ReactDOM.render(
  <MainWindow/>, document.getElementById('content'));