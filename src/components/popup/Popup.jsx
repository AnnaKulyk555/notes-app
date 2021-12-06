import React from 'react';

import './popup.scss';

const Popup = () => (
  <div className="overlay popup">
    <div className="popup__content">
      <span className="popup__content_text">Are you sure?</span>
      <div className="popup__content_actions">
        <button className="popup__content_actions-btn">Yes</button>
        <button className="popup__content_actions-btn">No</button>
      </div>
    </div>
  </div>
);

export default Popup;
