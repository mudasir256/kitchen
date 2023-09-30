import Nav from "./Nav";
import SideNav from "./SideNav";
import './recipes.css';
import { HiChatAlt } from "react-icons/hi";
import OurRecipes from "./OurRecipes";

function Recipes() {
  return (
    <div >
      <Nav />
      <div className="recipes">
        <SideNav />

        <div className="recipes-home" >
          <div className="recipe">
            <div className="input">Recipes</div>
            <div className="input">Ingredients</div>
          </div>
          <div>
            <div className="dropdon">
              <div className="dropdown">
                <button className="dropbtn">Germany</button>
                <div className="dropdown-content">
                  <a href="#">Italy</a>
                  <a href="#">France</a>
                  <a href="#">Spain</a>
                </div>
              </div>
              <HiChatAlt className="icon" />
            </div>
            <div className="recipe-main0" >
              <div className="recipe-main" >
                <OurRecipes/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
