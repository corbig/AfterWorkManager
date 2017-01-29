import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

const cardStyle = {
  maxHeight: 100,
maxWidth: 300,
margin: 'auto',
textAlign: 'center',
display: 'inline-block',
}

export default class AWThumb extends React.Component {

  constructor(props) {
    super(props);
    this.state = {shadow: 1};
  }


  onMouseOver = () => this.setState({shadow: 5});
  onMouseOut = () => this.setState({shadow: 1});

  render() {
    return (
      <Paper style={cardStyle} zDepth={this.state.shadow} rounded={false}
      onMouseOver={this.onMouseOver}
      onMouseOut={this.onMouseOut}
      onTouchTap = {()=>this.props.changeSoiree(this.props.index)}
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
