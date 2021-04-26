import React, { Component } from "react";
import { Container, Row, Col, Button, Form, Dropdown, Image} from "react-bootstrap";
import styles from "./orderpage.module.css";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer"
import ImgCinema from "../../assets/hiflix.png"

class OrderPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <NavBar />
        <Container fluid className={styles.contParent}>

            <Container fluid className={styles.page}>
              <Row className={styles.row1}>
                <Col md={8} className={styles.colRight}>
                  <h5 className={styles.title1}>Movie Selected</h5>
                  <Row className={styles.topInnerRow}>
                    <Col sm={9}><h5 className={styles.movieTitle}>Spider-Man : Homecoming</h5></Col>
                    <Col sm={3}>
                      <Button variant="light">Change Movie</Button>{' '}
                    </Col>
                  </Row>
                  <h5 className={styles.title1}>Choose Your Seat</h5>
                  <Row className={styles.topInnerRow}>
                    <Col sm={9}><h5 className={styles.movieTitle}>Spider-Man : Homecoming</h5></Col>
                    <Col sm={3}>
                      <Button variant="light">Change Movie</Button>{' '}
                    </Col>
                  </Row>
                </Col>
                <Col md={4} className={styles.colLeft}>
                  <h5 className={styles.title1}>Order Info</h5>
                  <div className={styles.orderCard}>
                    <Image src={ImgCinema} className={styles.cardContent}/>
                    <h5 className={styles.cardContent}>Cine One 21 Cinema</h5>
                    <Row>
                      <Col>
                        <p className={styles.insideCardInfoL}>Movie Selected</p>
                        <p className={styles.insideCardInfoL}>Tuesday, 07 July 2020</p>
                        <p className={styles.insideCardInfoL}>One Ticket Price</p>
                        <p className={styles.insideCardInfoL}>Chosen Seats</p>
                      </Col>
                      <Col>
                        <p className={styles.insideCardInfoR}>SpiderMan : Homecoming</p>
                        <p className={styles.insideCardInfoR}>02:00 PM</p>
                        <p className={styles.insideCardInfoR}>$ 35</p>
                        <p className={styles.insideCardInfoR}>F1, F2</p>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col>
                        <h6 className={styles.insideCardInfoL}>Total Payment</h6>
                      </Col>
                      <Col>
                        <h6 className={styles.insideCardInfoR}>$ 70</h6>
                      </Col>
                    </Row>
                  </div>
                </Col>
                  
              </Row>
              
            </Container>
            {/* Footer row */}
          <Row>
            <Footer />
          </Row>
        </Container>
      </>
    )
  }
}

export default OrderPage;