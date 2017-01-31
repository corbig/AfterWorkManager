import React from 'react';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import CommunicationChat from 'material-ui/svg-icons/communication/chat';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

export default class MessagePopover extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Badge badgeContent={4} secondary={true} badgeStyle={{top: 16, right: 16}}>
          <IconButton onTouchTap={this.handleTouchTap}>
            <CommunicationChat color={"#FFFFFF"}/>
          </IconButton>
        </Badge>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <List>
            <Subheader>Today</Subheader>
            <ListItem
              leftAvatar={<Avatar src="images/doomguy.jpg" />}
              primaryText="Brunch this weekend?"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Brendan Lim</span> --
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="images/doomguy.jpg" />}
              primaryText={
                <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
              }
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
                  Wish I could come, but I&apos;m out of town this weekend.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="images/doomguy.jpg" />}
              primaryText="Oui oui"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Grace Ng</span> --
                  Do you have Paris recommendations? Have you ever been?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="images/doomguy.jpg" />}
              primaryText="Birdthday gift"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Kerem Suer</span> --
                  Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="images/doomguy.jpg" />}
              primaryText="Recipe to try"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Raquel Parrado</span> --
                  We should eat this: grated squash. Corn and tomatillo tacos.
                </p>
              }
              secondaryTextLines={2}
            />
          </List>
        </Popover>
      </div>
    );
  }
}
