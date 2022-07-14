const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    article_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'article'
    },
},{
    timestamp: true
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment