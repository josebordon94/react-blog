import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import BlogCard from '../components/BlogCard'
import postsAPI from '../services/posts'
import LinearProgress from '../components/LinearProgress'

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
}))

function MainBlog() {
  const classes = useStyles()

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async function () {
      const res = await postsAPI.get.posts()
      console.log(res)
      setPosts(res.data)
      setLoading(false)
    }
    getData()
  }, [])

  if (loading) {
    return <LinearProgress />
  }
  return (
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={post.id}>
            <BlogCard
              title={post.title}
              category={post.category.description}
              image={post.image}
              id={post.id}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default MainBlog
