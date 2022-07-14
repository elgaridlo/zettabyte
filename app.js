const express = require('express')
const dotenv = require('dotenv')
const {ApolloServer} = require('apollo-server-express')
const connectionDB = require('./Section_1/config/connectionDB')
const resolvers = require('./Section_1/src/resolvers/resolvers')
const typeDefs = require('./Section_1/src/typeDefs/typeDefs')


const startServer = async() => {
    const app = express()
    dotenv.config()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({app: app})

    app.use('/',(req,res) => {
        res.send("Hello Server")
    })

    connectionDB()

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    })
}

startServer()