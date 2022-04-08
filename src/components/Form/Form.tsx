/* eslint-disable no-console */
import React, { FC, useState } from 'react';
import './Form.scss';

// interface FormProps {}

const Form: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // const handleDate = (e: ChangeEventHandler<HTMLInputElement>) => {
  //   console.log(e);

  //   return 3;
  // };

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
      <input type="date" name="date" id="date" />
      <input type="time" name="time" id="time" />
    </form>
  );
};

export default Form;
