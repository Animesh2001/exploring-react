import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () =>{

    //Local State Variable - Super Powerful Variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resObj);
 ``
    //Normal JS Variable
    // let listOfRestaurantsJS = ;
    return (
        <div className="body">
            {/* search bar */}
            {/* <div className="search">Search</div> */}

            {/* lets add a filter button over here */}
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    //filter logic over here
                    const filteredList = listOfRestaurants.filter((res) => res.avgRating > 4);
                    setListOfRestaurants(filteredList);
                    console.log("listOfRestaurants",listOfRestaurants); 
                    }}>Top Rated Restaurant</button>
            </div>

            {/* Restaurant Container */}
            <div className="rest-container">
                {/*  it will contain lot of restaurant cards */}
                {
                    listOfRestaurants.map((restaurant)=>(
                        <RestaurantCard key={restaurant.id} resData={restaurant} />
                    ))
                }                
            </div>
        </div>
    )
}

export default Body;