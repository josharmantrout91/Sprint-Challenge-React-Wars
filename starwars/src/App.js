import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // this.state.starwarsChars gives us an array of objects with the key/value pairs of an index position 0-9 and the corresponding object. Each object also includes within it a mix of strings and arrays.
  
  // In order to get a list of properties, we need to map over the array of objects and tell our app to return the key: value pairs for each object.  
  
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList
         starwarsChars= {this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
