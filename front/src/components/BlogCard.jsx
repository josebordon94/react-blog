import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  ButtonGroup,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ImportContactsIcon from '@material-ui/icons/ImportContacts'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import postsAPI from '../services/posts'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: 'flex',
    margin: '0 5px',
    justifyContent: 'space-between',
  },
  button: {
    width: '10rem',
  },
}))

export default function BlogCard(props) {
  const { title, id, image, category, reload } = props
  const classes = useStyles()
  const history = useHistory()

  const handleDelete = async () => {
    const res = await postsAPI.delete.deletePost(id)
    console.log(res)
    reload()
  }

  const handleEdit = () => {
    history.push('/edit/' + id)
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={'img/' + image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Category: {category}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Link to={'/' + id}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            startIcon={<ImportContactsIcon />}
          >
            Leer
          </Button>
        </Link>

        <ButtonGroup
          variant="contained"
          color="secondary"
          aria-label="contained primary button group"
        >
          <Button>
            <EditIcon onClick={handleEdit} />
          </Button>
          <Button onClick={handleDelete}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  )
}
