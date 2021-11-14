import React from "react";

import "./App.css";
import NewNoteInput from "./NewNoteInput";

function App() {
  return (
    <>
      <NewNoteInput addNote={alert} />
      <hr />
      <ul></ul>
    </>
  );
}

export default App;
