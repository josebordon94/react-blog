import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { FormControl, Select, MenuItem } from '@material-ui/core'
import categoriesAPI from '../services/categories'
import postsAPI from '../services/posts'
import SaveIcon from '@material-ui/icons/Save'
import { useHistory } from 'react-router'
import ReturnButton from '../components/ReturnButton'
import { FormattedMessage, useIntl } from 'react-intl'
import LinearProgress from '../components/LinearProgress'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0.2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  saveIcon: {
    marginRight: '4px',
  },
}))

export default function Edit(props) {
  const classes = useStyles()
  let history = useHistory()
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = React.useState([])
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    category_id: '',
  })

  useEffect(() => {
    const getPost = async function () {
      const res = await postsAPI.get.postDetail(props.match.params.id)
      console.log('POST ENCONTRADO: ', res)
      setFormData(res.data)
      setLoading(false)
    }
    getPost()
  }, [])

  useEffect(() => {
    const getCategories = async function () {
      const res = await categoriesAPI.get.categories()
      console.log(res)
      setCategories(res.data)
    }
    getCategories()
  }, [])

  const handleCategoryChange = (event) => {
    setFormData({ ...formData, category_id: event.target.value })
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log(formData)
    const insert = async function () {
      const res = await postsAPI.patch.editPost(formData)
      console.log(res)
      history.push('/')
    }
    insert()
  }

  if (loading) {
    return <LinearProgress />
  }
  return (
    <Container>
      <div className={classes.paper}>
        <Typography component="h1" variant="h1">
          <FormattedMessage id="editPostTitle" />
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            autoComplete="fname"
            name="title"
            variant="outlined"
            fullWidth
            id="title"
            label={useIntl().formatMessage({ id: 'title' })}
            autoFocus
            className={classes.input}
            value={formData.title}
            onChange={handleChange}
          />

          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              labelId="demo-simple-select-filled-label"
              id="category"
              value={formData.category_id}
              onChange={handleCategoryChange}
            >
              {categories.map((cat) => (
                <MenuItem value={cat.id} key={cat.id}>
                  {cat.description}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            name="image"
            variant="outlined"
            fullWidth
            id="image"
            label={useIntl().formatMessage({ id: 'url' })}
            autoFocus
            className={classes.input}
            value={formData.image}
            onChange={handleChange}
          />

          <TextField
            variant="outlined"
            fullWidth
            name="content"
            label={useIntl().formatMessage({ id: 'content' })}
            type="text"
            id="content"
            value={formData.content}
            multiline
            rows={8}
            className={classes.input}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <SaveIcon className={classes.saveIcon} />{' '}
            <FormattedMessage id="editPost" />
          </Button>
          <ReturnButton style={{ float: 'left' }} />
        </form>
      </div>
    </Container>
  )
}
