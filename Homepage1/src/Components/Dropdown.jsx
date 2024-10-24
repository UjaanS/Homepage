import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Services
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="https://character.ai/chat/Hpk0GozjACb3mtHeAaAMb0r9pcJGbzF317I_Ux_ALOA">Mental Health Support</a></li>
          <li><a href="https://lime-nicholle-39.tiiny.site/">Farming Support</a></li>
          <li><a href="https://financial-support-five.vercel.app/">Financial Support</a></li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;