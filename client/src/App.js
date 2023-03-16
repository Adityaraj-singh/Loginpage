import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((resp) => {
        resp.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("----------------");
        console.log(err);
      });
  }, []);
  return <div className="App">Hellaoo</div>;
}

export default App;
