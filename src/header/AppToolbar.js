import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Badge from 'material-ui/Badge';
import MessagePopover from './components/MessagePopover'
import Avatar from 'material-ui/Avatar';
import {cyan500,pink500} from 'material-ui/styles/colors';
import AppMenu from './components/AppMenu'
import AWCurrentUser from './components/AWCurrentUser'
import { connect } from 'react-redux';
import DateRange from 'material-ui/svg-icons/action/date-range';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { push } from 'react-router-redux'

const style={
  marginRight : 10,
  marginLeft : 10,
}



const toolbarStyle = {
      backgroundColor: cyan500,
      color : "#FFFFFF",
      position: "fixed",
      top: 0,
      left: 0,
      width : "100%",
      zIndex: 999,
    }

const whiteStyle ={
  color : "#FFFFFF"
}

const mapStateToProps = (store) => {
  return {
    hour : store.mainState.soirees[store.mainState.currentIndex].hour,
    date : store.mainState.soirees[store.mainState.currentIndex].date
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goBack: ()=>{

      dispatch(push('/'));

    }
  }
}

export class AppToolbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 3,
    };


  }

  handleChange = (event, index, value) => this.setState({value});



  render() {
    return (
      <Toolbar style={toolbarStyle}>
        <ToolbarGroup firstChild={true}>
        {this.props.page === 'board' ?
        <IconButton onTouchTap = {()=>this.props.goBack()}>
          <ArrowBack color={"#FFFFFF"}/>
        </IconButton> :
          <div>
          <img src={require("../images/Beer.png")} style={{width:38,height:38}}/>
          </div>
        }
          <ToolbarSeparator style={style}/>
          <AWCurrentUser/>
        </ToolbarGroup>

        {this.props.page === 'board' ?
        <ToolbarGroup>
        <IconButton>
          <DateRange color={"#FFFFFF"}/>
        </IconButton>
        <ToolbarTitle text={this.props.date} style={{color:"#FFFFFF"}}/>
        <IconButton>
          <AccessTime color={"#FFFFFF"}/>
        </IconButton>
        <ToolbarTitle text={this.props.hour} style={{color:"#FFFFFF"}}/>
        </ToolbarGroup> : null

        }
        <ToolbarGroup>
          <MessagePopover/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AppToolbar);
