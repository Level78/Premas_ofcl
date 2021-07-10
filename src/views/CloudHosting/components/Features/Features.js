import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  colors,
  useMediaQuery,
  Grid,
 
  NoSsr,
} from '@material-ui/core';

import { CardBase, DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
  },
 
  featureItems: {
    width: '100%',
    height: '100%',
    background: 'url(https://assets.maccarianagency.com/the-front/illustrations/bg-shapes.svg) no-repeat top center',
    backgroundSize: 'contain',

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  gridItemPositioned: {
    marginTop: '25%',
  },
  iconCover: {
    width: 60,
    height: 60,
    background: 'url(https://assets.maccarianagency.com/the-front/illustrations/bgicon.svg) no-repeat center center',
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.indigo[500],
    fontSize: 35,
    [theme.breakpoints.up('md')]: {
      width: 80,
      height: 80,
      fontSize: 50,
    },
  },
  propsGrid: {
    height: '100%',
  },
}));

const Features = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const { items, } = data;

  return (
    <div className={className} {...rest}>
      <div align = 'center'>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <div className={classes.featureItems}>
            <Grid container spacing={isMd ? 4 : 1}>
              <Grid item xs={6}>
                <Grid container spacing={isMd ? 4 : 1} direction="column">
                  {items.slice(0, 2).map((item, index) => (
                    <Grid item xs={12} key={index} data-aos="fade-up">
                      <CardBase withShadow liftUp>
                        <DescriptionListIcon
                          icon={
                            <div className={classes.iconCover}>
                              <NoSsr><i className={item.icon} /></NoSsr>
                            </div>
                          }
                          title="hello"
                          subtitle={item.subtitle} 
                        />
                      </CardBase>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={6} className={classes.gridItemPositioned}>
                <Grid container spacing={isMd ? 4 : 1} direction="column">
                  {items
                    .slice(items.length - 2, items.length)
                    .map((item, index) => (
                      <Grid item xs={12} key={index} data-aos="fade-up">
                        <CardBase withShadow liftUp>
                          <DescriptionListIcon
                            icon={
                              <div className={classes.iconCover}>
                                <NoSsr><i className={item.icon} /></NoSsr>
                              </div>
                            }
                            title={item.title}
                            subtitle={item.subtitle}
                          />
                        </CardBase>
                      </Grid>
                    ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          
            
            
          </Grid>
        </Grid>
     </div>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Features;
