
const express = require('express')
const router = express.Router()
const todosController = require('../controllers/opinions') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, opinionsController.getOpinions)

router.post('/createOpinion', opinionsController.createOpinion)

router.put('/markComplete', opinionsController.markComplete)

router.put('/markIncomplete', opinionsController.markIncomplete)

router.delete('/deleteOpinion', opinionsController.deleteOpinion)

module.exports = router