const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const connectDB = require("./db/bookDB");
const upload = require("./middlewaes/middle");

const server = express();

server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("assets"));
server.use("/uploads", express.static("uploads"));

connectDB();

const bookRouter = require("./routers/bookRouter")
server.use("/", bookRouter);

server.listen(7000, (err) => {
    if (!err) {
        console.log("Server is running on http://localhost:7000");
        console.log("Server is successfully started");
    } else {
        console.log("Error...", err);
    }
});

