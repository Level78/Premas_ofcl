import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography,  } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import { Image } from 'components/atoms';




const useStyles = makeStyles(theme => ({
  cardBase: {
    '&:hover': {
      background: theme.palette.primary.main,
      '& .card-icon, & .card-title': {
        color: 'white',
      },
    },
  },
  icon: {
    fontSize: 60,
    color: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      fontSize: 80,
    },
  },
  title: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(6),
    },
  },
}));

const Fluidigmall = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
               <Image center src = "https://ik.imagekit.io/j6phbjneuop/Gear-6.7s-200px_lrbT6ahWj.svg"/>
       
      <SectionHeader
        title="Featured products"
        subtitle="Re-building Fluidigm "
        data-aos="fade-up"
      />

      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <Image src = "https://ik.imagekit.io/j6phbjneuop/Ellipsis-1s-200px_iMfyBkbV_.svg"/>

           
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              {/* Cosy house */}
            </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/Ellipsis-1s-200px_iMfyBkbV_.svg"/>
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              {/* Comfortable */}
            </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/Ellipsis-1s-200px_iMfyBkbV_.svg"/>
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              {/* Modern house */}
            </Typography>
          </CardBase>
        </Grid>
      </Grid>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <Image src = "https://ik.imagekit.io/j6phbjneuop/Ellipsis-1s-200px_iMfyBkbV_.svg"/>

           
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              {/* Cosy house */}
            </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/Ellipsis-1s-200px_iMfyBkbV_.svg"/>
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              {/* Comfortable */}
            </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/Ellipsis-1s-200px_iMfyBkbV_.svg"/>
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              {/* Modern house */}
            </Typography>
          </CardBase>
        </Grid>
      </Grid>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <Image src = "https://ik.imagekit.io/j6phbjneuop/Ellipsis-1s-200px_iMfyBkbV_.svg"/>

           
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              {/* Cosy house */}
            </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/Ellipsis-1s-200px_iMfyBkbV_.svg"/>
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              {/* Comfortable */}
            </Typography>
          </CardBase>
        </Grid>
        
      </Grid>
    </div>
  );
};

Fluidigmall.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Fluidigmall;
