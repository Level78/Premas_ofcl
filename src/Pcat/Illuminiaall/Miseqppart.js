import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  colors,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

export const services = [
    {
      icon: 'fas fa-layer-group',
      title: 'Easy to use',
      subtitle:
        'Maximize time and resources with an intuitive experience Easy-to-use system and on-board informatics streamline workflow and analysis, making NGS accessible to novice and expert users',
    },
    {
      icon: 'fab fa-sketch',
      title: 'Cost-efficient',
      subtitle:
        'Achieve capacity for breakthroughs, support to sustain them Cost-efficient, high-throughput system delivers accurate results for emerging applications of increasing complexity',
    },
    {
      icon: 'fas fa-code',
      title: 'Application area',
      subtitle:
        "Small Whole-Genome Sequencing (microbe, virus)Exome & Large Panel Sequencing (enrichment-based)Single-Cell Profiling (scRNA-Seq, scDNA-Seq, oligo tagging assays)Transcriptome Sequencing (total RNA-Seq, mRNA-Seq, gene expression profiling)",
    },
  ];


const useStyles = makeStyles(theme => ({
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Miseqppart = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box  className={className} {...rest} marginBottom={2} marginLeft= {2} marginRight={2} marginTop= {2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
    <div className={className} {...rest}>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <SectionHeader
            title={
              <span>
Speed and simplicity for targeted and small genome sequencing
                <Typography component="span" variant="inherit" color="primary"> Miseq</Typography>
                <br />
                <span></span>
              </span>
            }
            subtitle="Access focused applications such as targeted resequencing, metagenomics, small genome sequencing, targeted gene expression profiling, and more. MiSeq reagents enable up to 15 Gb of output with 25 million sequencing reads and 2 × 300 bp read lengths."
            align="left"
            disableGutter
          />
          <List disablePadding>
            {data.map((item, index) => (
              <ListItem disableGutters key={index} data-aos="fade-up">
                <ListItemAvatar className={classes.listItemAvatar}>
                  <IconAlternate
                    size="small"
                    fontIconClass={item.icon}
                    color={colors.blueGrey}
                  />
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.subtitle} />
              </ListItem>
            ))}
          </List>
          <SectionHeader
          ctaGroup={[
            <Button variant="contained" color="primary" size="large">
              Quickbook
            </Button>,
            <Button variant="outlined" color="primary" size="large">
              Contact
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
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Image
            src="https://ik.imagekit.io/j6phbjneuop/nextseq-2000-system-product-front-web-graphic_r_6bczbSy-.jpg"
            alt="nextseq 200"
            className={classes.coverImage}
          />
        </Grid>
      </Grid>
    </div>
    </Box>
  );
};

Miseqppart.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Miseqppart;
