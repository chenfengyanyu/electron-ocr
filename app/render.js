import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Upload from './components/Upload';
import ListPage from './modules/list';

const events = window.require('events');
const path = window.require('path');
const fs = window.require('fs');

const electron = window.require('electron');
const {ipcRenderer, shell} = electron;
const {dialog} = electron.remote;

import {
  cyan500, cyan700,
  pinkA200,pink50,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Block from './components/Block';
import AppBar from './components/AppBar';
import SideMenu from './components/Menu';



const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    // primary1Color: white,
  }
});

class MainWindow extends React.Component {

  constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.state = {
      
    };
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <SideMenu />
            <Switch>
              <Route path="/" exact component={Upload} />
              <Route path="/list" component={ListPage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

let mainWndComponent = ReactDOM.render(
  <MainWindow/>, document.getElementById('content'));