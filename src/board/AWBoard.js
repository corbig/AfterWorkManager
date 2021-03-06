import React from 'react';
import AWBoardPic from './components/AWBoardPicture';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import AWTodoList from './components/AWTodoList';
import AWChat from './components/AWChat';
import AWMapCard from './components/AWMapCard';
import AWPol from './components/AWPol';
import { connect } from 'react-redux';
import AWDateTimePicker from './components/AWDateTimePicker';

const boardStyle={
  height : "100%",
  width : "100%",
  maxHeight :"100%",
  padding : 0,
  margin : 0,
  position : "fixed",
  overflow: "hidden"
}

const columnStyle={
  height : "100%",
  maxHeight :"100%",
  padding : 0,
  margin : "auto",
  position : "relative",

}

const todoStyle={
  minHeight : "60%",
  maxHeight : "90%",
  padding : 0,
  margin :  0,
  position : "relative",

}

const picStyle={
  minHeight : "10%",
  maxHeight : "33%",
  padding : 0,
  margin : "auto",
  position : "relative",
}



const middleStyle={
  height : "100%",
  position : "relative",
  overflowY: "scroll",

}

const mapStateToProps = (store) => {
  return {
    soiree : store.mainState.soirees[store.mainState.currentIndex]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    /*changeStatus:(index,status)=>{dispatch(changeStatus(index,status))},
    addTodo:(text)=>{dispatch(addTodo(text))}*/
  }
}

export class AWBoard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    console.log(window.location.pathname)
  }
  componentWillMount(){
    this.props.setCurrentPage("board")
  }


  render() {


    return (
      <Container fluid={true} style={boardStyle}>
         <Col lg="3" md="3" style={columnStyle}>
            <AWBoardPic {...this.props.soiree}/>
            <AWTodoList/>
          
         </Col>
         <Col lg="6" md="6" style={middleStyle}>
         <Row><AWMapCard/></Row>
        
         <Row><AWPol/></Row>
         </Col>
         <Col lg="3" md="3" style={columnStyle}>
         <AWChat/>
         </Col>
     </Container>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AWBoard);
