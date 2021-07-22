const router = require('express').Router()
const apiPostsRouter = require('./api/posts')
const apiCategoriesRouter = require('./api/categories')
router.use('/posts', apiPostsRouter)
router.use('/categories', apiCategoriesRouter)
module.exports = router
