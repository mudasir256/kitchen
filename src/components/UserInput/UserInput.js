import { useState } from "react";
import logo from '../../assets/login.webp';
import Button from "../Button";
import HomePage from "../Layout";
import Input from "../Input";

const UserInput = (props) => {
  const [input, setInput] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submit');
  };
const {keyboardType}=props
  return ( 
    <div className="log-in">
      <form onSubmit={submitHandler} className="form">
        <div>
          <img className="img" src={logo} alt="logo" height="300px" width="90%" />
        </div>

        <div className="input-group">
          <h2>Log In Account</h2>
          <p>
            <Input  >Email ID</Input>
            <Input type="password">Password</Input>
            
            <div className="checkbox">
              <input type="checkbox" id="keep-signed-in" />
              <label htmlFor="keep-signed-in">Keep me signed in</label>
            </div>
            <div className="actions">
              <Button routePath={'/HomePage'}>LOG IN</Button>
              {/* <Button routePath={'/SignUP'}>SIGN UP</Button> */}
            </div>
          </p>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
