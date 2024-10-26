import React, { useState } from 'react';
import Image from 'next/image';
import chevronDown from '@/assets/chevron-down.png';

export default function DropDown() {
  // State to manage the dropdown's open/close status
  const [isOpen, setIsOpen] = useState(false);

  // State to keep track of the selected community; defaults to "Abuja Community"
  const [selectedCommunity, setSelectedCommunity] = useState('Abuja Community');

  // Toggles the dropdown open or closed
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Updates the selected community and closes the dropdown
  const handleSelect = (community) => {
    setSelectedCommunity(community);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block">
      {/* Dropdown header, displays the selected community */}
      <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
        <p>{selectedCommunity}</p>
        <Image src={chevronDown} alt="Dropdown icon" />
      </div>
      
      {/* Dropdown menu, shown only when `isOpen` is true */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg">
          <ul className="py-1">
            {/* Each item in the dropdown menu calls `handleSelect` to update `selectedCommunity` */}
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect('Anambra Community')}
            >
              Anambra Community
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect('Lagos Community')}
            >
              Lagos Community
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect('Enugu Community')}
            >
              Enugu Community
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                XXXXXXXXXXXXXXXXXXXXXXXXXx            XXXXXXXXXXXXXXXXXXXXXXXXXXXX