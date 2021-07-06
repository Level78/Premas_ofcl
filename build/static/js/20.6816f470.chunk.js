(this["webpackJsonpthefront-js--react-scripts"]=this["webpackJsonpthefront-js--react-scripts"]||[]).push([[20],{736:function(o,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return p}));var r=e(1),n=e(0),a=(e(2),e(696)),i=e(659),c=e(71),s=e(662),d=e(6),l=e(158),h=e(4),m=[{name:"backgroundColor",type:"string",default:"",description:"Background color of the hero"},{name:"backgroundImg",type:"string",default:"",description:"Background image of the hero"},{name:"backgroundPosition",type:"string",default:"",description:"Background position of the hero"},{name:"children",type:"node",default:"",description:"Children to placed inside the hero"},{name:"contentSectionClassName",type:"string",default:"",description:"Custom classes for the content section"},{name:"disbaleCoverOpacity",type:"bool",default:"",description:"Should disable here cover opacity"},{name:"className",type:"string",default:"",description:"External classes"}],p=function(o){var t=Object.assign({},o);return Object(n.jsxs)("div",Object(r.a)(Object(r.a)({},t),{},{children:[Object(n.jsx)(l.e,{title:"Description",gutterBottom:!0,children:Object(n.jsx)(l.b,{title:"HeroBackground",path:"src/components/organisms/HeroBackground/HeroBackground.js",description:"Component to display the background hero"})}),Object(n.jsx)(l.e,{title:"Import",gutterBottom:!0,children:Object(n.jsx)(l.a,{code:"\nimport { HeroBackground } from 'components/organisms';\n// or\nimport HeroBackground from 'components/organisms/HeroBackground';\n"})}),Object(n.jsx)(l.e,{title:"Props & Methods",gutterBottom:!0,children:Object(n.jsx)(l.d,{dataProperties:m})}),Object(n.jsx)(l.e,{title:"Basic Example",gutterBottom:!0,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(a.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(n.jsx)(h.o,{children:Object(n.jsxs)(i.a,{container:!0,spacing:4,children:[Object(n.jsx)(i.a,{item:!0,xs:12,children:Object(n.jsx)(c.a,{variant:"h3",style:{color:"white",fontWeight:900},children:"Join the world's leading companies at TheFront 2020"})}),Object(n.jsxs)(i.a,{item:!0,xs:12,md:6,children:[Object(n.jsx)(c.a,{variant:"h5",style:{color:"white"},gutterBottom:!0,children:"Whether it\u2019s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners."}),Object(n.jsx)(c.a,{variant:"h5",style:{color:"white"},children:"Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020."})]}),Object(n.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(n.jsx)(s.a,{variant:"contained",children:"Download exhibitor overview"})})]})})}),Object(n.jsx)(l.a,{code:"\nimport React from 'react';\nimport { Box, Grid, Typography, Button } from '@material-ui/core';\nimport { HeroBackground } from 'components/organisms';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <HeroBackground>\n        <Grid container spacing={4}>\n          <Grid item xs={12}>\n            <Typography variant=\"h3\" style={{ color: 'white', fontWeight: 900, }}>\n                Join the world's leading companies at TheFront 2020\n            </Typography>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <Typography variant=\"h5\" style={{ color: 'white' }} gutterBottom>\n                Whether it\u2019s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners.\n            </Typography>\n            <Typography variant=\"h5\" style={{ color: 'white' }}>\n                Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.\n            </Typography>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <Button variant=\"contained\">Download exhibitor overview</Button>\n          </Grid>\n        </Grid>\n      </HeroBackground>\n    </Box>\n  );\n}\n"})]})}),Object(n.jsx)(l.e,{title:"Custom Background Color Example",gutterBottom:!0,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(a.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(n.jsx)(h.o,{backgroundColor:d.a.blue[500],children:Object(n.jsxs)(i.a,{container:!0,spacing:4,children:[Object(n.jsx)(i.a,{item:!0,xs:12,children:Object(n.jsx)(c.a,{variant:"h3",style:{color:"white",fontWeight:900},children:"Join the world's leading companies at TheFront 2020"})}),Object(n.jsxs)(i.a,{item:!0,xs:12,md:6,children:[Object(n.jsx)(c.a,{variant:"h5",style:{color:"white"},gutterBottom:!0,children:"Whether it\u2019s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners."}),Object(n.jsx)(c.a,{variant:"h5",style:{color:"white"},children:"Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020."})]}),Object(n.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(n.jsx)(s.a,{variant:"contained",children:"Download exhibitor overview"})})]})})}),Object(n.jsx)(l.a,{code:"\nimport React from 'react';\nimport { Box, Grid, Typography, Button, colors } from '@material-ui/core';\nimport { HeroBackground } from 'components/organisms';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <HeroBackground backgroundColor={colors.blue[500]}>\n        <Grid container spacing={4}>\n          <Grid item xs={12}>\n            <Typography variant=\"h3\" style={{ color: 'white', fontWeight: 900, }}>\n                Join the world's leading companies at TheFront 2020\n            </Typography>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <Typography variant=\"h5\" style={{ color: 'white' }} gutterBottom>\n                Whether it\u2019s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners.\n            </Typography>\n            <Typography variant=\"h5\" style={{ color: 'white' }}>\n                Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.\n            </Typography>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <Button variant=\"contained\">Download exhibitor overview</Button>\n          </Grid>\n        </Grid>\n      </HeroBackground>\n    </Box>\n  );\n}\n"})]})}),Object(n.jsx)(l.e,{title:"Custom Background Image Example",gutterBottom:!0,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(a.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(n.jsx)(h.o,{backgroundImg:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg",children:Object(n.jsxs)(i.a,{container:!0,spacing:4,children:[Object(n.jsx)(i.a,{item:!0,xs:12,children:Object(n.jsx)(c.a,{variant:"h3",style:{color:"white",fontWeight:900},children:"Join the world's leading companies at TheFront 2020"})}),Object(n.jsxs)(i.a,{item:!0,xs:12,md:6,children:[Object(n.jsx)(c.a,{variant:"h5",style:{color:"white"},gutterBottom:!0,children:"Whether it\u2019s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners."}),Object(n.jsx)(c.a,{variant:"h5",style:{color:"white"},children:"Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020."})]}),Object(n.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(n.jsx)(s.a,{variant:"contained",children:"Download exhibitor overview"})})]})})}),Object(n.jsx)(l.a,{code:'\nimport React from \'react\';\nimport { Box, Grid, Typography, Button, colors } from \'@material-ui/core\';\nimport { HeroBackground } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <HeroBackground backgroundImg="https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg">\n        <Grid container spacing={4}>\n          <Grid item xs={12}>\n            <Typography variant="h3" style={{ color: \'white\', fontWeight: 900, }}>\n              Join the world\'s leading companies at TheFront 2020\n            </Typography>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <Typography variant="h5" style={{ color: \'white\' }} gutterBottom>\n              Whether it\u2019s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners.\n            </Typography>\n            <Typography variant="h5" style={{ color: \'white\' }}>\n              Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.\n            </Typography>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <Button variant="contained">Download exhibitor overview</Button>\n          </Grid>\n        </Grid>\n      </HeroBackground>\n    </Box>\n  );\n}\n'})]})})]}))}}}]);