const Users = require("../models/users")
const bcrypt = require("bcryptjs")

//////////////////// REGISTER ///////////////////////

module.exports.register = async (req, res) => {
    try {

        const { username } = req.body

        const isExist = await Users.findOne({ username: username })
        if (isExist) {
            return res.status(409).json({ success: false, message: "User already exists" })
        }
        const newUser = await Users.create(req.body)
        res.status(201).json({ message: "Registration success", success: true, newUser })


    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong!", error: error.message })
    }
}

////////////////////// LOGIN  //////////////////////////////

module.exports.login = async (req, res) => {
    try {

        const { username, password } = req.body
        const isExist = await Users.findOne({ username: username })

        if (!isExist) {
            return res.status(404).json({ message: "Account doesn't exist", success: false })
        }

        const auth = await bcrypt.compare(password, isExist.password)

        if (!auth) {
            return res.status(401).json({ message: "Invalid password!", success: false })
        }

        res.status(200).json({ message: "Login success", success: true })

    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong!", error: error.message })
    }
}