import React from "react";
import PhotoCard from "./PhotoCard";

function PhotoFeed({ photos, onComment, onLike }) {
  return (
    <div>
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          onComment={onComment}
          onLike={onLike}
        />
      ))}
    </div>
  );
}

export default PhotoFeed;
