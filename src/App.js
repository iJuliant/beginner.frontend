import React, { Component } from "react"
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom"
import BasicReact from "./pages/learning/basic-react/basic-react"
import BasicHome from "./pages/learning/homePage/home"
import BasicMovieDetail from "./pages/learning/movieDetail/movieDetail"
import Home from "./pages/project/homepage"
import MovieDetails from "./pages/project/moviedetails"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/learning/basic-react" exact component={BasicReact} />
          <Route path="/learning/basic-home" exact component={BasicHome} />
          <Route path="/learning/basic-movieDetail/:id" exact component={BasicMovieDetail} />
          <Route path="/project/home" exact component={Home}/>
          <Route path="/project/moviedetails" exact component={MovieDetails}/>
        </Switch>
      </Router>
    )
  }
}

export default App
