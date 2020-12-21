import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  typed: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
  },
  whiteText: {
    color: 'white',
    fontSize: '55px',
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden',
    },
  },
}));

const DroneHero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <>
            <span className={clsx(classes.whiteText)}>Ha nyár, akkor </span>
            <TypedText
              component="span"
              variant="h2"
              color="secondary"
              className={classes.typed}
              typedProps={{
                strings: [' Balaton 🌊', ' Siófok 📍', ' Müllers 🚀'],
                typeSpeed: 50,
                loop: true,
              }}
            />
          </>
        }
      />
    </div>
  );
};

DroneHero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default DroneHero;
