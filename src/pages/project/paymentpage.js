import React, { Component } from "react";
import styles from "./paymentpage.module.css";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer"
import { Container, Row, Col, Button, Form, Alert} from 'react-bootstrap';


class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <NavBar />
      <Container fluid className={styles.bg}>
        <Row className={styles.row1}>
          <Col md={7} className={styles.orderDetails}>
            <Row>
              <Col className={styles.innerLeft}>Date & Time</Col>
              <Col className={styles.innerRight}>Tuesday, July 25 2020</Col>        
            </Row>
            <Row>
              <Col className={styles.innerLeft}>Movie Title</Col>
              <Col className={styles.innerRight}>Spider-Man : Homecoming</Col>        
            </Row>
            <Row>
              <Col className={styles.innerLeft}>Cinema Name</Col>
              <Col className={styles.innerRight}>CineOne 21</Col>        
            </Row>
            <Row>
              <Col className={styles.innerLeft}>Number of Tickets</Col>
              <Col className={styles.innerRight}>4</Col>        
            </Row>
            <Row>
              <Col className={styles.innerLeft}>Total Payment</Col>
              <Col className={styles.innerRight}>$ 120</Col>        
            </Row>
          </Col>
          <Col className={styles.orderForm}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="email" placeholder="James Bond" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="james.bond@mail.co.uk" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="email" placeholder="+62" />
              </Form.Group>
              {/* <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button variant="primary" type="submit" size="md" block>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        
        <Row className={styles.row1}>
          <Col md={7} className={styles.orderDetails}>
            <Row className={styles.paymentRow1}>
              <Col><h4>G Pay</h4></Col>
              <Col><h4>Visa</h4></Col>
              <Col><h4>GoPay</h4></Col>
              <Col><h4>PayPal</h4></Col>
            </Row>
            <Row className={styles.paymentRow2}>
              <Col><h4>Dana</h4></Col>
              <Col><h4>BCA</h4></Col>
              <Col><h4>BRI</h4></Col>
              <Col><h4>OVO</h4></Col>
            </Row>
            <Row>
              <Col sm={5}><hr /></Col>
              <Col className={styles.divider}><p>Or</p></Col>
              <Col sm={5}><hr /></Col>
            </Row>
            <Row className={styles.paymentRow2}>
            <Col sm={2}></Col>              
            <Col><p className={styles.anotherOpt}>Pay via cash. <span className={styles.anotherOpt1}>See how it works</span></p></Col>              
            <Col sm={2}></Col>
            </Row>
          </Col>
          <Col className={styles.orderForm2}>
          </Col>
        </Row>

        <Row className={styles.row1}>
          <Col md={7} className={styles.orderDetailsX}>
            <Col sm={4}>
              <Button variant="primary" size="md" block>
                Previous Step
              </Button>{' '}
            </Col>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
              <Button variant="secondary" size="md" block>
                Pay Your Order
              </Button>
            </Col>
          </Col>
          <Col className={styles.orderForm2}>
          </Col>
        </Row>

        <Row className={styles.row3}>
          <Footer />
        </Row>
        <p className={styles.copyRight}>© 2020 Tickitz. All Rights Reserved.</p>
      </Container>
      </>
    )
  }
}

export default Home;