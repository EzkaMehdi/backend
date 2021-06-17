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

module.exports = {
    getUsers,
    getUser}