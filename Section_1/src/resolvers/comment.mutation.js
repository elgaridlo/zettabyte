const Comment = require("../models/Comment.model")

const commentMutation = {
    createComment: async (parent, args, context, info) => {
        const {comment, article_id} = args.create

        const commentNew = await Comment.create({comment, article_id})

        return commentNew
    }
}

module.exports = commentMutation