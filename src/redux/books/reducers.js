import { ADDBOOK, DELETEBOOK, LOADBOOK, UPDATEBOOK } from "./actionTypes";

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), 0);
  return maxId + 1;
};

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case LOADBOOK:
      return action.payload;

    case ADDBOOK:
      const { name, author, price, thumbnail, rating, featured } =
        action.payload;

      return [
        ...state,
        {
          id: nextBookId(state),
          name,
          author,
          price,
          thumbnail,
          featured,
          rating,
        },
      ];

    case UPDATEBOOK:
      const { id, book } = action.payload;
      return state.map((existingBook) => {
        if (existingBook.id === id) {
          return {
            ...existingBook,
            ...book,
          };
        }

        return existingBook;
      });

    case DELETEBOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};
