import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import { connect } from 'react-redux'
import {addSoiree} from '../actions/main-actions'
import Snackbar from 'material-ui/Snackbar';
import Dropzone from 'react-dropzone';
import Checkbox from 'material-ui/Checkbox';



const mapDispatchToProps = (dispatch) => {
  return {
    addSoiree:(soiree, sondage)=>{dispatch(addSoiree(soiree, sondage))},
  }
}

export class AWAddSoiree extends React.Component {
  state = {
    open: false,
    title : "",
    subtitle : "",
    pic: "",
    hour :"",
    date :"",
    pollTitle:"",
    doPoll: false,
    snackOpen : false
  };


  handleOpen = () => {
    this.setState({open: true});

    this.setState({hour : ""});
    this.setState({subtitle : ""});
    this.setState({title : ""});
    this.setState({date : ""});
    this.setState({pic : ""});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  titleChange = (event, title)=>{
    this.setState({title});

  }
pollTitleChange = (event, pollTitle)=>{
    this.setState({pollTitle});

  }
  subtitleChange = (event, subtitle)=>{
    this.setState({subtitle});
  }

  dateChange = (event, date)=>{
    this.setState({date});
  }

  hourChange = (event, hour)=>{
    this.setState({hour});
  }

  handleSnackClose = () => {

  this.setState({snackOpen: false});

}
  checkedCHange = () => {
    if(this.state.doPoll==false) {
      this.setState({doPoll:true});
    }else {
      this.setState({doPoll:false})
    }
  }

  parseDate = () =>{
    var date = this.state.date
    var month = date.getMonth()+1;
    if(month<10) month = "0"+month;

    var day = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();

    return date.getUTCFullYear()+"-"+month+"-"+day;
  }

  parseHour = () =>{
    var hour = this.state.hour

    var minutes = hour.getMinutes() < 10 ? "0"+hour.getMinutes() : hour.getMinutes();
    return hour.getHours()+":"+minutes;
  }

  addSoiree = () => {

    if(this.state.title.length === 0 || this.state.date.length === 0 || this.state.hour.length === 0)
    {
      this.setState({snackOpen : true})
    }


    else {

      let soiree = {
        title :this.state.title,
        subtitle:this.state.subtitle,
        pic:this.state.pic === "" ? "images/default.png" : this.state.pic,
        date:this.parseDate(),
        hour:this.parseHour(),
        messages:[],cursor:{lat:47.480489,lng:-0.5922931000000062,text:""},
        todos:[]
      }



      let sondage;
      if(this.state.doPoll==true) {
        sondage = {
                title: this.state.pollTitle,
                options: [
                ],
                res : [
                ],
                displaySondage : true,
              }
      }else {
        sondage = {
          title: "",
          options: [
          ],
          res : [
          ],
          displaySondage : false,
        }
      }
      this.props.addSoiree(soiree, sondage);
      this.handleClose();
    }

  }


   onDrop = (files) => {

     console.log(files)

     this.setState({
       pic: files[0].preview
     });



   }

   onOpenClick = () => {
     this.refs.dropzone.open();
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
        onTouchTap={this.addSoiree}
      />,
    ];

    return (
      <div>
        <FloatingActionButton mini={false} onTouchTap={this.handleOpen} secondary={true} style={{position:"fixed",bottom:30,right:30}}>
        <Add />
        </FloatingActionButton>
        <Dialog
          title="Ajouter une soirée"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <Container fluid={true}>
          <Col lg="6" md="6"><Row >
          <Dropzone ref="dropzone" onDrop={this.onDrop} style = {{width:"80%",height:"80%"}}>
           {this.state.pic!== "" ? <div>

           <div><img src={this.state.pic} id="preview" style = {{maxWidth:400,maxHeight:200,marginLeft:"-30px"}}/></div>
           </div> :<div>Faites un drag&drop pour ajouter une image ou cliquez sur la zone pour sélectionner un fichier</div>
           }

           </Dropzone>
          </Row></Col>

          <Col lg="6" md="6"><Row >
          <TextField value={this.state.title} onChange ={this.titleChange}  floatingLabelText="Titre de la soirée"/><br />
          <TextField value={this.state.subtitle} onChange ={this.subtitleChange}  floatingLabelText="Sous-titre de la soirée (optionnel)"/><br />
          <DatePicker hintText="Date de la soirée" mode="landscape" value={this.state.date} onChange ={this.dateChange}/>
          <TimePicker format="24hr" hintText="heure de la soirée" value={this.state.hour} onChange ={this.hourChange}/>
          <Checkbox
                label="Ajouter un sondage"
                onTouchTap={()=>this.checkedCHange()}
          />
          {this.state.doPoll== true ? <TextField value={this.state.pollTitle} onChange ={this.pollTitleChange}  floatingLabelText="Titre du sondage"/>: null }<br />
          </Row></Col>
        </Container>
        </Dialog>

        <Snackbar
          open={this.state.snackOpen}
          message="Les champs 'titre','date' et 'heure' sont obligatoires"
          autoHideDuration={4000}
          onRequestClose={this.handleSnackClose}
        />
      </div>
    );
  }
}
export default connect(null,mapDispatchToProps)(AWAddSoiree);
