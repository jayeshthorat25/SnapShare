import React from "react";
import Comments from "./Comments";
import LikeButton from "./LikeButton";

function PhotoCard({ photo, onComment, onLike }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <img src={photo.url} alt="user upload" style={{ maxWidth: "100%" }} />
      <LikeButton likes={photo.likes} onLike={() => onLike(photo.id)} />
      <Comments
        comments={photo.comments}
        onAddComment={(comment) => onComment(photo.id, comment)}
      />
    </div>
  );
}

export default PhotoCard;
