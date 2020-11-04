import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';



function TForm () {
  return (
    <form>
      <InputGroup className="userName">
        <InputGroup.Prepend>
          <InputGroup.Text id="userName">@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="userName"
        />
      </InputGroup>
    </form>
  )
}

export default TForm;

{/*Let's Build the Form!
We should gather a name and make sure it's a name - regex
let's get an email as well so that we can have a place to submit this form
we should gather some local information, but nothing too specific - lets get a city and state
what sort of classes are they taking? - this could be a checkbox option
what sort of jobs would they be interested in? - drop down or toggle
do they want to work remote? - fancy toggle option?
in a perfect world upon hitting the submit button it will actually email the form to the user
  in the event that this doesn't work, it should populate into a file - there has to be a form of validation*/
}
