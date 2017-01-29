import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import AppToolbar from './header/AppToolbar'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AutoComplete from 'material-ui/AutoComplete';
import injectTapEventPlugin from 'react-tap-event-plugin';



injectTapEventPlugin();


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

class App extends Component {

  static childContextTypes =
    {
        muiTheme: React.PropTypes.object
    }


  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      shadow : 1
    };

      localStorage.removeItem('data');
  }

    getChildContext()
    {
        return {
            muiTheme: getMuiTheme()
        }
    }


onMouseOver = () => this.setState({shadow: 3});
onMouseOut = () => this.setState({shadow: 1});

  render() {
    return (
      <div className="App">
        <AppToolbar />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
