import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core';
import { SectionHeader, CountUpNumber } from 'components/molecules';
import { HeroShaped, Map } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: '0 7px 14px 0 rgba(0, 0, 0, 0.2)',
    transition: 'transform .25s',
    '&:hover': {
      boxShadow: '0 7px 14px 0 rgba(0, 0, 0, 0.3)',
      transform: 'translateY(-5px)',
    },
    borderRadius: '15px',
  },
  placementGrid: {
    display: 'flex',
  },
  placementGridItemMiddle: {
    margin: `0 ${theme.spacing(3)}px`,
  },
  map: {
    zIndex: 9,
  },
  border: {
    borderRadius: '15px',
  },
}));

const MapHero = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        className={classes.border}
        leftSide={
          <Grid container spacing={1} data-aos="fade-up">
            <Grid item xs={12}>
              <SectionHeader
                label="KÁLMÁN IMRE STNY. 9, SIÓFOK 8600"
                title={
                  <span>
                    Szállj meg a
                    <Typography
                      color="secondary"
                      variant="inherit"
                      component="span"
                    >
                      {' '}
                      szabad strandhoz közel,{' '}
                    </Typography>
                    séta távolságra mindentől
                  </span>
                }
                subtitle="Müller's Inn épületünk a régi Fő utcán található. Távolabb a belváros zajától, de mégis minden gyalogosan elérhető. Siófok legnagyobb szabadstrandjához közel."
                align="left"
                fadeUp
                disableGutter
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.placementGrid}>
                <div>
                  <CountUpNumber
                    end={450}
                    label="Petőfi sétany"
                    textColor="secondary"
                    suffix=" méter"
                  />
                </div>
                <div className={classes.placementGridItemMiddle}>
                  <CountUpNumber
                    end={250}
                    label="Szabad strand"
                    textColor="secondary"
                    suffix=" méter"
                  />
                </div>
                <div>
                  <CountUpNumber
                    end={700}
                    label="Vasútállomás"
                    textColor="secondary"
                    suffix=" méter"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        }
        rightSide={
          <Map
            center={[46.905, 18.047]}
            zoom={15}
            pins={data}
            className={classes.map}
          />
        }
      />
    </div>
  );
};

MapHero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default MapHero;
