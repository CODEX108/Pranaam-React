//create the following structure using the createElement attribute
{/* <div id="root">
    <div id="parent">
      <div class="child1">
        <h1>this is h1</h1>
        <h2>this is h2</h2>
      </div>
      <div class="child2">
        <h3>this is h3</h3>
        <h4>this is h4</h4>
      </div>
      </div>
    </div> */}


const parent = React.createElement("div", { id: "parent" }, [React.createElement('div', { id: "child1" },
    [React.createElement("h1", { id: "heading1" }, "This is h1"),
    React.createElement("h1", { id: "heading2" }, "This is h2")]
),

React.createElement('div', { id: "child2" },
    [React.createElement("h1", { id: "heading3" }, "This is h3"),
    React.createElement("h1", { id: "heading4" }, "This is h4")]
),

]);

//creating an h1 element inside react
// (<tagname>,<an object: used to give attributed to the class>, <the content inside the tag>)
// const heading = React.createElement("h1", { id: "heading" }, "🪔Namaste World from React 🪔");
//creating a root => this root is the actual div
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering the root into the DOM
root.render(parent);