import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import Brands from './components/Brands'
import Counterplus from './components/Counterplus'
import Videosec from './components/Videosec'
import Consumer from './components/Consumer'
import Testiment from './components/Testiment'
// import Events from 'views/Coworking/components/Events'
// import Videohero from 'components/Videohero'
import { Agency } from 'views';



import {

  AboutBottom,
  Features,
  // Hero,
  Integrations,



} from './components';

import {

  features,

  integrations,

  brand,
  consume,
  testimonial,


} from './data';
import { SectionHeader } from 'components/molecules';
// import { articles } from 'views/CloudHosting/data';
import Herosec from 'components/Herosec';

const useStyles = makeStyles(theme => ({
  sectionTrucking: {
    maxWidth: '100%',
    paddingRight: 0,
    paddingLeft: 0,
  },
  featuresSection: {
    background: 'url(https://assets.maccarianagency.com/the-front/illustrations/patterns-bg.svg) no-repeat center',
    backgroundSize: 'contain',
  },
  integrationsSection: {
    background: '#0c133e',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  reviewSection: {
    background: theme.palette.primary.dark,
  },
  aboutSection: {
    background: '#0c133e',
  },
}));

const Logistics = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
 <Herosec/>
 </div>



      {/* <Hero /> */}
      {/* < section dat = {articles} />
      if {x===geilt = 7.8.90}{

      }
      make video box */}



      {/* <div className={classes.featuresSection}> */}
      <Section>
        <Features data={features} />
      </Section>
      {/* </div> */}
      <SectionAlternate className={classes.integrationsSection}>
        <Integrations data={integrations} />
      </SectionAlternate>



      <Agency />
      {/* <Events data={events} /> */}

      <Section></Section>
      <Section className={classes.sectionNoPaddingTop}>
        <AboutBottom />
      </Section>

      <SectionAlternate>
        <Counterplus />
      </SectionAlternate>





      <Section>
        <Brands data={brand} />
      </Section>

      <SectionAlternate>

        <Videosec />
      </SectionAlternate>
      <Section>
        <Consumer data={consume} />
      </Section>



      <SectionAlternate>
        <SectionHeader
          title="  what our customers say"
          subtitle=" Take a quick glance at some of our past projects. If you would like
        to see some more great work, get in touch with us to take a look at
        our private portfolio."
          align="left"
          fadeUp
        />
        <Testiment data={testimonial} />
      </SectionAlternate>

    </div>
  );
};

export default Logistics;


