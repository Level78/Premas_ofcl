import React from 'react';





import {
 
  Grid,

  Divider,
} from '@material-ui/core';


import {  illuminia } from 'views/Ecommerce/data';
import { Sales } from 'views/Ecommerce/components';






export default function  Security(){

 
  return (
    <div>
     <Sales data = {illuminia}/>
  

          
      
      
        
        <Grid item xs={12}>
          <Divider />
        </Grid>
     
        
       
        
     
    </div>
   
  );
  }

