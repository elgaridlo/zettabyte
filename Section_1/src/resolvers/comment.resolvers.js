const Comment = require("../models/Comment.model")

const commentResolvers = {
    getAllComments: async () => {
        const docs = await Comment.find().populate('article_id')

        return docs
    },
    getComment: async (parent, args, context, info) => {
        const {id} = args

        return await Comment.findById(id)
    }
}

module.exports = commentResolvers