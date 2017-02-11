import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Checkbox from 'material-ui/Checkbox';
import {cyan500} from 'material-ui/styles/colors';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import AWInputCard from './AWInputCard';
import AWChatMessage from './AWChatMessage';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import AWAvatar from './AWAvatar';
import Dialog from 'material-ui/Dialog';

// Redux
import { connect } from 'react-redux'
import { vote, switch_view, addOptions } from '../actions/pol-actions.js';


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



// Redux
const mapStateToProps = (store) => {

  return {
    polOptions : store.mainState.sondage[store.mainState.currentIndex].options,
    polRes : store.mainState.sondage[store.mainState.currentIndex].res,
    title : store.mainState.sondage[store.mainState.currentIndex].title,
    resVisibility : store.mainState.current_view,
    currentUser : store.mainState.currentIdUser,
    users : store.mainState.Users,
    pollVisible : store.mainState.sondage[store.mainState.currentIndex].displaySondage,
    state: {
      open : false,
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOptions:(text)=>{
      console.log(text)
      dispatch(addOptions(text))
    },
    total:(firstname, res) => {
      var temp=0
      for(var i=0;i<firstname.length;i++) {  
        temp+=res[i].nb
      }
      return temp;
    },
    vote:(firstname, res, user) => {
      for(var i=0;i<firstname.length;i++) {  
        if(firstname[i].checked==true) {
          
          var exist=-1;
          for(var j=0;j<res[i].users.length;j++) {  
            if(res[i].users[j]==user) {
              exist=j;
            }
          }
          if(exist==-1) {
            res[i].nb+=1;
            res[i].users.push(user)
          }
        }
      }
      dispatch(vote(res))
      
    },
    voteShow:(res, firstname) => {
      if(res==true) {
        for(var i=0;i<firstname.length;i++) {  
          firstname[i].checked = false
        }
        res=false
      }else {
        res=true
      }
      dispatch(switch_view(res))
    },
    checkedCHange:(checked, options)=> {
      if(options[checked].checked==true) {
        options[checked].checked=false
      }else {
        options[checked].checked=true
      }
    },
  }
}

let AWPol = React.createClass({
  propTypes: {

  },
  getDefaultProps() {
    return {

    };
  },
  render() {
   
    const actions = [
    <FlatButton
      label="Annuler"
      primary={true}
      onTouchTap={this.props.close}
    />,
    <FlatButton
      label="Ajouter"
      secondary={true}
      keyboardFocused={true}
      onTouchTap={this.props.accept}
    />,
  ];
    return (
      <Card style={cardStyle}>
        <Toolbar style={toolbarStyle}>
          <ToolbarGroup firstChild={true}>
            <IconButton>
              <CommunicationChatBubble color={"#FFFFFF"}/>
            </IconButton>
            <ToolbarTitle text={this.props.title} style={whiteStyle}/>
          </ToolbarGroup>
          <ToolbarGroup>
          </ToolbarGroup>
        </Toolbar>
        {console.log(this.props)}
        {this.props.pollVisible == true ? <Paper style={paperStyle} zDepth={0}>
       
          {this.props.resVisibility == false ?<List >
          {
            this.props.polOptions.map((firstname, index) => (
              <div>
              <Checkbox
                key={firstname.id}
                value={firstname.text}
                onTouchTap={()=>this.props.checkedCHange(firstname.id, this.props.polOptions)}
                label={firstname.text} />
                <Divider/>
              </div>
            ))
          }
        </List > : 
       <List>
        {
            this.props.polOptions.map((firstname, index) => (
              <div>
                <p>{firstname.text + " : "+this.props.polRes[index].nb+"/"+this.props.total(this.props.polOptions, this.props.polRes)}
                  {
                    this.props.polRes[index].users.map((res, index) => (
                    <AWAvatar users={this.props.users[res]}/>
                  ))
                  }

                </p>
                <LinearProgress mode="determinate" value={this.props.polRes[index].nb} max={this.props.total(this.props.polOptions, this.props.polRes)}  />
              </div>
            ))
        }
        </List>}
        {this.props.resVisibility == false ? <AWInputCard sendHandler={this.props.addOptions}/> : null }
         {this.props.resVisibility == false ?  <FlatButton
          label="Voter"
          onTouchTap={()=>this.props.vote(this.props.polOptions, this.props.polRes, this.props.currentUser)}
          secondary={true}
        />: null }
        {this.props.resVisibility == false ? <FlatButton
          label="Résultats"
          secondary={true}
          onTouchTap={()=>this.props.voteShow(this.props.resVisibility, this.props.polOptions)}
        />: null }
         {this.props.resVisibility == true ? <FlatButton
          label="Retour au vote"
          secondary={true}
          onTouchTap={()=>this.props.voteShow(this.props.resVisibility, this.props.polOptions)}
        />: null }
        </Paper> : null }
      </Card>
    );
  }
})

AWPol = connect(mapStateToProps,mapDispatchToProps)(AWPol)

export default AWPol
