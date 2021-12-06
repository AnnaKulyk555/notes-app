import React from 'react';
import Popup from '../popup/Popup';

import './editNote.scss';

const EditNote = () => (
  <>
    <h1 className="title">Edit note</h1>
    <form className="edit-note-form common">
      <input type="text" name="title" placeholder="Title" className="edit-note-form__field" />

      <textarea
        name="description"
        placeholder="Description"
        className="edit-note-form__field"
      ></textarea>
      {/* <Popup /> */}
      <div>
        <button className="edit-note-form__action">Delete</button>
        <button className="edit-note-form__action">Cancel</button>
        <button type="submit" className="edit-note-form__action">
          Save
        </button>
      </div>
    </form>
  </>
);

export default EditNote;
