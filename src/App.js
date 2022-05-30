import "./App.css";
import React, { Component } from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import PhotoPage from "./components/PhotoPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <PhotoPage />
        <Footer />
      </div>
    );
  }
}
export default App;
