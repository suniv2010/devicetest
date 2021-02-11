const express = require('express')
const router = express.Router()
const deviceController = require('../controllers/device.controllers');

// Retrieve all users
router.get('/', deviceController.findAll);


// Create a new user
router.post('/create', deviceController.create);

// Retrieve a single user with id
router.get('/:id', deviceController.findOne);

// Update a user with id
router.put('/:id', deviceController.update);

// Delete a user with id
router.delete('/:id', deviceController.delete);

module.exports = router