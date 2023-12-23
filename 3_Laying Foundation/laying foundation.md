
## With pure react
```js
const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Pranaam React"
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

const root = reactDOM.createRoot(document.getelementById("root"));

root.render(<newCompo/>);

```

### Assignment
● What is JSX?
● Superpowers of JSX
● Role of type attribute in script tag? What options can I use there?
● ```{TitleComponent}``` vs ```{<TitleComponent/>}``` vs
```{<TitleComponent></TitleComponent>}``` in JSX

> ### Role of `type` Attribute in `<script>` Tag:

The `type` attribute in the `<script>` tag specifies the scripting language used in the script. However, for JavaScript, the `type` attribute is not required. In modern HTML, you can omit the `type` attribute for JavaScript, and the browser will assume it's JavaScript by default.

For example:

```html
<script>
  // JavaScript code here
</script>
```

Or without the `type` attribute:

```html
<script>
  // JavaScript code here
</script>
```

In HTML5, the default `type` for the `<script>` tag is `"text/javascript"`. If you are using JavaScript, it's common to see the `type` attribute omitted.

### JSX: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}`:

In JSX, the three expressions you provided have slightly different meanings:

1. **`{TitleComponent}`:**
   - This assumes that `TitleComponent` is a variable holding a React component. It's used to include the component as a child in the JSX structure.

   Example:
   ```jsx
   const TitleComponent = <h1>Title Component</h1>;

   const App = () => (
     <div>
       {TitleComponent}
       <p>Other content</p>
     </div>
   );
   ```

2. **`{<TitleComponent/>}`:**
   - This directly renders the `TitleComponent` React component as a self-closing tag. It's a concise way to include the component without having to separately declare it as a variable.

   Example:
   ```jsx
   const App = () => (
     <div>
       {<TitleComponent/>}
       <p>Other content</p>
     </div>
   );
   ```

3. **`{<TitleComponent></TitleComponent>}`:**
   - This is another way to directly include the `TitleComponent` in the JSX, but with an explicit opening and closing tag.

   Example:
   ```jsx
   const App = () => (
     <div>
       {<TitleComponent></TitleComponent>}
       <p>Other content</p>
     </div>
   );
   ```

In practice, the choice between these forms depends on your preference and the specific use case. The second form `{<TitleComponent/>}` is often preferred when you want to include the component directly without introducing an extra variable. The third form `{<TitleComponent></TitleComponent>}` is less common and typically not necessary in most cases. The first form `{TitleComponent}` is useful when you already have the component stored in a variable.

Coding Assignment:
● Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”) <br>
○ Create the same element using JSX  <br>
○ Create a functional component of the same with JSX <br>
○ Pass attributes into the tag in JSX <br>
○ Composition of Component(Add a component inside another) <br>
○ {TitleComponent} vs {<TitleComponent/>} vs ```{<TitleComponent></TitleComponent>} ```in JSX <br>
● Create a Header Component from scratch using Functional Components with JSX <br>
○ Add a Logo on left  <br>
○ Add a search bar in middle <br>
○ Add User icon on right <br>


### References
- https://babeljs.io/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type
