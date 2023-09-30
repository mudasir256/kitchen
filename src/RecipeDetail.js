
import React, { useState } from 'react';
import DummyRecipe from './DummyRecipe';
import './recipedetail.css';
import { useDispatch } from "react-redux";
import { setMessage } from "./store/chefSlice";


const RecipeDetail = () => {
  const dispatch = useDispatch();
  const [detail, setDetail] = useState(DummyRecipe);
  const [selectedRecipeDetailIndex, setSelectedRecipeDetailIndex] = useState(null);

  const handleClickRecipeDetail = (index) => {
    setSelectedRecipeDetailIndex(index);
    dispatch(setMessage(detail[index]));
  };


  const renderChef = () => {
    return detail.map((item, index) => (
      <div className="card" key={index}>
        <div className="center">
          <div className="property-card">
            <a href="#">
              <div className="property-image" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="property-image-title">
                  <h5>{item.name}</h5>
                </div>
              </div>
            </a>
            <div className="property-description">
              <h5>{item.name}</h5>
              <p>{item.detail}</p>
            </div>
            <a href="#">
              <div className="property-social-icons">
                <button className="Chef-Details" onClick={() => handleClickRecipeDetail(index)}>
                  More Details
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="card-container">
      {renderChef()}
      {selectedRecipeDetailIndex !== null && (
        <div className="details">
          <h3 className="details-heading">Details</h3>
          <div className="details-writing">
            {detail[selectedRecipeDetailIndex].detail}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
