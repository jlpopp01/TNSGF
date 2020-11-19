import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';



class App extends Component {

  state = {
    beers: []
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers/random')
      .then(res => {
        console.log(res);
        this.setState({ beers: res.data });
      })
  }



  render() {
    return (
      <div className="Beer-App">
      <Jumbotron align="center">
        {this.state.beers.map(beer =>
          <h1 key={beer.id}>{beer.name}</h1>
        )}
        {this.state.beers.map(beer =>
          <h2 key={beer.id}>{beer.tagline}</h2>
        )}
      </Jumbotron>
      {this.state.beers.map(beer =>
        <p key={beer.id}>ABV: {beer.abv}</p>
      )}
      {this.state.beers.map(beer =>
        <p key={beer.id}>Beer Description: <br /> {beer.description}</p>
      )}
      </div>
    );
  }
}


export default App;
