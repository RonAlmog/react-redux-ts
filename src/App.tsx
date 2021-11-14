import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import NewNoteInput from "./NewNoteInput";
import { NotesState } from "./store/noteReducer";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  return (
    <>
      <NewNoteInput addNote={alert} />
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
