import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import AppToolbar from './AppToolbar'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AutoComplete from 'material-ui/AutoComplete';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import MapsLocalDrink from 'material-ui/svg-icons/maps/local-drink';
import AWThumb from './AWThumb'



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

export default class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      shadow : 1
    };
  }



  render() {
    return (
      <div>
      <p className="App-intro">
        <AutoComplete
       textFieldStyle = {searchStyle}
       style={searchStyle}
       hintText="Rechercher un lieu, une soirée ..."
       dataSource={this.state.dataSource}
       onUpdateInput={this.handleUpdateInput}
     />

     <div style={dividerStyle}>

     <Subheader> <h4> <MapsLocalDrink /> Prochaines soirées </h4> </Subheader>

     <Divider inset={false} /> </div>
     <div style={recentlyStyle}>

       <AWThumb title={"Soirée ciné"} subtitle={"les animaux fantastiques"} pic={"images/fantasticbeast.jpg"} />

       <AWThumb title={"Soirée raclette"} pic={"images/raclette.jpg"} />

       <AWThumb title={"Soirée Bowling"} pic={"images/bowling.jpg"} />

       <AWThumb title={"Soirée Fondue"} pic={"images/fondue.jpg"} />

       </div>

        </p>
      </div>
    );
  }
}
