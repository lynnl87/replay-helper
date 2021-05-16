import React from 'react';
import { Form, Button, Container, Row, Col,  } from 'react-bootstrap';
import UserDataResults from './UserDataResults';

class VersusData extends React.Component {
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
      fetch('http://' + window.location.hostname + ':8081/api/v1/users/' + formDataObj['username'] + '/vs/squacoon')
      .then(response => response.json())
      .then(data => this.setState({results: data}))
    }
  
    render() {
      return (
        <Container>
          <Row>
            <Col>
          <Form onSubmit={this.onFormSubmit}>
              <Form.Group controlId="formUserSearch">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="text" placeholder="Enter username" />
              </Form.Group>
              <Button variant="primary" type="submit" size="lg" block>
                Search
              </Button>
            </Form>
            </Col>
  
          </Row>
          <Row>
            <UserDataResults results={this.state.results}/>
          </Row>
        </Container>
      );
    }
  }
  export default VersusData;
  