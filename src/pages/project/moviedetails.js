import React, { Component } from "react";
import styles from "./moviedetails.module.css";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer"
import { Container, Row, Col, Button, Form, Dropdown} from 'react-bootstrap';
import qs from "query-string";
import MovieDetail from "../learning/movieDetail/movieDetail";
import axiosApiIntances from "../../utils/axios"


class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formm: {
        movieName: '',
        movieCategory: '',
        movieReleaseDate: ''
      },
      data: [],
      dataByMonth: [],
      pagination: {},
      page: 1,
      limit: 3
    }
  }

  componentDidMount() {
    let path = this.props.location.pathname
    path = path.split('/:')
    path = path[1].substring(0, path[1].length - 1)
    this.getData(path)
  }

  getData = (path) => {
    console.log("getData!");
    // let path = this.props.location.pathname
    // console.log(path)
    // path = path[1].substring(0, path[1].length - 1)
    axiosApiIntances
      .get(`movie/${path}`)
      .then((res) => {
      console.log(res);
      // console.log(path)
      this.setState({ data: res.data.data, pagination: res.data.pagination })
      console.log(this.state.data[0])
    })
      .catch((err) => {
      console.log(err);
    })
  };


  render() {
    return (
      <>
      <NavBar />
      <Container fluid>
      {this.state.data.map((item, index) => {
            return (
              <Row className={styles.row1}>
              <Col md={4}>
                <div className={styles.cardContainer}>
                  <img className={styles.movieImage} src={this.state.data[0].movie_cover}/>
                </div>
              </Col>
              <Col className={styles.left} md={8}>
                <h3 className={styles.movieTitle}>{this.state.data[0].movie_title}</h3>
                <h5 className={styles.category}>{this.state.data[0].movie_category}</h5>
                <Row className={styles.details}>
                  <Col sm={4}>            
                    <p className={styles.detailHead}>Release Date</p>
                    <p className={styles.detailElement}>{this.state.data[0].movie_release_date.slice(0, 10)}</p>  
                    <p className={styles.detailHead}>Duration</p>
                    <p className={styles.detailElement}>2 Hours 45 Minutes</p>
                  </Col>
                  <Col sm={8}>
                    <p className={styles.detailHead}>Directed By</p>
                    <p className={styles.detailElement}>{this.state.data[0].movie_directed_by}</p>
                    <p className={styles.detailHead}>Casts</p>
                    <p className={styles.detailElement}>{this.state.data[0].movie_casts}</p>
                  </Col>            
                </Row>
                <hr />
                <h5 className={styles.synopsisHead}>Synopsis</h5>
                <p className={styles.synopsisBody}>{this.state.data[0].movie_synopsis}</p>
              </Col>
            </Row>
            )
          })}



        <Row className={styles.row2}>
          <h4 className={styles.showTimes}>Showtimes and Tickets</h4>
          <br/>
        </Row>

        <Row className={styles.row2}>
        <Col className={styles.dropdown2}>
          <Form.Group>            
            <Form.Control as="select" size="md">
              <option>25/07/2020</option>
            </Form.Control>
          </Form.Group>
          </Col>

          <Col className={styles.dropdown2}>
          <Form.Group>            
            <Form.Control as="select" size="md">
              <option>Select Location</option>
            </Form.Control>
          </Form.Group>
          </Col>
        </Row>

        <Row className={styles.row2}>
            <Col><hr /></Col>
            <Col className={styles.viewMore}>View More</Col>
            <Col><hr /></Col>
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

export default MovieDetails;