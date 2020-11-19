import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class App extends React.Component {

  state = {
    randomBeer: []
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers/random')
      .then(response => {
        const randomBeer = response.data.[0];
        console.log(randomBeer);
      })
  }

    render() {
      return (
        <div className="App"
          style={{
            backgroundColor: 'blue',
          }}>
          <h1 align="center">There Will Be Beer</h1>
          <h2>This button will display a random beer from Punk API beer</h2>
              <div className='text-center'>
                <button className="fetch-button">
                  Fetch Beer
                </button>
              </div>
        </div>
      )
    }
}

export default App;
