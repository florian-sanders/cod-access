/**
 * @module multerConfig
 */
const path = require("path");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log('multer', path.join(__dirname, "../../upload"));
    callback(null, path.join(__dirname, "../../upload"));
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    callback(null, Date.now() + '_' + name);
  }
});

module.exports = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    // if (file.mimetype !== 'image/jpg' &&  file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
    //   return callback(null, false, new Error('Only images are allowed'));
    // }
    callback(null, true)}}).single('picture');

