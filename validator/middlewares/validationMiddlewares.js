const expressValidator = require("express-validator");

const validationUsers = [
    expressValidator.body(["username", "email", "ville", "country"]).exists().isString(),
    expressValidator.body("age").exists().isInt({ min: 1, max: 5 }),
  
]

module.exports = {
    validationUsers
}