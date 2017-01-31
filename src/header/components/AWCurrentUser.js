import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MapsLocalBar from 'material-ui/svg-icons/maps/local-bar';
import {Link} from 'react-router'
import Avatar from 'material-ui/Avatar';

// Redux
import { connect } from 'react-redux';


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
  }
}



export class AWCurrentUser extends React.Component {

  constructor(props) {
    super(props);
    //this.state = {open: false};
  }

  //handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <Avatar
          src={this.props.users[this.props.currentIdUser].avatar}
          size={40}
          style={style}
        />
        <ToolbarTitle text={this.props.users[this.props.currentIdUser].firstname + " " + this.props.users[this.props.currentIdUser].lastname} style={whiteStyle}/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AWCurrentUser);