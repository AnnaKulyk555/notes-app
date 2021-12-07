import React, { useState } from 'react';
import Modal from '../../components/modal/Modal';
import { ModalContext } from '../ModalContext';

export const ModalProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalActions, setModalActions] = useState({ onModalSubmit: null, onModalCancel: null });

  const openModal = modalConfig => {
    setModalActions(modalConfig);
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  const valueModalProvider = {
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={valueModalProvider}>
      {modalOpened && (
        <Modal
          onModalSubmit={modalActions.onModalSubmit}
          onModalCancel={modalActions.onModalCancel}
        />
      )}
      {children}
    </ModalContext.Provider>
  );
};
