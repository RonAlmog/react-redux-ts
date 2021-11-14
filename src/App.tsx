import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import NewNoteInput from "./NewNoteInput";
import { addNote } from "./store/actions";
import { NotesState } from "./store/noteReducer";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();
  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };
  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
