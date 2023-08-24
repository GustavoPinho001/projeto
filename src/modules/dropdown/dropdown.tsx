import React, { useState } from 'react';

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="relative inline-block">
      <button className="bg-[#f0f0f0] p-3 cursor-pointer">
        {selectedOption || 'Selecione uma opção'}
      </button>
      <ul className="absolute bg-white border m-0 p-0">
        {options.map((option) => (
          <li className='p-3 cursor-pointer hover:bg-[#f0f0f0]' key={option} onClick={() => handleSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
