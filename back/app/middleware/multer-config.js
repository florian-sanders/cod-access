var express = require('express')
const { Picture, Client, Question } = require('../models');
const multer = require('multer');

//traduit les données envoyés par le front
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    //callback(null, 'storage file')
    callback(null, 'upload');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    //timestamp for unique name with Date.now()
    callback(null, Date.now() + '_' + name);
  }
});

var upload = multer({ storage: storage }).single('profile');

/**
 * @module mutler-config
 */
module.exports = {
  imageToClient: async (req, res, next) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
      } else if (err) {
        return res.status(500).json(err)
      }
      const client_id = req.user.clientId
      const myFile = req.file
      const pathPicture = myFile.path.substring(6)

      const picture = new Picture({
        name: myFile.filename,
        path: pathPicture,
        alternative: null
      })

      picture.save().then(result => {
        Client.findByPk(client_id, {
          include: 'client_picture'
        }).then(user => {
          user.update({ picture_id: result.id })
        })
      });
      return res.status(200).json({
        message: 'ok', myFile
      });
    })
  },

  imageToQuestion: async (req, res, next) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
      } else if (err) {
        return res.status(500).json(err)
      }
      const id = Number(req.body.question_id)
      const myFile = req.file
      myFile.path = myFile.path.substring(6)
      console.log(req.body.alternative);
      const picture = new Picture({
        name: myFile.filename,
        path: myFile.path,
        alternative: req.body.alternative, // sanitize or test later
      })

      picture.save().then(result => {
        Question.findByPk(id, {
          include: 'question_picture'
        }).then(question => {
          question.update({ picture_id: result.id })
          console.log('result.id', result);
          return res.status(200).json(
            {
              pictureId: result.id,
              picturePath: result.path,
              pictureAlt: result.alternative
            }
          );
        })
      });
    })
  }
}