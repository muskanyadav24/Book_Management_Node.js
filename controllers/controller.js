const Book = require("../models/book_model");

const showAllBooks = async (req, res) => {
    const books = await Book.find();
    res.render("index", { books, editBook: null });
};

const createBook = async (req, res) => {
    const { id, title, author, year, price } = req.body;
    const image = req.file ? req.file.filename : null;

    if (id) {
        const updateData = { title, author, year, price };
        if (image) {
            updateData.image = image;
        }
        await Book.findByIdAndUpdate(id, updateData);
    } else {
        await Book.create({
            title,
            author,
            year,
            price,
            image
        })
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
