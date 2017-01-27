import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {blue400,green400} from 'material-ui/styles/colors';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import Timelapse from 'material-ui/svg-icons/image/timelapse'




export default class AWTodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {


    var iconButtonElement = (
      <IconButton
        touch={true}
        tooltip= { (this.props.status == "fait") ? "Fait" : "A Faire" }
        tooltipPosition="bottom-left"
      >

        { (this.props.status == "fait") ? <ActionCheckCircle color={green400} /> : <Timelapse color={blue400} /> }
      </IconButton>

    );

    var rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem leftIcon={<Timelapse color={blue400} />} onTouchTap={()=>this.props.changeStatus(this.props.index,"a faire")} >A faire</MenuItem>
        <MenuItem leftIcon={<ActionCheckCircle color={green400} />} onTouchTap={()=>this.props.changeStatus(this.props.index,"fait")} >Fait</MenuItem>
      </IconMenu>
    );
    return (

       <ListItem
         leftAvatar={<Avatar src={this.props.user.avatar} />}
         rightIconButton={rightIconMenu}
         primaryText={this.props.text}

       />

    );
  }
}
