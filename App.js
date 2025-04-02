import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    //header will have logo and nav item
    return(
        <div className="header">

            {/* logo div */}
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>

            </div>

            {/* Nav item div */}
            <div className="nav-items">
                {/* Nac item is nothing but a collection of list */}
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


// whenever we want to give inline css, we can give it via creating a js object.



const RestaurantCard = (props) =>{ 

    const {resData} = props;

    const {
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime
    } = resData?.data;

    console.log(props)
    return (
        <div className="res-card" style={{
            backgroundColor: "f0f0f0",
        }}> 
        <img 
        className="res-logo"
        alt="res-logo" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBzRlrQuxVDoz_eyWvpQ12N8vSQcpkKxQ8Q&s" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo/100} For Two</h4>
        <h4>{deliveryTime} minutes</h4>
        </div>  
    )
}

//this resObj is a javascript object
const resObj = {
    data:{
        name:"KFC",
        costForTwo: 40000,
        costForTwoString: "400 FOR TWO",
        avgRating:"3.8",
        cuisines:["Burgers","Biryani","American","Snacks","Fast Food"],
        deliveryTime:36
    }
}


const Body = () =>{
    return (
        <div className="body">
            {/* search bar */}
            <div className="search">Search</div>

            {/* Restaurant Container */}
            <div className="rest-container">
                {/*  it will contain lot of restaurant cards */}
                <RestaurantCard 
                    resData={resObj}
                />
                
            </div>
        </div>
    )
}

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





