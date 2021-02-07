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
    position: 'absolute',
    zIndex: '1',
    fontWeight: 'bold',
    overflow: 'auto',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('xl')]: {
      top: '28%',
      left: '51%',
      fontSize: '50px',
    },
    [theme.breakpoints.only('lg')]: {
      top: '28%',
      left: '50%',
      fontSize: '45px',
    },
    [theme.breakpoints.only('md')]: {
      top: '28%',
      left: '50%',
      fontSize: '35px',
    },
    [theme.breakpoints.down('sm')]: {
      top: '43%',
      left: '29%',
    },
  },
  whiteText: {
    position: 'absolute',
    zIndex: '1',
    color: 'white',
    fontSize: '55px',
    [theme.breakpoints.up('xl')]: {
      top: '28%',
      left: '30%',
      fontSize: '50px',
    },
    [theme.breakpoints.only('lg')]: {
      top: '28%',
      left: '27%',
      fontSize: '45px',
    },
    [theme.breakpoints.only('md')]: {
      top: '28%',
      left: '26%',
      fontSize: '35px',
    },
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
                strings: [' Balaton🌊', ' Siófok📍', ' Müllers🚀'],
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
