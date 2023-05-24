import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input type="text" placeholder="Title" name="title" />
        <p>
          <textarea name="content" placeholder="Take a note..."></textarea>
        </p>
      </form>
    </div>
  );
}

export default CreateArea;
