const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'comment'
    },
},{
    timestamp: true
})

const Article = mongoose.model('article', articleSchema)

module.exports = Article