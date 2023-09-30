import React from 'react'
import Nav from './components/Nav'
import SideNav from './components/SideNav'
import './appuser.css'
import { useSelector } from "react-redux";




const AppUser = () => {
  const message = useSelector((state) => state.data.message);
console.log("message",message);

  return (
    <div>
        <div >
      <Nav />
      <div className="recipes">
        <SideNav />
       <div><h2 className='header-app-user'>App User</h2></div> 
        <div className="wrap-app-user"  >
        <div  className="main-app-user">
      <p className="app-user-name">{message.name}</p>
      <p className="app-user-detail">{message.detail}</p>
      <img className="app-user-img" src={message.image} alt={message.name} />
        </div>
        </div>
      </div>
    </div>
    </div>

  )

        };
export default AppUser;



