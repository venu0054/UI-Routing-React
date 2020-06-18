import React from "react";
import ReactDOM from "react-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { default as Portfolio } from "./components/portfolio";

const portfolioModel = [
  { img: "React", link: "#" },
  { img: "Angular", link: "#" },
  { img: "java", link: "#" },
  { img: "dotnet", link: "#" },
];

ReactDOM.render(
  <div>
    <Nav />
    <Header title="Technology" subtitle="React - Components" />
    <Portfolio data={portfolioModel} />
    <About />
    <Contact />
    <Footer />
  </div>,
  document.getElementById("react-app")
);