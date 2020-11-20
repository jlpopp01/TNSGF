import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import './App.css'



class App extends Component {

/* Sets initial state */
  state = {
    beers: []
  }

/* Retrieves data from API*/
  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers/random')
      .then(res => {
        console.log(res);
        this.setState({ beers: res.data });
      })
  }

/*Presents random beer*/

  render() {
    return (
      <div className="Beer-App">
      <Jumbotron align="center" textColor="blue">
        {this.state.beers.map(beer =>
          <h1 key={beer.id}>{beer.name}</h1>
        )}
        {this.state.beers.map(beer =>
          <h2 key={beer.id}>{beer.tagline}</h2>
        )}
      </Jumbotron>
      <h4 align="center">ABV </h4>
      {this.state.beers.map(beer =>
        <p key={beer.id} align="center">{beer.abv}</p>
      )}
      <h3 className="food_pairing" align="center">Food Pairings <br /> </h3>
      <ul>
      {this.state.beers.map(beer =>
        <li key={beer.id} align="center">{beer.food_pairing.[0]}</li>
      )}
      {this.state.beers.map(beer =>
        <li key={beer.id} align="center">{beer.food_pairing.[1]}</li>
      )}
      </ul>
      <h3 align="center">Beer Description <br /> </h3>
      {this.state.beers.map(beer =>
        <p key={beer.id}>{beer.description}</p>
      )}
      {this.state.beers.map(beer =>
        <Image key={beer.id} src={beer.image_url} />
      )}
      </div>
    );
  }
}


export default App;
