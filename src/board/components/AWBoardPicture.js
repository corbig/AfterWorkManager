import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import DateRange from 'material-ui/svg-icons/action/date-range';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import AWInfoCard from './AWInfoCard'
import {cyan500} from 'material-ui/styles/colors';

const cardStyle = {
position : 'relative',
height: "33%",
width : "100%",
margin: 'auto',
textAlign: 'center',
display: 'inline-block',
}

const paperStyle = {
  position : 'relative',
  bottom : 0,
  right : 20,
  fontSize : 1,
  zIndex : 1,
  margin : 0,
  padding : 0,

  float : 'right',

}

const itemStyle = {
  color : "#FFFFFF",
  backgroundColor: '#00BCD4',

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
        style ={{position:"relative", height : "100%"}}
     >
    <img src={this.props.pic} style = {{position:"relative", height : "100%"}}/>
  </CardMedia>

 </Paper>
    );
  }
}
