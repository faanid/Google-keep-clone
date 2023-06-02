import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function CreateArea({ onAdd }) {
  const [isExpanded, setExpended] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const submitButton = (event) => {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault(event);
  };

  const handleExpanded = () => {
    setExpended(true);
  };

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
          ></textarea>
        </p>
        <button onClick={submitButton}>
          <IoMdAdd size={35} />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
