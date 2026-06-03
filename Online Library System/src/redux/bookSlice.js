import { createSlice } from "@reduxjs/toolkit";
import { books } from "../data/books";

const booksSlice = createSlice({
  name: "books",

  initialState: {
    books,
  },

  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
