import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Upload from './components/Upload';
import ListPage from './modules/list';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideMenu from './components/Menu';

const electron = window.require('electron');
const {ipcRenderer, shell} = electron;
const {dialog} = electron.remote;

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