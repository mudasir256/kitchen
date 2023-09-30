

import React, { useState } from 'react';
import DummyCmsData from '../DummyCmsData';
import './card.css';
import CMSMember from '../CMSMember';
import { useDispatch } from "react-redux";
import { setMessage } from "../store/chefSlice";



const Card = () => {
  const dispatch = useDispatch();
  const [Chef, setChef] = useState(DummyCmsData);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);


  const handleClickDetail = (index) => {
    setSelectedCardIndex(index);
    dispatch(setMessage(Chef[index]));
  };

  const renderChef = () => {
    return Chef.map((item, index) => (
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
                <button className="Chef-Details" onClick={() => handleClickDetail(index)}>
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
      {selectedCardIndex !== null && (
        <div className="details">
          <h3 className="details-heading">Details</h3>
          <div className="details-writing">
            {Chef[selectedCardIndex].detail}
          </div>
        </div>
      )}
    </div>
  );
};


export default Card;

