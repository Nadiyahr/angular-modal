import React, { FC, useState } from 'react';
import { SingleValue } from 'react-select';
import { Weekly } from '../Weekly/Weekly';
// import { options } from '../consts';
import Specific from '../Specific/Specific';
import './Form.scss';
import Daily from '../Daily/Daily';

interface FormProps {
  name: string
  setName: (name: string) => void;
  email: string
  setEmail: (email: string) => void;
  date: string;
  setDate: (date: string) => void
  time: string;
  setTime: (time: string) => void;
  selectedOption: SingleValue<OptionType>;
  setSelectedOption: (selectedOption: SingleValue<OptionType>) => void;
  onClose: () => void;
  setSelectOk: (selectOk: boolean) => void;
  submit: () => void;
}

const Form: FC<FormProps> = (props) => {
  const {
    name,
    setName,
    email,
    setEmail,
    date,
    setDate,
    time,
    setTime,
    selectedOption,
    setSelectedOption,
    onClose,
    setSelectOk,
    submit,
  } = props;
  const [schediule, setSchediule] = useState('No');
  const [format, setFormat] = useState('Exel');

  if (schediule === 'Weekly') {
    setSelectOk(true);
  }

  return (
    <form className="report" onSubmit={submit}>
      <label className="report__lable" htmlFor="name">
        Enter your name:
        <input
          required
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
          <input
            type="radio"
            value="Exel"
            id="exel"
            checked={format === 'Exel'}
            onChange={(e) => setFormat(e.target.value)}
          />
          Exel
        </label>
        <label htmlFor="csv">
          <input
            type="radio"
            value="CSV"
            id="csv"
            checked={format === 'CSV'}
            onChange={(e) => setFormat(e.target.value)}
          />
          CSV
        </label>
      </div>
      <label className="report__lable" htmlFor="email">
        E-mail to:
        <input
          required
          className="report__input report__input-email"
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
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
      <div className="modal__fotter">
        <button type="button" onClick={onClose}>Send</button>
        <button type="submit">print</button>
      </div>
    </form>
  );
};

export default Form;
