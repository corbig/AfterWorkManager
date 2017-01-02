import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400} from 'material-ui/styles/colors';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

export default class AWTodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {shadow: 1};
  }



  render() {
    return (

       <ListItem
         leftAvatar={<Avatar src="images/tux.png" />}
         rightIconButton={rightIconMenu}
         primaryText={this.props.text}
       />

    );
  }
}
