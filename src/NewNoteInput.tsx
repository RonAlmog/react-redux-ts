import React, { ChangeEvent, useState } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");
  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };
  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="note"
          placeholder="Note"
          value={note}
          onChange={updateNote}
        />
        <button onClick={onAddNoteClick}>Add Note</button>
      </div>
    </div>
  );
};

export default NewNoteInput;
