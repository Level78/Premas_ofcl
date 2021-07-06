(this["webpackJsonpthefront-js--react-scripts"]=this["webpackJsonpthefront-js--react-scripts"]||[]).push([[14],{733:function(o,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var t=n(1),r=n(0),i=(n(2),n(696)),s=n(659),c=n(6),a=n(158),l=n(4),d=[{name:"color",type:"enum",default:"",description:"Promo icon color to show inside the card. One of: colors.red, colors.pink, colors.purple, colors.deepPurple, colors.indigo, colors.blue, colors.lightBlue, colors.cyan, colors.teal, colors.green, colors.lightGreen, colors.lime, colors.yellow, colors.amber, colors.orange, colors.deepOrange, colors.brown, colors.grey, colors.blueGrey"},{name:"title",type:"string",default:"",description:"Promo title to show inside the card"},{name:"align",type:"enum",default:"left",description:"The content alignment. One of: left, right, center"},{name:"description",type:"string",default:"",description:"Promo description to show inside the card"},{name:"descriptionProps",type:"object",default:"",description:"Additional props to pass to the desciption Typography component"},{name:"fontIconClass",type:"string",default:"",description:"Promo font icon class name to show inside the card"},{name:"iconAlternateProps",type:"object",default:"",description:"Additional props to pass to the IconAlternate component"},{name:"subtitle",type:"string",default:"",description:"Promo subtitle to show inside the card"},{name:"subtitleProps",type:"object",default:"",description:"Additional props to pass to the subtitle Typography component"},{name:"titleColor",type:"string",default:"",description:"Title color"},{name:"titleProps",type:"object",default:"",description:"Additional props to pass to the title Typography component"},{name:"className",type:"string",default:"",description:"External classes"}],p=function(o){var e=Object.assign({},o);return Object(r.jsxs)("div",Object(t.a)(Object(t.a)({},e),{},{children:[Object(r.jsx)(a.e,{title:"Description",gutterBottom:!0,children:Object(r.jsx)(a.b,{title:"CardPromo",path:"src/components/organisms/CardPromo/CardPromo.js",description:"Component to display the promo card"})}),Object(r.jsx)(a.e,{title:"Import",gutterBottom:!0,children:Object(r.jsx)(a.a,{code:"\nimport { CardPromo } from 'components/organisms';\n// or\nimport CardPromo from 'components/organisms/CardPromo';\n"})}),Object(r.jsx)(a.e,{title:"Props & Methods",gutterBottom:!0,children:Object(r.jsx)(a.d,{dataProperties:d})}),Object(r.jsx)(a.e,{title:"Basic Example",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(r.jsx)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"700px",children:Object(r.jsxs)(s.a,{container:!0,spacing:2,children:[Object(r.jsx)(s.a,{item:!0,xs:4,children:Object(r.jsx)(l.k,{title:"1000+",subtitle:"Online Courses",description:"Choose from over 1000+ online video courses.",fontIconClass:"fas fa-pen-nib",color:c.a.pink})}),Object(r.jsx)(s.a,{item:!0,xs:4,children:Object(r.jsx)(l.k,{title:"800+",subtitle:"Online Courses",description:"Choose from over 1000+ online video courses.",fontIconClass:"fas fa-book-open",color:c.a.purple})}),Object(r.jsx)(s.a,{item:!0,xs:4,children:Object(r.jsx)(l.k,{title:"100K+",subtitle:"Online Courses",description:"Choose from over 1000+ online video courses.",fontIconClass:"fas fa-camera-retro",color:c.a.blue})})]})})}),Object(r.jsx)(a.a,{code:"\nimport React from 'react';\nimport { Box, Grid, colors } from '@material-ui/core';\nimport { CardPromo } from 'components/organisms';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n\n    </Box>\n  );\n}\n"})]})}),Object(r.jsx)(a.e,{title:"Outlined Effect",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(r.jsx)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"700px",children:Object(r.jsxs)(s.a,{container:!0,spacing:2,children:[Object(r.jsx)(s.a,{item:!0,xs:4,children:Object(r.jsx)(l.k,{title:"1000+",subtitle:"Online Courses",description:"Choose from over 1000+ online video courses.",fontIconClass:"fas fa-pen-nib",color:c.a.pink,variant:"outlined",withShadow:!0,liftUp:!0})}),Object(r.jsx)(s.a,{item:!0,xs:4,children:Object(r.jsx)(l.k,{title:"800+",subtitle:"Online Courses",description:"Choose from over 1000+ online video courses.",fontIconClass:"fas fa-book-open",color:c.a.purple,variant:"outlined",withShadow:!0,liftUp:!0})}),Object(r.jsx)(s.a,{item:!0,xs:4,children:Object(r.jsx)(l.k,{title:"100K+",subtitle:"Online Courses",description:"Choose from over 1000+ online video courses.",fontIconClass:"fas fa-camera-retro",color:c.a.blue,variant:"outlined",withShadow:!0,liftUp:!0})})]})})}),Object(r.jsx)(a.a,{code:'\nimport React from \'react\';\nimport { Box, Grid, colors } from \'@material-ui/core\';\nimport { CardPromo } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardPromo\n            title="1000+"\n            subtitle="Online Courses"\n            description="Choose from over 1000+ online video courses."\n            fontIconClass="fas fa-pen-nib"\n            color={colors.pink}\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPromo\n            title="800+"\n            subtitle="Online Courses"\n            description="Choose from over 1000+ online video courses."\n            fontIconClass="fas fa-book-open"\n            color={colors.purple}\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPromo\n            title="100K+"\n            subtitle="Online Courses"\n            description="Choose from over 1000+ online video courses."\n            fontIconClass="fas fa-camera-retro"\n            color={colors.blue}\n            variant="outlined"\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),Object(r.jsx)(a.e,{title:"Custom Shadow and LiftUp Effect",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(r.jsx)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"700px",children:Object(r.jsxs)(s.a,{container:!0,spacing:2,children:[Object(r.jsx)(s.a,{item:!0,xs:4,children:Object(r.jsx)(l.k,{title:"1000+",subtitle:"Online Courses",description:"Choose from over 1000+ online video courses.",fontIconClass:"fas fa-pen-nib",color:c.a.pink})}),Object(r.jsx)(s.a,{item:!0,xs:4,children:Object(r.jsx)(l.k,{title:"800+",subtitle:"Online Courses",description:"Choose from over 1000+ online video courses.",fontIconClass:"fas fa-book-open",color:c.a.purple})}),Object(r.jsx)(s.a,{item:!0,xs:4,children:Object(r.jsx)(l.k,{title:"100K+",subtitle:"Online Courses",description:"Choose from over 1000+ online video courses.",fontIconClass:"fas fa-camera-retro",color:c.a.blue})})]})})}),Object(r.jsx)(a.a,{code:'\nimport React from \'react\';\nimport { Box, Grid, colors } from \'@material-ui/core\';\nimport { CardPromo } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardPromo\n            title="1000+"\n            subtitle="Online Courses"\n            description="Choose from over 1000+ online video courses."\n            fontIconClass="fas fa-pen-nib"\n            color={colors.pink}\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPromo\n            title="800+"\n            subtitle="Online Courses"\n            description="Choose from over 1000+ online video courses."\n            fontIconClass="fas fa-book-open"\n            color={colors.purple}\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPromo\n            title="100K+"\n            subtitle="Online Courses"\n            description="Choose from over 1000+ online video courses."\n            fontIconClass="fas fa-camera-retro"\n            color={colors.blue}\n            withShadow\n            liftUp\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),Object(r.jsx)(a.e,{title:"Center Aligned",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(r.jsx)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"700px",children:Object(r.jsxs)(s.a,{container:!0,spacing:2,children:[Object(r.jsx)(s.a,{item:!0,xs:4,children:Object(r.jsx)(l.k,{title:"1000+",subtitle:"Online Courses",description:"Choose from over 1000+ online video courses.",fontIconClass:"fas fa-pen-nib",color:c.a.pink,withShadow:!0,liftUp:!0,align:"center"})}),Object(r.jsx)(s.a,{item:!0,xs:4,children:Object(r.jsx)(l.k,{title:"800+",subtitle:"Online Courses",description:"Choose from over 1000+ online video courses.",fontIconClass:"fas fa-book-open",color:c.a.purple,withShadow:!0,liftUp:!0,align:"center"})}),Object(r.jsx)(s.a,{item:!0,xs:4,children:Object(r.jsx)(l.k,{title:"100K+",subtitle:"Online Courses",description:"Choose from over 1000+ online video courses.",fontIconClass:"fas fa-camera-retro",color:c.a.blue,withShadow:!0,liftUp:!0,align:"center"})})]})})}),Object(r.jsx)(a.a,{code:'\nimport React from \'react\';\nimport { Box, Grid, colors } from \'@material-ui/core\';\nimport { CardPromo } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardPromo\n            title="1000+"\n            subtitle="Online Courses"\n            description="Choose from over 1000+ online video courses."\n            fontIconClass="fas fa-pen-nib"\n            color={colors.pink}\n            withShadow\n            liftUp\n            align="center"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPromo\n            title="800+"\n            subtitle="Online Courses"\n            description="Choose from over 1000+ online video courses."\n            fontIconClass="fas fa-book-open"\n            color={colors.purple}\n            withShadow\n            liftUp\n            align="center"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPromo\n            title="100K+"\n            subtitle="Online Courses"\n            description="Choose from over 1000+ online video courses."\n            fontIconClass="fas fa-camera-retro"\n            color={colors.blue}\n            withShadow\n            liftUp\n            align="center"\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})})]}))}}}]);