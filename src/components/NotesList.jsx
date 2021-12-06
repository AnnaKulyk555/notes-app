import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import Note from './Note';

const NotesList = () => (
  <>
    <h1 className="title">Notes list</h1>
    <div className="notes-list common">
      <ul className="list">
        <Note />
      </ul>
      <button className="notes-list__create-btn btn">
        <FontAwesomeIcon size="2x" icon={faPlusCircle} />
      </button>
    </div>
  </>
);

export default NotesList;
