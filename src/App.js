import Jumbotron from 'react-bootstrap/Jumbotron';
import TForm from './TForm.js'


function App() {
  return (
    <div>
    <Jumbotron className="Jumbo">
        <h1>Welcome to The Not So Google Form</h1>
          <p>
            This form will ask some questions, gather some info without being creeepy, and show off some skills with the Create React App and React Bootstrap (so far...)
          </p>
    </Jumbotron>
    <TForm />
    </div>
  );
}

export default App;
