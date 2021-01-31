import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
// import { SwiperImage } from 'components/molecules';
import { Main, Modal } from './components';

import { folioHostel, folioInn, folioTitleInn, folioTitleHostel } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));

const Gallery = () => {
  const classes = useStyles();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className={classes.root}>
      {/* <Hero />
      <Partners data={partners} /> */}
      <Section style={{ margin: '20px auto', padding: 0 }}>
        <Main
          data={folioHostel}
          mainTitle={folioTitleHostel}
          setSelectedImg={setSelectedImg}
        />
        <Main
          data={folioInn}
          mainTitle={folioTitleInn}
          setSelectedImg={setSelectedImg}
        />
      </Section>
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      {/* <SectionAlternate>
        <Contact />
      </SectionAlternate> */}
    </div>
  );
};

export default Gallery;
