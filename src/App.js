import './App.css';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import UserDataResults from './UserDataResults.js'

class App extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
        results: []
    };  
  }

  onFormSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    fetch('http://spare-pc:8081/api/v1/user_data/' + formDataObj['username'])
    .then(response => response.json())
    .then(data => this.setState({results: data}))
  }
  render() {
    return (
      <div className="App">
        <body className="App-body">
        <Form onSubmit={this.onFormSubmit}>
            <Form.Group controlId="formUserSearch">
              <Form.Label>Username</Form.Label>
              <Form.Control name="username" type="text" placeholder="Enter username" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
          <UserDataResults results={this.state.results}/>
        </body>
      </div>
    );
  }
}
export default App;
