const articleMutation = require("./article.mutation")
const articleResolvers = require("./article.resolvers")
const commentMutation = require("./comment.mutation")
const commentResolvers = require("./comment.resolvers")

const resolvers = {
    Query : {
        ...articleResolvers,
        ...commentResolvers
    },
    Mutation: {
        ...articleMutation,
        ...commentMutation
    }
}

module.exports = resolvers