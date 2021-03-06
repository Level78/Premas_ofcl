import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    background: `url(https://ik.imagekit.io/j6phbjneuop/LRM_EXPORT_16979249647198_20190716_173141374_HIS571KGn.svg) no-repeat #3F50B5`,
    overflow: 'hidden',
    minHeight: 400,
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'right -400px top',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPosition: 'right -250px top',
    },
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
  },
  sectionHeader: {
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section className={classes.section}>
        <SectionHeader
          title="Contact us"
          subtitle="We are founded by a leading academic and researcher in the field of Industrial Systems Engineering."
          align="left"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h3',
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
          className={classes.sectionHeader}
        />
      </Section>
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
