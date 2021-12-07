/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import EditNote from './components/editNote/EditNote';
import NotesList from './components/notesList/NotesList';

import './index.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NotesList />} />
      <Route path="/editNote" element={<EditNote />} />
    </Routes>
  );
};

export default App;
