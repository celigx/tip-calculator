(this["webpackJsonptip-calculator"]=this["webpackJsonptip-calculator"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),i=c.n(a),l=(c(9),c(2)),r=(c(10),c(0));var j=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),i=Object(l.a)(a,2),j=i[0],u=i[1],b=Object(n.useState)(1),o=Object(l.a)(b,2),d=o[0],m=o[1],h=Object(n.useState)(0),O=Object(l.a)(h,2),p=O[0],v=O[1],x=Object(n.useState)(0),N=Object(l.a)(x,2),f=N[0],C=N[1],g=Object(n.useState)(""),S=Object(l.a)(g,2),k=S[0],y=S[1];Object(n.useEffect)((function(){F()}),[c,j,d]);var F=function(){var e=Number(c)*(j/100)/d,t=Number(c)/d+e;v(e),C(t)},T=function(e){u(e.target.value),y(e.target.id)};console.log(d);var w=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(r.jsx)("div",{className:"app",children:Object(r.jsxs)("div",{className:"mainContainer",children:[Object(r.jsxs)("div",{className:"inputContainer",children:[Object(r.jsxs)("div",{className:"billContainer",children:[Object(r.jsx)("h4",{className:"title",children:"Bill"}),Object(r.jsx)("input",{className:"input",type:"number",placeholder:"0",value:c,onChange:function(e){s(e.target.value)}})]}),Object(r.jsxs)("div",{className:"tip",children:[Object(r.jsx)("h4",{className:"title",children:"Select Tip %"}),Object(r.jsxs)("div",{className:"tipPercentage",children:[Object(r.jsx)("button",{className:"a"===k?"button active":"button",id:"a",value:5,onClick:T,children:"5%"}),Object(r.jsx)("button",{className:"b"===k?"button active":"button",id:"b",value:10,onClick:T,children:"10%"}),Object(r.jsx)("button",{className:"c"===k?"button active":"button",id:"c",value:15,onClick:T,children:"15%"}),Object(r.jsx)("button",{className:"d"===k?"button active":"button",id:"d",value:25,onClick:T,children:"25%"}),Object(r.jsx)("button",{className:"e"===k?"button active":"button",id:"e",value:50,onClick:T,children:"50%"}),Object(r.jsx)("input",{className:"button custom",id:"f",type:"number",placeholder:"Custom",value:"f"===k?j:"",onChange:function(e){u(e.target.value),y(e.target.id)},onClick:T})]}),Object(r.jsxs)("div",{className:"numberOfPeople",children:[Object(r.jsxs)("div",{className:"",children:[Object(r.jsx)("h4",{className:"title",children:"Number of people"}),Object(r.jsx)("p",{className:"0"===d?"show":"hide",children:"Can't be zero"})]}),Object(r.jsx)("input",{className:"0"===d?"input show":"input",type:"number",placeholder:"1",value:d,onChange:function(e){m(e.target.value)}})]})]})]}),Object(r.jsxs)("div",{className:"outputContainer",children:[Object(r.jsxs)("div",{className:"tipAmount",children:[Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)("h4",{className:"title",children:"Tip Amount"}),Object(r.jsx)("p",{className:"person",children:"/ person"})]}),Object(r.jsx)("div",{className:"number",children:Object(r.jsx)("h1",{children:isFinite(p)?w.format(p):w.format(0)})})]}),Object(r.jsxs)("div",{className:"tipAmount",children:[Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)("h4",{className:"title",children:"Total"}),Object(r.jsx)("p",{className:"person",children:"/ person"})]}),Object(r.jsx)("div",{className:"number",children:Object(r.jsx)("h1",{children:isFinite(f)?w.format(f):w.format(0)})})]}),Object(r.jsx)("button",{className:"reset",onClick:function(){s(""),u(null),m(1),y(null)},children:"RESET"})]})]})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),u()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.c937287c.chunk.js.map