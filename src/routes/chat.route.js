const express = require('express')
const route = express.Router();
const {homepage, message} = require('../controllers/chat.controller')

route.get("/checkstatus", (req, res, next) => {
    return res.status(200).json({
        "status": "success",
        "message": "api ok"
    })
})

route.get("/", homepage)
route.get("/api/message", message)

module.exports = route;