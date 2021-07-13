// import { Button } from '@material-ui/core';
import React from 'react'
import './Herosec.css';
import { TypedText } from './molecules';








function Herosec() {
    return (
        <div className = "showcase">
            <video width="100%" src = "/videos/polo.mp4" autoPlay loop muted/>
               <div className="intro">
                <h2>Breakthrough Discoveries Need</h2>
                <h3>Breakthrough</h3>
                <TypedText
        component="span"
        variant="h4"
        color="#ffff"
        typedProps={{
            strings: [ "Technologies.", "Innovation.", "Advancments." ],
            typeSpeed: 80,
            loop: true,
        }}
      />
                </div>
                {/* <h3> exploring the world</h3>
            <div className = "hero-btns">
                <Button className='btns' buttonstyle = 'btn-outline' buttonSize = 'btn-large'>explore</Button>
                </div> */}
           

        </div>
    )
}
 
export default Herosec
