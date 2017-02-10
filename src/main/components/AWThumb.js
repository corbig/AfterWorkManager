import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Delete from 'material-ui/svg-icons/action/delete';
import { connect } from 'react-redux'
import {deleteSoiree} from '../actions/main-actions'
import IconButton from 'material-ui/IconButton';

const cardStyle = {
  maxHeight: 100,
maxWidth: 300,
margin: 'auto',
textAlign: 'center',
display: 'inline-block',
}

const deleteStyle = {
   position : 'relative',
   top : 0,
   left : 130,
   zIndex : 1,
   color : '#FFFFFF',
   margin : 0,
   padding : 0,
   display: 'inline-block'
}


const mapDispatchToProps = (dispatch) => {
  return {
    deleteSoiree:(index)=>{
        dispatch(deleteSoiree(index))
    }
  }
}

export  class AWThumb extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shadow: 1,
      delete:false
    };
  }


  onMouseOver = () =>{
    this.setState({shadow: 5});
  }

  onMouseOut = () => {
    this.setState({shadow: 1});
}

  render() {
    return (
      <div style={cardStyle}>

      <Paper  zDepth={this.state.shadow} rounded={false}
      onMouseOver={this.onMouseOver}
      onMouseOut={this.onMouseOut}
      onTouchTap = {!this.props.delete ? ()=>this.props.changeSoiree(this.props.index) : null}
      >
       {this.props.delete ? <IconButton style={deleteStyle} onTouchTap = {()=>this.props.deleteSoiree(this.props.index)}><Delete color="#FFFFFF"/></IconButton>: <IconButton style={deleteStyle}></IconButton> }


      <CardMedia
        overlay= {<CardTitle title={this.props.title} subtitle={this.props.subtitle}/>}
        style = {{marginTop:-50}}
        >

    <img src={this.props.pic} />
  </CardMedia>
      </Paper>
   </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(AWThumb);
