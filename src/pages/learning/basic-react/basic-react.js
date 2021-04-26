import React, { Component } from "react";
import styles from "./basic-react.module.css"
import "./basic-react.module.css"
import {Link} from "react-router-dom"
import {Button, Container} from "react-bootstrap"
import NavBar from "../../../components/navbar/NavBar"

class BasicReact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Juliant",
      search: "",
      isShow: false,
      data: [
        {
          movie_id: 1,
          movie_name: "Snow Drop"
        },
        {
          movie_id: 2,
          movie_name: "Jackie Chan"
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log("Component Did Mount Running")
    // usually used for get data
  }

  componentDidUpdate() {
    console.log("Component Did Update Running")
  }

  handleClick() {
    console.log("Declaration Function!")
    console.log("This is: ", this)
    // needs additional declaration, ref: line 10
  }

  handleClick2 = () => {
    console.log("Arrow Function!")
    console.log("This is: ", this)
    this.setState({name: "Bingo"})
    // no need additional declaration
  }

  handleClick3 = (id) => {
    console.log("Passing Args!")
    console.log("id :", id)
    // no need additional declaration
  }

  changeText = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleParams = (id, event) => {
    console.log("Go to Movie Detail Page")
    // console.log(this.props)
    this.props.history.push(`learning/basic-movieDetail?movieId=${id}`)
  }

  render() {
    const { name, search } = this.state
    console.log(this.state)
    return (
      <>
      <Container fluid className={styles.navContainer}>
      <NavBar />
      </Container>
      
      <Container className={styles.containerCenter}>
      <h1>Basic React</h1>
       <h1>Hello {name} !</h1>
       <hr />
       <h3>Event</h3>
       <button onClick={this.handleClick}>Click 1!</button>
       <button onClick={this.handleClick2}>Click 2!</button>
       <button onClick={() => this.handleClick3(3)}>Click 3!</button>
       <h6>Search key : {search}</h6>
       <input placeholder="Search ..." name="search" onChange={(event) => this.changeText(event)}/>
       <Button variant="primary">Primary</Button>
       <hr />
       <h3>Link & URL Params</h3>
       <a href="/learning/basic-home">To Home With Anchor</a><br />
       <Link to="/learning/basic-home">To Home With Link</Link><br />
       <Button variant="primary" onClick={(event) => this.handleParams(1, event)}>Detail</Button>
       <hr />
       <h3>Styling in React</h3>
       <h2 className="header">Style With Basic React.css</h2>
       <h2 className={styles.header}>Style With Basic React.module.css</h2>
       <hr />
       <h3>Conditional</h3>
        {
          this.state.isShow ? <h5>Show is True</h5> : <h5>Show is False</h5>
        }
       <hr />
       <h3>Looping / Mapping</h3>
        {
          this.state.data.map((item, index) => {
            return <li key={index}>{item.movie_name}</li>
          })
        }
      </Container>
      </>
    )
  }
}

export default BasicReact
