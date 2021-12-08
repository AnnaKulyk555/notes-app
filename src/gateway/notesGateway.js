const baseUrl = 'https://6151af974a5f22001701d380.mockapi.io/p1/notes';

export const fetchNotesData = async () => {
  const responce = await fetch(baseUrl);
  const notesData = await responce.json();

  return notesData;
};

export const createNote = noteData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create note');
    }
  });

export const deleteNote = noteId =>
  fetch(`${baseUrl}/${noteId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete note');
    }
  });

export const updateNote = noteData =>
  fetch(`${baseUrl}/${noteData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to update note');
    }
  });
