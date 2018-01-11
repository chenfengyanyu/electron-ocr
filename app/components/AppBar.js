import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarIcon = () => (
  <AppBar
    iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
    iconElementRight= {<Avatar src="image/icon.png" />}
  />
);

export default AppBarIcon;