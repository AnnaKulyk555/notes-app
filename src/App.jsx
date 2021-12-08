import React, { useEffect, useState, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import EditNote from './components/editNote/EditNote';
import NotesList from './components/notesList/NotesList';
import { ModalContext } from './contexts/ModalContext';
import { createNote, deleteNote, fetchNotesData, updateNote } from './gateway/notesGateway';

import './index.scss';

const App = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ id: null, title: '', description: '' });

  const navigate = useNavigate();

  const fetchNotes = () => {
    fetchNotesData().then(notesData => {
      setNotes(notesData);
    });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const deleteNoteHandler = noteId => {
    openModal({
      onModalSubmit: () => {
        deleteNote(noteId).then(() => fetchNotes());
        closeModal();
        navigate('/');
      },
      onModalCancel: () => {
        closeModal();
        navigate('/');
      },
    });
  };

  const editNoteHandler = ({ id, title, description }) => {
    setNote({ id, title, description });
    navigate('/editNote');
  };

  const createNoteHandler = () => {
    setNote({ id: null, title: '', description: '' });
    navigate('/editNote');
  };

  const saveNoteHandler = noteData => {
    openModal({
      onModalSubmit: () => {
        if (noteData.id) {
          updateNote(noteData).then(() => fetchNotes());
        } else {
          createNote(noteData).then(() => fetchNotes());
        }
        closeModal();
        navigate('/');
      },
      onModalCancel: () => {
        closeModal();
        navigate('/');
      },
    });
  };

  const cancelHandler = () => {
    openModal({
      onModalSubmit: () => {
        closeModal();
        navigate('/');
      },
      onModalCancel: () => {
        closeModal();
      },
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <NotesList
            notesList={notes}
            onDelete={deleteNoteHandler}
            onEdit={editNoteHandler}
            onCreate={createNoteHandler}
          />
        }
      />
      <Route
        path="/editNote"
        element={
          <EditNote
            note={note}
            onSave={saveNoteHandler}
            onDelete={deleteNoteHandler}
            onCancel={cancelHandler}
          />
        }
      />
    </Routes>
  );
};

export default App;
