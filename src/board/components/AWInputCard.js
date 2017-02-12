import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux'

const mapStateToProps = (store) => {

  return {
    polOptions : store.mainState.sondage[store.mainState.currentIndex].options,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export class AWInputCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ""};
  }

  textChanged = (event, text)=>{
    this.setState({text});
  }

  render() {
    return (

     <CardActions style ={this.props.style}>
     <TextField
     hintText="Ajouter un item..." style={{width:"50%"}} onChange={this.textChanged}/>

     <RaisedButton label="Ajouter" primary={true} onTouchTap={()=>this.props.sendHandler(this.state.text, this.props.polOptions)}/>
    </CardActions>
  );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AWInputCard);
