const userModel = require("../models/user")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config.js")
const nodemailer = require("nodemailer");


const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});
verifyUser = (req, res, next) => {
    User.findOne({
      confirmationCode: req.params.confirmationCode,
    })
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
  
        user.status = "Active";
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
        });
      })
      .catch((e) => console.log("error", e));
  };

const signup = async (req, res) => {
    try {
        const username = req.body.username
        const password = bcryptjs.hashSync(req.body.password)
        const role = req.body.role

        const user = await userModel.create({ username, password, role })

        res.json({ message: "User was created!", user })
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}

const login = async (req, res) => {
    try {
        const username = req.body.username
        const user = await userModel.findOne({ username })

        const result = bcryptjs.compareSync(req.body.password, user.password)

        if (result) {
            const token = jwt.sign(
                {
                    id: user._id
                }, config.secret,
                {
                    expiresIn: 60 * 60
                })

            res.json({ message: "You're now login!", token })
        } else {
            res.status(401).json({ message: "Login failed" })
        }
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}
user.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
           return;
        }
       res.send({
           message:
             "User was registered successfully! Please check your email",
        });

      nodemailer.sendConfirmationEmail(
         user.username,
         user.email,
         user.confirmationCode
  );
});
module.exports = { signup , login }