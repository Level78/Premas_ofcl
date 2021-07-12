import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import {Box} from '@material-ui/core'


export const aricles = [
    {
      title: 'Rapid data generation',
      subtitle:
        ' Rapid Data Generation Run smaller projects on a dedicated, low-throughput instrument with fast turnaround times.',
    },
    {
      title: 'Library quality',
      subtitle:
        'Convenient Library Quality and Proof-of-Principle Testing Evaluate library quality before large runs, perform pilot studies, or generate grant submission data',
    },
    {
      title: 'Control',
      subtitle:
        'Independent, Convenient Operations Control the sequencing process from beginning to end and maintain an independent sequencing schedule instead of outsourcing',
    },
    
  ];
  export const articles = [
    {
      title: 'Accuracy',
      subtitle:
        ' High Analytical Sensitivity and Exceptional Data Accuracy Leverage higher analytical sensitivity forthe detection of rare variants and transcripts compared to qPCR orSanger sequencing1,2',
    },
    {
      title: 'Evaluation',
      subtitle:
        'Convenient Library Quality and Proof-of-Principle Testing Evaluate library quality before large runs, perform pilot studies, or generate grant submission data',
    },
    {
      title: 'Application',
      subtitle:
        'Small Whole-Genome Sequencing (microbe, virus), Targeted Gene Sequencing (amplicon, gene panel), Targeted Gene Expression Profiling, Long-Range Amplicon Sequencing*, miRNA & Small RNA Analysis.',
    },
    
  ];


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

const Iscanp= props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
      <Box marginLeft= {3} marginRight={3} padding={4}  >
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
         
Exceptional Data Quality with Advanced Imaging
                <br />
                <Typography component="span" variant="inherit" color="primary">
                Iscan

                </Typography>
        
              </span>
            }
            subtitle= " Empower your research with a high-precision scanner that supports an extensive range of array applications. The iScan System supports our broad portfolio of innovative genetic analysis assays for genome-wide or targeted genotyping, methylation profiling, and cytogenetic analysis."
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
          Application areas
Genotyping Arrays, Methylation Array Analysis, Cytogenomics.
   
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
            src="https://ik.imagekit.io/j6phbjneuop/iscan-system-front-web-graphic_bUlMpaahq.jpg"
            alt="iscan"
            className={classes.image}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
                         The iScan System uses advanced laser and optics components to offer sub-micron resolution and maximize throughput rates. The result is rapid scan times without sacrificing data quality and reproducibility. With high call rates, sensitive measurement, and wide dynamic range, the iScan system reliably produces exceptional data quality.
        </Grid>
      </Grid>
    </Box>

    </Box>
  );
};

Iscanp.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Iscanp;
