import React from 'react';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import CommunicationChat from 'material-ui/svg-icons/communication/chat';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import { connect } from 'react-redux'

const mapStateToProps = (store) => {

  return {
    mainstate: store.mainState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getMessagesSoirees:(state)=>{
        var res= [];
        var soi = [];
        for(var i=0;i<state.soirees.length;i++) {
           if(state.soirees[i].messages.length!=0) {
          if(state.soirees[i].messages[state.soirees[i].messages.length-1].idUser!=state.currentIdUser) {
            
            res.push(state.soirees[i].messages[state.soirees[i].messages.length-1])
            soi.push(i);
          }
           }
        }
        return {res, soi};
    },
    getMessagesCount:(state)=>{
      var num=0;
      for(var i=0;i<state.soirees.length;i++) {
          if(state.soirees[i].messages.length!=0) {
            if(state.soirees[i].messages[state.soirees[i].messages.length-1].idUser!=state.currentIdUser) {
                          num++;
                        }
          }
            
          }
          return num;
    },
    redirect:(index)=>{
      return '/board';
    }
  }
}

export class MessagePopover extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }
  
  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Badge badgeContent={this.props.getMessagesCount(this.props.mainstate)} secondary={true} badgeStyle={{top: 16, right: 16}}>
          <IconButton onTouchTap={this.handleTouchTap}>
            <CommunicationChat color={"#FFFFFF"}/>
          </IconButton>
        </Badge>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <List>
            <Subheader>Today</Subheader>
             {
               
             this.props.getMessagesSoirees(this.props.mainstate).res.map((test, index) => (
              <div>
              <ListItem
                leftAvatar={<Avatar src={this.props.mainstate.soirees[this.props.getMessagesSoirees(this.props.mainstate).soi[index]].pic} />}
                primaryText={this.props.mainstate.soirees[this.props.getMessagesSoirees(this.props.mainstate).soi[index]].title}
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>{this.props.mainstate.Users[test.idUser].firstname + " "+this.props.mainstate.Users[test.idUser].lastname}</span> --
                    {test.message}
                  </p>
                }
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              </div>
            ))
          }
          </List>
        </Popover>
      </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MessagePopover);
