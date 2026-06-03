import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.rating.trim()) {
      newErrors.rating = "Rating is required";
    } else if (Number(formData.rating) < 1 || Number(formData.rating) > 5) {
      newErrors.rating = "Rating must be between 1 and 5";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    dispatch(
      addBook({
        id: Date.now(),
        ...formData,
        rating: Number(formData.rating),
      }),
    );

    navigate("/browse-books");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Book</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Book Title</label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter book title"
            className="w-full border rounded-lg p-3"
          />

          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Author */}
        <div>
          <label className="block mb-1 font-medium">Author</label>

          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className="w-full border rounded-lg p-3"
          />

          {errors.author && (
            <p className="text-red-500 text-sm mt-1">{errors.author}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Category</option>

            <option value="Fiction">Fiction</option>

            <option value="Sci-Fi">Sci-Fi</option>

            <option value="Non-Fiction">Non-Fiction</option>

            <option value="Horror">Horror</option>
          </select>

          {errors.category && (
            <p className="text-red-500 text-sm mt-1">{errors.category}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Enter book description"
            className="w-full border rounded-lg p-3"
          />

          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label className="block mb-1 font-medium">Rating (1 - 5)</label>

          <input
            type="number"
            min="1"
            max="5"
            step="0.1"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Enter rating"
            className="w-full border rounded-lg p-3"
          />

          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
