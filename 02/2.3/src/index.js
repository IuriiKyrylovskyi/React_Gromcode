import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElem = document.querySelector("#root");

const seconds = new Date().getSeconds();

const counterElem = <div className="seconds">{seconds}</div>;

ReactDOM.render(counterElem, rootElem);
