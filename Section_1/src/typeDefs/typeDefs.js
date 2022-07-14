const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Comment {
        id: ID
        comment: String
        article_id: [Article]
    }

    type Article {
        id: ID
        title: String
        content: String
    }

    type Query {
        hello: String
        getAllArticles: [Article]
    }

    input ArticleCreate{
        title: String
        content: String
    }

    type Mutation {
        createArticle(create: ArticleCreate): Article
    }
`

module.exports = typeDefs