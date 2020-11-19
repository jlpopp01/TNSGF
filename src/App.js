import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
        {this.state.beers.map(beer => <h1 key={beer.id}>{beer.name}</h1>)}
      </div>
    );
  }
}


export default App;
