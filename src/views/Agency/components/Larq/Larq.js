import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const Larq = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>JUNO</span>}
        titleVariant="h1"
        subtitle={<span className={classes.textWhite}>Targeted NGS Library preparation</span>}
        ctaGroup={[
          <Button href='/enterprise/' variant="outlined" color="secondary" size="large">
            Explore Fluidigm Products
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Larq.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Larq;
