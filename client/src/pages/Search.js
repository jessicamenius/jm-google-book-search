import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    let searchVal = e.target.value;

    const bookData = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchVal}`
    );
    setBooks(bookData.data.items);
  };

  const handleView = (book) => {
    axios.get("/api/books", {
      link: book.volumeInfo.previewLink,
    });
  };

  const handleSave = (book) => {
    axios.post("/api/books", {
      title: book.volumeInfo.title,
    });
  };

  return (
    <div>
      <div className="container">
        <div className="input-group flex-nowrap">
          <div className="input-group-prepend"></div>
          <input
            type="text"
            className="form-control"
            placeholder="Type book title here"
            onKeyPress={handleSearch}
          />
        </div>
      </div>

      {books.map((book) => (
        <div className="card m-3" key={book.id}>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="card-body">
              <h6> {book.volumeInfo.title}</h6>
              {/* <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt="book cover"
              /> */}
              <p> Written by: {book.volumeInfo.authors} </p>
              <p> {book.volumeInfo.description} </p>
              <p>
                <p>
                  Click for more info:
                  {book.volumeInfo.previewLink}
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleSave(book)}
                >
                  Save
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleView(book)}
                >
                  View
                </button>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
