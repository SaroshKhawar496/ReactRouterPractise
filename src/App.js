import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* loading routes.
            react router passes props to Route components 
            automatically. like the history. It doesn't pass to non-Route componnets
             unless you wrap them in HOC
           */}

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* Route for individual post */}
          <Route path="/:post_id" component={Post}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
