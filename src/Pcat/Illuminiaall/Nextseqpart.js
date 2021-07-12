import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Box } from '@material-ui/core';



  

const Nextseqppart = props => {
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
   
    <Box className={className} {...rest} marginBottom={2} marginLeft= {2} marginRight={2} marginTop= {2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
  
      <Grid container justify="center" spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} md={4} key={index} data-aos="fade-up">
            <SectionHeader
              titleVariant="h6"
              title={item.title}
              subtitle={item.subtitle}
              subtitleColor="textPrimary"
              subtitleVariant="body1"
              ctaGroup={[
                <LearnMoreLink title="Learn more" variant="subtitle1" />,
              ]}
              align="left"
              disableGutter
            />
          </Grid>
        ))}
      </Grid>
   
    </Box>
  );
};

Nextseqppart.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Nextseqppart;
