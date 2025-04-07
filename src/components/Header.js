import { CDN_URL } from "../utils/constant";

const Header = () =>{
    //header will have logo and nav item
    return(
        <div className="header">

            {/* logo div */}
            <div className="logo-container">
                <img className="logo" src= {CDN_URL}/>

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

export default Header;