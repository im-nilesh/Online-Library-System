import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BrowseBooks() {
  const { category } = useParams();

  const books = useSelector((state) => state.books.books);

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const categoryMatch = category
      ? book.category.toLowerCase() === category.toLowerCase()
      : true;

    const searchMatch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        {category ? `${category} Books` : "Browse Books"}
      </h1>

      <input
        type="text"
        placeholder="Search by title or author..."
        className="w-full border p-3 rounded mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-lg p-5">
            <h3 className="font-bold text-xl">{book.title}</h3>

            <p>{book.author}</p>

            <p className="text-sm text-gray-500">{book.category}</p>

            <Link
              to={`/book/${book.id}`}
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
