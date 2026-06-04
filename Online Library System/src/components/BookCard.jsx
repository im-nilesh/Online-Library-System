import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2">{book.title}</h2>

      <p className="text-gray-600 mb-1">Author: {book.author}</p>

      <p className="text-gray-500 mb-3">Category: {book.category}</p>

      <div className="flex justify-between items-center">
        <span className="font-semibold">⭐ {book.rating}</span>

        <Link
          to={`/book/${book.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
