import React from 'react';
import Card from './Card'

const ImageFeed = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans antialiased">
      {/* Header and Search Bar */}
      <div className="flex justify-center items-center py-6">
        <div className="relative w-full max-w-2xl">
          <div className="flex items-center w-full px-4 py-2 bg-white rounded-full shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              placeholder="#tags, posts, user..."
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <Card
          title="Mountains"
          user="bbeard"
          date="Jan 17th 19"
          text="A beautiful photo of mountains"
          favs={1}
          comments={2}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBrbZqed5GXGkRoGKnQqDO2RVpifhFLuB0g&s"
          userInitial="B"
        />
        <Card
          title="Nepal"
          user="kasho"
          date="Jan 17th 19"
          text="A photo taken in Nepal"
          favs={0}
          comments={0}
          imageUrl="https://images.unsplash.com/photo-1536838382769-1a92e1b1062f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          userInitial="K"
        />
        <Card
          title="Architecture"
          user="kasho"
          date="Jan 16th 19"
          text="0 Faves 0 Comments"
          favs={0}
          comments={0}
          imageUrl="https://images.unsplash.com/photo-1517865225191-4903328e1248?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          userInitial="K"
        />
        <Card
          title="Sailing"
          user="kasho"
          date="Jan 16th 19"
          text="1 Fave 2 Comments"
          favs={1}
          comments={2}
          imageUrl="https://images.unsplash.com/photo-1539665985863-71a3964e5d26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          userInitial="K"
        />
        <Card
          title="Lighthouse"
          user="kasho"
          date="Jan 16th 19"
          text="0 Faves 0 Comments"
          favs={0}
          comments={0}
          imageUrl="https://images.unsplash.com/photo-1549420087-0b1a0b368739?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          userInitial="K"
        />
        <Card
          title="Stars"
          user="kasho"
          date="Jan 16th 19"
          text="1 Fave 2 Comments"
          favs={1}
          comments={2}
          imageUrl="https://images.unsplash.com/photo-1520624021703-e845187e584f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          userInitial="K"
        />
      </div>
    </div>
  );
};

export default ImageFeed;
