
## With pure react
```js
const heading = React.createElement(
    "h1",
    {id:"heading},
    "Pranaam React
);

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

## With JSX
> JSX => Babel transpiles it => React.createElement => ReactElement - JS object - HTMLElement(render) 
```js
const jsxHeading = <h1 id="heading">Pranaam from jsx
</h1>
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
```


### JSX is not a part of react
> Facebook devs built this up in order to make react's syntax more readable 
> JSX has `html-like` or `xml-like` syntax but it is not html 
> JS engine understands any peiece of JS code /es6 JSX is not pure javascript how does it manage to be compatible with browsers? `Parcel to the rescue!` JSX code is transpiled before it reaches to the JS engine
> Transpile : converting the ocde that browsers can understand
> Who is transpiling the code ? : Parcel hmmm bt parcel is the manager he assigns this works to Babel.

## React Components:
- Class Component
- Functional Component

React functional component -  a normal JS function which returns some JSX element.

### Component composition => Composing two components in to one another 

*Component Composition*
```js

import React from 'react';
import ReactDom from 'react-dom/client;

const Title = () => (
    <h1 id="heading">Pranaam React</h1>
)

const newCompo = () =>(
    <div>
    //These are the same thing : 
    {Title()}
    <Title></Title>
    </Title>
    <h1>This is some other component</h1>
    </div>
)

const root = reactDOM.createRoot(document.getelementById("root));

root.render(<newCompo/>);


```
### References
- https://babeljs.io/