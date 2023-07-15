import "./App.scss";
import React from "react";

import { About, Footer, Header, Gallery, Event } from "./container/index";

import { Navbar } from "./components/index";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Event />
      {/* <Gallery /> */}
      <Footer />
    </div>
  );
}

export default App;
