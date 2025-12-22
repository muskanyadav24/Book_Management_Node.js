// const Book = require("../models/book_model");
// let editBook = null;

// const showAllBooks = async (req, res) => {
//     const books = await Book.find();
//     res.render("index", {books, editBook});
// };

// const createBook = async (req, res) => {
//     const {id,title, author, price} = req.body;

//     if(id){
//         await Book.findByIdAndUpdate(id, {title, author, price});
//         editBook = null;
//     }else{
//         await Book.create({title, author, price});
//     }
//     editBook = null;
//     res.redirect("/");

// };

// const editBookForm = async (req, res) => {

//     const id = req.params.id;
//     editBook = await Book.findById(id);
//     console.log("Edit user",editBook);
//     res.redirect("/");
// };

// const deleteBook = async (req, res) => {

//     const id = req.params.id;
//     await Book.findByIdAndDelete(id);
//     editBook = null;
//     res.redirect("/");

// };

// module.exports = {showAllBooks,createBook,editBookForm,deleteBook};


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


// const Book = require("../models/book_model");

// const showAllBooks = async (req, res) => {
//     const books = await Book.find();
//     res.render("index", { books, editBook: null }); // Pass editBook as null to avoid issues
// };

// const createBook = async (req, res) => {
//     const { id, title, author, price } = req.body;

//     if (!title || !author || !price) {
//         return res.status(400).send('All fields are required');
//     }

//     if (id) {
//         await Book.findByIdAndUpdate(id, { title, author, price });
//     } else {
//         await Book.create({ title, author, price });
//     }
//     res.redirect("/");
// };

// const editBookForm = async (req, res) => {
//     const id = req.params.id;
//     const editBook = await Book.findById(id);
//     console.log("Edit book", editBook);
//     res.render("editBook", { editBook }); // Pass editBook to the form view
// };

// const deleteBook = async (req, res) => {
//     const id = req.params.id;
//     await Book.findByIdAndDelete(id);
//     res.redirect("/");
// };

// module.exports = { showAllBooks, createBook, editBookForm, deleteBook };
