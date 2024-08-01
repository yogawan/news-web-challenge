import React, { useState } from 'react';

const DropdownLayouts = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-layouts">
      <h2>CATEGORY</h2>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img src="./arrow.png" alt="img" />
        <span className="dropdown-text">E-COMMERCE APP</span>
      </button>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img src="./arrow.png" alt="img" />
        <span className="dropdown-text">BANKING APP</span>
      </button>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img src="./arrow.png" alt="img" />
        <span className="dropdown-text">BUSINESS APP</span>
      </button>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img src="./arrow.png" alt="img" />
        <span className="dropdown-text">VIDEO APP</span>
      </button>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img src="./arrow.png" alt="img" />
        <span className="dropdown-text">CRYPTO APP</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className='black' onClick={() => handleOptionClick('Option 1')}>Option 1</li>
          <li className='black' onClick={() => handleOptionClick('Option 2')}>Option 2</li>
          <li className='black' onClick={() => handleOptionClick('Option 3')}>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownLayouts;
