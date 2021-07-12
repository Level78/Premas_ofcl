

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import {Box} from '@material-ui/core'
import Nextseqpart from 'Pcat/Illuminiaall/Nextseqpart'

// export const aricles = [
//     {
//       title: 'Accessible Illumina Sequencing',
//       subtitle:
//       'Affordable-to-acquire and cost-efficient to run, even with low numbers of samples',
//     },
//     {
//       title: 'Push-Button Operation and Easy Data Analysis',
//       subtitle:
//         'Walk away library-to-results solution with onboard data analysis',
//     },
//     {
//       title: 'Highly Flexible to Fit Research Demands',
//       subtitle:
//         'Supports a broad range of DNA and RNA sequencing applications for examining single genes to entire pathways',
//     },
    
//   ];
  export const articles = [
    {
      title: 'Key features',
      subtitle:
        ' Array Scanning and Data Analysis.Push Button Simplicity and affordability.Simple Load & Go Reagents.Mid & High Output Flow Cells. Variable Data Output Flow Cells. Variable Data Output from 20-120Gb.Maximum reads per run- 400 million reads.',
    },
    {
      title: 'Ability',
      subtitle:
        'Run Time: 12-30 hrs.Operates in three different read lengths of 1 X75bp, 2X75bp and 2X150bp.Ability to run cytogenetic arrays.',
    },
    {
      title: 'Application areas',
      subtitle:
        'Large Whole-Genome Sequencing (human, plant, animal),Small Whole-Genome Sequencing (microbe, virus)Exome Sequencing,Targeted Gene Sequencing (amplicon, gene panel),Transcriptome Sequencing,Gene Expression Profiling with mRNA-Seq,miRNA& Small RNA Analysis, DNA-Protein Interaction Analysis,Methylation Sequencing,Shotgun Metagenomics',
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

const Nextseq= props => {
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
           Transcriptome, targeted resequencing, genotyping, and other applications all on one platform.
                <br />
                <Typography component="span" variant="inherit" color="primary">
           Nextseq 550
                </Typography>
              </span>
            }
            subtitle= " The NextSeq 550 System delivers the power of high-throughput sequencing with the speed, simplicity, and affordability of a benchtop next-generation sequencing (NGS) system. The NextSeq 550 System fits into research laboratories, without need for specialized equipment. Perform many combinations of high- and mid-throughput sequencing applications to advance your studies. "
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
            src="https://ik.imagekit.io/j6phbjneuop/nextseq-550-rendering-left_p5_ycgmcS.png"
            alt="Nextseq"
            className={classes.image}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
      </Grid>
    </Box>
    {/* <Nextseqpart data = {aricles}/> */}
    <Nextseqpart data = {articles}/>
    </Box>
  );
};

Nextseq.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Nextseq;

