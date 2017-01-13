import React from 'react';

// Composant vierge par défaut
// A copier pour créer un nouveau composant
// C'est un aide mémoire


export default class AW_ extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {index:1}; // Les variables locales au composant
  }
  
  // Une fonction
  handleToggle = (index) => this.setState({index});
  
  // Le template
  render() {
    return (
     <div></div>
    );
  }
}
