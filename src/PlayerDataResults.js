import React from 'react';
import { Container, Row, Table, Card, Col } from 'react-bootstrap';
class PlayerDataResults extends React.Component {

    render() {
        let results = Object.values(this.props.results);
        let gamesWon = 0;
        let gamesLost = 0;
        let heroWinLossDict = [];
        var resultParts = results.filter(function (result) {
            if (result['win'] === 2) {
                if (heroWinLossDict[result['hero']] === undefined) {
                    heroWinLossDict[result['hero']] = 0;
                }

                heroWinLossDict[result['hero']]++;
                gamesWon++;
            }
            else {
                gamesLost++;
            }
            return true;
        }).map(function (result) {
            return (
                <tr>
                    <td>
                        {result['hero']}
                    </td>
                    <td>
                        {result['win'] === 2 ? 'yes' : 'no'}
                    </td>
                </tr>
            )
        });

        return (
            <Container fluid>
                <Row className="p-1">
                    Games Won: {gamesWon}
                </Row>
                <Row className="p-1">
                    Games Lost: {gamesLost}
                </Row>
                <Row className="p-1">
                    <Col>
                        <Card>
                            <Card.Header>With</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>
                                                Hero
                                            </th>
                                            <th>
                                                Won?
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {resultParts}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default PlayerDataResults;