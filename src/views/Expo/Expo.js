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



import {

  Advantages,
  Contact,
  Description,

  Hero,
  PromoNumbers,
  Reviews



} from './components';

import {
  promoNumbers,
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
