import React from 'react';
import TextField from 'material-ui/TextField';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Paper from 'material-ui/Paper';




export default class AWMapAutoCompletion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cursor: {},
      open : false,
      autocomplete:null,
    };

  }


componentDidMount(){
  var input_1 = /** @type {!HTMLInputElement} */(document.getElementById('input_1'));



  this.state.autocomplete = new google.maps.places.Autocomplete(input_1);


  this.state.autocomplete.addListener('place_changed', function() {


  var place = this.state.autocomplete.getPlace();

    console.log(place.geometry.location.lat());
    console.log(place.geometry.location.lng());

    var location = {lat : place.geometry.location.lat() , lng : place.geometry.location.lng(),text : place.formatted_address};


    this.props.inputTextChange(null,place.formatted_address);
    this.props.locationChange(location);


}.bind(this));

}

  render() {
    return (
      <div>
      <TextField
       id="input_1"
       value = {this.props.inputText}
       onChange = {this.props.inputTextChange}
       style = {this.props.inputStyle}
      />

      </div>
    );


  }
}
