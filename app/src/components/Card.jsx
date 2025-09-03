

const Card = ({ title, user, date, text, favs, comments, imageUrl, userInitial }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
    {/* Card Header */}
    <div className="flex items-center p-4">
      <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white font-bold text-lg mr-4">
        {userInitial}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">{user}</p>
      </div>
    </div>
    
    {/* Card Image */}
    <div className="w-full h-48 overflow-hidden bg-gray-200">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover transition duration-300 hover:scale-110" />
    </div>

    {/* Card Body */}
    <div className="p-4">
      <p className="text-sm text-gray-500">{date}</p>
      {text && <p className="mt-1 text-gray-700 text-sm">{text}</p>}
    </div>

    {/* Card Footer */}
    <div className="flex justify-between items-center p-4 border-t border-gray-200">
      <div className="text-xs text-gray-500">
        {favs} Faves {comments} Comments
      </div>
      <div className="flex space-x-3 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer hover:text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer hover:text-blue-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.875-1.755L11 14a1 1 0 110-2l2-1a1 1 0 112 0v2a1 1 0 11-2 0v-2a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 110-2zm-6 2a3 3 0 100-6 3 3 0 000 6zm0 2a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      </div>
    </div>
  </div>
);

export default Card;