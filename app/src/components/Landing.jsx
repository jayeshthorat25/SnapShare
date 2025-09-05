import React, { useState } from "react";

function Home({ onLogout }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between p-6 bg-white shadow">
        <div className="text-2xl font-bold text-gray-900">SnapShare</div>
        <button
          className="px-4 py-2 font-semibold text-white bg-gray-700 rounded-full hover:bg-gray-600"
          onClick={onLogout}
        >
          Logout
        </button>
      </header>
      <main className="flex flex-col items-center py-8">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Feed</h2>
        <div className="w-full max-w-md space-y-8">
          {/* Example post */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              <span className="font-semibold text-gray-800">alice</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="post"
              className="w-full rounded mb-2"
            />
            <div className="text-gray-700">A beautiful mountain view!</div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Simple SignUpForm component
function SignUpForm({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Sign up successful! You can now log in.");
        setUsername("");
        setPassword("");
      } else {
        setError(data.message || "Sign up failed");
      }
    } catch {
      setError("Network error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-lg text-gray-900"
    >
      <h2 className="mb-4 text-xl font-bold">Sign Up</h2>
      <input
        className="block w-full mb-3 p-2 border rounded"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        className="block w-full mb-3 p-2 border rounded"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <div className="mb-2 text-red-600">{error}</div>}
      {success && <div className="mb-2 text-green-600">{success}</div>}
      <button
        className="px-4 py-2 mr-2 font-semibold text-white bg-gray-700 rounded-full hover:bg-gray-600"
        type="submit"
      >
        Sign Up
      </button>
      <button
        className="px-4 py-2 font-semibold text-white bg-gray-400 rounded-full hover:bg-gray-500"
        type="button"
        onClick={onClose}
      >
        Cancel
      </button>
    </form>
  );
}

// Simple LoginForm component
function LoginForm({ onClose, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Login successful!");
        setUsername("");
        setPassword("");
        setTimeout(() => {
          onLogin();
        }, 700);
      } else {
        setError(data.message || "Login failed");
      }
    } catch {
      setError("Network error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-lg text-gray-900"
    >
      <h2 className="mb-4 text-xl font-bold">Log In</h2>
      <input
        className="block w-full mb-3 p-2 border rounded"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        className="block w-full mb-3 p-2 border rounded"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <div className="mb-2 text-red-600">{error}</div>}
      {success && <div className="mb-2 text-green-600">{success}</div>}
      <button
        className="px-4 py-2 mr-2 font-semibold text-white bg-gray-700 rounded-full hover:bg-gray-600"
        type="submit"
      >
        Log In
      </button>
      <button
        className="px-4 py-2 font-semibold text-white bg-gray-400 rounded-full hover:bg-gray-500"
        type="button"
        onClick={onClose}
      >
        Cancel
      </button>
    </form>
  );
}

// Landing Page
const Landing = () => {
  const [authMode, setAuthMode] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // ✅ Stable Unsplash image
  const bgUrl =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb";

  if (loggedIn) {
    return <Home onLogout={() => setLoggedIn(false)} />;
  }

  return (
    <div
      className="relative min-h-screen font-sans antialiased text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${bgUrl}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between p-6">
          <div className="text-2xl font-bold">SnapShare</div>
          <button
            className="px-4 py-2 text-white transition duration-300 ease-in-out bg-gray-700 rounded-full hover:bg-white hover:text-gray-900"
            onClick={() => setAuthMode("login")}
          >
            SIGN IN
          </button>
        </header>

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center flex-grow p-4 text-center">
          <h1 className="mb-4 text-6xl font-bold">SnapShare</h1>
          <p className="max-w-xl mx-auto mb-8 text-lg font-light">
            SnapShare is an image-sharing app.
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              className="px-6 py-3 font-semibold text-white transition duration-300 ease-in-out transform border-2 border-white rounded-full bg-white/20 backdrop-blur-sm hover:scale-105 hover:bg-white hover:text-gray-900"
              onClick={() => setAuthMode("signup")}
            >
              SIGN UP
            </button>
            <button
              className="px-6 py-3 font-semibold text-white transition duration-300 ease-in-out transform border-2 border-white rounded-full bg-white/20 backdrop-blur-sm hover:scale-105 hover:bg-white hover:text-gray-900"
              onClick={() => setAuthMode("login")}
            >
              LOG IN
            </button>
          </div>
        </main>

        {/* Auth Modal */}
        {authMode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            {authMode === "signup" && (
              <SignUpForm onClose={() => setAuthMode(null)} />
            )}
            {authMode === "login" && (
              <LoginForm
                onClose={() => setAuthMode(null)}
                onLogin={() => {
                  setAuthMode(null);
                  setLoggedIn(true);
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
