import { withRouter } from 'react-router-dom';
import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Cards extends Component {
  handleMovieDetail = (id) => {
    //cara 1 = biasanya digunakan untuk handling pagination, sort, search
    // this.props.history.push(`/learning/basic-movieDetail?movieId=${id}`)
    //cara 2 = jika data tidak mau ditampilkan di url
    // this.props.history.push(`/learning/basic-movieDetail`, {data: id})
    // cara 3 = menggunakan end point seperti di backend. bisa digunakan untuk detail product / data
    this.props.history.push(`/learning/basic-movieDetail/${id}`)
  }

  render() {
    console.log(this.props);
    const {
      movie_id,
      movie_name,
      movie_category,
      movie_release_date,
    } = this.props.data;
    const { handleUpdate, handleDelete, data } = this.props;
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
          />
          <Card.Body>
            <Card.Title>{movie_name}</Card.Title>
            <Card.Text>{movie_category}</Card.Text>
            <p>{movie_release_date}</p>
            <Button variant="primary" onClick={() => this.handleMovieDetail(movie_id)}>
              Detail
            </Button>
            <Button variant="primary" onClick={() => handleUpdate(data)}>
              Update
            </Button>
            <Button variant="danger" onClick={() => handleDelete(movie_id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default withRouter(Cards);
