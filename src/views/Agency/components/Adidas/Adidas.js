import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const Adidas = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>Novaseq 6000</span>}
        titleVariant="h1"
        subtitle={
          <span className={classes.textWhite}>
            Broad, deep sequencing for bigger discoveries.
          </span>
        }
        ctaGroup={[
          <Button href='/enterprise/' variant="outlined" color="secondary" size="large">
            Explore all Illuminia Products
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Adidas.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Adidas;
