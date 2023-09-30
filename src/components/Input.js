

import React from 'react';

const Input = (props) => {

  const {type, children } = props;

  return (
    <>
      <input type={type} id="current-savings" placeholder={children} />
    </>
  );
};

export default Input;



