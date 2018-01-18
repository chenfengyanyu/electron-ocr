import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Avatar from 'material-ui/Avatar';
import ActionBackup from 'material-ui/svg-icons/action/backup';
import Picture from 'material-ui/svg-icons/image/camera';
import Crop from 'material-ui/svg-icons/image/crop-rotate';
import Alarm from 'material-ui/svg-icons/editor/bubble-chart';
import Shot from 'material-ui/svg-icons/social/whatshot';
import { blue400, yellow400, pink400, green400, lightWhite, grey800, deepPurple400 } from 'material-ui/styles/colors';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FloatingActionButton from 'material-ui/FloatingActionButton';


const svgStyles = {
  fill: grey800,
};

export default class DrawerUndockedExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className="_menu">
        <FloatingActionButton className="action" onClick={this.handleToggle.bind(this)} backgroundColor={lightWhite}  mini={true}>
          <NavigationMenu style={svgStyles} />
        </FloatingActionButton>
        <Drawer
          docked={false}
          width={230}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <List>
            <Link to="/" onClick={this.handleClose.bind(this)}>
              <ListItem
                leftAvatar={<Avatar icon={<ActionBackup />} backgroundColor={blue400} />}
                rightIcon={<ActionInfo />}
                primaryText="上传图片"
              />
            </Link>
            <Link to="/crop" onClick={this.handleClose.bind(this)}>
              <ListItem
                leftAvatar={<Avatar icon={<Crop />} backgroundColor={yellow400} />}
                rightIcon={<ActionInfo />}
                primaryText="图片裁切"
              />
            </Link>
            <Link to="/list" onClick={this.handleClose.bind(this)}>
              <ListItem
                leftAvatar={<Avatar icon={<Picture />} backgroundColor={pink400} />}
                rightIcon={<ActionInfo />}
                primaryText="图片示例"
              />
            </Link>
            <Link to="/attention" onClick={this.handleClose.bind(this)}>
              <ListItem
                leftAvatar={<Avatar icon={<Alarm />} backgroundColor={deepPurple400} />}
                rightIcon={<ActionInfo />}
                primaryText="注意事项"
              />
            </Link>
            <Link to="/about" onClick={this.handleClose.bind(this)}>
              <ListItem
                leftAvatar={<Avatar icon={<Shot />} backgroundColor={green400} />}
                rightIcon={<ActionInfo />}
                primaryText="关于作者"
              />
            </Link>
          </List>
        </Drawer>
      </div>
    );
  }
}
