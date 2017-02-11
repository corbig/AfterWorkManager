import React from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

export default class AWAvatar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {shadow: 1};
    console.log(props)
  }

  render() {
    
    return (
    <IconButton tooltip={this.props.users.firstname} tooltipPosition="right" >
       <Avatar src={this.props.users.avatar} />    
     </IconButton>
    );
  }
}
