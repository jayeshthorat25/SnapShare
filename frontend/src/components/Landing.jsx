import React, { useState } from 'react';

// Mock posts for Home page
const mockPosts = [
  {
    id: 1,
    username: "alice",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    caption: "A beautiful mountain view!",
  },
  {
    id: 2,
    username: "bob",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    caption: "City lights at night.",
  },
  {
    id: 3,
    username: "carol",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    caption: "Enjoying the beach vibes.",
  },
];

// Instagram Logo SVG Component
const InstagramLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="url(#gradient)" width="100%" height="100%">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.8 }} />
      </linearGradient>
    </defs>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.524.069-2.978.377-4.104 1.504-1.127 1.127-1.435 2.581-1.504 4.104-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.069 1.524.377 2.978 1.504 4.104 1.127 1.127 2.581 1.435 4.104 1.504 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.524-.069 2.978-.377 4.104-1.504 1.127-1.127 1.435-2.581 1.504-4.104.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.069-1.524-.377-2.978-1.504-4.104-1.127-1.127-2.581-1.435-4.104-1.504-1.28-.058-1.688-.072-4.947-.072z"/>
    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
    <circle cx="18.406" cy="5.594" r="1.44"/>
  </svg>
);

// Home page component
function Home({ onLogout }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex flex-col">
      <header className="flex items-center justify-between p-6 bg-white/80 shadow-lg backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <linearGradient id="ig" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fd5" />
              <stop offset="50%" stopColor="#ff543e" />
              <stop offset="100%" stopColor="#c837ab" />
            </linearGradient>
            <path fill="url(#ig)" d="M12 2.2c3.2 0 3.6.01 4.9.07 1.4.06 2.6.33 3.6 1.3.98.98 1.24 2.24 1.3 3.6.06 1.27.07 1.67.07 4.9s-.01 3.63-.07 4.9c-.06 1.36-.32 2.62-1.3 3.6-.98.98-2.24 1.24-3.6 1.3-1.27.06-1.67.07-4.9.07s-3.63-.01-4.9-.07c-1.36-.06-2.62-.32-3.6-1.3-.98-.98-1.24-2.24-1.3-3.6C2.21 15.63 2.2 15.23 2.2 12s.01-3.63.07-4.9c.06-1.36.32-2.62 1.3-3.6.98-.98 2.24-1.24 3.6-1.3C8.37 2.21 8.77 2.2 12 2.2z"/>
            <circle cx="12" cy="12" r="3.2" fill="#fff" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" />
          </svg>
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">SnapShare</span>
        </div>
        <button
          className="px-5 py-2 font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
          onClick={onLogout}
        >
          Logout
        </button>
      </header>
      <main className="flex flex-col items-center py-10 flex-1">
        <h2 className="mb-8 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-lg">Explore the Feed</h2>
        <div className="w-full max-w-lg space-y-10">
          {mockPosts.map(post => (
            <div
              key={post.id}
              className="rounded-2xl shadow-xl bg-white/80 backdrop-blur-md border border-white/30 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center px-5 pt-5 pb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center text-white font-bold text-lg shadow">
                  {post.username.charAt(0).toUpperCase()}
                </div>
                <span className="ml-3 font-semibold text-gray-800">{post.username}</span>
                <span className="ml-auto text-xs text-gray-400">Just now</span>
              </div>
              <div className="relative">
                <img
                  src={post.image}
                  alt="post"
                  className="w-full h-72 object-cover object-center"
                  style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }}
                />
                <div className="absolute top-3 right-3 bg-white/70 rounded-full p-2 shadow">
                  <svg width="24" height="24" fill="none" stroke="#e11d48" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z" />
                  </svg>
                </div>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-700 text-lg">{post.caption}</p>
                <div className="flex items-center mt-3 space-x-4">
                  <button className="flex items-center text-pink-500 hover:text-pink-600 transition">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                    <span className="ml-1 text-sm font-semibold">Like</span>
                  </button>
                  <button className="flex items-center text-blue-500 hover:text-blue-600 transition">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h12a2 2 0 012 2z" />
                    </svg>
                    <span className="ml-1 text-sm font-semibold">Comment</span>
                  </button>
                  <button className="flex items-center text-purple-500 hover:text-purple-600 transition">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4v16h16V4H4zm4 4h8v8H8V8z" />
                    </svg>
                    <span className="ml-1 text-sm font-semibold">Share</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="py-4 text-center text-gray-500 text-sm bg-white/60 backdrop-blur-md">
        © {new Date().getFullYear()} SnapShare &mdash; Inspired by Instagram
      </footer>
    </div>
  );
}

// SignUpForm component
function SignUpForm({ onClose }) {
  console.log("[SignUp] SignUpForm rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    console.log("[SignUp] Form submitted with:", { username, password });
    
    try {
      setSuccess("Sign up successful! You can now log in.");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error("[SignUp] Error:", err);
      setError("Network error");
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient overflow-hidden"
    >
      {/* Instagram logo elements */}
      <InstagramLogo className="logo logo1 signup-logo" />
      <InstagramLogo className="logo logo2 signup-logo" />
      <InstagramLogo className="logo logo3 signup-logo" />
      <InstagramLogo className="logo logo4 signup-logo" />
      <InstagramLogo className="logo logo5 signup-logo" />
      <InstagramLogo className="logo logo6 signup-logo" />
      <InstagramLogo className="logo logo7 signup-logo" />
      <InstagramLogo className="logo logo8 signup-logo" />
      <div className="relative w-full max-w-md mx-4">
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-blue-900/50 rounded-2xl"></div>
        
        {/* Form content */}
        <div className="relative p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
          <h2 className="mb-6 text-3xl font-bold text-white text-center">Create Your Account</h2>
          <input
            className="block w-full mb-4 p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            className="block w-full mb-4 p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <div className="mb-3 p-2 bg-red-500/80 text-white rounded-lg text-sm">{error}</div>}
          {success && <div className="mb-3 p-2 bg-green-500/80 text-white rounded-lg text-sm">{success}</div>}
          <div className="flex space-x-3">
            <button 
              className="flex-1 px-4 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <button 
              className="flex-1 px-4 py-3 font-semibold text-white bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// LoginForm component
function LoginForm({ onClose, onLogin }) {
  console.log("[Login] LoginForm rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    console.log("[Login] Form submitted with:", { username, password });
    
    try {
      setSuccess("Login successful!");
      setUsername("");
      setPassword("");
      setTimeout(() => {
        onLogin();
      }, 700);
    } catch (err) {
      console.error("[Login] Error:", err);
      setError("Network error");
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 animate-gradient overflow-hidden"
    >
      {/* Instagram logo elements */}
      <InstagramLogo className="logo logo1 login-logo" />
      <InstagramLogo className="logo logo2 login-logo" />
      <InstagramLogo className="logo logo3 login-logo" />
      <InstagramLogo className="logo logo4 login-logo" />
      <InstagramLogo className="logo logo5 login-logo" />
      <InstagramLogo className="logo logo6 login-logo" />
      <InstagramLogo className="logo logo7 login-logo" />
      <InstagramLogo className="logo logo8 login-logo" />
      <div className="relative w-full max-w-md mx-4">
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-green-900/50 rounded-2xl"></div>
        
        {/* Form content */}
        <div className="relative p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
          <h2 className="mb-6 text-3xl font-bold text-white text-center">Welcome Back</h2>
          <input
            className="block w-full mb-4 p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            className="block w-full mb-4 p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <div className="mb-3 p-2 bg-red-500/80 text-white rounded-lg text-sm">{error}</div>}
          {success && <div className="mb-3 p-2 bg-green-500/80 text-white rounded-lg text-sm">{success}</div>}
          <div className="flex space-x-3">
            <button 
              className="flex-1 px-4 py-3 font-semibold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              onClick={handleSubmit}
            >
              Log In
            </button>
            <button 
              className="flex-1 px-4 py-3 font-semibold text-white bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Landing component
const Landing = () => {
  console.log("[Landing] Landing component rendered");
  const [authMode, setAuthMode] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return <Home onLogout={() => setLoggedIn(false)} />;
  }

  return (
    <div className="relative min-h-screen font-sans antialiased text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 animate-gradient"
      >
        {/* Instagram logo elements */}
        <InstagramLogo className="logo logo1 landing-logo" />
        <InstagramLogo className="logo logo2 landing-logo" />
        <InstagramLogo className="logo logo3 landing-logo" />
        <InstagramLogo className="logo logo4 landing-logo" />
        <InstagramLogo className="logo logo5 landing-logo" />
        <InstagramLogo className="logo logo6 landing-logo" />
        <InstagramLogo className="logo logo7 landing-logo" />
        <InstagramLogo className="logo logo8 landing-logo" />
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="flex items-center justify-between p-6">
          <div className="text-2xl font-bold">SnapShare</div>
          <button
            className="px-4 py-2 text-white transition duration-300 ease-in-out bg-gray-700 rounded-full hover:bg-white hover:text-gray-900"
            onClick={() => setAuthMode("login")}
          >
            SIGN IN
          </button>
        </header>
        <main className="flex flex-col items-center justify-center flex-grow p-4 text-center">
          <h1 className="mb-4 text-6xl font-bold">SnapShare</h1>
          <p className="max-w-xl mx-auto mb-8 text-lg font-light">
            SnapShare is an image-sharing app where you can discover and share amazing moments.
          </p>
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
        {authMode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {authMode === "signup" && <SignUpForm onClose={() => setAuthMode(null)} />}
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
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        .logo {
          position: absolute;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
          animation: float 8s infinite ease-in-out;
          pointer-events: none;
        }
        .landing-logo {
          color: #c084fc; /* purple-400 */
        }
        .signup-logo {
          color: #3b82f6; /* blue-500 */
        }
        .login-logo {
          color: #22c55e; /* green-500 */
        }
        .logo1 {
          width: 60px;
          height: 60px;
          bottom: -60px;
          left: 10%;
          animation-duration: 7s;
          animation-delay: 0s;
          animation-name: float-curve1;
        }
        .logo2 {
          width: 40px;
          height: 40px;
          bottom: -40px;
          left: 25%;
          animation-duration: 9s;
          animation-delay: 1s;
          animation-name: float-curve2;
        }
        .logo3 {
          width: 80px;
          height: 80px;
          bottom: -80px;
          left: 40%;
          animation-duration: 6s;
          animation-delay: 2s;
          animation-name: float-curve1;
        }
        .logo4 {
          width: 50px;
          height: 50px;
          bottom: -50px;
          left: 55%;
          animation-duration: 8s;
          animation-delay: 3s;
          animation-name: float-curve2;
        }
        .logo5 {
          width: 70px;
          height: 70px;
          bottom: -70px;
          left: 70%;
          animation-duration: 10s;
          animation-delay: 4s;
          animation-name: float-curve1;
        }
        .logo6 {
          width: 45px;
          height: 45px;
          bottom: -45px;
          left: 85%;
          animation-duration: 7s;
          animation-delay: 5s;
          animation-name: float-curve2;
        }
        .logo7 {
          width: 55px;
          height: 55px;
          bottom: -55px;
          left: 15%;
          animation-duration: 9s;
          animation-delay: 6s;
          animation-name: float-curve1;
        }
        .logo8 {
          width: 65px;
          height: 65px;
          bottom: -65px;
          left: 95%;
          animation-duration: 8s;
          animation-delay: 7s;
          animation-name: float-curve2;
        }
        @keyframes float-curve1 {
          0% {
            transform: translateY(0) translateX(0) scale(1) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50vh) translateX(100px) scale(1.3) rotate(15deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-100vh) translateX(50px) scale(1.1) rotate(30deg);
            opacity: 0;
          }
        }
        @keyframes float-curve2 {
          0% {
            transform: translateY(0) translateX(0) scale(1) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50vh) translateX(-100px) scale(1.3) rotate(-15deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-100vh) translateX(-50px) scale(1.1) rotate(-30deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;