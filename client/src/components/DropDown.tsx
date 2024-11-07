import React, { useState } from 'react';
import Image from 'next/image';
import chevronDown from '@/assets/chevron-down.png';

// Define a list of communities
const communities = ['Abuja Community', 'Anambra Community', 'Lagos Community', 'Enugu Community'];

export default function DropDown() {
  // State to manage the dropdown's open/close status
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // State to keep track of the selected community; defaults to "Abuja Community"
  const [selectedCommunity, setSelectedCommunity] = useState<string>('Abuja Community');

  // Toggles the dropdown open or closed
  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  // Updates the selected community and closes the dropdown
  const handleSelect = (community: string): void => {
    setSelectedCommunity(community);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block text-sm">
      {/* Dropdown header, displays the selected community */}
      <div className="flex items-center gap-8 cursor-pointer" onClick={toggleDropdown}>
        <p>{selectedCommunity}</p>
        <Image src={chevronDown} alt="Dropdown icon" />
      </div>
      
      {/* Dropdown menu, shown only when `isOpen` is true */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg">
          <ul className="py-1">
            {/* Map over communities to render each as a dropdown item */}
            {communities.map((community) => (
              <li
                key={community}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect(community)}
              >
                {community}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
