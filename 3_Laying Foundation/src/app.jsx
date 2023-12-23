// src/App.jsx
import React from 'react';
import { Header } from './Header';
const reactElem = React.createElement("div",{id:"title"},[
   React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"heading1"},"This is heading1 of react createElem"),
    React.createElement("h2",{id:"heading2"},"This is heading2")
   ])
]);

// JSX Element 
const JsxComponent = () => (
    <div id='title'>
        <h1>This is heading1 of JSX</h1>
        <h2>This is heading2</h2>
    </div>
);

const App = () => {
  return (
    <div>
      {/* {reactElem}
      <JsxComponent /> */}
      <Header/>
    </div>
  );
};

export default App;
