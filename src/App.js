import React from "react";
import "./app.css";
import { Article, Navbar, Brand, CTA } from "./components";
import {
  Footer,
  Header,
  Possibilty,
  Feature,
  WhatGPT3,
  Blog,
} from "./containers";
import Features from "./containers/features/Features";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilty />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
