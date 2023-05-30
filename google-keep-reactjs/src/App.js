import React from "react";
import "./style.css";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";

function App(props) {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((preValue) => {
      return [...preValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((prevValue) => {
      return (preValue) => {
        return [...preValue.filter((note, index) => index !== id)];
      };
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
    </div>
  );
}

export default App;
