const userModel = require("../models/userModel")
const expressValidator = require("express-validator");

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find({})

        res.json(users)
    } catch (err) {
        console.error(err)

        res.json({ errorMessage: "There was a probleme :(" }, 500)
    }

}

const getUser = async (req, res) => {

    const userGet = req.params
    console.log(req.params);
    console.log(req.params.username);
    try {
        const users = await userModel.find(userGet)

        res.json(users)
    } catch (err) {
        console.error(err)

        res.json({ errorMessage: "There was a probleme :(" }, 500)
    }

}
const addUser = (req, res) => {
    const errors = expressValidator.validationResult(req);
    if (!errors.isEmpty()) {
        res.status(500).json({
            errors: errors.array(),
            message: 'there is a problem'
        });
        return;
    } else {
        const user = req.body
        const newUser = userModel.create(user)

        res.json({
            success: true,
            message: 'User will be saved'
        });
    }
}
const getId = async (req, res) => {

    const userFound = req.params.id
    console.log(req.params);
    console.log(req.params.id);
    try {
        const users = await userModel.findById(userFound)

        res.json(users)
    } catch (err) {
        console.error(err)

        res.json({ errorMessage: "There was a probleme :(" }, 500)
    }

}
const getEmail = async (req, res) => {

    const userFound = req.params
    console.log(req.params);
    console.log(req.params.email);
    try {
        const users = await userModel.find(userFound)

        res.json(users)
    } catch (err) {
        console.error(err)

        res.json({ errorMessage: "There was a probleme :(" }, 500)
    }

}
module.exports = {
    getUsers,
    getUser,
    getEmail,
    getId,
    addUser
} 