import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import Ceo from './components/Ceo'
import Managingd from './components/Managingd'
import Vpsupport from './components/Vpsupport'
import Gpm from './components/Gpm'
import FooterHero from 'views/Rental/components/FooterHero'

import { Articles } from 'views/CloudHosting/components';
import Weeat from './components/Weeat'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';






import {

  Advantages,
  Contact,
  Description,

  Hero,
  // PromoNumbers,
  Reviews



} from './components';

import {
  // promoNumbers,
  advantages,
  reviews,



 
  // promo,

} from './data';


const articles = [
  {
    cover: {
      src: 'https://ik.imagekit.io/j6phbjneuop/premasweb/2_hqTPplVJR.jpeg',
      srcSet: 'https://ik.imagekit.io/j6phbjneuop/premasweb/2_hqTPplVJR.jpeg',
    },
    title: 'Team premas, choose relevant (alt tag)',
   
    
  },
  {
    cover: {
      src: 'https://ik.imagekit.io/j6phbjneuop/premasweb/IMG-20191023-WA0060_hMSkc9Qzhw.jpg',
      srcSet: 'https://ik.imagekit.io/j6phbjneuop/premasweb/IMG-20191023-WA0060_hMSkc9Qzhw.jpg',
    },
    title: 'Bad application (# office picture)',
 
  },
  {
    cover: {
      src: 'https://ik.imagekit.io/j6phbjneuop/premasweb/1_LlgB34Vfs.jpeg',
      srcSet: 'https://ik.imagekit.io/j6phbjneuop/premasweb/1_LlgB34Vfs.jpeg',
    },
    title: 'Right convention (# genomic event)',
    
  },
  {
    cover: {
      src: 'https://ik.imagekit.io/j6phbjneuop/premasweb/4_ideOaxOFX.jpeg',
      srcSet: 'https://ik.imagekit.io/j6phbjneuop/premasweb/4_ideOaxOFX.jpeg',
    },
    title: 'choose tags spectific to industry and business',
   
  },
  {
    cover: {
      src: 'https://ik.imagekit.io/j6phbjneuop/premasweb/3_RdjZwE4ci.jpeg',
      srcSet: 'https://ik.imagekit.io/j6phbjneuop/premasweb/3_RdjZwE4ci.jpeg',
    },
    title: 'Motivation Is The First Step To Success',
   
  },
  
   
];


const weeat = [
  {
    cover: {
      src: 'https://ik.imagekit.io/j6phbjneuop/premasweb/3_0gZyJVPVP.jpg',
      srcSet: 'https://ik.imagekit.io/j6phbjneuop/premasweb/3_0gZyJVPVP.jpg',
    },
  
    
  },
  {
    cover: {
      src: 'https://ik.imagekit.io/j6phbjneuop/premasweb/4_WThnJJ-lR.jpg',
      srcSet: 'https://ik.imagekit.io/j6phbjneuop/premasweb/4_WThnJJ-lR.jpg',
    },

 
  },
  {
    cover: {
      src: 'https://ik.imagekit.io/j6phbjneuop/premasweb/5_Cdqv9HtTK.jpg',
      srcSet: 'https://ik.imagekit.io/j6phbjneuop/premasweb/5_Cdqv9HtTK.jpg',
    },
  
    
  },
  {
    cover: {
      src: 'https://ik.imagekit.io/j6phbjneuop/premasweb/2_rubNSrtF3.JPG',
      srcSet: 'https://ik.imagekit.io/j6phbjneuop/premasweb/2_rubNSrtF3.JPG',
    },
   
   
  },
  {
    cover: {
      src: 'https://ik.imagekit.io/j6phbjneuop/premasweb/3_RdjZwE4ci.jpeg',
      srcSet: 'https://ik.imagekit.io/j6phbjneuop/premasweb/3_RdjZwE4ci.jpeg',
    },
   
   
  },
  
   
];

















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


     








     


<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#000000', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="2011- "
    iconStyle={{ background: '#000000', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">2011</h3>
    <h4 className="vertical-timeline-element-subtitle">India</h4>
    <p>
      PREMAS LIFESCIENCES FOUNDED
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#000000', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="2011- 2013 "
    iconStyle={{ background: '#000000', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">2013</h3>
    <h4 className="vertical-timeline-element-subtitle">funding</h4>
    <p>
    Team , content goes here !
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#000000', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="2011- "
    iconStyle={{ background: '#000000', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">2018</h3>
    <h4 className="vertical-timeline-element-subtitle">Best Enterprsie product</h4>
    <p>
    content goes here
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#000000', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
   
    iconStyle={{ background: '#000000', color: '#fff' }}
    date="2011- 2013 "
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">2021</h3>
    <h4 className="vertical-timeline-element-subtitle">Covid19 solution partner</h4>
    <p>

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#000000', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
  
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: '#000000', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">We will redeisgn visual after content</h3>
    <h4 className="vertical-timeline-element-subtitle">use subtitle here</h4>
    <p>
  Team premas , Icon can be placed inside a circle timeline
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#000000', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: '#000000', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development </h3>
    <h4 className="vertical-timeline-element-subtitle">we have applied the basic css to the  timeline</h4>
    <p>
      Team , if you have any visual need regarding placement let us know.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#000000', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
  
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: '#000000', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">We will redeisgn visual after content</h3>
    <h4 className="vertical-timeline-element-subtitle">use subtitle here</h4>
    <p>
  Team, Timeline contains three major content alignment , headline , sub and content.
    </p>
  </VerticalTimelineElement>

  
</VerticalTimeline>
    
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
        <Articles data = {articles}/>
        <Weeat data = {weeat}/>
      </SectionAlternate>
      
     
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
