const express = require('express')
const router = express.Router()

const medController = require('../controller/med.controller.js')

router.get("/", medController.getAll)
router.get("/:id", medController.getById)
router.post("/", medController.create)
router.put("/:id", medController.update)
router.delete("/:id", medController.delete)

module.exports = router
