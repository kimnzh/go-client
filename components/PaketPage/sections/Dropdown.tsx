"use client";
import React, { useState } from "react";
import { User, ChevronDown } from "lucide-react";

interface DropdownProps {
  placeholder?: string;
  options: string[];
  symbol: boolean;
  onSelect?: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  placeholder = "Select an option",
  options,
  symbol = true,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  return (
    <div className="relative w-full max-w-[680px] h-[120px] mb-8">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-full px-4 py-2 bg-[#68875B] border rounded-lg shadow-sm
          flex items-center justify-between"
      >
        <div className="flex gap-8 items-center">
          {symbol ? <User className="w-16 h-16 text-[#3F6131]" /> : <></>}
          <span
            className={`text-3xl text-white ${!selected} ${
              symbol ? "" : "ml-8"
            }`}
          >
            {selected || placeholder}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ChevronDown
            className={`w-12 h-12 text-white transition-transform duration-200
              ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-[#68875B] border rounded-lg shadow-lg text-white">
          <ul className="py-1 max-h-60 overflow-auto">
            {options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleSelect(option)}
                  className={`w-full px-4 py-2 text-left hover:bg-[#68875B]
                    ${selected === option ? "opacity-30" : ""}
                  `}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
