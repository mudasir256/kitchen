import './popupform.css';
import { HiOutlineX } from 'react-icons/hi';
import { useState } from 'react';

const PopUpForm = ({ closeModal, onAddRecipe, openModal }) => {
  // const [showModal, setShowModal] = useState(true);
  const [enteredName, setEnteredName] = useState('');
  const [enteredImage, setEnteredImage] = useState('');
  const [enteredImage2, setEnteredImage2] = useState('');
  const [enteredDetail, setEnteredDetail] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredStatus, setEnteredStatus] = useState('');

  const submitHandler = (event) => {
    // event.preventDefault();

    const newRecipe = {
      name: enteredName,
      detail: enteredDetail,
      date: enteredDate,
      status: enteredStatus,
      image: enteredImage,
      image2: enteredImage2,
    };

    onAddRecipe(newRecipe)


    // Reset the form //
    setEnteredName('');
    setEnteredDetail('');
    setEnteredDate('');
    setEnteredStatus('');
    setEnteredImage('');
    setEnteredImage2('');
  };
  // const closeModalHandler = () => {
  //   setShowModal(false); // Update the state to false to close the modal
  // };
  const imageHandleChange = (event) => {
    setEnteredImage(event.target.value);
  };

  const image2HandleChange = (event) => {
    setEnteredImage2(event.target.value);
  };

  const nameHandleChange = (event) => {
    setEnteredName(event.target.value);
  };

  const detailHandleChange = (event) => {
    setEnteredDetail(event.target.value);
  };

  const dateHandleChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const statusHandleChange = (event) => {
    setEnteredStatus(event.target.value);
  };

  return (
    <div  className="popup">
      <HiOutlineX onClick={closeModal} className="close" />
      <h2 className="popup-heading">Fill The Form</h2>
      {/* Form content */}
      <div className="main-form">
        <div>
          <div>
            <label className="label">Select Recipe image:</label>
            <input
              className="browse-file"
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={imageHandleChange}
              value={enteredImage}
            />
          </div>
          <div>
            <label className="label">Enter Name Of Recipe:</label>
            <input
              className="input-data"
              type="text"
              id="message"
              name="message"
              onChange={nameHandleChange}
              value={enteredName}
            />
          </div>
          <div>
            <label className="label">Enter Detail Of Recipe:</label>
            <input
              className="input-data"
              type="text"
              id="message"
              name="message"
              onChange={detailHandleChange}
              value={enteredDetail}
            />
          </div>
        </div>
        <div className="right-form">
          <div>
            <label className="label">Enter Date:</label>
            <input
              className="input-for-date"
              type="date"
              id="message"
              name="message"
              onChange={dateHandleChange}
              value={enteredDate}
            />
          </div>
          <div>
            <label className="label">Enter Status:</label>
            <input
              className="input-data"
              type="text"
              id="message"
              name="message"
              onChange={statusHandleChange}
              value={enteredStatus}
            />
          </div>
          <div>
            <label className="label">Select Chef image:</label>
            <input
              className="browse-file"
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={image2HandleChange}
              value={enteredImage2}
            />
          </div>
        </div>
      </div>
      <button onClick={submitHandler} className="Submit-form" type="submit">
        Submit
      </button>
    </div>
  );
};

export default PopUpForm;













