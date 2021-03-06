import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { IconAlternate } from 'components/molecules';
import { Section, Parallax } from 'components/organisms';
import {
  Welcome,
  MadCap,
  Process,
  Adidas,
  Larq,
  Nike,



  Contact,
} from './components';
import Medsys from './components/Medsys'





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
  adidasSection: {
    backgroundColor: '#003c0580',
  },
  larqSection: {
    backgroundColor: '#2d402f80',
  },
  nikeSection: {
    backgroundColor: '#5f3f3f80',
  },
}));

const Agency = () => {
  const classes = useStyles();

  const scrollTo = id => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };
  return (
    <div className={classes.root}>
      <div className={classes.fullHeight}>
        <Section className={classes.disablePaddingTop}>
          <Welcome />
        </Section>
        <IconAlternate
          shape="circle"
          fontIconClass="fas fa-chevron-down"
          color={colors.blueGrey}
          size="small"
          className={classes.scrollIcon}
          onClick={() => scrollTo('agency-madcap')}
        />
      </div>
      <Parallax
        backgroundImage="https://ik.imagekit.io/j6phbjneuop/controller-front_M3cFg7H8l4.png"
        id="Miniseq"
      >
        <div className={clsx(classes.fullHeight, classes.madcapSection)}>
          <Section>
            <MadCap />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.blueGrey}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('agency-process')}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <div className={classes.fullHeight} id="agency-process">
        <Section>
          <Process />
        </Section>
        <IconAlternate
          shape="circle"
          fontIconClass="fas fa-chevron-down"
          color={colors.blueGrey}
          size="small"
          className={classes.scrollIcon}
          onClick={() => scrollTo('agency-adidas')}
          data-aos="fade-up"
        />
      </div>
      <Parallax
        backgroundImage="https://ik.imagekit.io/j6phbjneuop/novaseq-6000-rendering-front-open-web-graphic_px3P0F63x.png"
        id="agency-adidas"
      >
        <div className={clsx(classes.fullHeight, classes.adidasSection)}>
          <Section>
            <Adidas />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.blueGrey}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('agency-larq')}
            data-aos="fade-up"
          />
        </div>
      </Parallax>

      <Parallax
        backgroundImage="https://ik.imagekit.io/j6phbjneuop/junofamily-600_9uRdSqGQh.jpg"
        id="nOVASEQ6000"
      >
        <div className={clsx(classes.fullHeight, classes.larqSection)}>
          <Section>
            <Larq />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.blueGrey}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('agency-nike')}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <Parallax
        backgroundImage="https://ik.imagekit.io/j6phbjneuop/500506_1_s-ag9tz1s.png"
        id="agency-nike"
      >
        <div className={clsx(classes.fullHeight, classes.nikeSection)}>
          <Section>
            <Nike />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color="#1597BB"
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('agency-reviews')}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <Parallax
        backgroundImage="https://ik.imagekit.io/j6phbjneuop/Main-Photo-Edited-1-1000x600_V-dpPnKgm.png"
        id="nOVASEQ6000"
      >
        <div className={clsx(classes.fullHeight, classes.larqSection)}>
          <Section>
            <Medsys />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.blueGrey}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('agency-nike')}
            data-aos="fade-up"
          />
        </div>
      </Parallax>


      <Divider />
      <Section>
        <Contact />
      </Section>
      <IconAlternate
        shape="circle"
        fontIconClass="fas fa-chevron-up"
        color={colors.blueGrey}
        size="small"
        className={clsx(classes.scrollIcon, classes.scrollTopIcon)}
        onClick={() => scrollTo('agency-madcap')}
        data-aos="fade-up"
      />
      <Divider />
    </div>
  );
};

export default Agency;
