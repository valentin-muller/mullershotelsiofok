import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';


const useStyles = makeStyles(theme => ({
  root: {},
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const DroneInn = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}></span>}
        titleVariant="h1"
        subtitle={
          <span className={classes.textWhite}>Fő utca 106, Siófok 8600</span>
        }
        ctaGroup={[
          <Button
            target="_blank"
            variant="outlined"
            color="secondary"
            size="large"
            href="https://www.booking.com/hotel/hu/muller-s-inn.hu.html?aid=356980;label=gog235jc-1DCAsoZ0IMbXVsbGVyLXMtaW5uSDNYA2i2AYgBAZgBEbgBB8gBDNgBA-gBAYgCAagCA7gCi76z_gXAAgHSAiRkZDUxNDQ5OS01ZWMzLTQ4ZTQtOThhOC1hYjAzZjRhZGMyNmTYAgTgAgE;sid=d79095d1eb660a71d638d76c1603272c;dist=0&keep_landing=1&sb_price_type=total&type=total&"
          >
            Foglalok
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

DroneInn.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default DroneInn;
