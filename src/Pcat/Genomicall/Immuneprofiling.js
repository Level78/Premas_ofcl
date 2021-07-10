import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import {Box} from '@material-ui/core'
import { DescriptionListIcon } from 'components/organisms';
import { Icon } from '@material-ui/core';
import { colors } from '@material-ui/core';

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

const Immuneprofiling= props => {
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
            Capabilities for multiomic readouts
                <br />
                <Typography component="span" variant="inherit" color="primary">
           
Chromium single cell immune profiling
                </Typography>
              </span>
            }

          
//                  {/* <Grid item xs={12} container alignItems="center" md={6} data-aos={'fade-right'}>
//               <Grid container alignItems="center" spacing={2}>
//                 <Grid item xs={12} md={6}>
//                   <Typography color="primary" variant="h6" gutterBottom>Pre-designed Panels
// </Typography>
//                   <Typography color="textPrimary" variant="body1">
//                   Hone in on gene expression relevant to your research area. Each panel consists of validated probes for over 1,000 genes.

//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <Typography color="primary" variant="h4" gutterBottom>Panel Options</Typography>
//                   <Typography color="textPrimary" variant="body1">
//                     30 + stand-alone, fully customizable components designed by following Atomic Methodologies.
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <Typography color="primary" variant="h6" gutterBottom>Add on to Pre-designed Panels</Typography>
//                   <Typography color="textPrimary" variant="body1">
//                   Customize pre-designed panels and add up to 200 additional genes with the 10x Genomics Custom Panel Designer. Or, if you already have a specific set of genes you want to analyze, you can create those panel designs from scratch.

//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <Typography color="primary" variant="h6" gutterBottom>Create Fully Custom Panels</Typography>
//                   <Typography color="textPrimary" variant="body1">
//                   If you’d like to start from scratch and tackle a different research area altogether, or you have a specific set of genes you want to analyze, the Custom Panel Designer will create those designs and help you get started.
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </Grid> */}


            
        
            subtitle=  "Chromium single cell immune profiling  multiomic solution to your immunology questions. Analyze full length paired B-cell or T-cell receptors, surface protein expression, antigen specificity, and gene expression, all from a single cell."


            ctaGroup={[
              <Button variant="contained" color="primary" size="large">
               Quickbook 
              </Button>,
              <Button variant="outlined" color="primary" size="large">
                Download
              </Button>,
            ]}
            align="left"
            disableGutter
            titleVariant="h3"
          />
                     * Capabilities for multiomic readouts
Feature Barcode Technology


      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <DescriptionListIcon
            title="Immune Repertoire Profiling"
            subtitle="Understand clonal expansion and diversity by capturing full-length, paired B-cell and T-cell receptors at a single cell level."
            icon={
              <Icon
                fontIconClass="fas fa-book"
                size="medium"
                fontIconColor={colors.yellow[700]}
              />
            }
            align="left"
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <DescriptionListIcon
            title="Cell Surface Protein"
            subtitle="Correlate gene expression measurements with immunophenotyping at a single cell level to better delineate immune cell subsets and functional states."
            icon={
              <Icon
                fontIconClass="fas fa-briefcase"
                size="medium"
                fontIconColor={colors.yellow[700]}
              />
            }
            align="left"
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <DescriptionListIcon
            title="Antigen Specificity"
            subtitle="Assess the specificity of the adaptive immune system at single cell resolution with simultaneous capture of paired T cell receptors and peptide-MHC multimers, or immunoglobulin heavy and light chains and their cognate antigens."
            icon={
              <Icon
                fontIconClass="fas fa-briefcase"
                size="medium"
                fontIconColor={colors.yellow[700]}
              />
            }
            align="left"
          />
        </Grid>
    
        <Grid item container justify="center" xs={12} data-aos={'fade-up'}>
          <Button href = '/contact-page-cover' variant="outlined" color="primary">
            COTACT TO KNOW MORE
          </Button>
        </Grid>
      </Grid>

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
            src="https://ik.imagekit.io/j6phbjneuop/unnamed__7__WfFh9NmaZ.jpg"
            alt="Chromium single immune"
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

Immuneprofiling.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Immuneprofiling;
;
