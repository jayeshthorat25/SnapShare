import React from "react";

function LikeButton({ likes, onLike }) {
  return (
    <button onClick={onLike}>
      ❤️ {likes}
    </button>
  );
}

export default LikeButton;
