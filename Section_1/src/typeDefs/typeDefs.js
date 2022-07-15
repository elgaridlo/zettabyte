const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Comment {
        id: ID
        comment: String
        article_id: Article
    }

    type Article {
        id: ID
        title: String
        content: String
    }

    type Query {
        getAllArticles: [Article]
        getArticle(id: ID): Article
        getAllComments: [Comment]
        getComment(id: ID): Comment
    }

    input ArticleCreate{
        title: String
        content: String
    }

    input CommentCreate{
        comment: String
        article_id: String
    }

    input ArticlePagination {
        search: String
        page: Int
        limit: Int
    }

    type Mutation {
        createArticle(create: ArticleCreate): Article
        updateArticle(id:ID, update: ArticleCreate): Article
        deleteArticle(id:ID): String
        getArticlesPagination(pagination: ArticlePagination): [Article]
        createComment(create: CommentCreate): Comment
        updateComment(id:ID, update: CommentCreate): Comment
        deleteComment(id:ID): String

    }
`
module.exports = typeDefs