// import { render } from '@testing-library/react';
import { Component } from 'react'
import MyCarousel from "./Carousel";
import {Container, Row, Col} from 'react-bootstrap'
import books1 from '../components/data/fantasy.json'
import books2 from '../components/data/history.json'
import books3 from '../components/data/horror.json'
import books4 from '../components/data/romance.json'
import books5 from '../components/data/scifi.json'


class MyMain extends Component {
    state ={

    }
    render(){
        return(
            <Container>
                <Row>
                <Col xs={12} md={6} lg={6} className="text-center">
                    <MyCarousel books={books1}/>
                </Col>



                <Col xs={12} md={6} lg={6} className="text-center">
                    <Row>
                    <Col xs={12} md={6} lg={6} className="text-center">
                    <MyCarousel books={books2}/>
                    </Col>
                    <Col xs={12} md={6} lg={6} className="text-center">
                    <MyCarousel books={books3}/>
                    </Col>
                    <Col xs={12} md={6} lg={6} className="text-center">
                    <MyCarousel books={books4}/>
                    </Col>
                    <Col xs={12} md={6} lg={6} className="text-center">
                    <MyCarousel books={books5}/>
                    </Col>
                    </Row>  
                </Col>

                </Row>
            </Container>
        )
    }
}

export default MyMain