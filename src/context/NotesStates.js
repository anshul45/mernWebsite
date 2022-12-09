import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "638f4f7f0555158ec2709c0e",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:43.844Z",
      __v: 0,
    },
    {
      _id: "638f4f840555158ec2709c10",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:48.133Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
