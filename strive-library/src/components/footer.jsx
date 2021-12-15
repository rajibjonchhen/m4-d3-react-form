
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaYahoo, FaYoutube} from 'react-icons/fa'

const MyFooter = () => {
  return (
    <footer className=" bg-dark text-white  mt-4">
      <Row>
          <Col className="bg-warning p-2 mb-2">
            <div>
                <FaFacebook/> <FaInstagram/> <FaTwitter/>  <FaGoogle/>  <FaYahoo/>  <FaYoutube/>
            </div>
          </Col>
        </Row>
      <Container >
        
        <Row>
          <Col>
          <ul className="list-unstyled">
            <li> Home</li>
            <li> About Us</li>
            <li> Search</li>
          </ul>
          </Col>
          <Col>
          <ul className="list-unstyled">
            <li> Contact Us</li>
            <li> Lisbon</li>
            <li> Portugal</li>
          </ul>
          </Col>
          <Col>
          <ul className="list-unstyled">
            <li> link 1</li>
            <li> Link 2</li>
            <li> Link 3</li>
          </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter;