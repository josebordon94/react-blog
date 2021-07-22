const router = require('express').Router()
const { Post, Category } = require('../../db')

//Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: ['id', 'title', 'image', 'createdAt'],
      order: [['createdAt', 'DESC']],
      include: [{ model: Category, as: 'category' }],
    })
    res.json(posts)
  } catch (e) {
    console.log(e)
    res.json({ error: true, msg: e })
  }
})

//Get one post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [{ model: Category, as: 'category' }],
    })
    if (post === null) {
      res
        .status(404)
        .send('The ID ' + req.params.id + " doesn't match with any post.")
    } else {
      res.json(post)
    }
  } catch (e) {
    console.log(e)
    res.json({ error: true, msg: e })
  }
})

//Insert new post
router.post('/', async (req, res) => {
  try {
    //Check valid image name
    const validImage = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(req.body.image)
    console.log('Valid image: ', validImage)
    if (validImage) {
      console.log('Data: ', req.body)
      const post = await Post.create(req.body)
      res.json(post)
    } else {
      res
        .status(400)
        .send(
          '¡Invalid image format! Please upload a valid image (JPG, JPEG, GIF, PNG, BMP)',
        )
    }
  } catch (e) {
    console.log(e)
    res.status(500).send('Invalid data.')
  }
})

//Update post by ID
router.patch('/:id', async (req, res) => {
  const post = await Post.update(req.body, {
    where: { id: req.params.id },
  })
  console.log(post)
  const updatedPost = await Post.findByPk(req.params.id)
  if (updatedPost === null) {
    res
      .status(404)
      .send(
        'The ID ' +
          req.params.id +
          " doesn't match with any post. No post was updated.",
      )
  } else {
    res.json({ success: 'Post updated' })
  }
  console.log(post)
})

//Delete post by ID
router.delete('/:id', async (req, res) => {
  const post = await Post.destroy({
    where: { id: req.params.id },
  })
  //Check if a post was deleted. Otherwise, the post ID was incorrect.
  if (post === 0) {
    res
      .status(404)
      .send(
        'The ID ' +
          req.params.id +
          " doesn't match with any post. No post was deleted.",
      )
  } else {
    res.json({ success: 'Post deleted' })
  }
  console.log(post)
})

module.exports = router
