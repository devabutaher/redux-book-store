import { updateBook } from "../actions";

const updatedBook = (id, data) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const book = await response.json();

    dispatch(updateBook(id, data));
  };
};

export default updatedBook;
