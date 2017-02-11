import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import AppToolbar from '../header/AppToolbar'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AutoComplete from 'material-ui/AutoComplete';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import MapsLocalDrink from 'material-ui/svg-icons/maps/local-drink';
import AWThumb from './components/AWThumb'
import { connect } from 'react-redux'
import { changeCurrentSoiree } from './actions/main-actions.js';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux'
import AWAddSoiree from './components/AWAddSoiree.js'
import RaisedButton from 'material-ui/RaisedButton';
import Delete from 'material-ui/svg-icons/action/delete';

const searchStyle = {
  marginTop : 50,
  width: "65%",
  textAlign: 'center',
  display: 'inline-block'

}

const dividerStyle = {
  marginTop : 300,
  textAlign : 'left'

}

const cardStyle = {
  maxHeight: 300,
maxWidth: 300,
margin: 'auto',
textAlign: 'center',
display: 'inline-block',
}

const recentlyStyle = {
  display: "flex", /* contexte sur le parent */
  marginTop : 10
}

const deleteStyle = {
  position : 'relative',
  float : 'right',
  bottom: 40,
  right : 10

}

const mapStateToProps = (store) => {
  return {
    soirees : store.mainState.soirees
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSoiree : (index)=>{
      dispatch(changeCurrentSoiree(index));
      dispatch(push('/board'));

    }
  }
}

export class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      delete : false,
      searchText : ""
    };

    console.log(search)
  }

  enableDelete = () => {
    this.setState({delete : true});
  }

  disableDelete = () => {
    this.setState({delete : false});
  }

  componentWillMount(){
    this.props.setCurrentPage("main")
  }

  handleUpdateInput = (searchText) =>{
    this.setState({searchText})
  }

  render() {
    return (
      <div>
      <p className="App-intro">
        <AutoComplete
       textFieldStyle = {searchStyle}
       style={searchStyle}
       hintText="Rechercher un lieu, une soirée ..."
       dataSource = {[]}
       onUpdateInput={this.handleUpdateInput}
     />

     <div style={dividerStyle}>

     <Subheader><h4>
     <img src="images/coupe_de_champ.png" style={{width:27,height:37}}/> Prochaines soirées</h4> </Subheader>
    {
      this.state.delete ?  <RaisedButton icon = {<Delete/>} secondary={true} style = {deleteStyle} onTouchTap = {this.disableDelete}/> : <RaisedButton icon = {<Delete/>} primary={true} style = {deleteStyle} onTouchTap = {this.enableDelete}/>
    }
     <Divider inset={false} /> </div>
     <div style={recentlyStyle}>
     {
       this.props.soirees.map((soiree,index)=>

      {
        (this.state.searchText === "") ? <AWThumb {...soiree}  index = {index} changeSoiree = {this.props.changeSoiree} delete = {this.state.delete} /> : null
      }
      )
     }
       </div>

        </p>
        <AWAddSoiree/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)
