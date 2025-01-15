const { storage } = require('../middlewares/files-storage');

const File = require('../models/file');

const fs = require('fs')

exports.createOneFile = (req, res, next) => {
    console.log('File:', req.file);
    console.log('Body:', req.body);
    const file = new File({
        name: req.file.filename,
        imageUrl: `${req.protocol}://localhost:3000/uploads/${req.file.filename}`,
        userId: req.body.userId
    });

    file.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { res.status(400).json( { error })})
};
