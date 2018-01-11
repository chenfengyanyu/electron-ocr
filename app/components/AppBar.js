import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

let mytest = () => {
  console.log(1111);
}
const AppBarIcon = () => (
  <AppBar
    iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
    iconElementRight= {<Avatar src="image/icon.png" />}
    onLeftIconButtonClick = {mytest}
  />
);

export default AppBarIcon;