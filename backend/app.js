require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const path = require('path')

const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user')
const likeRoutes = require('./routes/like')
const commentRoutes = require('./routes/comment')
const refreshRoutes = require('./routes/refresh')

const app = express()

app.use(cors())
app.use(helmet())

app.use(express.json())

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/api/auth', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/posts', commentRoutes)
app.use('/api/posts', likeRoutes)
app.use('/api/posts/getId', refreshRoutes)

module.exports = app