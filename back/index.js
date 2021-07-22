const express = require('express')
const app = express()
const apiRouter = require('./routes/api')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
require('./db')

app.use('/api', apiRouter)

const port = 4000
app.listen(port, () => {
  console.log(`Server running on port ${port}!`)
})
