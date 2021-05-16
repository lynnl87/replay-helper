import React from 'react';
import { Container, Row, Table, Card, Col, Form } from 'react-bootstrap';
class PlayerStatResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterResults : [],
            selectedCharacter : "",
            selectedResults: []
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props)
        {
            this.parseResults();
        }
    }

    parseResults = (state) => {
        if (this.props.results === undefined)
        {
            return null
        }

        let results = Object.values(this.props.results);
        console.log(typeof results);
        let temporaryDict = []
        results.map(result => {
            if (temporaryDict[result['Hero']] === undefined) {
                temporaryDict[result['Hero']] = [];
            }

            temporaryDict[result['Hero']].splice(0,0, result);
        })

        this.setState(function(state){
            state.characterResults = temporaryDict;
            state.selectedResults = temporaryDict[this.state.selectedCharacter];
        })
    }
    
    handleHeroChange = (event) => {
        this.setState((function(state){
            state.selectedCharacter = event.target.value;
            this.parseResults(state);
        }))
    }

    render() {
        if (this.props.results === undefined)
        {
            return null
        }

        let results = Object.values(this.props.results);
        let totalGames = results.length;
        let heroWinLossDict = [];
        results.filter(function (result) {
            if (heroWinLossDict[result['Hero']] === undefined) {
                heroWinLossDict[result['Hero']] = [];
            }

            heroWinLossDict[result['Hero']].splice(0,0, result)
            return true;
        }).map(function (result) {
            return (
                <tr>
                    <td>
                        {result['Hero']}
                    </td>
                    <td>
                        {result['win'] === 2 ? 'yes' : 'no'}
                    </td>
                </tr>
            )
        });

        let heroOptions = [];
        let characters = Object.keys(heroWinLossDict).sort();
        var resultParts = characters.map (function (character){
            return (
                <tr>
                    <td>
                        {character}
                    </td>
                    <td>
                        {heroWinLossDict[character].map(function amount(item){return item.win - 1;}).reduce(function sum(prev, next){return prev + next;})}
                    </td>
                </tr>
            )
        })
        heroOptions = characters.map(function (character){
            return (
                <option>{character}</option>
            )
        })
        console.log(heroOptions);
        //console.log(heroWinLossDict['Nova'].map(function item(item){return item.win}).reduce(function sum(prev, next) { return prev + next}));

        return (
            <Container fluid>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Hero</Form.Label>
                    <Form.Control as="select" onChange={this.handleHeroChange}>
                        <option>Any</option>
                        {heroOptions}
                    </Form.Control>
                </Form.Group>
                <Row className="p-1">
                    Total Games: {totalGames}
                </Row>
                <Row className="p-1">
                    <Col>
                        <Card className="scroll">
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
                <Row className="p-1">
                    <p>
                        {this.state.selectedResults.length > 0 ? this.state.selectedResults[0]['OutnumberedDeaths'] : ""}
                    </p>
                </Row>
            </Container>
        );
    }
}
export default PlayerStatResults;