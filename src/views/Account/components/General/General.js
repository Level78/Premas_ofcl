import React from 'react';





import {
 
  Grid,

  Divider,
} from '@material-ui/core';


// import { genomicRange } from 'views/Ecommerce/data';
// import { Sales } from 'views/Ecommerce/components';
import Genomicall from 'Pcat/Genomicall/Genomicall'





export default function  General(){

 
  return (
    <div>
     {/* <Sales data = {genomicRange}/> */}
  
    <Genomicall/>
          
      
      
        
        <Grid item xs={12}>
          <Divider />
        </Grid>
     
        
       
        
     
    </div>
   
  );
  }

