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
              {/* <SectionHeader
               
                title={
                
                    <Typography
                      style={{  textShadow: '2px 2px 1px rgba(150, 150, 150, 1)'  }}
                      color="secondary"
                      variant="h3"
                      component="span"
                    >                
                      This is the Hostel
                    </Typography>
                }
                align="left"
                fadeUp
                disableGutter
              /> */}
              <SectionHeader
                label="KÁLMÁN IMRE STNY. 9"
                title={
                  <span>
                    Szállj meg a
                    <Typography
                      color="secondary"
                      variant="inherit"
                      component="span"
                    >
                      {' '}
                      város szívében,{' '}
                    </Typography>
                    séta távolságra mindentől
                  </span>
                }
                subtitle="Müller's Hostel épületünk a belváros közepén a Kálmán Imre sétányon van. 5 perces sétán belül található a Petőfi sétány, a Sió Pláza és a víztorony is."
                align="left"
                fadeUp
                disableGutter
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.placementGrid}>
                <div>
                  <CountUpNumber
                    end={200}
                    label="Petofi Setany"
                    textColor="secondary"
                    suffix=" méter"
                  />
                </div>
                <div className={classes.placementGridItemMiddle}>
                  <CountUpNumber
                    end={300}
                    label="Szabad Strand"
                    textColor="secondary"
                    suffix=" méter"
                  />
                </div>
                <div>
                  <CountUpNumber
                    end={150}
                    label="Vonat állomás"
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
            center={[46.906, 18.05]}
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
