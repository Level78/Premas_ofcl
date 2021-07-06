import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography, colors } from '@material-ui/core';

// import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardReview } from 'components/organisms';

// const useStyles = makeStyles(() => ({
//   sectionHeadlineStars: {
//     maxWidth: 120,
//   },
// }));

const Reviews = props => {
  const { data, className, ...rest } = props;
  // const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader

        title={
          <span>
            <Typography color="secondary" variant="inherit" component="span">Our Employee</Typography> Love us.
          </span>
        }
        subtitle="From entry-level to leadership, across all business and industry segments, our people harness technology, see value in every direction and add value in every direction for our clients and communities.​"
        fadeUp
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((review, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            md={4}
            data-aos="fade-up"
          >
            <CardReview
              variant="outlined"
              text={review.feedback}
              icon={
                <IconAlternate
                  color={colors.blueGrey}
                  fontIconClass="fas fa-quote-right"
                />
              }
              authorName={review.authorName}
              authorTitle={review.authorOccupation}
              authorPhoto={review.authorPhoto}
            />
          </Grid>
        ))}
        <Grid item container xs={12} justify="center">
          <Button href="/career-listing-minimal"
            variant="contained"
            size={isMd ? 'large' : 'medium'}
            color=""
          >
            WE ARE HIRING
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Reviews.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Reviews;
