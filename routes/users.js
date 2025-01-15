const express = require('express');
const router = express.Router();

const service = require('../services/users');

const private = require('../middlewares/private')

router.get('/:id', private.checkJWT, service.getById);

router.put('/add', service.add);

router.patch('/update', private.checkJWT, service.update);

router.delete('/delete', private.checkJWT, service.delete);

router.post('/authenticate', service.authenticate);

module.exports = router;
