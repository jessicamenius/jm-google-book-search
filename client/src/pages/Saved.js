import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";

export default function Saved() {
  const [books, setSavedBooks] = useState([]);

  const getBooks = (books) => {
    axios.get("/api/books").then((res) => setSavedBooks(res.data));
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
          <div className="col-md-8">
            <div className="card-body">
              <h4>{books.volumeInfo.title}</h4>
              <p> Author: {books.volumeInfo.authors} </p>
              <p> Description: {books.volumeInfo.description} </p>

              <button
                className="btn btn-danger"
                text="Delete"
                onClick={() => {
                  getBooks();
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
