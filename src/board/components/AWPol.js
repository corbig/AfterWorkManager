import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
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
import Checkbox from 'material-ui/Checkbox';
import {cyan500} from 'material-ui/styles/colors';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import AWInputCard from './AWInputCard';
import AWChatMessage from './AWChatMessage';
import FlatButton from 'material-ui/FlatButton';


// Redux
import { connect } from 'react-redux'
import { addMessage } from '../actions/pol-actions.js';


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
    polRes : store.mainState.sondage.res,
    title : store.mainState.sondage.title,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage:(text)=>{dispatch(addMessage(text))},
    changeSelection:(firstname,id) => {

    },
    vote:(firstname) => {
      for(var i=0;i<firstname.options.length;i++) {
        if(firstname.options[i].checked==true) {
          firstname.res[i]+=1;
        }
      }
      dispatch(vote(firstname.res))
    }
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
    return (
      <Card style={cardStyle}>
        <Toolbar style={toolbarStyle}>
          <ToolbarGroup firstChild={true}>
            <IconButton>
              <CommunicationChatBubble color={"#FFFFFF"}/>
            </IconButton>
            <ToolbarTitle text="Qui vient ?" style={whiteStyle}/>
          </ToolbarGroup>
          <ToolbarGroup>
          </ToolbarGroup>
        </Toolbar>
        <Paper style={paperStyle} zDepth={0}>
        <List>
          {
            this.props.polOptions.map((firstname, index) => (
              <div>
              <Checkbox
                key={firstname.id}
                value={firstname.text}
                label={firstname.text}
              />
                <Divider/>
              </div>
            ))
          }
        </List>
        <FlatButton
          label="Voter"
          onclick={this.props.vote}
          secondary={true}
        />
        <FlatButton
          label="Résultats"
          secondary={true}
        />
        </Paper>
      </Card>
    );
  }
})

AWPol = connect(mapStateToProps,mapDispatchToProps)(AWPol)

export default AWPol
