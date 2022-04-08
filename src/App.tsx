import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import './App.scss';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="starter">
      <h1>Modal tt</h1>
      <button type="button" onClick={() => setIsModalOpen(true)}>Call modal vindov</button>
      {isModalOpen && <Modal open={setIsModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
