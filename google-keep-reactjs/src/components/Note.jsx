import React from "react";

function Note({ title, content }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button></button>
    </div>
  );
}

export default Note;
