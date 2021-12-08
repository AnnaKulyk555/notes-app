import React, { useState } from 'react';

import './editNote.scss';

const EditNote = ({ note, onSave, onDelete, onCancel }) => {
  const [noteEdited, setNoteEdited] = useState(note);

  const onNoteChange = e => {
    const newNote = {
      ...noteEdited,
      [e.target.name]: e.target.value,
    };
    setNoteEdited(newNote);
  };

  const deleteBtnHandler = e => {
    e.preventDefault();
    onDelete(noteEdited.id);
  };

  const cancelBtnHandler = e => {
    e.preventDefault();
    onCancel();
  };

  const saveBtnHandler = e => {
    e.preventDefault();
    onSave(noteEdited);
  };

  return (
    <>
      <h1 className="title">Edit note</h1>
      <form className="edit-form common">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="edit-form__field"
          value={noteEdited.title}
          onChange={onNoteChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="edit-form__field"
          value={noteEdited.description}
          onChange={onNoteChange}
        ></textarea>
        <div className="edit-form__actions">
          <button
            disabled={!noteEdited.id}
            className="edit-form__actions_action"
            onClick={deleteBtnHandler}
          >
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
