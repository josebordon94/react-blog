import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import BlogCard from '../components/BlogCard'
import postsAPI from '../services/posts'
import LinearProgress from '../components/LinearProgress'
import NewPostButton from '../components/NewPostButton'

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  card: {
    height: '100%',
    paddingTop: 5,
    backgroundColor: '#fff',
  },
}))

function MainBlog() {
  const classes = useStyles()

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async function () {
    const res = await postsAPI.get.posts()
    console.log(res)
    setPosts(res.data)
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])

  const reload = () => {
    setLoading(true)
    getData()
  }

  if (loading) {
    return <LinearProgress />
  }
  return (
    <Container className={classes.blogsContainer} maxWidth="lg">
      <NewPostButton />
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={post.id}>
            <BlogCard
              title={post.title}
              category={post.category.description}
              image={post.image}
              id={post.id}
              reload={reload}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default MainBlog
