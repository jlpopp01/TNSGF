import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function App() {

  const [beer, randomBeer] = useState(null);

  const beerAPI = "https://api.punkapi.com/v2/beers/random";

  const fetchBeer = async () => {
    const response = await axios.get(beerAPI)
    randomBeer(response.data.[0])
    };
console.log(randomBeer);

fetchBeer();

    return (
      <div className="App">
        <h1 align="center">There Will Be Beer</h1>
        <h2>This button will display a random beer from Punk API beer</h2>
            <div className='text-center'>
              <button className="fetch-button" onClick={fetchBeer}>
                Fetch Beer
              </button>
            </div>
      </div>
    )
}

export default App;
