(this["webpackJsonpthefront-js--react-scripts"]=this["webpackJsonpthefront-js--react-scripts"]||[]).push([[16],{715:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return c}));var n=o(1),r=o(0),i=(o(2),o(696)),s=o(158),p=o(5),a=[{name:"end",type:"number",default:"",description:"The final number"},{name:"label",type:"string",default:"",description:"The label text of the count up number"},{name:"className",type:"string",default:"",description:"External classes"},{name:"countNumberProps",type:"object",default:"",description:"Additional properties to pass to the CountUp React component"},{name:"countWrapperProps",type:"object",default:"",description:"Additional properties to pass to the count wrapper Typography component"},{name:"labelColor",type:"string",default:"",description:"Label color"},{name:"labelProps",type:"object",default:"",description:"Additional properties to pass to the label Typography component"},{name:"prefix",type:"string",default:"",description:"The Prefix of the count up number"},{name:"start",type:"number",default:"0",description:"Starting number"},{name:"suffix",type:"string",default:"",description:"The Suffix of the count up number"},{name:"textColor",type:"string",default:"",description:"Text color"},{name:"visibilitySensorProps",type:"object",default:"",description:"Additional properties to pass to the VisibilitySensor Component"},{name:"wrapperProps",type:"object",default:"",description:"Additional properties to pass to the wrapper div"}],c=function(e){var t=Object.assign({},e);return Object(r.jsxs)("div",Object(n.a)(Object(n.a)({},t),{},{children:[Object(r.jsx)(s.e,{title:"Description",gutterBottom:!0,children:Object(r.jsx)(s.b,{title:"CountUpNumber",path:"src/components/molecules/CountUpNumber/CountUpNumber.js",description:"Component to display the Count Up Numbers"})}),Object(r.jsx)(s.e,{title:"Import",gutterBottom:!0,children:Object(r.jsx)(s.a,{code:"\nimport { CountUpNumber } from 'components/molecules';\n// or\nimport CountUpNumber from 'components/molecules/CountUpNumber';\n"})}),Object(r.jsx)(s.e,{title:"Props & Methods",gutterBottom:!0,children:Object(r.jsx)(s.d,{dataProperties:a})}),Object(r.jsx)(s.e,{title:"Example",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(r.jsxs)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"600px",children:[Object(r.jsx)(p.a,{end:458,suffix:"K",label:"Placement"}),Object(r.jsx)(p.a,{end:360,prefix:"$",suffix:"K",label:"Money Invested"}),Object(r.jsx)(p.a,{end:80,suffix:"+",label:"Locations"})]})}),Object(r.jsx)(s.a,{code:'\nimport React from \'react\';\nimport { Box } from \'@material-ui/core\';\nimport { CountUpNumber } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px" overflow="auto">\n      <Box display="flex" justifyContent="space-around" alignItems="center" minWidth="600px">\n        <CountUpNumber end={458} suffix="K" label="Placement" />\n        <CountUpNumber end={360} prefix="$" suffix="K" label="Money Invested" />\n        <CountUpNumber end={80} suffix="+" label="Locations" />\n      </Box>\n    </Box>\n  );\n}\n'})]})})]}))}}}]);