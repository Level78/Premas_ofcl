import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import Ceo from './components/Ceo'
import Managingd from './components/Managingd'
import Vpsupport from './components/Vpsupport'
import Gpm from './components/Gpm'
import FooterHero from 'views/Rental/components/FooterHero'
import { Box, Button } from '@material-ui/core';
import { HeroSimpleBackground } from 'components/organisms';
import { SectionHeader } from 'components/molecules';



import {

  Advantages,
  Contact,
  Description,
  Gallery,
  Hero,
  PromoNumbers,
  Reviews



} from './components';

import {
  promoNumbers,
  advantages,
  reviews,



  gallery,
  // promo,

} from './data';

const useStyles = makeStyles(theme => ({
  sectionDescription: {
    background: colors.blue[900],
  },
  sectionAlternateForm: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 300px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const Expo = () => {
  const classes = useStyles();

  return (
    <div>
      <FooterHero />
      <Hero />
      <SectionAlternate className={classes.sectionDescription}>
        <Description />
      </SectionAlternate>
      <Section>
        <PromoNumbers data={promoNumbers} />
      </Section>
      <Divider />

      <Section>
        <Ceo />
      </Section>
      <SectionAlternate>
        <Managingd />
      </SectionAlternate>
      <Section>
        <Vpsupport />
      </Section>
      <SectionAlternate>
        < Gpm />
      </SectionAlternate>


      <Section>
        <Advantages data={advantages} />
      </Section>

      <Divider />
      <SectionAlternate>
        {/* <SwiperImage data ={promo}/> */}
      </SectionAlternate>
      <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
        <HeroSimpleBackground backgroundImage="https://ik.imagekit.io/j6phbjneuop/premasweb/pexels-johannes-plenio-1103970_BhqXf76JI.jpg">
          <Section narrow>
            <SectionHeader
              title="Premas  Work Environment"
              titleVariant="h2"
              subtitle="Be your best every day in a work environment that helps drive innovation in everything you do. At Premas LifeScineces we work , play and Eat together."
              ctaGroup={[(
                <Button color="primary" variant="contained" size="large">explore gallery</Button>
              ), (
                <Button color="primary" variant="outlined" size="large">Social Connect </Button>
              )]}
            />
          </Section>
        </HeroSimpleBackground>
        <Gallery data={gallery} />
      </Box>

      <Section>

        <Reviews data={reviews} />

      </Section>
      <div >
        <Section narrow>
          <Contact />
        </Section>
      </div>
    </div>
  );
};

export default Expo;
