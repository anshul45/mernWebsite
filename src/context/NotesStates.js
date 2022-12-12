import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "638f4f7f0555158ec2709c03e",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:43.844Z",
      __v: 0,
    },
    {
      _id: "638f4f840555158e3c2709c610",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:48.133Z",
      __v: 0,
    },
    {
      _id: "638f4f8405535158ec2709c10s",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:48.133Z",
      __v: 0,
    },
    {
      _id: "638f4f8405525158ec2709c10",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:48.133Z",
      __v: 0,
    },
    {
      _id: "638f4f8420555158ec2709c10",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:48.133Z",
      __v: 0,
    },
    {
      _id: "638f4f840555158ec22709c10",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:48.133Z",
      __v: 0,
    },
    {
      _id: "638f4f8405551584ec2709c1p0",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:48.133Z",
      __v: 0,
    },
    {
      _id: "638f4f8405551598ec2709c10",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:48.133Z",
      __v: 0,
    },
    {
      _id: "638f4f8405551558ec2709c10",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:48.133Z",
      __v: 0,
    },
    {
      _id: "638f4f8405551584ec2709c10",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:48.133Z",
      __v: 0,
    },
    {
      _id: "638f4f840555158ec22709c10",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:48.133Z",
      __v: 0,
    },
    {
      _id: "638f4f840555158ec2709c110",
      user: "638cb0d9dc0a785871cad748",
      title: "my Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-06T14:19:48.133Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //Add a Note
  const addNote = (title, description, tag) => {
    //To API Call
    console.log("Adding a note");
    const note = {
      _id: "638f4f840555158ec2709c120",
      user: "638cb0d9dc0a785871cad748",
      title: title,
      description: description,
      tag: tag,
      date: "2022-12-06T14:19:48.133Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note

  const deleteNote = () => {};

  //Edit a Note

  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
