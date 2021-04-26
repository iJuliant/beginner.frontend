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
import Payment from "./pages/project/paymentpage"
import Admin from "./pages/project/adminpage"
import Order from "./pages/project/orderpage"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/learning/basic-react" exact component={BasicReact} />
          <Route path="/learning/basic-home" exact component={BasicHome} />
          <Route path="/learning/basic-movieDetail/:id" exact component={BasicMovieDetail} />
          <Route path="/project/home" exact component={Home}/>
          <Route path="/project/moviedetails/:id" exact component={MovieDetails}/>
          <Route path="/project/payment" exact component={Payment}/>
          <Route path="/project/admin" exact component={Admin}/>
          <Route path="/project/order" exact component={Order}/>
        </Switch>
      </Router>
    )
  }
}

export default App
