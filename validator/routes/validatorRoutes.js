const express = require("express")
const router = express.Router()

router.get("/user", sendUser)

const { getUser, getUsers, addUser } = require("../controllers/UserControllers")
const { validationUsers } = require("../middlewares/validationsMiddlewares")

router.get("/", getHotels)

router.get("/:id", getHotel)

router.post("/", validationHotels, addHotel)

module.exports = router