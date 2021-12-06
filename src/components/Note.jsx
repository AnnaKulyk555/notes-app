import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Note = () => (
  <>
    <li className="list-item">
      <div className="list-item__text">
        <span className="list-item__text-title">Title</span>
        <span className="list-item__text-desc">
          Description Description Description escription escription escription escription escription
          escription escription escription{' '}
        </span>
      </div>
      <div className="list-item__actions">
        <button className="list-item__action-btn btn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className="list-item__action-btn btn">
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    </li>
    <li className="list-item">
      <div className="list-item__text">
        <span className="list-item__text-title">Title</span>
        <span className="list-item__text-desc">Description Description Description </span>
      </div>
      <div className="list-item__action">
        <button className="list-item__action-btn btn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className="list-item__action-btn btn">
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    </li>
  </>
);

export default Note;
