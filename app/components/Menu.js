import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle () {
    this.setState({open: !this.state.open});
  }

  handleClose () {
    this.setState({open: false});
  } 

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onClick={this.handleToggle.bind(this)}
        />
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose.bind(this)}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}