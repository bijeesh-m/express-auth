const express = require("express");
const connectDB = require("./configs/db");
const booksRoutes = require("./routes/booksRoutes")
const usersRoutes = require("./routes/usersRoutes")
const authRoutes = require("./routes/authRoutes")

const app = express();


require("dotenv").config();

connectDB()

app.use(express.json())

app.use(booksRoutes)
app.use(authRoutes)


app.listen(5000, () => {
    console.log("Server is running on port 5000");
})




