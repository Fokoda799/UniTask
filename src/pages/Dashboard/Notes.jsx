import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');

  const addNote = () => {
    if (noteInput.trim()) {
      setNotes([...notes, noteInput]);
      setNoteInput('');
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const editNote = (index) => {
    const newNotes = [...notes];
    const noteToEdit = newNotes[index];
    setNoteInput(noteToEdit);
    deleteNote(index);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <div className="flex flex-row justify-between mb-4">
        <input
          type="text"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          className="p-2 border border-customGray rounded-l-md hover:border-purple-900/70"
          style={{ minWidth: "70dvw" }}
          placeholder="Write your note here..."
        />
        <button
          onClick={addNote}
          className="bg-purple-900/70 text-white p-2 rounded-r-lg hover:shadow-lg hover:bg-purple-900/80 transition duration-300 ease-in-out text"
          style={{ minWidth: "5dvw" }}
        >
          Add
        </button>
      </div>
      <ul>
        {notes.map((note, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 mb-2 bg-white bg-opacity-80 rounded-lg shadow "
          >
            <span>{note}</span>
            <div className="flex space-x-2">
              <button onClick={() => editNote(index)} className="text-purple-900/70">
                <FaEdit />
              </button>
              <button
                onClick={() => deleteNote(index)}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
