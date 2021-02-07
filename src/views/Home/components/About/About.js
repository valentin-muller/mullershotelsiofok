import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '10%',
    },
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',

    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '15%',
    },
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 auto',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20%',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      mmargin: 'auto',
    },
  },
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
}));

const About = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Elérhetőségünk"
        subtitle="Szobafoglalással, vagy bármilyen kérdéssel kapcsolatban állunk rendelkezésedre a hét minden napján."
        data-aos="fade-up"
        // align={isMd ? 'center' : 'left'}
      />
      <List disablePadding className={classes.list}>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemAvatar className={classes.listItemAvatar}>
            <Avatar
              src="/assets/images/illustrations/contact-icon-phone.png"
              srcSet="/assets/images/illustrations/contact-icon-phone@2x.png 2x"
              className={classes.icon}
            />
          </ListItemAvatar>
          <ListItemText
            className={classes.listItemText}
            primary="Telefon"
            secondary="+36 20 458 5814"
            primaryTypographyProps={{
              className: classes.title,
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
              component: 'span',
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemAvatar className={classes.listItemAvatar}>
            <Avatar
              src="/assets/images/illustrations/contact-icon-mail.png"
              srcSet="/assets/images/illustrations/contact-icon-mail@2x.png 2x"
              className={classes.icon}
            />
          </ListItemAvatar>
          <ListItemText
            className={classes.listItemText}
            primary="Email"
            secondary="mullers106@gmail.com"
            primaryTypographyProps={{
              className: classes.title,
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemAvatar className={classes.listItemAvatar}>
            <Avatar
              src="/assets/images/illustrations/contact-icon-pin.png"
              srcSet="/assets/images/illustrations/contact-icon-pin@2x.png 2x"
              className={classes.icon}
            />
          </ListItemAvatar>
          <ListItemText
            className={classes.listItemText}
            primary="Recepciónk"
            secondary="Fő utca 106, Siófok 8600"
            primaryTypographyProps={{
              className: classes.title,
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
            }}
          />
        </ListItem>
      </List>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default About;
