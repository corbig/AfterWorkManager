import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {cyan500} from 'material-ui/styles/colors';
import Place from 'material-ui/svg-icons/maps/place';
import Navigation from 'material-ui/svg-icons/maps/navigation';
import AWInputCard from './AWInputCard';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DirectionsCar from 'material-ui/svg-icons/maps/directions-car';
import DirectionsSubway from 'material-ui/svg-icons/maps/directions-subway';
import DirectionsWalk from 'material-ui/svg-icons/maps/directions-walk';
import DirectionsBike from 'material-ui/svg-icons/maps/directions-bike';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import { connect } from 'react-redux'

const style={
  marginRight : 10,
  marginLeft : 10
}


const toolbarStyle = {
      backgroundColor: cyan500,
      color : "#FFFFFF",
      position: "relative",
       marginTop:0,
       zIndex: 2,
       width:"100%"
}

const whiteStyle ={
  color : "#FFFFFF"
}

const cardStyle = {
margin: 'auto',
postion:"absolute",
display: 'block',
width:"100%",


}

const paperStyle={
  overflowY: "auto",
  position : "relative",
  height : "500px"
}

const coords = {
  lat: 47.47958550000001,
  lng: -0.5506655000000364
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}


export default class AWMapCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    text:"",
    directionsService:null,
    directionsDisplay:null,
    autocomplete:null,
    transport:"",
    address:[],
    input : ""
  };
  }

  onMapCreated = (map) => {
    map.setOptions({
      disableDefaultUI: true
    });

    this.state.directionsDisplay = new google.maps.DirectionsRenderer();
    this.state.directionsDisplay.setMap(map);

    this.state.directionsService = new google.maps.DirectionsService();

     var input = /** @type {!HTMLInputElement} */(document.getElementById('input'));

    this.state.autocomplete = new google.maps.places.Autocomplete(input);

    this.state.autocomplete.addListener('place_changed', function() {


    var place = this.state.autocomplete.getPlace();

      console.log(place.geometry.location.lat())
      console.log(place.geometry.location.lng())

      this.setState({input : place.formatted_address})

    /*var address = [];
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    this.setState({address});*/

  }.bind(this));


  }

  onDragEnd = (e) => {
    console.log('onDragEnd', e);
  }

  onCloseClick = () => {
    console.log('onCloseClick');
  }

  onClick = (e) => {
    console.log('onClick', e);
  }

  onGoClick=() =>{

    var destination = coords


   var request = {
      origin: this.state.input,
      destination: destination,
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: this.state.transport
  };

  this.state.directionsService.route(request, function(response, status) {
    console.log(status)

    if (status == 'OK') {

      this.state.directionsDisplay.setDirections(response);
    }
  }.bind(this));


  }

  transportChange = (event, index, transport) => this.setState({transport});

  inputChange = (event,input) => {
    this.setState({input})

  };

  render() {
    return (
      <Card style={cardStyle}>
      <Toolbar style={toolbarStyle}>
      <ToolbarGroup firstChild={true}>
      <IconButton>
       <Place color={"#FFFFFF"}/>
      </IconButton>
        <ToolbarTitle text="Localisation" style={whiteStyle}/>
      </ToolbarGroup>

        <ToolbarGroup>

        </ToolbarGroup>
      </Toolbar>
      <Paper style={paperStyle} zDepth={0}>
      <Gmaps
        width={'100%'}
        height={'100%'}
        style = {{position:"relative"}}
        lat={coords.lat}
        lng={coords.lng}
        zoom={15}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: "AIzaSyCsGhQwGn9OPER4ijFjhquYERUG07oa5bE"}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={false}
        />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />

          <FloatingActionButton mini={true} zDepth={5} secondary={true} style={{position:"absolute",bottom:5,right:5}}>
          <ModeEdit />
        </FloatingActionButton>

      </Gmaps>
     </Paper>
     <CardActions>
     <TextField
      ref =  "inputText"
      id = "input"
      value = {this.state.input}
      onChange = {this.inputChange}
      style = {{width : "50%"}}
     />

     <SelectField
          hintText="Transport..."
          value={this.state.transport}
          onChange={this.transportChange}
          style = {{verticalAlign: 'bottom',width:"30%"}}
        >
          <MenuItem value={"DRIVING"} primaryText="En voiture" leftIcon={<DirectionsCar />}/>
          <MenuItem value={"WALKING"} primaryText="A pied" leftIcon={<DirectionsWalk/>}/>
          <MenuItem value={"BICYCLING"} primaryText="En vélo" leftIcon={<DirectionsBike/>}/>
          <MenuItem value={"TRANSIT"} primaryText="En bus" leftIcon={<DirectionsSubway/>}/>
        </SelectField>

     <RaisedButton icon={<Navigation/>} primary={true} onClick={this.onGoClick}/>
    </CardActions>
    </Card>


    );
  }
}connect(mapStateToProps, mapDispatchToProps)