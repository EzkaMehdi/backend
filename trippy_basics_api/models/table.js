
const mongoose = require("mongoose")

const tableSchema = mongoose.Schema({
    seat: Number,
    isVIP: Boolean
})

const tableModel = mongoose.model("Table", tableSchema)

module.exports = tableModel