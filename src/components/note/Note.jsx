import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import './note.scss';

const Note = ({ notesList, onDelete, onEdit }) => (
  <>
    {notesList.map(note => (
      <li key={note.id} className="list-item">
        <div className="list-item__text">
          <span className="list-item__text-title">{note.title}</span>
          <span className="list-item__text-desc">{note.description}</span>
        </div>
        <div className="list-item__actions">
          <button className="list-item__action-btn btn" onClick={() => onDelete(note.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className="list-item__action-btn btn" onClick={() => onEdit(note)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      </li>
    ))}
  </>
);
export default Note;
