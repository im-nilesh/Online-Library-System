import { Link } from "react-router-dom";
import { books } from "../data/books";
import BookCard from "../components/BookCard";

function Home() {
  const popularBooks = books.slice(0, 4);

  const categories = ["Fiction", "Sci-Fi", "Non-Fiction", "Horror"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-slate-800 mb-4">
          Welcome to Online Library
        </h1>

        <p className="text-lg text-gray-600">
          Discover, explore and manage your favorite books.
        </p>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Browse Categories</h2>

        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${category}`}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg transition"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Books */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">Popular Books</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
