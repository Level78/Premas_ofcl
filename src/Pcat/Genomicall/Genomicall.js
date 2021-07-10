import React from 'react';
import PropTypes from 'prop-types';
// import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography,  } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import { Image } from 'components/atoms';
import Ccdial from 'Popups/Genome/Ccdial'
import Cconnectdial from 'Popups/Genome/Cconnectdial'
import Sge from 'Popups/Genome/Sge'
import Sp from 'Popups/Genome/Sp'
import Tge from 'Popups/Genome/Tge'
import Scge from 'Popups/Genome/Scge'
import Scip from 'Popups/Genome/Scip'
import Scatac from 'Popups/Genome/Scatac'





const useStyles = makeStyles(theme => ({
  cardBase: {
    // // '&:hover': {
    // //   background: theme.palette.primary.main,
    // //   '& .card-icon, & .card-title': {
    // //     color: 'white',
    // //   },
    // },
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

const Genomicall = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
 
      <SectionHeader
        title="Featured products"
        subtitle=" 10x genomics "
        data-aos="fade-up"
      />
    
     
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <Image src = "https://ik.imagekit.io/j6phbjneuop/controller-front_M3cFg7H8l4.png"/>

           
            </div>

           <br/>


           <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3> Chromium </h3>  &nbsp;
      <Typography component="span" variant="inherit" color="primary">Controller</Typography>
    </Typography>



<br/>
<br/>
       
            <Ccdial/> 
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/Chromium_Connect-trimmed_jsdNp1Mbp.png"/>
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3> Chromium </h3>  &nbsp;
      <Typography component="span" variant="inherit" color="primary">connect</Typography>
    </Typography>



    <br/>
<br/>
       
            <Cconnectdial/> 
            {/* <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              // className={clsx(classes.title, 'card-title')}
            >
Single Cell
 Gene Expression 
            </Typography> */}

          
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
          <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/visicm_1__dWMG4eswYm.png"/>
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3> Visium Spatial </h3>  &nbsp;
      <Typography component="span" variant="inherit" color="primary"> gene expression</Typography>
    </Typography>

  <br/>
  <br/>

            <Sge/>
          </CardBase>
        </Grid>
      </Grid>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>





          <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/unnamed__4__Fge_CJisb.jpg"/>
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3> Spatial</h3>  &nbsp;
      <Typography component="span" variant="inherit" color="primary">Proteomics</Typography>
    </Typography>


    <br/>
<br/>
       
            <Sp/> 
          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/unnamed__5__nRIMrROEv.jpg"/>
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3> Targeted</h3>  &nbsp;
      <Typography component="span" variant="inherit" color="primary">Gene Expression</Typography>
    </Typography>
     

    <br/>
<br/>
       
            <Tge/> 


          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/unnamed__6__7cwKasVsI.jpg"/>
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3> Chromium </h3>  &nbsp;
      <Typography component="span" variant="inherit" color="primary">Single Cell Gene Expression</Typography>
    </Typography>
    
<br/>
       
            <Scge/> 
          </CardBase>
        </Grid>
      </Grid>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <Image src = "https://ik.imagekit.io/j6phbjneuop/unnamed__7__WfFh9NmaZ.jpg"/>

           
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3> Chromium </h3>  &nbsp;
      <Typography component="span" variant="inherit" color="primary">Single Cell Immune Profiling</Typography>
    </Typography>

    <br/>
<br/>
       
            <Scip/> 


{/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh */}

          </CardBase>
        </Grid>
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
            <Image src = "https://ik.imagekit.io/j6phbjneuop/unnamed__11__nANdPNl_j.jpg"/>
            </div>
            <Typography variant="h5" component="span" className={classes.fontWeight900}>
     <h3> Chromium </h3>  &nbsp;
      <Typography component="span" variant="inherit" color="primary">Single Cell ATAC</Typography>
    </Typography>


    <br/>
    <br/>
<br/>
       
            <Scatac/> 
          </CardBase>
        </Grid>
        
      </Grid>
    </div>
  );
};

Genomicall.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Genomicall;
