import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    background: 'url(https://ik.imagekit.io/j6phbjneuop/LRM_EXPORT_16949881023488_20190716_173112005_9B2ABGcYo.jpeg) no-repeat center',
    backgroundSize: 'cover',
  },
  section: {
    background: "#000000",
    borderRadius: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      maxWidth: '30%',
      marginRight: 0,
      padding: theme.spacing(9),
    },
  },
  textWhite: {
    color: 'white',
  },
}));

const FooterHero = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section>
        <Section className={classes.section}>
          <SectionHeader
            disableGutter
            data-aos="fade-up"
            align="left"
            titleVariant="h3"
            title={
              <span className={classes.textWhite}>OUR STORY</span>
            }
            subtitle={
              <span className={classes.textWhite}>
                We embrace the power of change to create long-lasting value
                in every direction for our clients, people and communities.
              </span>
            }
            ctaGroup={[
              <Button variant="contained" size="large">
                get started
              </Button>,
            ]}
          />
        </Section>
      </Section>
    </div>
  );
};

FooterHero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default FooterHero;
