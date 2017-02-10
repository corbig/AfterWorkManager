import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {cyan500} from 'material-ui/styles/colors';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import AWInputCard from './AWInputCard';
import AWTodoItem from './AWTodoItem'
import { connect } from 'react-redux'
import { changeStatus, addTodo } from '../actions/todos-actions.js';
import { push } from 'react-router-redux'

const style={
  marginRight : 10,
  marginLeft : 10
}


const toolbarStyle = {
      backgroundColor: cyan500,
      color : "#FFFFFF",
      position: "relative",
       marginTop:0,
       zIndex: 2,
       width:"100%"
}
const whiteStyle ={
  color : "#FFFFFF"
}

const cardStyle = {
margin: 'auto',
postion:"absolute",
display: 'block',
width:"100%",


}

const paperStyle={
  overflowY: "auto",
  position : "relative",
  height : "500px"
}



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

const mapStateToProps = (store) => {
  return {
    todos : store.mainState.soirees[store.mainState.currentIndex].todos,
    users : store.mainState.Users,
    currentUserId : store.mainState.currentUserId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeStatus:(index,status)=>{dispatch(changeStatus(index,status))},
    addTodo:(text)=>{
      dispatch(addTodo(text));
    }
  }
}

let AWTodoList =  React.createClass({

  /*constructor: function(props) {
    super(props);
    this.state = {shadow: 1};
  }*/

  /*propTypes: {
     name: React.PropTypes.string,
     position: React.PropTypes.number
   }*/

  render() {
    return (
      <Card style={cardStyle}>
      <Toolbar style={toolbarStyle}>
      <ToolbarGroup firstChild={true}>
      <IconButton>
       <ImageEdit color={"#FFFFFF"}/>
      </IconButton>
        <ToolbarTitle text="Todo-List" style={whiteStyle}/>
      </ToolbarGroup>

        <ToolbarGroup>

        </ToolbarGroup>
      </Toolbar>
      <Paper style={paperStyle} zDepth={0}>
      <List>
      {
        this.props.todos.map((todo,index)=>
          <div>
          <AWTodoItem {...todo} users = {this.props.users} changeStatus={this.props.changeStatus} index={index}/>
          <Divider />
          </div>

      )}
     </List>
     </Paper>
    <AWInputCard sendHandler={this.props.addTodo}/>
      </Card>

    );
  }
})

AWTodoList = connect(mapStateToProps,mapDispatchToProps)(AWTodoList)

export default AWTodoList
