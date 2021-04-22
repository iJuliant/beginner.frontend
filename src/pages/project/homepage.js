import React, { Component } from "react";
import styles from "./homepage.module.css";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer"
import Cards from "../../components/learning/cardContainer"
import { Container, Row, Col, Button, Form} from 'react-bootstrap';
import Banner from "../../assets/banner-aio.png"

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <NavBar />
      <Container fluid>
        <Row className={styles.row1}>
          <Col>
            <div className={styles.tagline}>
              <h6 className={styles.tagline1}>Nearest Cinema, Newest Movie,</h6>
              <h1 className={styles.tagline2}>Find out now!</h1>
            </div>
          </Col>
          <Col>
            <div className={styles.bannerContainer}>
                <img src={Banner}/>                            
            </div>
          </Col>
        </Row>

        <Row className={styles.row2}>
          <Col md={6}>
            <h5 className={styles.nowShowing}>Now Showing</h5>
          </Col>
          <Col md={6}>
            <h6 className={styles.viewMore}>view all</h6>
          </Col>
          <Cards />
        </Row>

        <Row className={styles.row3}>
          <Col md={6}>
            <h5 className={styles.nowShowing}>Upcoming Movies</h5>
          </Col>
          <Col md={6}>
            <h6 className={styles.viewMore}>view all</h6>
          </Col>
          <div className={styles.buttons}>
          <Button className={styles.button1} variant="primary">April</Button>{' '}
          <Button className={styles.button2} variant="outline-primary">May</Button>{' '}
          <Button className={styles.button2} variant="outline-primary">June</Button>{' '}
          <Button className={styles.button2} variant="outline-primary">July</Button>{' '}
          <Button className={styles.button2} variant="outline-primary">August</Button>{' '}
          <Button className={styles.button2} variant="outline-primary">September</Button>{' '}
          <Button className={styles.button2} variant="outline-primary">October</Button>{' '}
          <Button className={styles.button2} variant="outline-primary">November</Button>{' '}
          <Button className={styles.button2} variant="outline-primary">December</Button>{' '}
          </div>
          <Cards />
          <div className={styles.bottomTextContainer}>
            <h4 className={styles.bottomText1}>Be the vanguard of the</h4>
            <h1 className={styles.bottomText2}>Movie Goers</h1>
            <Form inline className={styles.emailForm}>
              <Form.Label htmlFor="inlineFormInputName2" srOnly>
                Name
              </Form.Label>
              <Form.Control
                className="mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="Type your email"
              />
              <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
                Username
              </Form.Label>
              <Button className="{styles.joinButton}" type="submit" className="mb-2">
                Join Now
              </Button>
            </Form>
            <p className={styles.joinMessage1}>By joining you as a tickitz member,</p>            
            <p className={styles.joinMessage2}>We will always send you the latest update via email.</p>            
          </div>
          <Footer />
        </Row>
        <p className={styles.copyRight}>© 2020 Tickitz. All Rights Reserved.</p>
      </Container>
      </>
    )
  }
}

export default Home;