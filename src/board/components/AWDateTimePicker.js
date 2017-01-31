import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';

const cardStyle = {
maxHeight: 600,
width : "100%",
margin: 'auto',
textAlign: 'center',
display: 'inline-block',
}

export default class AWDateTimePicker extends React.Component {

  constructor(props) {
    super(props);
    this.date = {date: ""};
    this.hour= {hour: ""};
  }

  changeDate = (event, text)=>{
    this.setState({text});
  }
  changeTime = (event, text)=>{
    this.setState({text});
  }

  render() {
    return (
      <Paper style={cardStyle} rounded={false}>
      <DatePicker hintText="Date" container="inline" mode="landscape" onChange={this.changeDate} />
      <TimePicker
      format="24hr"
      hintText="24hr Format"
      onChange={this.changeTime}
      />
      </Paper>

    );
  }
}
