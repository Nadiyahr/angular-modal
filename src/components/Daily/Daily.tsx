import React, { FC } from 'react';
import './Daily.scss';

interface DailyProps {
  time: string;
  setTime: (time: string) => void;
}

const Daily: FC<DailyProps> = ({ setTime }) => {
  return (
    <>
      <input
        type="time"
        name="time"
        id="time"
        onChange={(e) => setTime(e.target.value)}
      />
    </>
  );
};

export default Daily;
