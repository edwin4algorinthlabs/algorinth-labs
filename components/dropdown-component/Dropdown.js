import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';
import Image from 'next/image';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdownContainer" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdownButton">
        <Image className="m-banner" alt="Banner" src="/images/Vector.svg" width={15} height={11}/>
      </button>
      {isOpen && (
        <ul className="dropdownList">
          <li>Home</li>
          <li>Services</li>
          <li>Resources</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
