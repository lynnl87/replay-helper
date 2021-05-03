import React from 'react';
import { Form, Button, Container, Row, Col, } from 'react-bootstrap';
import PlayerDataResults from './PlayerDataResults';

class PlayerData extends React.Component {
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
        fetch('http://spare-pc:8081/api/v1/users/' + formDataObj['username'] + '/playerdata')
            .then(response => response.json())
            .then(data => this.setState({ results: data }))
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={this.onFormSubmit}>
                            <Form.Group controlId="formUserSearch">
                                <Form.Label>User</Form.Label>
                                <Form.Control name="username" type="text" placeholder="Enter username" />
                            </Form.Group>
                            <Button variant="primary" type="submit" size="lg" block>
                                Search
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <PlayerDataResults results={this.state.results} />
                </Row>
            </Container>
        );
    }
}
export default PlayerData;
