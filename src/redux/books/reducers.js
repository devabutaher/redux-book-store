import {
  ADDBOOK,
  DELETEBOOK,
  LOADBOOK,
  SEARCHBOOK,
  UPDATEBOOK,
} from "./actionTypes";

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), 0);
  return maxId + 1;
};

export const bookReducer = (state = { data: [], search: "" }, action) => {
  switch (action.type) {
    case LOADBOOK:
      return { ...state, data: action.payload };

    case ADDBOOK:
      const { name, author, price, thumbnail, rating, featured } =
        action.payload;

      return {
        ...state,
        data: [
          ...state.data,
          {
            id: nextBookId(state.data),
            name,
            author,
            price,
            thumbnail,
            featured,
            rating,
          },
        ],
      };

    case UPDATEBOOK:
      const { id, book } = action.payload;

      return {
        ...state,
        data: state.data.map((existingBook) => {
          if (existingBook.id === id) {
            return {
              ...existingBook,
              ...book,
            };
          }
          return existingBook;
        }),
      };

    case DELETEBOOK:
      return {
        ...state,
        data: state.data.filter((book) => book.id !== action.payload),
      };

    case SEARCHBOOK:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};
