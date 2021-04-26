import React, { Component } from "react";
import { Row, Card, Button } from "react-bootstrap"
import styles from "./nowShowing.module.css"

class NowShowing extends Component {
  render() {
    console.log(this.props.moive_title)
    const { movie_directed_by, movie_release_date, movie_title } = this.props
    return (
      <>
      <Row className={styles.rowCard}>
        <Card style={{ width: '11rem' }} className={styles.cardOne}>
          <Card.Img className={styles.cardImage} variant="top" src="https://tickitz-itz-itz.netlify.app/assets/gallery-1.png" />
          <Card.Body className={styles.cardBody}>
            <Card.Title>{movie_title}</Card.Title>
            <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
      </Row>
    </>
    );
  }
}

export default NowShowing;

