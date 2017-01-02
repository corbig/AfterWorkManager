import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Badge from 'material-ui/Badge';
import MessagePopover from './MessagePopover'
import Avatar from 'material-ui/Avatar';
import {cyan500} from 'material-ui/styles/colors';
import AppMenu from './AppMenu'

const style={
  marginRight : 10,
  marginLeft : 10
}

const toolbarStyle = {
      backgroundColor: cyan500,
      color : "#FFFFFF"
    }
const whiteStyle ={
  color : "#FFFFFF"
}



export default class AppToolbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar style={toolbarStyle}>
      <ToolbarGroup firstChild={true}>
      <AppMenu/>
      <ToolbarSeparator style={style}/>
      <Avatar
        src="images/tux.png"
        size={40}
        style={style}
      />
        <ToolbarTitle text="Tux" style={whiteStyle}/>
      </ToolbarGroup>

        <ToolbarGroup>
          <MessagePopover/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
