import React, { FC } from 'react';
import Select, { SingleValue } from 'react-select';
import { options } from '../consts';
import './Weekly.scss';

interface WeeklyProps {
  setTime: (time: string) => void;
  time: string;
  setSelectedOption: (option: SingleValue<OptionType>) => void;
  selectedOption: SingleValue<OptionType>;
}

export const Weekly: FC<WeeklyProps> = ({ setTime, selectedOption, setSelectedOption }) => {
  const handleChange = (option: SingleValue<OptionType>) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Select
        placeholder="Select Device..."
        options={options}
        onChange={opt => handleChange(opt)}
        value={selectedOption}
      />
      <input
        type="time"
        name="time"
        id="time"
        onChange={(e) => setTime(e.target.value)}
      />
    </>
  );
};
