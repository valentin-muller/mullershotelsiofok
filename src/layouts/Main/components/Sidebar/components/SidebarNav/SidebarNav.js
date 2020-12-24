/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Divider,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navLink: {
    fontWeight: 300,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
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
  divider: {
    width: '100%',
  },
}));

const SidebarNav = props => {
  const { pages, onClose, className, ...rest } = props;
  const classes = useStyles();

  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding>
        <ListItem disableGutters>
          <Typography
            variant="body2"
            color="primary"
            className={classes.menuGroupTitle}
          >
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={'a'}
              href={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
              color="textPrimary"
              onClick={onClose}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const LandingPages = () => {
    const { services, apps, web } = landings.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={services} />
          <MenuGroup item={apps} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={web} />
        </div>
      </div>
    );
  };

  const SupportedPages = () => {
    const {
      career,
      helpCenter,
      company,
      contact,
      blog,
      portfolio,
    } = supportedPages.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={career} />
          <MenuGroup item={helpCenter} />
          <MenuGroup item={company} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={contact} />
          <MenuGroup item={blog} />
          <MenuGroup item={portfolio} />
        </div>
      </div>
    );
  };

  const AccountPages = () => {
    const { settings, signup, signin, password, error } = account.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={settings} />
          <MenuGroup item={signup} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={signin} />
          <MenuGroup item={password} />
          <MenuGroup item={error} />
        </div>
      </div>
    );
  };

      const scrollTo = id => {
        onClose()
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
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/gallery">
          <Typography
            variant="h6"
            color="primary"
            component="a"
            target="blank"
            onClick={() => onClose()}
          >
            Galéria
          </Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/bloglist">
          <Typography
            variant="h6"
            color="primary"
            component="a"
            target="blank"
            onClick={() => onClose()}
          >
            Blog
          </Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/home">
          <Typography
            variant="h6"
            color="primary"
            component="a"
            target="blank"
            onClick={() => scrollTo('contact')}
          >
            Kontakt
          </Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          fullWidth
          component="a"
          target="blank"
          href="https://www.booking.com/hotel/hu/muller-s-inn.hu.html?aid=356980;label=gog235jc-1DCAsoZ0IMbXVsbGVyLXMtaW5uSDNYA2i2AYgBAZgBEbgBB8gBDNgBA-gBAYgCAagCA7gCoODT_gXAAgHSAiRjYmQzNjc5Ni0zYjUwLTRmMWQtOTM1YS1iOGI2NGJmZGJmYWbYAgTgAgE;sid=d79095d1eb660a71d638d76c1603272c;dist=0&keep_landing=1&sb_price_type=total&type=total&#availability"
        >
          Foglalok
        </Button>
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
