import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MapsLocalBar from 'material-ui/svg-icons/maps/local-bar';
import {Link} from 'react-router'

export default class AppMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
      <IconButton onTouchTap={this.handleToggle}>
       <MapsLocalBar color={"#FFFFFF"}/>
      </IconButton>

        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
          <MenuItem><Link to="/board">Menu Item</Link></MenuItem>
          <MenuItem><Link to="/">Menu Item 2</Link></MenuItem>
        </Drawer>
      </div>
    );
  }
}
