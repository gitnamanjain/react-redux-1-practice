import React from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
