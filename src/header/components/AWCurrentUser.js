import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MapsLocalBar from 'material-ui/svg-icons/maps/local-bar';
import {Link} from 'react-router'
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';

// Redux
import { connect } from 'react-redux';
import { changeCurrentIdUser } from '../../main/actions/user-action.js';


const style={
  marginRight : 10,
  marginLeft : 10
}
const whiteStyle ={
  color : "#FFFFFF"
}


// Redux
const mapStateToProps = (store) => {
  return {
    users: store.mainState.Users,
    currentIdUser: store.mainState.currentIdUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    /*changeStatus:(index,status)=>{dispatch(changeStatus(index,status))},
    addTodo:(text)=>{dispatch(addTodo(text))}*/
    changeCurrentIdUser: (text)=>{dispatch(changeCurrentIdUser(text))}
  }
}



export class AWCurrentUser extends React.Component {

  constructor(props) {
    super(props);
    
    // Le menu déroulant est fermé par défaut
    this.state = {open: false};
  }

  handleTouchTap = (event) => {
    console.log("AWCurrentUser.handleTouchTap() : Début");
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
    
    console.log("AWCurrentUser.handleTouchTap() : Fin");
  };

  handleRequestClose = () => {
    console.log("AWCurrentUser.handleRequestClose() : Début");
    
    this.setState({
      open: false,
    });
    
    console.log("AWCurrentUser.handleRequestClose() : Fin");
  };

  selectUser = (userId) => {
    console.log("AWCurrentUser.selectUser(" + userId + ") : Début");
    
    this.props.changeCurrentIdUser(userId);
    
    this.handleRequestClose();
    
    console.log("AWCurrentUser.selectUser(" + userId + ") : Fin");
  };

  //handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <div onTouchTap={this.handleTouchTap}>
          <Avatar
            src={this.props.users[this.props.currentIdUser].avatar}
            size={40}
            style={style}
          />
          <ToolbarTitle text={this.props.users[this.props.currentIdUser].firstname + " " + this.props.users[this.props.currentIdUser].lastname} style={whiteStyle}/>
        </div>
        
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <List>
            <Subheader>Liste des utilisateurs</Subheader>
            {
              this.props.users.map((user, index, users) => (
                <div>
                  <ListItem onTouchTap={()=>this.selectUser(index)}
                    leftAvatar={<Avatar src={user.avatar} />}
                    primaryText={user.firstname + " " + user.lastname}
                  />
                  
                  { (index != users.length-1) ? <Divider inset={true} /> : null }
                  
                </div>
              ))
            }
          </List>
        </Popover>
        
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AWCurrentUser);