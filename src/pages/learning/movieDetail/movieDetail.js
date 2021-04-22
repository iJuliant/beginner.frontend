import React, { Component } from "react";
import styles from "./movieDetail.module.css";
import NavBar from "../../../components/navbar/NavBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Seat from "../../../components/learning/seat/seat"
import qs from "query-string"

class MovieDetail extends Component {
  constructor() {
    super()
    this.state = {
      selectedSeat: [],
      reservedSeat: ["A1", "A7", "A14"],
    }
  }

  componentDidMount() {
    // console.log(qs.parse(this.props.location.search))
    // const urlParams = qs.parse(this.props.location.search)
    // console.log(urlParams)
    console.log(this.props.match.params)
    // proses get data movie by id
    // proses get data premiere by id
  }

  bookingSeat = (seat) => {
    this.setState({
      selectedSeat: [...this.state.selectedSeat, seat]
    })
  }

  booking = () => {
    console.log("booking")
    localStorage.setItem("bookingSeat", JSON.stringify(this.state.selectedSeat))
  }

  render() {
    const {reservedSeat, selectedSeat} = this.state
    return (
      <>
        <Container className={styles.containerCenter}>
          <h1 className={`${styles.headingColor} mr-auto`}>
            MovieDetail Page !
          </h1>
          <NavBar />
          <hr />
          <Row>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Seat 
                    seatAlphabet="A" 
                    reserved={reservedSeat} 
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                    <Seat seatAlphabet="B" 
                    reserved={reservedSeat} 
                    selected={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                </Card.Body>
                <Card.Body>
                  <Button variant="primary" size="md" block onClick={this.booking}>
                    Booking
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MovieDetail;

