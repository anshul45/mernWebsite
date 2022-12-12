import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //Get all Notes
  const getNotes = async () => {
    //To API Call

    //Api Call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4Y2IwZDlkYzBhNzg1ODcxY2FkNzQ4In0sImlhdCI6MTY3MDMyNzg4NH0.pkvcepEY_xLSPgRFPAIOsPTHRRirRv4PFkFqcsb9GZU",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    //To API Call

    //Api Call

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4Y2IwZDlkYzBhNzg1ODcxY2FkNzQ4In0sImlhdCI6MTY3MDMyNzg4NH0.pkvcepEY_xLSPgRFPAIOsPTHRRirRv4PFkFqcsb9GZU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

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

  const deleteNote = async (id) => {
    //Api Call
    //Api Call

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4Y2IwZDlkYzBhNzg1ODcxY2FkNzQ4In0sImlhdCI6MTY3MDMyNzg4NH0.pkvcepEY_xLSPgRFPAIOsPTHRRirRv4PFkFqcsb9GZU",
      },
    });
    const json = response.json();
    console.log(json);
    console.log("Deleting a node" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note

  const editNote = async (id, title, description, tag) => {
    //Api Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4Y2IwZDlkYzBhNzg1ODcxY2FkNzQ4In0sImlhdCI6MTY3MDMyNzg4NH0.pkvcepEY_xLSPgRFPAIOsPTHRRirRv4PFkFqcsb9GZU",
      },
      body: JSON.stringify(title, description, tag),
    });
    const json = response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
