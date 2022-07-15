const Article = require("../models/Article.model")

const articleResolvers = {
    getAllArticles: async () => {
        const docs = await Article.find()
        
        return docs
    },
    getArticle: async (parent, args, context, info) => {
        const {id} = args

        return await Article.findById(id)
    },
}

module.exports = articleResolvers