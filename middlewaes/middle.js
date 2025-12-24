const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
        console.log(file);
    },
    filename: function (req, file, cb) {
        console.log("File ", file);
        const uniqueFailname = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueFailname + '.' + file.mimetype.split('/')[1]);
    }
})

const upload = multer({ storage })

module.exports = upload;