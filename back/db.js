const Sequelize = require('sequelize')

const PostModel = require('./models/posts')
const CategoryModel = require('./models/categories')

const sequelize = new Sequelize('blogdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

const Post = PostModel(sequelize, Sequelize)
const Category = CategoryModel(sequelize, Sequelize)

//Add foreign key category_id in post table
Category.hasOne(Post, {
  foreignKey: {
    name: 'category_id',
  },
})
Post.belongsTo(Category, {
  foreignKey: {
    name: 'category_id',
  },
})

sequelize.sync({ force: false }).then(() => {
  console.log('Tables loaded')
})

module.exports = {
  Post,
  Category,
}
