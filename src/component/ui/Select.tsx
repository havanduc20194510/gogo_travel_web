"use client";
import { Fragment, useState } from "react";

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps {
  onChange?: (selectedValue: string) => void;
}

const options = [
  {
    label: "Tên",
    value: "name",
  },
  {
    label: "Giá",
    value: "adultPrice",
  },
];

export const Select: React.FC<SelectProps> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string | number>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <select
      className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      value={selectedOption}
      onChange={handleSelectChange}
    >
      <option value="">Chọn...</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
