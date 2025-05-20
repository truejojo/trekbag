import React from 'react';

const Button = ({ children, buttonType, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === 'secondary' ? 'btn--secondary' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
