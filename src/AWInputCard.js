import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class AWInputCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {shadow: 1};
  }



  render() {
    return (

     <CardActions>
     <TextField
     hintText="Ajouter un item..."/>

     <RaisedButton label="Ajouter" primary={true}/>
    </CardActions>
  );
  }
}
