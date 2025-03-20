import React from "react";
import ReactDOM from "react-dom/client";

//lets see how we use react to do the same thing.
//this createElement takes 3 arguments.
//1. type of element
//2. 2nd argument is the place where we use to give attributes to the tags.
// suppose if we want to give it a id , we will write here {id: 'main-heading'}
//3. third argument will take whatever we have to put inside h1 tag.


const heading = React.createElement('h1', {id:'heading',xyz:"abc"}, 'Namaste React');
console.log(heading,typeof(heading)); // its an object.
// this heading is a react element basically a javascript object not an html tag.
const root = ReactDOM.createRoot(document.getElementById('root'));
//react need to have a root where it can do all the DOM manipulation
//now we can render heading inside this root
root.render(heading);
//this will render the heading inside the root element by converting heading object to html tag and render inside the root.


//Now suppose we want to have something like this.
{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */}

// How we can create this type of structure in react

//how to create nested elements 

//so first lets create parent
// const parent = React.createElement(
//     'div',
//     { id: 'parent' },
//     React.createElement('div', { id: 'child' },
//         React.createElement('h1', {}, 'I am h1 tag')
//     )
// );

// root.render(parent);