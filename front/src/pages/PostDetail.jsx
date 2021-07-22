import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import postsAPI from '../services/posts'
import LinearProgress from '../components/LinearProgress'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
  image: {
    width: '100%',
    maxWidth: '100%',
  },
  box: {
    width: '85%',
  },
  bodyText: {
    marginTop: '1em',
  },
}))

function PostDetail(props) {
  const classes = useStyles()

  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async function () {
      const res = await postsAPI.get.postDetail(props.match.params.id)
      console.log(res)
      setPost(res.data)
      setLoading(false)
    }
    getData()
  }, [])

  if (loading) {
    return <LinearProgress />
  }
  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" color="initial">
            {post.title}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.bodyText}
          >
            {post.content}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box boxShadow={3} className={classes.box}>
            <img src={'img/' + post.image} className={classes.image} />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default PostDetail
