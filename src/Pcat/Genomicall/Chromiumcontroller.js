import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import {Box} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Chromiumcontroller= props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box  className={className} {...rest} marginBottom={2} marginLeft= {2} marginRight={2} marginTop= {2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid
        container
        justify="space-between"
        spacing={4}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <SectionHeader
            title={
              <span>
              Single cell resolution to maximize biological insight
                <br />
                <Typography component="span" variant="inherit" color="primary">
                  Chromium Controller
                </Typography>
              </span>
            }
            subtitle="Compact, sleek, efficient.
            The compact, sleek Chromium Controller rapidly and efficiently combines large partition numbers with a massively diverse barcode library to generate >100,000 barcode-containing partitions in a matter of minutes. The Chromium Controller fits on a standard laboratory bench and allows a user to run any Chromium Solution, from genome to single cell analysis.
            "
            ctaGroup={[
              <Button variant="contained" color="primary" size="large">
                Start now
              </Button>,
              <Button variant="outlined" color="primary" size="large">
                Learn more
              </Button>,
            ]}
            align="left"
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://ik.imagekit.io/j6phbjneuop/controller-front_M3cFg7H8l4.png"
            alt="chromium controller"
            className={classes.image}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

Chromiumcontroller.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Chromiumcontroller;
