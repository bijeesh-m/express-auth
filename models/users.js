
const mongoose = require("mongoose");

const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    age: Number
});

userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})


const Users = mongoose.model("users", userSchema)
module.exports = Users