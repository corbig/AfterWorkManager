import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import AWMapAutoCompletion from './AWMapAutoCompletion'
import { connect } from 'react-redux'
import {editLocation} from '../actions/map-actions.js'


const mapStateToProps = (store) => {
  return {
    cursor : store.mainState.soirees[store.mainState.currentIndex].cursor,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editLocation:(cursor)=>{dispatch(editLocation(cursor))}
  }
}
export class AWEditCursor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open : false,
      inputText : this.props.cursor.text,
      location : this.props.cursor,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
    this.setState({inputText: this.props.cursor.text});
    this.setState({location: this.props.cursor});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleAccept = () => {
    console.log(this.state)
    if(JSON.stringify(this.state.location) === "{}" || this.state.location.text !== this.state.inputText) return;
    else {
      this.props.editLocation(this.state.location);
      this.handleClose();
    }
  }

  inputTextChange = (event,inputText) => {
    this.setState({inputText});
  };

  locationChange = (location) =>{
    this.setState({location});
  }

  render() {
    const actions = [
    <FlatButton
      label="Annuler"
      primary={true}
      onTouchTap={this.handleClose}
    />,
    <FlatButton
      label="Ajouter"
      secondary={true}
      keyboardFocused={true}
      onTouchTap={this.handleAccept}
    />,
  ];

    return (
      <div>
      <FloatingActionButton mini={true} zDepth={4} secondary={true} onTouchTap={this.handleOpen} style={{position:"absolute",bottom:5,right:5}}>
      <ModeEdit />
      </FloatingActionButton>
      <Dialog
        title="Choirsir le lieu de la soirée"
        actions={actions}
        modal={true}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
      <AWMapAutoCompletion input = {this.state.input}
      inputTextChange = {this.inputTextChange}
      inputStyle = {{width : "100%"}}
      locationChange = {this.locationChange}
      />
      </Dialog>
      </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AWEditCursor);
