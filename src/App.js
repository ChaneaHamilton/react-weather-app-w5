import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <p>
            This project was coded by {""}
            <a
              href="https://github.com/ChaneaHamilton"
              target="_blank"
              rel="noreferrer"
            >
              Chanea Hamilton
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/ChaneaHamilton/react-weather-app-w5"
              target="_blank"
              rel="noreferrer"
            >
              open sourced on Github
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
