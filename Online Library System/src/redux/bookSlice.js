import { createSlice } from "@reduxjs/toolkit";
import { books } from "../data/books";

// Redux slice for managing library books
const booksSlice = createSlice({
  name: "books",

  initialState: {
    books,
  },

  reducers: {
    // Add new book to beginning of array
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
