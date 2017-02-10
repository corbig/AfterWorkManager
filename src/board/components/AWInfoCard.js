import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';


export default class AWInfoCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };

    console.log(this.props.items)
  }


  render() {
    return (
      <div style = {this.props.paperStyle}>
      <List>
     {
       this.props.items.map((item,index)=>
          <ListItem primaryText={item.text} leftIcon={item.icon} style = {this.props.itemStyle} iconStyle={this.props.itemStyle} disabled={true}/>
      )
     }
      </List>
      </div>
    );
  }
}
