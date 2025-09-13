import React, { useState } from "react";
import PhotoFeed from "./components/PhotoFeed";
import UploadPhoto from "./components/UploadPhoto";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";

function App() {
  // Photos: [{ id, url, comments: [], likes: number }]
  const [photos, setPhotos] = useState([]);
  const [authMode, setAuthMode] = useState(null); // 'signup' | 'login' | null

  const handleUpload = (url) => {
    setPhotos([
      { id: Date.now(), url, comments: [], likes: 0 },
      ...photos,
    ]);
  };

  const handleComment = (photoId, comment) => {
    setPhotos(
      photos.map((p) =>
        p.id === photoId
          ? { ...p, comments: [...p.comments, comment] }
          : p
      )
    );
  };

  const handleLike = (photoId) => {
    setPhotos(
      photos.map((p) =>
        p.id === photoId ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  return (
    <div>
      <h1>SnapShare</h1>
      <div>
        <button onClick={() => setAuthMode("signup")}>Sign Up</button>
        <button onClick={() => setAuthMode("login")}>Login</button>
      </div>
      {authMode === "signup" && (
        <SignUpForm onClose={() => setAuthMode(null)} />
      )}
      {authMode === "login" && (
        <LoginForm onClose={() => setAuthMode(null)} />
      )}
      {authMode === null && (
        <>
          <UploadPhoto onUpload={handleUpload} />
          <PhotoFeed
            photos={photos}
            onComment={handleComment}
            onLike={handleLike}
          />
        </>
      )}
    </div>
  );
}

export default App;
