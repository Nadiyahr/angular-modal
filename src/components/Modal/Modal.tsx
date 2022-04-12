import React, {
  Dispatch, FC, SetStateAction, useEffect, useState,
} from 'react';
import { SingleValue } from 'react-select';
import { options } from '../consts';
import Daily from '../Daily/Daily';
import Specific from '../Specific/Specific';
import { Weekly } from '../Weekly/Weekly';
import './Modal.scss';

interface ModalProps {
  open: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const {
    onClose, open,
  } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [slectOk, setSelectOk] = useState(false);
  const [schediule, setSchediule] = useState('No');
  const [format, setFormat] = useState('Exel');
  const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(options[0]);
  const [obj, setObj] = useState({
    name: '',
    format: '',
    email: '',
    date: '',
    time: '',
    selectedOption: '',
  });

  const closeOnEscDown = (e: KeyboardEvent) => {
    if ((e.code || e.key) === 'Escape') {
      onClose();
    }
  };

  if (schediule === 'Weekly') {
    setSelectOk(true);
  }

  const printDate = () => {
    setObj({
      ...obj, name, email, date, time,
    });
    if (slectOk && selectedOption) {
      setObj({ ...obj, selectedOption: selectedOption.value });
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscDown);

    return function clean() {
      document.body.removeEventListener('keydown', closeOnEscDown);
    };
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div role="presentation" className="modal" onClick={onClose}>
      <div role="presentation" className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h4 className="modal__title">Modal Component</h4>
        </div>
        <div className="modal__body">
          <form className="report" onSubmit={printDate}>
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
          </form>
        </div>
        <div className="modal__fotter">
          <button type="button" onClick={onClose}>Send</button>
          <button type="submit">print</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
