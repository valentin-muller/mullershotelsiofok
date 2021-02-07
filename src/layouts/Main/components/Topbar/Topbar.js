import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  Typography,
  IconButton,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';

import { Image } from 'components/atoms';
import { isLightMode, sessionStorage } from 'utils';

const useStyles = makeStyles(theme => ({
  root: {},
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  navLink: {
    fontWeight: 300,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 140,
      height: 40,
      paddingRight: '20px',
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  menuButton: {
    paddingLeft: '35px',
  },
  darkMode: {
    paddingLeft: '20px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '30px',
    },
  },
  kontakt: {
    paddingLeft: '35px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const Topbar = props => {
  const { className, onSidebarOpen, pages, ...rest } = props;

  const classes = useStyles();

  const [isLightModeTheme, setLightModeTheme] = useState(false);

  useEffect(() => {
    setLightModeTheme(isLightMode());
  }, []);

  const toggleMode = () => {
    const currentMode = sessionStorage.getItem('themeMode') || '';
    if (currentMode === 'dark') {
      sessionStorage.setItem('themeMode', 'light');
    } else {
      sessionStorage.setItem('themeMode', 'dark');
    }

    window.location.reload();
  };

  const redirectContact = id => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }
      window.scrollTo({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
      });
    });
  };

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="mullers">
          <Image
            className={classes.logoImage}
            src={
              isLightModeTheme
                ? '/assets/images/photos/muller/logo.svg'
                : '/assets/images/photos/muller/logo_negative.svg'
            }
            alt="thefront"
            lazy={false}
          />
        </a>
      </div>

      <div className={classes.darkMode}>
        <FormControlLabel
          control={<Switch color="primary" checked={isLightModeTheme} />}
          label={
            <Typography variant="body1" color="textSecondary">
              Fény
            </Typography>
          }
          labelPlacement="end"
          onChange={() => toggleMode()}
        />
      </div>

      <div className={classes.flexGrow} />

      <Hidden smDown>
        <Link to="/pricing">
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.menuButton}
          >
            Árak
          </Typography>
        </Link>

        <Link to="/gallery">
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.menuButton}
          >
            Galéria
          </Typography>
        </Link>

        <Link to="/bloglist">
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.menuButton}
          >
            Blog
          </Typography>
        </Link>
        <Link to='/home'>
          <Typography
            variant="body1"
            color="textSecondary"
            onClick={() => redirectContact('contact')}
            className={classes.kontakt}
          >
            Kontakt
          </Typography>
        </Link>
        <Link to='/pricing'>
          <Typography
            variant="body1"
            color="textSecondary"
            onClick={() => redirectContact('faq')}
            className={classes.kontakt}
          >
            GY.I.K.
          </Typography>
        </Link>
      </Hidden>

      <Hidden mdUp>
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
};

export default Topbar;
