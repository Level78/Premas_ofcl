import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 560,
  },
}));

const About = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="flex-start"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <div>
            <SectionHeader
              title="Why joinus?"
              subtitle="There are Jobs, then there are Careers. The change to do the kind of work that adds up to something meaningful, the opportunity to challenge yourself and learn new skills, the prospect to work day-in and out with smart, zealous, and motivated people. If that's what excites you, then come join PLS!"
              align="left"
              disableGutter
              subtitleProps={{
                color: 'textPrimary',
                variant: 'body1',
              }}
              ctaGroup={[
                <Button color="primary" variant="contained" size="large">
                  View open positions
                </Button>,
              ]}
            />
          </div>
        </Grid>
        <Grid
          item
          container
          justify={isMd ? 'flex-end' : 'flex-start'}
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://assets.maccarianagency.com/the-front/illustrations/want-to-work.svg"
            alt="Our story"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default About;
