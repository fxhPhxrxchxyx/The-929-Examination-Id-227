import "./App.css";
import React, { Component } from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import PhotoPage from "./components/PhotoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/photo" element={<PhotoPage />} />
            {/* <Redirect to="/home" /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
        {/* <Home />
        <About />
        <PhotoPage /> */}
      </div>
    );
  }
}
export default App;
