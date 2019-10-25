import React from "react";
import ReactDOM from "react-dom";
import data from "./jsonData";

import "./styles.css";

const trimData = str => {
  return str.trim();
};
const RenderTable = () => {
  let tableRes = "";
  Object.keys(data).forEach(key => {
    tableRes += `<tr><td>${trimData(key)}</td> <td>${trimData(
      data[key]
    )}</td></tr>`;
  });
  return tableRes;
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <hr />

      <br />
      <table id="tableId" border="1">
        <thead>
          <tr>
            <th>Flag Name</th>
            <th>Flag Key</th>
          </tr>
        </thead>
        <tbody dangerouslySetInnerHTML={{ __html: RenderTable() }} />
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
