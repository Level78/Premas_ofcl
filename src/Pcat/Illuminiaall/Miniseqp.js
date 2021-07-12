

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import {Box} from '@material-ui/core'
import Miniseqppaart from 'Pcat/Illuminiaall/Miniseqppart'

export const aricles = [
    {
      title: 'Accessible Illumina Sequencing',
      subtitle:
      'Affordable-to-acquire and cost-efficient to run, even with low numbers of samples',
    },
    {
      title: 'Push-Button Operation and Easy Data Analysis',
      subtitle:
        'Walk away library-to-results solution with onboard data analysis',
    },
    {
      title: 'Highly Flexible to Fit Research Demands',
      subtitle:
        'Supports a broad range of DNA and RNA sequencing applications for examining single genes to entire pathways',
    },
    
  ];
  export const articles = [
    {
      title: 'End-to-End Support',
      subtitle:
        ' Illumina scientists and engineers provide installation, training, and support, from assay design through data analysis',
    },
    {
      title: 'Evaluation',
      subtitle:
        'Convenient Library Quality and Proof-of-Principle Testing Evaluate library quality before large runs, perform pilot studies, or generate grant submission data',
    },
    {
      title: 'Application areas',
      subtitle:
        'Small Whole-Genome Sequencing (microbe, virus), Targeted Gene Sequencing (amplicon, gene panel), Targeted Gene Expression Profiling, Long-Range Amplicon Sequencing*, miRNA & Small RNA Analysis, 16S Metagenomic Sequencing.',
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

const Miniseqp= props => {
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
          The power of proven Illumina sequencing, now more accessible than ever.
                <br />
                <Typography component="span" variant="inherit" color="primary">
              Miniseq
                </Typography>
              </span>
            }
            subtitle= " The MiniSeq System delivers the power and confidence of proven Illumina next-generation sequencing (NGS) technology in an accessible sequencing solution. It features cost-efficient sequencing, even for low numbers of samples. Its streamlined workflow enables rapid sequencing of both DNA and RNA. The small footprint allows it to fit seamlessly into laboratories, with no need for specialized, ancillary equipment. "
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
            src="https://ik.imagekit.io/j6phbjneuop/MiniSeq_Hires_MtdCwOlUj.png"
            alt="Miniseq"
            className={classes.image}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
      </Grid>
    </Box>
    <Miniseqppaart data = {aricles}/>
    <Miniseqppaart data = {articles}/>
    </Box>
  );
};

Miniseqp.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Miniseqp;

