import React, { useState } from "react";

function UploadPhoto({ onUpload }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      onUpload(url);
      setUrl("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Photo URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadPhoto;
