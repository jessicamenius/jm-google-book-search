const router = require("express").Router();
const Book = require("../models/Book");

// get books
router.get("/api/books", function (req, res) {
  Book.find({})
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});
``;
// save a book
router.post("/api/books", async (req, res) => {
  try {
    const { id, title, authors, description, image, link } = req.body;
    const newBook = new Book({
      id: id,
      title: title,
      authors: [...authors],
      description: description,
      image: image,
      link: link,
    });

    console.log(neBook);

    const savedBook = await newBook.save();
    console.log(savedBook);
    res.json(savedBook);
  } catch (err) {
    res.json({ error: err.message });
  }
});

// delete book
router.delete("/api/books/:id", async (res, req) => {
  try {
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deleteBook);
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
