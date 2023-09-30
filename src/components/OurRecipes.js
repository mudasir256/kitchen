
import React, { useState } from 'react';
import recipe from '../assets/recipe.png';
import chef from '../assets/chef.png';
import './ourrecipes.css';
import PopUpForm from './PopUpForm';
import DummyData from './DummyData';

const OurRecipes = () => {
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [recipes, setRecipes] = useState(DummyData);


  const handleFormSubmit = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    setShowForm(true);
  };
  
  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
    setShowForm(false);
  };
  
  const openModalHandler = () => {
    setShowForm(true);
  };

  const closeModalHandler = () => {
    setShowForm(false); // Update the state to false to close the modal
  };

  const renderRecipes = () => {
    return recipes.map((item, index) => (
      <div className='main-our-recipes' key={index}>
        <div className='main-recipes'>
          <img className='our-recipes-img' src={item.img} alt='' width='50px' height='50px' />
          <div className='our-recipes-detail'>
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
          </div>
        </div>
        <div className='our-recipes-date'>
          <h4>{item.date}</h4>
          <h4 className='visible'>{item.status}</h4>
          <div className='our-recipes-end'>
            <img className='our-recipes-img2' src={item.img2} alt='' />
            <p>Gordon Ramsey</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className='for-border'>
       <button className="create-recipe" onClick={openModalHandler}>
    Create Recipe
  </button>
      <div>{renderRecipes()}</div>
      {showForm && <PopUpForm onAddRecipe={handleAddRecipe} closeModal={closeModalHandler} />}
    </div>
  );
};

export default OurRecipes;
