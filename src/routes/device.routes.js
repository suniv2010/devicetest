const express = require('express')
const router = express.Router()
const deviceController = require('../controllers/device.controllers');

// Retrieve all users
router.get('/',function (req, res) {
    res.send(`
    {
        "name": "Start on Heroku: Node.js",
        "description": "A barebones Node.js app using Express 4",
        "repository": "https://github.com/heroku/node-js-getting-started",
        "logo": "https://cdn.rawgit.com/heroku/node-js-getting-started/main/public/node.svg",
        "keywords": ["node", "express", "heroku"],
        "image": "heroku/nodejs"
      }
      `)
});


// Create a new user
router.post('/create', deviceController.create);

// Retrieve a single user with id
router.get('/:id', deviceController.findOne);

// Update a user with id
router.put('/:id', deviceController.update);

// Delete a user with id
router.delete('/:id', deviceController.delete);

module.exports = router