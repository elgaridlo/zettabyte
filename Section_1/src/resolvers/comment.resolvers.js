const Comment = require("../models/Comment.model")

const commentResolvers = {
    getAllComments: async () => {
        const docs = await Comment.find().populate('article_id')

        return docs
    },
    getComment: async (parent, args, context, info) => {
        const {id} = args

        const comment =  await Comment.findById(id).populate('article_id')
        return comment
    }
}

module.exports = commentResolvers