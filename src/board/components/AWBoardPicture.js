import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';


const cardStyle = {
  maxHeight: 600,
maxWidth: 600,
margin: 'auto',
textAlign: 'center',
display: 'inline-block',
}

export default class AWBoardPic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {shadow: 1};
  }



  render() {
    return (
      <Paper style={cardStyle} zDepth={this.state.shadow} rounded={false}
      >
      <CardMedia
        overlay={<CardTitle title={this.props.title} subtitle={this.props.subtitle}/>}
     >
    <img src={this.props.pic} />
  </CardMedia>
      </Paper>

    );
  }
}