/* eslint-disable no-console */
import React, { FC, useState } from 'react';
import { SingleValue } from 'react-select';
import { Weekly } from '../Weekly/Weekly';
import { options } from '../consts';
// import Daily from '../Daily/Daily';
import Specific from '../Specific/Specific';
import './Form.scss';
import Daily from '../Daily/Daily';

// interface FormProps {}

const Form: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [schediule, setSchediule] = useState('No');
  const [format, setFormat] = useState('Exel');
  const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(options[0]);

  const printDate = () => {
    console.log(date, time, selectedOption?.value);
  };

  return (
    <form className="report">
      <label className="report__lable" htmlFor="name">
        Enter your name:
        <input
          className="report__input report__input-name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <div className="report__format">
        <span>Format</span>
        <label htmlFor="exel">
          Exel
          <input
            type="radio"
            value="Exel"
            id="exel"
            checked={format === 'Exel'}
            onChange={(e) => setFormat(e.target.value)}
          />
        </label>
        <label htmlFor="csv">
          CSV
          <input
            type="radio"
            value="CSV"
            id="csv"
            checked={format === 'CSV'}
            onChange={(e) => setFormat(e.target.value)}
          />
        </label>
      </div>
      <label className="report__lable" htmlFor="email">
        E-mail to:
        <input
          className="report__input report__input-email"
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <span>Schedule</span>
      <div className="report__schedule">
        <span>Schedule</span>
        <label htmlFor="no">
          <input
            type="radio"
            value="No"
            id="no"
            checked={schediule === 'No'}
            onChange={(e) => setSchediule(e.target.value)}
          />
          No Repeat
        </label>
        <label htmlFor="spec">
          <input
            type="radio"
            value="Specific"
            id="spec"
            checked={schediule === 'Specific'}
            onChange={(e) => setSchediule(e.target.value)}
          />
          Specific Date
        </label>
        <label htmlFor="daily">
          <input
            type="radio"
            value="Daily"
            id="daily"
            checked={schediule === 'Daily'}
            onChange={(e) => setSchediule(e.target.value)}
          />
          Daily
        </label>
        <label htmlFor="weekly">
          <input
            type="radio"
            value="Weekly"
            id="weekly"
            checked={schediule === 'Weekly'}
            onChange={(e) => setSchediule(e.target.value)}
          />
          Weekly
        </label>
      </div>
      <div className="report__date">
        {schediule === 'Weekly' && (
          <Weekly
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
            time={time}
            setTime={setTime}
          />
        )}
      </div>
      {schediule === 'Specific' && (
        <Specific
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
        />
      )}
      {schediule === 'Daily' && (
        <Daily
          time={time}
          setTime={setTime}
        />
      )}
      {/* {schediule === 'Weekly' && (
        <div className="report__date">
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
        </div>
      )} */}
      <button type="button" onClick={printDate}>print</button>
    </form>
  );
};

export default Form;
