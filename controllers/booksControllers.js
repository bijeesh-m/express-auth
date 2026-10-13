const Books = require("../models/books");

module.exports.addBook = async (req, res) => {
    try {
        console.log(req.body);
        const newBook = await Books.create(req.body);
        res.status(201).json({ success: true, message: "Book added..", newBook })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports.getAllBooks = async (req, res) => {
    try {
        const books = await Books.find()
        res.status(200).json({ success: true, books, message: "Books fetched successfully!" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}



module.exports.getBookById = async (req, res) => {
    try {
        const { id } = req.params
        const book = await Books.findById(id)
        if (book) {
            return res.status(200).json({ success: true, message: "Book Fetched!", book })
        }

        res.status(404).json({ success: false, message: "Book not found!" })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}


module.exports.updateBook = async (req, res) => {
    try {
        const { title, author, price, category, publishedYear } = req.body
        const { id } = req.params;

        // const book = await Books.findById(id)

        const updatedBook = await Books.findByIdAndUpdate(id, {
            $set: {
                title: title && title,
                author: author && author,
                price: price && price,
                category: category && category,
                publishedYear: publishedYear && publishedYear
            },
        }, { returnDocument: "after" })
        res.status(200).json({ success: true, message: "Book updated", updatedBook })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}


module.exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBook = await Books.findByIdAndDelete(id);
        res.status(200).json({ message: "Book deleted successfully", success: true, deleteBook })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

