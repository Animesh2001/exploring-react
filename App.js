import React from "react";
import ReactDOM from "react-dom/client";

//Just like DOM element in Javascript
// We have react element in React

const heading = React.createElement("h1",{id:"heading"},"Namaste React 🚀");
// Now its an object not html element
console.log("heading", heading)

//This is how we can create h1 element using JSX
const jsxHeading = <h1 id="heading"> Namaste react using JSX 🚀</h1>
console.log("jsx heading",jsxHeading)

//when we render this element to the DOM it becomes the html.
const root = ReactDOM.createRoot(document.getElementById("root"));
// whatever will happen inside this root will be rendered to the DOM

//React functional component
//Its a normal javascript function which returns some JSX element
// const HeadingComponent = () => (
//     <div id="container">
//          <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// )


const TitleComponent = () =>(
    <h1 className="head">
        Namaste React using JSX
    </h1>
);

const number = 100000;


//suppose if we want to render this title component , inside our Heading Component.
//this is also called as Component Composition.
const HeadingComponent = () => (
    <div id="container">
        {jsxHeading}
         <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)


// root.render(jsxHeading);
//it will replace whatever is present inside the root.

// if we want to render our functional component , how we can render it.
root.render(<HeadingComponent/>)





