import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap"
import styles from "./cardContainer.css"

class CardContainer extends Component {
  constructor() {
    super()
  }
  render() {
    return(
      <>
      <div className="cardContainer">
        <Col>
          <Card className={styles.movieCards}>
          <Card.Img variant="top" src="https://tickitz-itz-itz.netlify.app/assets/gallery-3.png" />
          </Card>
        </Col>

        <Col>
          <Card className={styles.movieCards}>
          <Card.Img variant="top" src="https://tickitz-itz-itz.netlify.app/assets/gallery-1.png" />
          </Card>
        </Col>
        <Col>
          <Card className={styles.movieCards}>
          <Card.Img variant="top" src="https://tickitz-itz-itz.netlify.app/assets/gallery-1.png" />
          </Card>
        </Col>        
        
        <Col>
          <Card className={styles.movieCards}>
          <Card.Img variant="top" src="https://tickitz-itz-itz.netlify.app/assets/gallery-1.png" />
          </Card>
        </Col>
        
        <Col>
          <Card className={styles.movieCards}>
          <Card.Img variant="top" src="https://tickitz-itz-itz.netlify.app/assets/gallery-1.png" />
          </Card>
        </Col>
        
        <Col>
          <Card className={styles.movieCards}>
          <Card.Img variant="top" src="https://tickitz-itz-itz.netlify.app/assets/gallery-1.png" />
          </Card>
        </Col>
        
        <Col>
          <Card className={styles.movieCards}>
          <Card.Img variant="top" src="https://tickitz-itz-itz.netlify.app/assets/gallery-1.png" />
          </Card>
        </Col>
      
        </div>
      </>
    )
  }
}

export default CardContainer;