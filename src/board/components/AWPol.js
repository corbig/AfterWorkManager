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
import LinearProgress from 'material-ui/LinearProgress';


// Redux
import { connect } from 'react-redux'
import { vote, switch_view } from '../actions/pol-actions.js';


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
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    total:(firstname, res) => {
      var temp=0
      for(var i=0;i<firstname.length;i++) {  
        temp+=res[i].nb
      }
      return temp;
    },
    vote:(firstname, res) => {
      var temp = 0
      for(var i=0;i<firstname.length;i++) {  
        if(firstname[i].checked==true) {
          res[i].nb+=1;
        }
        temp+=res[i].nb
      }
      dispatch(vote(res, temp))
      
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
                <p>{firstname.text + " : "+this.props.polRes[index].nb+"/"+this.props.total(this.props.polOptions, this.props.polRes)}</p>
                <LinearProgress mode="determinate" value={this.props.polRes[index].nb} max={this.props.total(this.props.polOptions, this.props.polRes)}  />
              </div>
            ))
        }
        </List>}
         {this.props.resVisibility == false ?  <FlatButton
          label="Voter"
          onTouchTap={()=>this.props.vote(this.props.polOptions, this.props.polRes)}
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
        </Paper>
      </Card>
    );
  }
})

AWPol = connect(mapStateToProps,mapDispatchToProps)(AWPol)

export default AWPol
