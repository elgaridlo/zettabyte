const Article = require("../models/Article.model")

const articleMutation = {
    createArticle: async (parent, args, context, info) => {
        const {title, content} = args.create

        const articleNew = await Article.create({title, content})

        return articleNew
    }
}

module.exports = articleMutation