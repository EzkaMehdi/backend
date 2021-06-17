const express = require("express")
const router = express.Router()

router.get("/user", sendUser)

const { getUser, getUsers, addUser } = require("../controllers/UserControllers")
const { validationUsers } = require("../middlewares/validationsMiddlewares")

router.get("/:",sendUserByEmail,) 
router.get("/:",sendUserById,)
router.get("/:",sendUserByUsername,)
     

module.exports = router