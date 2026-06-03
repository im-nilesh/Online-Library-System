import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="font-bold text-xl">Online Library</h1>

        <div className="flex gap-5">
          <Link to="/">Home</Link>

          <Link to="/browse-books">Browse Books</Link>

          <Link to="/add-book">Add Book</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
