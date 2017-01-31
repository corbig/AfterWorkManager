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
    this.state = { background: "" }; // Les variables locales au composant
    console.log("AWChatMessage.constructor() : Fin");
  }
  
  // Une fonction
  //onClickChatMessage = () => this.setState({open: !this.state.open});
  onClickChatMessage = () => {
    console.log("AWChatMessage.onClickChatMessage() : Début");
    
    console.log("AWChatMessage.onClickChatMessage() : avant : background=" + this.state.background);
    
    var background;
    
    if (this.state.background == "") {
      
      switch(Math.floor((Math.random() * 9) + 1)) {
        case 1:
          background = "#FFF0F5";
          break;
        case 2:
          background = "#d3ffce";
          break;
        case 3:
          background = "#e0fffa";
          break;
        case 4:
          background = "#ffe0e5";
          break;
        case 5:
          background = "#fbffb5";
          break;
        case 6:
          background = "#ffb8a1";
          break;
        case 7:
          background = "#bdbdbd";
          break;
        case 8:
          background = "#cc98e5";
          break;
        case 9:
          background = "#edc9a5";
          break;
        default:
          background = "#FFF0F5";
      }
    }
    else {
      background = "";
    }
    
    this.setState({background});
    
    console.log("AWChatMessage.onClickChatMessage() : après : background=" + this.state.background);
    
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
        style={{textAlign: "left", background: this.state.background}}
        leftAvatar={<Avatar src={this.props.avatar}/>}
        />
      :
        <ListItem
        onClick={this.onClickChatMessage}
        primaryText={<span style={{paddingRight:"10px"}}>{this.props.pseudo}</span>}
        secondaryText = {<div style={{paddingRight:"10px"}}>{this.props.message}</div>}
        style={{textAlign: "right", background: this.state.background}}
        rightAvatar={<Avatar src={this.props.avatar}/>} 
        />
    );
    
    return (
      rend
    );
  }
}
