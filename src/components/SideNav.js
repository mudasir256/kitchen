import React from "react";
import './sidenav.css'
import Home from "../components/Home";
import { Link } from "react-router-dom";
import SideNavData from "./SideNavData";
function SideNav(props) {
    return <div className="main">
        <div className="side-nav">
        <ul className="side-button">
        {SideNavData.map((item,index) => {
            return(
                <Link className="link-button" to={item.link}>  <li key={index} className="list-button" >{item.title}</li></Link>
            );
        })};
        </ul>
        
    </div>
     <div>
     {/* <Home/> */}
     </div>
    </div>
    
}
export default SideNav;