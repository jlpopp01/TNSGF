import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';


const url = 'https://api.punkapi.com/v2/beers/random'

const fetchBeerData = async () => {
  try {
    const response = await fetch(`${url}`)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

const displayData = data => {
  document.getElementById('name').textContent = data.name
  document.getElementById('tagline').textContent = data.tagline
  document.getElementById('description').src = data.description
  document.getElementById('abv').textContent = data.abv
}

fetchBeerData()


function App() {
  return (
    <div>
    <Jumbotron className="Jumbo" align="center">
        <h1>Welcome to That Time I Used Create React App</h1>
          <p>
            This will get you a random beer and present it's name, some info about the beer and the ever important ABV
          </p>
    </Jumbotron>
    <main className="main">
      <h1>Get A Random Beer</h1>
      <h2 id="name"></h2>
      <p id="tagline"></p>
      <p id="description"></p>
      <p id="abv"></p>
    </main>
    </div>
  );
}

export default App;
