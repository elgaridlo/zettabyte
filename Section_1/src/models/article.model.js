const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    // comments: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'comment'
    // },
},{
    timestamps: true,
})

articleSchema.plugin(mongoosePaginate);

const Article = mongoose.model('article', articleSchema)

module.exports = Article