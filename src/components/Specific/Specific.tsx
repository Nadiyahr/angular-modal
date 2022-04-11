import React, { FC } from 'react';
import './Specific.scss';

interface SpecificProps {
  date: string;
  setDate: (time: string) => void;
  setTime: (time: string) => void;
  time: string;
}

const Specific: FC<SpecificProps> = (props) => {
  const { setDate, setTime } = props;

  return (
    <>
      <input
        type="date"
        name="date"
        id="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <span>at</span>
      <input
        type="time"
        name="time"
        id="time"
        onChange={(e) => setTime(e.target.value)}
      />
    </>
  );
};

export default Specific;
