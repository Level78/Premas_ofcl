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

const Singlegeneexpression= props => {
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
              Visium Spatial
                <br />
                <Typography component="span" variant="inherit" color="primary">
               single Gene Expression
                </Typography>
              </span>
            }
            subtitle=" 
            Visium Spatial Gene Expression is a next-generation molecular technology for classifying tissue based on total mRNA. Map the whole transcriptome with morphological context to discover novel insights into normal development, disease pathology, and clinical translational research.
            "
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

Extendable for Protein Co-detection
Immunofluorescence
Protein Co-Detection
Enable discovery of novel cell types and their spatial organization by combining immunofluorescence and whole transcriptome spatial gene expression.
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
            src="https://ik.imagekit.io/j6phbjneuop/visicm_1__dWMG4eswYm.png"
            alt="Single gene"
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

Singlegeneexpression.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Singlegeneexpression;
