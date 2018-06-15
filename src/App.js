import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap'
import CharactersList from './components/CharactersList.js'

const targets = [
  {
      name: "Leia Organa",
      status: "alive",
      imgUrl: "https://am22.akamaized.net/tms/cnt/uploads/2017/08/leiatop1-650x574.jpg"
  },
  {
      name: "C-3PO",
      status: "alive",
      imgUrl: "https://starwars-visualguide.com/assets/img/characters/2.jpg"
  },
  {
      name: "Luke Skywalker",
      status: "dead",
      imgUrl: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest/scale-to-width-down/500?cb=20170927034529"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <header className="App-header">
            <h1 className="App-title">Kill them with love</h1>
          </header>
          <h2 className="App-intro">
            Click and click and click!
          </h2>
          <CharactersList targets={targets}/>
        </Container>
      </div>
    );
  }
}

export default App;
