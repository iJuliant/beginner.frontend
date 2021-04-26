import React, { Component } from "react";
import styles from "./adminpage.module.css";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer"
import Cards from "../../components/learning/cardContainer"
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <NavBar />
      <Container fluid className={styles.bg}>
        <h4 className={styles.title}>Form Movie</h4>
        <Row className={styles.row1}>
          <Row className={styles.upperContainer}>
            <Col md={3}>
              <h5 className={styles.imgPlace}>Image Here</h5>
            </Col>
            <Col md={4}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Movie Name</Form.Label>
                  <Form.Control type="email" placeholder="Mission Impossible" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Director</Form.Label>
                  <Form.Control type="email" placeholder="John Doe" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Release Date</Form.Label>
                  <Form.Control type="email" placeholder="1997/07/25" />
                </Form.Group>
              </Form>
            </Col>
            <Col md={4}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="email" placeholder="Action" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Cast</Form.Label>
                  <Form.Control type="email" placeholder="James Bond" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Row>
                  <Col sm={6}>
                    <Form.Label>Duration Hour</Form.Label>
                    <Form.Control type="email" placeholder="2" />
                  </Col>
                  <Col sm={6}>
                    <Form.Label>Duration Minute</Form.Label>
                    <Form.Control type="email" placeholder="13" />
                  </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Col>
            <Form className={styles.synopsis}>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Synopsis</Form.Label>
              <Form.Control placeholder="Once upon a time ..." />
            </Form.Group>
            </Form>
            <Col md={3}></Col>
            <Col md={4}></Col>
            <Col md={4}>
              <Button className={styles.buttonAction} variant="primary">Reset</Button>{' '}
              <Button className={styles.buttonAction} variant="secondary">Submit</Button>{' '}
            </Col>
          </Row>
        </Row>
        <h4 className={styles.title2}>Data Movie</h4>
        <div className={styles.bgCard}>
         <Cards />
         <Cards />                  
        </div>
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