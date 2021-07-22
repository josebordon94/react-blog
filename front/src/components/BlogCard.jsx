import React from 'react'
import {
  Card,
  CardActionArea,
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
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  button: {
    margin: theme.spacing(0.2),
    flexBasis: '100%',
  },
}))

export default function BlogCard(props) {
  const { title, id, image, category } = props
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Category: {category}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Link to={'/' + id}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
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
          <Button startIcon={<EditIcon />}>Editar</Button>
          <Button startIcon={<DeleteIcon />}>Eliminar</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  )
}
