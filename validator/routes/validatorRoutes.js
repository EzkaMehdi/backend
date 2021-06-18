const express = require("express")
const router = express.Router()

router.get("/user", sendUser)

const { getUsers, getUser, getEmail, addUser, getId } = require("../controllers/userControllers")
const { validationUsers } = require("../middlewares/validationsMiddlewares")

router.get("/:",sendUserByEmail,) 
router.get("/:",sendUserById,)
router.get("/:",sendUserByUsername,)
router.get("/email/:email", getEmail)
router.get("/user/:id", getId)
     

module.exports = router