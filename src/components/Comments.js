import React, { useState } from "react";

function Comments({ comments, onAddComment }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      onAddComment(text);
      setText("");
    }
  };

  return (
    <div>
      <div>
        {comments.map((c, i) => (
          <div key={i}>{c}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}

export default Comments;
