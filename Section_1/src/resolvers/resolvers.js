const Article = require("../models/Article.model")

const resolvers = {
    Query : {
        hello: () => {
            return 'Hello World'
        },
        getAllArticles: async () => {
            const docs = await Article.find()

            return docs
        }
    },
    Mutation: {
        createArticle: async (parent, args, context, info) => {
            const {title, content} = args.create

            const articleNew = await Article.create({title, content})

            return articleNew
        }
    }
}

module.exports = resolvers