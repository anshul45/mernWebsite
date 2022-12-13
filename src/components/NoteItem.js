import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="d-flex align-items-center">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-trash-can mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted Successfully", "success");
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
