import {
  ADDBOOK,
  DELETEBOOK,
  LOADBOOK,
  SEARCHBOOK,
  UPDATEBOOK,
} from "./actionTypes";

export const loadBooks = (books) => {
  return {
    type: LOADBOOK,
    payload: books,
  };
};

export const addBook = (book) => {
  return {
    type: ADDBOOK,
    payload: book,
  };
};

export const updateBook = (id, book) => {
  return {
    type: UPDATEBOOK,
    payload: { id, book },
  };
};

export const deleteBook = (id) => {
  return {
    type: DELETEBOOK,
    payload: id,
  };
};

export const searchBook = (text) => {
  return {
    type: SEARCHBOOK,
    payload: text,
  };
};
