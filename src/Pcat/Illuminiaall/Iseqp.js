import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import {Box} from '@material-ui/core'
import Iseqppaart from 'Pcat/Illuminiaall/Iseqppart'

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

const Iseqp= props => {
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
            Make next-generation sequencing easier and more affordable than ever.
                <br />
                <Typography component="span" variant="inherit" color="primary">
                 Iseq 100
                </Typography>
              </span>
            }
            subtitle= " The smallest, most affordable Illumina sequencing system delivers fast and efficient lowthroughput sequencing for virtually any lab. "
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
            src="https://ik.imagekit.io/j6phbjneuop/iSEQ100_GhV52MtT_.png"
            alt="iscan"
            className={classes.image}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
      </Grid>
    </Box>
    <Iseqppaart data = {aricles}/>
    <Iseqppaart data = {articles}/>
    </Box>
  );
};

Iseqp.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Iseqp;
