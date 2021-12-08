import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import Note from '../note/Note';

import './notesList.scss';

const NotesList = ({ notesList, onDelete, onEdit, onCreate }) => (
  <>
    <h1 className="title">Notes list</h1>
    <div className="notes-list common">
      <ul className="list">
        <Note notesList={notesList} onDelete={onDelete} onEdit={onEdit} />
      </ul>
      <button className="notes-list__create-btn btn" onClick={onCreate}>
        <FontAwesomeIcon size="2x" icon={faPlusCircle} />
      </button>
    </div>
  </>
);

export default NotesList;
