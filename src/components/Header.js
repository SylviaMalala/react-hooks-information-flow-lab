import React from 'react'

const Header = ({ onDarkModeClick }) => {
    return (
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          Dark Mode
        </button>
      </header>
    );
  };
  

export default Header
