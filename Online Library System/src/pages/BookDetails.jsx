import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();

  const books = useSelector((state) => state.books.books);

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return (
      <div className="text-center mt-10">
        <h2>Book Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>

        <p className="mb-2">
          <strong>Author:</strong> {book.author}
        </p>

        <p className="mb-2">
          <strong>Category:</strong> {book.category}
        </p>

        <p className="mb-2">
          <strong>Rating:</strong> {book.rating}
        </p>

        <p className="mt-4">{book.description}</p>

        <Link
          to="/browse-books"
          className="inline-block mt-6 bg-gray-700 text-white px-5 py-2 rounded"
        >
          Back To Browse
        </Link>
      </div>
    </div>
  );
}

export default BookDetails;
