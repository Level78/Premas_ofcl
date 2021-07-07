import React from 'react'
import { makeStyles , Button } from '@material-ui/core'

const myStyle = makeStyles({

root:{

background:'linera-gradient(deg45 , #ffff 30% , #000000 40%)'


}





});


export default function Xgenomics(){
    const classes = myStyle();

    <Button className = {classes.root}> Hello world</Button>
}
