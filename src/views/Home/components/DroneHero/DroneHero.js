import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    height: 'auto',
    maxWidth: '100vw',
    // margin: 'auto',
  },
  typed: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      height: '30px',
      fontSize: '40px',
      minWidth: '100vw',
      maxWidth: '100vw',
      position: 'absolute',
    },
  },
  whiteText: {
    color: 'white',
    fontSize: '55px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
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
