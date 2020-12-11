const express = require('express')
const router = express.Router()
const Controller = require('../controllers/walletsController');

// Get all tickets
router.get('/',Controller.getAll)

// Get ticket
router.get('/:id', Controller.getOne)


/*

// Add ticket
router.post('/', )

// Update ticket
router.patch('/:id',) 

// Delete ticket
router.delete('/:id',)

*/
module.exports = router
