const { storage } = require('../middlewares/files-storage');
const file = require('../models/file');

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

exports.getOneFile = (req, res, next) => {
    File.findOne({ _id: req.params.id })
    .then(file => res.status(200).json(file))
    .catch(error => res.status(404).json({ error }));
};