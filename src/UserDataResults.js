import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
class UserDataResults extends React.Component {

    render() {
    let results = this.props.results;
    console.log(results);
    var resultParts = Object.keys(results).map(function(key) {
        return (
            <Row>
                <Col>
                    {results[key]['hero']}
                </Col>
                <Col>
                    {results[key]['totalPlayed']}
                </Col>
                <Col>
                    {results[key]['wins']}
                </Col>
                <Col>
                    {(results[key]['wins'] / results[key]['totalPlayed'] * 100).toPrecision(3)}
                </Col>
            </Row>
        )
    });
    console.log(this.props.results)
      return (
        <Container>
            <Row>
                <Col>
                    Hero
                </Col>
                <Col>
                    Total Played
                </Col>
                <Col>
                    Win Count
                </Col>
                <Col>
                    Win %
                </Col>
            </Row>
            {resultParts}
        </Container>
      );
    }
  }
  export default UserDataResults;