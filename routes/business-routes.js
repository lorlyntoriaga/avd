const express = require('express')
const router = express.Router()
const BusinessController = require("../controllers/business-controller")

const businessContoller = new BusinessController()

router.get('/', businessContoller.catalogue)
router.get('/:id', businessContoller.show)
router.post('/', businessContoller.create)
router.patch('/:id', businessContoller.update)
router.delete('/:id', businessContoller.delete)

module.exports = router
