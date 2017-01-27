import React from 'react';
import AWBoardPic from './components/AWBoardPicture';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import AWTodoList from './components/AWTodoList'
import AWChat from './components/AWChat'
import AWMapCard from './components/AWMapCard'

const boardStyle={
  height : "100%",
  padding : 0,
  margin : "auto"
}

const middleStyle={
  height : "100%"
}

export default class AWBoard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {


    return (
      <Container fluid={true} style={boardStyle}>

         <Col lg="3" md="3" style={boardStyle}>
         <Row><AWBoardPic title={"Soirée ciné"} subtitle={"les animaux fantastiques"} pic={"images/fantasticbeast.jpg"}/></Row>
         <Row style={boardStyle}><AWTodoList/></Row>
         </Col>
         <Col lg="6" md="6" style={middleStyle}><Row ><AWMapCard/></Row></Col>

         <Col lg="3" md="3" style={boardStyle}>
         <AWChat/>
         </Col>
     </Container>
    );
  }
}
