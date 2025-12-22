const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const connectDB = require("./db/bookDB");

const server = express();

server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({extended:true}));
server.use(express.static("assets"));

connectDB();

// server.get('/', (req, res) => {
//     res.render('index');
// });

const bookRouter = require("./routers/bookRouter")
server.use("/", bookRouter);

server.listen(3000, (err) => {
    if(!err){
        console.log("Server is running on http://localhost:3000");
        console.log("Server is successfully started");
    }else{
        console.log("Error...", err);
    }
});

