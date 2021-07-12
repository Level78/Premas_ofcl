import React from 'react'
import './Herosec.CSS';
import { Section } from './organisms';







function Herosec() {
    return (
        <Section className= 'hero-container'>
            <video src = "/videos/pexe.mp4" autoPlay loop muted/>
            <h1> Furure is genomics</h1>

        </Section>
    )
}
 
export default Herosec
