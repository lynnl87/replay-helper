import './UserDataResults.css';
import React from 'react';
import { Container, Row, Table, Card, Col } from 'react-bootstrap';
class UserDataResults extends React.Component {

    render() {
        let results = this.props.results;
        console.log(results);
        var resultParts = Object.keys(results).filter(function (key) {
            if (results[key]['team_one_team'] === results[key]['team_two_team']) {
                return true;
            }
            return false;
        }).map(function (key) {
            return (
                <tr>
                    <td>
                        {results[key]['team_one_hero']}
                    </td>
                    <td>
                        {results[key]['team_one_win'] === 2 ? 'yes' : 'no'}
                    </td>
                    <td>
                        {results[key]['team_two_hero']}
                    </td>
                </tr>
            )
        });

        var againstParts = Object.keys(results).filter(function (key) {
            if (results[key]['team_one_team'] === results[key]['team_two_team']) {
                return false;
            }
            return true;
        }).map(function (key) {
            return (
                <tr>
                    <td>
                        {results[key]['team_one_hero']}
                    </td>
                    <td>
                        {results[key]['team_one_win'] === 2 ? 'yes' : 'no'}
                    </td>
                    <td>
                        {results[key]['team_two_hero']}
                    </td>
                </tr>
            )
        });

        console.log(this.props.results)
        return (
            <Container fluid>
                <Row className="p-3">
                    <Col>
                        <Card>
                            <Card.Header>With</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover>
                                    <tr>
                                        <th>
                                            Hero
                                        </th>
                                        <th>
                                            Won?
                                        </th>
                                        <th>
                                            Squacoon Hero
                                        </th>
                                    </tr>
                                    {resultParts}
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="p-3">
                    <Col>
                        <Card>
                            <Card.Header>Against</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover>
                                    <tr>
                                        <th>
                                            Hero
                                        </th>
                                        <th>
                                            Won?
                                        </th>
                                        <th>
                                            Squacoon Hero
                                        </th>
                                    </tr>
                                    {againstParts}
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default UserDataResults;