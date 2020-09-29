import React, { useState, useEffect } from "react";
import axios from "axios";
// import Card from "../components/card";

export default function Saved() {
  const [books, setSavedBooks] = useState([]);

  const getBooks = (books) => {
    axios.get("/api/books").then((res) => setSavedBooks(res.data));
  };

  useEffect(() => {
    getBooks();
  }, []);

  return <div>{/* <Card /> */}</div>;
}
