const router = require('express').Router()
const { Category } = require('../../db')

//Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll()
    res.json(categories)
  } catch (e) {
    console.log(e)
    res.json({ error: true, msg: e })
  }
})

//Get one category by ID
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id)
    if (category === null) {
      res
        .status(404)
        .send('The ID ' + req.params.id + " doesn't match with any category.")
    } else {
      res.json(category)
    }
  } catch (e) {
    console.log(e)
    res.json({ error: true, msg: e })
  }
})

//Insert new category
router.post('/', async (req, res) => {
  const category = await Category.create(req.body)
  res.json(category)
})

//Update category by ID
router.patch('/:id', async (req, res) => {
  const category = await Category.update(req.body, {
    where: { id: req.params.id },
  })
  console.log(category)
  const updatedPost = await Category.findByPk(req.params.id)
  if (updatedPost === null) {
    res
      .status(404)
      .send(
        'The ID ' +
          req.params.id +
          " doesn't match with any category. No category was updated.",
      )
  } else {
    res.json({ success: 'Category updated' })
  }
  console.log(category)
})

//Delete category by ID
router.delete('/:id', async (req, res) => {
  const category = await Category.destroy({
    where: { id: req.params.id },
  })
  //Check if a category was deleted. Otherwise, the category ID was incorrect.
  if (category === 0) {
    res
      .status(404)
      .send(
        'The ID ' +
          req.params.id +
          " doesn't match with any category. No category was deleted.",
      )
  } else {
    res.json({ success: 'Category deleted' })
  }
  console.log(category)
})

module.exports = router
