import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../../contexts/ModalContext';

import './editNote.scss';

const EditNote = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const navigate = useNavigate();

  const deleteBtnHandler = e => {
    e.preventDefault();
    openModal({
      onModalSubmit: () => {
        console.log('delete');
        closeModal();
        navigate('/');
      },
      onModalCancel: () => {
        console.log('cancel');
        closeModal();
        navigate('/');
      },
    });
  };

  const cancelBtnHandler = e => {
    e.preventDefault();
    openModal({
      onModalSubmit: () => {
        console.log('cancel');
        closeModal();
        navigate('/');
      },
      onModalCancel: () => {
        console.log('cancel');
        closeModal();
      },
    });
  };

  const saveBtnHandler = e => {
    e.preventDefault();
    openModal({
      onModalSubmit: () => console.log('save'),
      onModalCancel: () => console.log('cancel 3'),
    });
  };

  return (
    <>
      <h1 className="title">Edit note</h1>
      <form className="edit-form common">
        <input type="text" name="title" placeholder="Title" className="edit-form__field" />
        <textarea
          name="description"
          placeholder="Description"
          className="edit-form__field"
        ></textarea>
        <div className="edit-form__actions">
          <button className="edit-form__actions_action" onClick={deleteBtnHandler}>
            Delete
          </button>
          <button className="edit-form__actions_action" onClick={cancelBtnHandler}>
            Cancel
          </button>
          <button type="submit" className="edit-form__actions_action" onClick={saveBtnHandler}>
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default EditNote;
