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
import AWChatMessage from './AWChatMessage';



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
    this.state = {
      shadow: 1,
      messages: [
        {avatar: "images/tux.png", avatarAlign: "right", pseudo: "David", message: "Wesh"},
        {avatar: "images/tux.png", avatarAlign: "left", pseudo: "Corention", message: "Salut"},
        {avatar: "images/tux.png", avatarAlign: "right", pseudo: "David", message: "Tu bouge ?"},
        {avatar: "images/tux.png", avatarAlign: "left", pseudo: "Corention", message: "Non je code"},
        {avatar: "images/tux.png", avatarAlign: "left", pseudo: "Romain", message: "Moi aussi je rush"}
      ]
    };
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
            {
              this.state.messages.map((message, index) => (
                <div>
                  <AWChatMessage avatar = {message.avatar} avatarAlign = {message.avatarAlign} pseudo = {message.pseudo} message = {message.message}/>
                  <Divider/>
                </div>
              ))
            }
          </List>
        </Paper>
        <AWInputCard/>
      </Card>
    );
  }
}
