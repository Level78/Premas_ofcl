import React from 'react';





import {
 
  Grid,

  Divider,
} from '@material-ui/core';


import { protien } from 'views/Ecommerce/data';
import { Sales } from 'views/Ecommerce/components';






export default function  Billing(){

 
  return (
    <div>
     <Sales data = {protien}/>
    
  

          
      
      
        
        <Grid item xs={12}>
          <Divider />
        </Grid>
     
        
       
        
     
    </div>
   
  );
  }

