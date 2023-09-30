import React from "react";
import profile from '../assets/profile.jpeg';
import arrow from '../assets/arrow.png';
import '../components/nav.css'
function Nav() {
    return <div className="">
<nav className="nav">
    <img className="profile" src={profile} alt="" />
    <img className="arrow" src={arrow} alt="" />
    {/* <p className="arrow">⌄</p> */}
</nav>

    </div>
}
export default Nav;