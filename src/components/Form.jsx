import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Component.css';
import { useState } from 'react';

function BasicExample() {
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');

  return (
    <Form className='Form-Style'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setEmailAddress('Your e-mail is: ' + e.target.value); setMessage3(e.target.value)}} />
        <Form.Text className="text-muted">
          Please enter your email here.
          <h6>{emailAddress}</h6>
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => {setMessage('Welcome to the website!'); setMessage2('E-mail account: ' + message3 + '!'); alert('Account Email and Password have been entered!')}}>
        Submit
      </Button>
      <br />
      <br />
      <h2>{message} {message2}</h2>
    </Form>
  );
}

export default BasicExample;