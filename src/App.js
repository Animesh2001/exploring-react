import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"


// whenever we want to give inline css, we can give it via creating a js object.





//this resObj is a javascript object





const AppLayout = () =>{
    return (
    <div className="app">
       <Header/>
       <Body/>

    </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)





