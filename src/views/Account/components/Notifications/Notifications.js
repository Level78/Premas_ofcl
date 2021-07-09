import React from 'react';





import {
 
  Grid,

  Divider,
} from '@material-ui/core';


import { fluid } from 'views/Ecommerce/data';
import { Sales } from 'views/Ecommerce/components';





export default function  Notification(){

 
  return (
    <div>
      
     <Sales data = {fluid}/>
  

          
      
      
        
        <Grid item xs={12}>
          <Divider />
        </Grid>
     
        
       
        
     
    </div>
   
  );
  }

