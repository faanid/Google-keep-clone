import React from "react";
import "./style.css";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";

function App(props) {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
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
        />
      ))}
    </div>
  );
}

export default App;
