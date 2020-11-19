import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import './App.css'



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
      <Jumbotron align="center" textColor="blue">
        {this.state.beers.map(beer =>
          <h1 key={beer.id}>{beer.name}</h1>
        )}
        {this.state.beers.map(beer =>
          <h2 key={beer.id}>{beer.tagline}</h2>
        )}
      </Jumbotron>
      {this.state.beers.map(beer =>
        <p key={beer.id} align="center">ABV: {beer.abv}</p>
      )}
      {this.state.beers.map(beer =>
        <p key={beer.id}>Food Pairings: {beer.food_pairing.[0]}</p>
      )}
      {this.state.beers.map(beer =>
        <p key={beer.id}>Beer Description: <br /> {beer.description}</p>
      )}
      {this.state.beers.map(beer =>
        <Image key={beer.id} src={beer.image_url} />
      )}
      </div>
    );
  }
}


export default App;
