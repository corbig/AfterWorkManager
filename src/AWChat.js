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
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import AWInputCard from './AWInputCard';



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





export default class AWChat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {shadow: 1};
  }



  render() {
    return (
      <Card style={cardStyle}>
      <Toolbar style={toolbarStyle}>
      <ToolbarGroup firstChild={true}>
      <IconButton>
       <CommunicationChatBubble color={"#FFFFFF"}/>
      </IconButton>
        <ToolbarTitle text="Conversation" style={whiteStyle}/>
      </ToolbarGroup>

        <ToolbarGroup>

        </ToolbarGroup>
      </Toolbar>
      <Paper style={paperStyle} zDepth={0}>
      <List>
     <ListItem
       primaryText="Chelsea Otakan"
       leftAvatar={<Avatar src="images/tux.png" />}
     />
     <Divider />
     <ListItem
       primaryText={<span style={{paddingRight:"10px"}}>Eric Hoffman</span>}
       style={{textAlign:"right"}}
       rightAvatar={<Avatar src="images/tux.png"/>}
     />
     <Divider />
     <ListItem
       primaryText="James Anderson"
       secondaryText = "Salut !"
       leftAvatar={<Avatar src="images/tux.png" />}
     />
     <Divider />
     <ListItem
       primaryText={<span style={{paddingRight:"10px"}}>Trucmuche</span>}
       secondaryText = {<div style={{paddingRight:"10px"}}>Salut</div>}
       style={{textAlign:"right"}}
       rightAvatar={<Avatar src="images/tux.png"/>}
     />

   </List>
   </Paper>
  <AWInputCard/>
    </Card>


    );
  }
}
