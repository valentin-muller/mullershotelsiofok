import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { Icon } from 'components/atoms';
import { SectionHeader, SwiperImage } from 'components/molecules';
import { Section, CardPricingStandard } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {},
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionContainer: {
    // backgroundColor: theme.palette.primary.dark,
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(20),
    borderRadius: '0 0 100% 0',
  },
  textWhite: {
    color: 'white',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(0, 2),
  },
  toggleButtonGroup: {
    background: 'transparent',
  },
  toggleButton: {
    background: 'transparent',
    border: '1px solid white',
    padding: theme.spacing(1, 5),
    [theme.breakpoints.down('md')]: {
      width: '110px',
    },
  },
  toggleButtonActive: {
    backgroundColor: 'white !important',
  },
  toggleTitle: {
    textTransform: 'capitalize',
  },
  toggleTitleActive: {
    color: theme.palette.secondary.main,
  },
  pricingContainer: {
    position: 'relative',
    marginTop: theme.spacing(-20),
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  cardPricing: {
    '& .countup-number__count-wrapper': {
      textAlign: 'left',
      marginBottom: 0,
      fontWeight: 'bold',
    },
  },
  galleryButton: {
    paddingBottom: '10px',
  },
  swiperNavButton: {
    width: `${theme.spacing(3)}px !important`,
    height: `${theme.spacing(3)}px !important`,
    padding: `${theme.spacing(2)}px !important`,
  },
  image: {
    borderRadius: '3%',
  },
}));

const Main = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [pricingOption, setPricingOption] = React.useState('szezon');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.sectionContainer}>
        <Section narrow className={classes.pagePaddingTop}>
          <SectionHeader
            title="Áraink"
            subtitle="A Szálláshely OTP SZÉP kártya elfogadó hely. A helyszínen csak készpénzzel vagy szép kártyával lehet fizetni,
BANKKÁRTYÁS fizetés nem lehetséges. "
            titleProps={{
              className: clsx(classes.textWhite, classes.fontWeightBold),
              variant: 'h2',
            }}
            subtitleProps={{
              className: classes.textWhite,
            }}
            data-aos="fade-up"
          />
          <div className={classes.toggleContainer} data-aos="fade-up">
            <ToggleButtonGroup
              value={pricingOption}
              exclusive
              onChange={handleClick}
              className={classes.toggleButtonGroup}
            >
              <ToggleButton
                value="eloszezon"
                className={clsx(
                  classes.toggleButton,
                  pricingOption === 'eloszezon'
                    ? classes.toggleButtonActive
                    : {},
                )}
              >
                <Typography
                  variant="subtitle1"
                  className={clsx(
                    classes.fontWeightBold,
                    classes.textWhite,
                    classes.toggleTitle,
                    pricingOption === 'eloszezon'
                      ? classes.toggleTitleActive
                      : {},
                  )}
                >
                  ELŐSZEZON <br />
                  05.01. - 07.01.
                </Typography>
              </ToggleButton>

              <ToggleButton
                value="szezon"
                className={clsx(
                  classes.toggleButton,
                  pricingOption === 'szezon' ? classes.toggleButtonActive : {},
                )}
              >
                <Typography
                  variant="subtitle1"
                  className={clsx(
                    classes.fontWeightBold,
                    classes.textWhite,
                    classes.toggleTitle,
                    pricingOption === 'szezon' ? classes.toggleTitleActive : {},
                  )}
                >
                  FŐSZEZON <br />
                  07.02. - 08.28.
                </Typography>
              </ToggleButton>

              <ToggleButton
                value="utoszezon"
                className={clsx(
                  classes.toggleButton,
                  pricingOption === 'utoszezon'
                    ? classes.toggleButtonActive
                    : {},
                )}
              >
                <Typography
                  variant="subtitle1"
                  className={clsx(
                    classes.fontWeightBold,
                    classes.textWhite,
                    classes.toggleTitle,
                    pricingOption === 'utoszezon'
                      ? classes.toggleTitleActive
                      : {},
                  )}
                >
                  UTÓSZEZON <br />
                  08.29. - 12.24.
                </Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Section>
      </div>
      <div className={classes.pricingContainer}>
        <div className={classes.pricingWrapper}>
          <Section className={classes.sectionNoPaddingTop}>
            <Grid container spacing={isMd ? 4 : 2}>
              {data.map((item, index) => (
                <Grid item xs={12} md={4} data-aos="fade-up" key={index}>
                  <CardPricingStandard
                    variant="outlined"
                    withShadow={item.isHighlighted ? true : false}
                    title={item.title}
                    liftUp
                    subtitle={item.subtitle}
                    priceComponent={
                      <Typography variant="h3" color="textPrimary">
                        €
                        {pricingOption === 'szezon'
                          ? item.szezon
                          : pricingOption === 'eloszezon'
                          ? item.eloszezon
                          : item.utoszezon}
                          /éj
                      </Typography>
                    }
                    features={item.features}
                    featureCheckComponent={
                      <Icon
                        fontIconClass="far fa-check-circle"
                        fontIconColor={theme.palette.primary.main}
                      />
                    }
                    cta={
                      <div>
                      <div className={classes.galleryButton}> 
                  <SwiperImage
                    navigationButtonStyle={classes.swiperNavButton}
                    items={item.images}
                    imageClassName={classes.image}
                  />
                              
                      </div>
                      <Button
                        color="primary"
                        variant={item.isHighlighted ? 'contained' : 'outlined'}
                        fullWidth
                        size="large"
                        href={item.link}
                      >
                        Foglalok
                      </Button> 
                       

                      </div>
                      
                    }
                    disclaimer={item.disclaimer}
                    className={classes.cardPricing}
                  />
                </Grid>
              ))}
            </Grid>
          </Section>
        </div>
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
