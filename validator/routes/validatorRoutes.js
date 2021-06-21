const express = require("express")
const router = express.Router()

router.get("/user", sendUser)

const { getUsers, getUser, getEmail, addUser, getId } = require("../controllers/userControllers")
const { validationUsers } = require("../middlewares/validationsMiddlewares")

router.get("/:",sendUserByEmail,) 
router.get("/:",sendUserById,)
router.get("/:",sendUserByUsername,)

router.post("/add",
    expressValidator.body("username").not().isEmpty().trim().escape().isLength({ min: 4 }),
    expressValidator.body("email").not().isEmpty().isEmail().normalizeEmail(),
    expressValidator.body("age").isInt().isLength(({ min: 2, max: 2 })),
    expressValidator.body("city").custom(value => {
        if (value === "Paris" ||
            value === "Los Angeles" ||
            value === "Tokyo") {
            return true
        }
        return false
    }),
    addUser
)
     

module.exports = router