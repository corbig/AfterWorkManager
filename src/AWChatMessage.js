import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

// Composant vierge par défaut
// A copier pour créer un nouveau composant
// C'est un aide mémoire


export default class AWChatMessage extends React.Component {
  
  constructor(props) {
    console.log("AWChatMessage.constructor() : Début");
    super(props);
    this.state = { ChatMessageStyle: {textAlign: (this.props.avatarAlign == "left") ? "left" : "right", background: ""} }; // Les variables locales au composant
    console.log("AWChatMessage.constructor() : Fin");
  }
  
  // Une fonction
  //onClickChatMessage = () => this.setState({open: !this.state.open});
  onClickChatMessage = () => {
    console.log("AWChatMessage.onClickChatMessage() : Début");
    
    console.log("AWChatMessage.onClickChatMessage() : avant : background=" + this.state.ChatMessageStyle.background);
    
    if (this.state.ChatMessageStyle.background == "") {
      switch(Math.floor((Math.random() * 9) + 1)) {
        case 1:
          this.state.ChatMessageStyle.background = "#FFF0F5";
          break;
        case 2:
          this.state.ChatMessageStyle.background = "#d3ffce";
          break;
        case 3:
          this.state.ChatMessageStyle.background = "#e0fffa";
          break;
        case 4:
          this.state.ChatMessageStyle.background = "#ffe0e5";
          break;
        case 5:
          this.state.ChatMessageStyle.background = "#fbffb5";
          break;
        case 6:
          this.state.ChatMessageStyle.background = "#ffb8a1";
          break;
        case 7:
          this.state.ChatMessageStyle.background = "#bdbdbd";
          break;
        case 8:
          this.state.ChatMessageStyle.background = "#cc98e5";
          break;
        case 9:
          this.state.ChatMessageStyle.background = "#edc9a5";
          break;
        default:
          this.state.ChatMessageStyle.background = "#FFF0F5";
      }
    }
    else {
      this.state.ChatMessageStyle.background = "";
    }
    
    console.log("AWChatMessage.onClickChatMessage() : après : background=" + this.state.ChatMessageStyle.background);
    
    console.log("AWChatMessage.onClickChatMessage() : Fin");
  };
  
  // Le template
  render() {
    
    var rend = (
      (this.props.avatarAlign == "left") ?
        <ListItem
        onClick={this.onClickChatMessage}
        primaryText={<span style={{paddingRight:"10px"}}>{this.props.pseudo}</span>}
        secondaryText = {<div style={{paddingRight:"10px"}}>{this.props.message}</div>}
        style={this.state.ChatMessageStyle}
        leftAvatar={<Avatar src={this.props.avatar}/>}
        />
      :
        <ListItem
        onClick={this.onClickChatMessage}
        primaryText={<span style={{paddingRight:"10px"}}>{this.props.pseudo}</span>}
        secondaryText = {<div style={{paddingRight:"10px"}}>{this.props.message}</div>}
        style={this.state.ChatMessageStyle}
        rightAvatar={<Avatar src={this.props.avatar}/>} 
        />
    );
    
    return (
      rend
    );
  }
}
