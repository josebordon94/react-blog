import React from 'react'
import { Hidden, makeStyles } from '@material-ui/core'
// import { BrowserRouter, Route } from 'react-router-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import MainBlog from '../pages/MainBlog'
import PostDetail from '../pages/PostDetail'
import Create from '../pages/Create'
import Edit from '../pages/Edit'
import Error404 from '../pages/Error404'

const estilos = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
}))

const Container = () => {
  const classes = estilos()
  const [abrir, setAbrir] = React.useState(false)

  const accionAbrir = () => {
    setAbrir(!abrir)
  }

  return (
    <Router>
      <div className={classes.root}>
        <Navbar accionAbrir={accionAbrir} />
        <div className={classes.content}>
          <div className={classes.toolbar}></div>
          <Switch>
            <Route path="/" exact component={MainBlog} />
            <Route path="/create" exact component={Create} />
            <Route path="/edit/:id" exact component={Edit} />
            <Route path="/error404" exact component={Error404} />
            <Route path="/:id" exact component={PostDetail} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Container
