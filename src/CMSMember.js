import React,{useState} from "react";
import "./cmsmember.css"
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import { HiChatAlt } from "react-icons/hi";
import Card from "./components/Card";
import RecipeDetail from "./RecipeDetail";


const CMSMember = (DETAILS) => {
 
    const [isShown, setIsShown] = useState(true);
console.log(DETAILS)
    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
      setIsShownRecipe(false);
      // 👇️ or simply set it to true
    //   setIsShown(false);
    };

    const [isShownRecipe, setIsShownRecipe] = useState(false);

    const handleClickRecipe = event => {
      // 👇️ toggle shown state
      setIsShownRecipe(current => !current);
      setIsShown(false);
      // 👇️ or simply set it to true
    //   setIsShown(false);
    };

  return (
    <div >
      <Nav />
      <div className="recipes">
        <SideNav />
        <div className="cms-main">
            <div className="two-btn">
                <button className="Chef-Details" onClick={handleClick}>Chef Details</button>
               <div><HiChatAlt className="icon-cms" /></div>
                <button className="Chef-Details" onClick={handleClickRecipe} >Recipe Details</button>
            </div>
            <div className="cms-cards">
           
            {isShown && <Card/>}
           
            {isShownRecipe && <RecipeDetail/>}
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default CMSMember;