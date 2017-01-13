import React from 'react';

// Composant vierge par défaut
// A copier pour créer un nouveau composant
// C'est un aide mémoire


export default class AW_ extends React.Component {
  
  constructor(props) {
    console.log("AW_.constructor() : Début");
    super(props);
    this.state = {index:1}; // Les variables locales au composant
    console.log("AW_.constructor() : Fin");
  }
  
  // Une fonction
  handleToggle = (index) => this.setState({index});
  
  // Une autre fonction
  onClick = () => {
    console.log("AW_.onClick() : Début");
    
    console.log("AW_.onClick() : Fin");
  };
  
  // Le template
  render() {
    return (
     <div></div>
    );
  }
}
