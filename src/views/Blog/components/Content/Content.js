import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Typography, GridList, GridListTile, IconButton } from '@material-ui/core';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {},
  section: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
  },
  socialIcon: {
    borderRadius: 0,
    marginRight: theme.spacing(2),
    color: theme.palette.text.primary,
    background: theme.palette.alternate.main,
    '&:last-child': {
      marginRight: 0,
    },
  },
  text: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: '25px',
      paddingRight: '25px',
    },
  },
}));

const Content = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.section}>
        <Typography
          component="p"
          variant="h6"
          color="textPrimary"
          className={classes.text}
        >
          {data.headline}
        </Typography>
      </div>
      <div className={classes.section}>
        <Image
          {...data.cover}
          className={classes.image}
          lazyProps={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className={classes.section}>
        <Typography
          component="p"
          variant="h6"
          color="textPrimary"
          className={classes.text}
        >
          {data.textAblak}
        </Typography>
      </div>
      <div className={classes.section}>
        <GridList
          cellHeight={isMd ? 360 : 260}
          cols={2}
          spacing={isMd ? 24 : 8}
        >
          {data.imagesAblak.map((item, index) => (
            <GridListTile key={index} cols={isMd ? item.cols : 2}>
              <Image
                {...item}
                className={classes.image}
                lazyProps={{ width: '100%', height: '100%' }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <div className={classes.section}>
        <Typography
          component="p"
          variant="h6"
          color="textPrimary"
          className={classes.text}
        >
          {data.textFurdo}
        </Typography>
      </div>
      <div className={classes.section}>
        <GridList
          // cellHeight={isMd ? 360 : 260}
          cellHeight={800}
          cols={2}
          spacing={isMd ? 24 : 8}
        >
          {data.imagesFurdo.map((item, index) => (
            <GridListTile key={index} cols={isMd ? item.cols : 2}>
              <Image
                {...item}
                className={classes.image}
                lazyProps={{ width: '100%', height: '100%' }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <div className={classes.section}>
        <Typography
          component="p"
          variant="h6"
          color="textPrimary"
          className={classes.text}
        >
          {data.textSolar}
        </Typography>
      </div>
      <div className={classes.section}>
        <GridList
          // cellHeight={isMd ? 360 : 260}
          cellHeight={800}
          cols={2}
          spacing={isMd ? 24 : 8}
        >
          {data.imagesSolar.map((item, index) => (
            <GridListTile key={index} cols={isMd ? item.cols : 2}>
              <Image
                {...item}
                className={classes.image}
                lazyProps={{ width: '100%', height: '100%' }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

Content.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Content;
