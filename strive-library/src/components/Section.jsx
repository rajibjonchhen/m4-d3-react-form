import React from 'react'
import { Component } from 'react'
import {Container, Col, Row, Card, Button, ButtonGroup} from "react-bootstrap"
import fantasy from '../components/data/fantasy.json'
import history from '../components/data/history.json'
import horror from '../components/data/horror.json'
import romance from '../components/data/romance.json'
import scifi from '../components/data/scifi.json'

class MySection extends Component{
    state = {
        books : fantasy
            }

    render() {
        return(
            <Container>
                 <Row>
                    <Col>
                       <ButtonGroup size="lg" className="m-5">
                       <Button  onClick ={()=> this.setState({books:fantasy})}>Fantasy</Button>
                        <Button onClick ={()=> this.setState({books:scifi})}>Scifi</Button>
                        <Button onClick ={()=> this.setState({books:horror})}>Horror</Button>
                        <Button onClick ={()=> this.setState({books:romance})}>Romance</Button>
                        <Button onClick ={()=> this.setState({books:history})}>History</Button>
                       </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    {
                        this.state.books.slice(0,12).map(book => (

                            <Col xs={12} md={6} lg={3} xl={2} key={book.id} className="mt-4">
    
                                      <Card style={{ width: '10rem' }} >
                                    <Card.Img variant="top" src={book.img} style={{ width: '10rem' }}/>
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                            <span className="bg-warning p-1">{book.price}</span>
                                            <span className="bg-warning p-1">{book.price}</span>
                                        </Card.Text>
                                        <Button className="btn bg-success m-2" variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card>
                            </Col>
                        ) )
                    }
                   
                </Row>
            </Container>
        )
    }
}

export default MySection