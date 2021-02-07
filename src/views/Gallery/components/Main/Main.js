import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, TypedText } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  folioItem: {
    maxWidth: '300px',
    position: 'relative',
    overflow: 'hidden',
    margin: '10px',
    boxShadow: `0 1.5rem 4rem rgba(22,28,45,.05)`,
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),
    },
    '&:last-child': {
      [theme.breakpoints.up('md')]: {
        marginBottom: 0,
      },
    },
    '&:hover': {
      '& .folio__image': {
        transform: 'scale(1.2)',
      },
      '& .folio__info-wrapper': {
        transform: 'translateY(0)',
      },
    },
  },
  image: {
    transitionDuration: '.7s',
    transform: 'scale(1.0)',
    objectFit: 'cover',
  },
  folioInfoWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.background.paper,
    padding: theme.spacing(4, 2),
    transition: 'transform .6s',
    transform: 'translateY(100%)',
    borderRadius: theme.spacing(2, 0),
  },
  folioTitle: {
    fontWeight: 'bold',
    width: '40vw',
    maxWidth: '40vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      width: '100vw',
      maxWidth: '100vw',
    },

    // color: 'yellow'
  },
  folioSubtitle: {
    textTransform: 'capitalize',
    margin: theme.spacing(1, 0),
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

    width: '100vw',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      flexDirection: 'row',
      maxWidth: '100%',
    },
    [theme.breakpoints.up('md')]: {},
  },
  gridWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  typed: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
}));

const Main = props => {
  const {
    data,
    mainTitle,
    className,
    setSelectedImg,
    setTitle,
    ...rest
  } = props;
  const classes = useStyles();

  const leftGridData = data.slice(0, 4);
  const centerGridData = data.slice(4, 8);
  const rightGridData = data.slice(8);
  const wrapper = [leftGridData, centerGridData, rightGridData];

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography
        style={{ marginTop: 0, color: 'grey' }}
        variant="h2"
        className={classes.folioTitle}
        // color="secondary"
      >
        {mainTitle.text}
        {/* <TypedText
          component="span"
          variant="h2"
          color="secondary"
          className={classes.typed}
          typedProps={{
            strings: [' Balaton', ' Siófok', ' Müllers'],
            typeSpeed: 50,
            loop: false,
          }}
        /> */}
      </Typography>
      <div className={classes.grid}>
        {wrapper.map((column, i) => (
          <div className={classes.gridWrapper} key={i}>
            {column.map((item, index) => (
              <div
                onClick={() => setSelectedImg(item.cover)}
                className={classes.folioItem}
                key={index}
                data-aos="fade-up"
              >
                <Image
                  src={item.cover}
                  alt={item.title}
                  className={clsx('folio__image', classes.image)}
                  lazy={false}
                />
                {/* <div
                  className={clsx(
                    'folio__info-wrapper',
                    classes.folioInfoWrapper,
                  )}
                >
                  <div className={classes.folioInfo}>
                    <Typography
                      variant="h3"
                      className={classes.folioTitle}
                      color="secondary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.folioSubtitle}
                      color="textSecondary"
                    >
                      {item.subtitle}
                    </Typography>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Main;
