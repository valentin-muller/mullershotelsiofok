import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { IconAlternate } from 'components/molecules';
import { Section, Parallax } from 'components/organisms';
import {
  DroneInn,
  DroneHostel,
  DroneHero,
  RoomsInn,
  MapInn,
  RoomsHostel,
  MapHostel,
  About,
  ContactForm,
} from './components';
import { mapDataHostel, mapDataInn, roomsInn, roomsHostel } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  fullHeight: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disablePaddingTop: {
    paddingTop: 0,
  },
  scrollIcon: {
    background: 'transparent !important',
    border: `2px solid ${colors.amber[500]}`,
    cursor: 'pointer',
  },
  scrollTopIcon: {
    margin: '0 auto',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(12),
    },
  },
  madcapSection: {
    backgroundColor: '#0000008a',
  },
  hero: {
    position: 'absolute',
    zIndex: '1',
    top: '20%',
    left: '29%',
    [theme.breakpoints.down('sm')]: {
      left: '0px',
      top: '33%',
    },
  },
  bothSides: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  parentSides: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  contactSect: {
    margin: '80px',
    [theme.breakpoints.down('sm')]: {
      margin: '15px'
    },
  },
}));

const AttemptTwo = () => {
  const classes = useStyles();

  const scrollTo = id => {
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
    <div>
      <div className={clsx(classes.parentSides)}>
        <DroneHero className={clsx(classes.hero)} />
        <div className={clsx(classes.leftSide, classes.bothSides)}>
          <Parallax
            backgroundImage="/assets/images/photos/muller/Inn/drone/drone_inn_main.jpg"
            id=""
          >
            <div className={clsx(classes.fullHeight, classes.madcapSection)}>
              <Section>
                <DroneInn />
              </Section>
              <IconAlternate
                shape="circle"
                fontIconClass="fas fa-chevron-down"
                color={colors.amber}
                size="small"
                className={classes.scrollIcon}
                onClick={() => scrollTo('roomsInn')}
                data-aos="fade-up"
              />
            </div>
          </Parallax>
        </div>

        <div className={clsx(classes.rightSide, classes.bothSides)}>
          <Parallax
            backgroundImage="/assets/images/photos/muller/Hostel/DroneHostel.jpg"
            id="DroneHostel"
          >
            <div className={clsx(classes.fullHeight, classes.madcapSection)}>
              <Section>
                <DroneHostel />
              </Section>
              <IconAlternate
                shape="circle"
                fontIconClass="fas fa-chevron-down"
                color={colors.amber}
                size="small"
                className={classes.scrollIcon}
                onClick={() => scrollTo('roomsHostel')}
                data-aos="fade-up"
              />
            </div>
          </Parallax>
        </div>
      </div>

      <Section id="roomsInn">
        <MapInn data={mapDataInn} />
        <RoomsInn data={roomsInn} />
      </Section>

      <Divider className={classes.divider} />

      <Section id="roomsHostel">
        <MapHostel data={mapDataHostel} />
        <RoomsHostel data={roomsHostel} />
      </Section>

      <Divider />

      <div className={clsx(classes.parentSides, classes.contactSect)} id="contact">
        <ContactForm />
        <About />
      </div>
    </div>
  );
};

export default AttemptTwo;
