import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Divider,
  Hidden,
} from '@material-ui/core'

import React, { useContext } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TranslateIcon from '@material-ui/icons/Translate'
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined'
import { langContext } from '../context/langContext'
import { FormattedMessage } from 'react-intl'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100%)`,
    },
    zIndex: theme.zIndex.drawer + 1,
  },
  languagesMenu: {},
  flagIcon: {
    width: '25px',
    heigth: '25px',
    marginRight: '7px',
    marginTop: '1.5px',
  },
}))

const Navbar = (props) => {
  const classes = useStyles()

  const language = useContext(langContext)

  //Language menu
  const [anchorEl, setAnchorEl] = React.useState(null)

  const showMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Alkemy Blog
        </Typography>
        <Button
          color="inherit"
          startIcon={<TranslateIcon />}
          endIcon={<KeyboardArrowDownOutlinedIcon />}
          onClick={showMenu}
        >
          <FormattedMessage id="languageName" defaultMessage="ESPAÑOL" />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            className={classes.languagesMenu}
            onClick={() => {
              language.setLanguage('es-AR')
              setAnchorEl(null)
            }}
          >
            <img src="img/icons/spain.svg" className={classes.flagIcon} />
            Español
          </MenuItem>
          <Divider />
          <MenuItem
            className={classes.menu}
            onClick={() => {
              language.setLanguage('en-US')
              setAnchorEl(null)
            }}
          >
            <img src="img/icons/uk.svg" className={classes.flagIcon} /> English
          </MenuItem>
        </Menu>
        <IconButton
          aria-label="delete"
          color="inherit"
          href="https://github.com/josebordon94"
        >
          <GitHubIcon />
        </IconButton>
        <Hidden xsDown>
          <IconButton
            aria-label="delete"
            color="inherit"
            href="https://www.linkedin.com/in/josebordon94/"
          >
            <LinkedInIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
