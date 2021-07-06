import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    background:
      'url(https://ik.imagekit.io/j6phbjneuop/ezgif.com-gif-maker__10__0NZ7lNuXy.gif) no-repeat left bottom',
    backgroundSize: 'full-width',
    backgroundColor: theme.palette.alternate.main,
  },
  cover: {
    position: 'relative',
    zIndex: 20,
    width: '100%',
    height: '100%',
  },
  image: {
    objectFit: 'cover',
  },
}));



const docsButton = (
  <Button size="large" variant="outlined" color="" component="a" href="/about">
    OUR STORY
  </Button>

);

const buyButton = (
  <Button
    size="large"
    variant="contained"
    color=""
    component="a"
    href="/enterprise"
  >
    Products
  </Button>
);

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <br />
      <br />
      <br />
      <HeroShaped

        leftSide={
          <SectionHeader

            title="Breakthrough Discoveries need
             Leadership"
            subtitle="Incepted in 2011 by a team of highly experienced and proficient professionals, Premas Life Sciences Pvt Ltd (PLS) is a young and focused Life Science company based out of Delhi, with a vision to be the technology & knowledge partners for Indian research & clinical diagnostics community."
            subtitleColor="color.blue"
            subtitleVariant="h5"
            ctaGroup={[docsButton, buyButton]}
            align="left"
            data-aos="fade-up"
            titleVariant="h2"
          />
        }
        rightSide={
          <div className={classes.cover}>
            <Image
              src="https://ik.imagekit.io/j6phbjneuop/output-onlinejpgtools__1__6SSY9woct.png"
              srcSet="https://ik.imagekit.io/j6phbjneuop/output-onlinejpgtools__1__6SSY9woct.png"
              className={classes.image}
              lazyProps={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        }
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
