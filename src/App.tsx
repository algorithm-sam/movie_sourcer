import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Hero } from "./components";
import { Categories } from "./components";

function App() {
  const categories = [
    { name: "Popular" },
    { name: "Latest" },
    { name: "Upcoming" },
  ];
  return (
    <div className="App">
      <NavBar />
      <Hero />
      {categories.map((cat, index) => (
        <Categories category={cat} key={index} />
      ))}
    </div>
  );
}

export default App;
