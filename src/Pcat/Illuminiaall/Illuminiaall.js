


import React from 'react';
import PropTypes from 'prop-types';
// import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography,  } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import { Image } from 'components/atoms';




const useStyles = makeStyles(theme => ({
  cardBase: {
    '&:hover': {
      background: "#7DEDFF",
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

const Illuminiaall = props => {
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
        subtitle="Re-building content "
        data-aos="fade-up"
      />

      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <Image src = "https://ik.imagekit.io/j6phbjneuop/iSEQ100_GhV52MtT_.png"/>

           
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3>iseq 100 </h3>&nbsp;
      <Typography  variant="inherit" color="primary">system</Typography>
    </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/system-carousel-miniseq-left_aaNU1N8-N.png"/>
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3>Miniseq </h3>&nbsp;
      <Typography  variant="inherit" color="primary">system</Typography>
    </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/system-banner-nextseq-550__1__tUvqTmRS6.png"/>
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3>Nextseq </h3>&nbsp;
      <Typography  variant="inherit" color="primary">550</Typography>
    </Typography>
          </CardBase>
        </Grid>
      </Grid>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <Image src = "https://ik.imagekit.io/j6phbjneuop/NovaSeq_t5JkNp9nV.png"/>

           
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3>Novaseq </h3>&nbsp;
      <Typography  variant="inherit" color="primary"></Typography>
    </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/miseq-system-front-web-graphic_RSTgn0NAN.jpg"/>
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3>Miseq </h3>&nbsp;
      <Typography  variant="inherit" color="primary"> system</Typography>
    </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/iscan-system-front-web-graphic_bUlMpaahq.jpg"/>
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3>iscan </h3>&nbsp;
      <Typography  variant="inherit" color="primary"> system</Typography>
    </Typography>
          </CardBase>
        </Grid>
      </Grid>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <Image src = "https://ik.imagekit.io/j6phbjneuop/nextseq-1000-2000-gradient-low-angle-crop-web-graphic_uMjI-wlG5K.jpg"/>

           
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3>Nextseq  </h3>&nbsp;
      <Typography  variant="inherit" color="primary">2000</Typography>
    </Typography>
          </CardBase>
        </Grid>
      
        
      </Grid>
    </div>
  );
};

Illuminiaall.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Illuminiaall;
