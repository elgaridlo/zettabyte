const Article = require("../models/Article.model")

const articleMutation = {
    createArticle: async (parent, args, context, info) => {
        const {title, content} = args.create

        const articleNew = await Article.create({title, content})

        return articleNew
    },
    deleteArticle: async (parent, args, context, info) => {
        const {id} = args

        const data = await Article.findByIdAndRemove(id)
        return `Article ${data.title} berhasil dihapus`
    },
    updateArticle: async (parent, args, context, info) => {
        const {id} = args
        const {title, content} = args.update

        const update = await Article.findByIdAndUpdate(id, {title, content}, {new: true})

        return update
    },
    getArticlesPagination: async (parent, args, context, info) => {

        const { search, page, limit } = args.pagination

        let filter = {}

        if (!page) return page = 1
        if (!limit) return limit = 5
        const skip = (page - 1) * limit
        
        if (search) {
            const searchFilter = new RegExp(search)
            filter = 
                { "title": searchFilter}
        }

        // const docs = await Article.find()
        const docs = await Article.aggregate([
            { "$match": filter },
            { $sort : { title: -1 } },
            { $skip: skip },
            { $limit : limit},
            { $addFields: {id: "$_id"} }
        ] )

        return docs
    },
}

module.exports = articleMutation