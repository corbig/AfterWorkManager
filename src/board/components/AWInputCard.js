import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class AWInputCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ""};
  }

  textChanged = (event, text)=>{
    this.setState({text});
  }

  render() {
    return (

     <CardActions>
     <TextField
     hintText="Ajouter un item..." style={{width:"50%"}} onChange={this.textChanged}/>

     <RaisedButton label="Ajouter" primary={true} onTouchTap={()=>this.props.sendHandler(this.state.text)}/>
    </CardActions>
  );
  }
}
