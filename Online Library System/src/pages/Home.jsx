import { Link } from "react-router-dom";
import { books } from "../data/books";

function Home() {
  const popularBooks = books.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to Online Library
      </h1>

      <h2 className="text-2xl font-semibold mb-4">Book Categories</h2>

      <div className="flex flex-wrap gap-4 mb-10">
        <Link
          to="/books/Fiction"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Fiction
        </Link>

        <Link
          to="/books/Sci-Fi"
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Sci-Fi
        </Link>

        <Link
          to="/books/Non-Fiction"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Non-Fiction
        </Link>

        <Link
          to="/books/Horror"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Horror
        </Link>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Popular Books</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularBooks.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-lg">{book.title}</h3>

            <p className="text-gray-600">{book.author}</p>

            <Link
              to={`/book/${book.id}`}
              className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
