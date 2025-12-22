const Book = require("../models/book_model");

const showAllBooks = async (req, res) => {
    const books = await Book.find();
    res.render("index", { books, editBook: null });
};

const createBook = async (req, res) => {
    const { id, title, author, year, price } = req.body;

    if (id) {
        await Book.findByIdAndUpdate(id, {
            title,
            author,
            year,
            price
        });
    } else {
        await Book.create({
            title,
            author,
            year,
            price
        });
    }

    res.redirect("/");
};

const editBookForm = async (req, res) => {
    const id = req.params.id;
    const editBook = await Book.findById(id);
    const books = await Book.find();

    res.render("index", { books, editBook });
};

const deleteBook = async (req, res) => {
    const id = req.params.id;
    await Book.findByIdAndDelete(id);
    res.redirect("/");
};

module.exports = {
    showAllBooks,
    createBook,
    editBookForm,
    deleteBook
};
