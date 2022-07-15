const Comment = require("../models/Comment.model")

const commentMutation = {
    createComment: async (parent, args, context, info) => {
        const {comment, article_id} = args.create

        const commentNew = await Comment.create({comment, article_id})

        return commentNew
    },
    deleteComment: async (parent, args, context, info) => {
        const {id} = args

        const data = await Comment.findByIdAndRemove(id)
        return `Comment ${data.title} berhasil dihapus`
    },
    updateComment: async (parent, args, context, info) => {
        const {id} = args
        const {comment} = args.update

        const update = await Comment.findByIdAndUpdate(id, {comment}, {new: true}).populate('article_id')

        return update
    },
}

module.exports = commentMutation