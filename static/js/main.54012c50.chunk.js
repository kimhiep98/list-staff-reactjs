(this["webpackJsonplist-staff"]=this["webpackJsonplist-staff"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var i=a(1),c=a(0),n=a.n(c),s=a(21),r=a.n(s),l=(a(28),a(8)),o=a(12),j=(a(29),a(4)),m=function(e,t){if("fNAME_INCRE"===t.type){var a=Object(l.a)(e.people);return a.sort((function(e,t){return e.firstName>t.firstName?1:t.firstName>e.firstName?-1:0})),Object(j.a)(Object(j.a)({},e),{},{buttonType:!0,sortBy:"fname",people:a})}if("fNAME_DECRE"===t.type){var i=Object(l.a)(e.people);return i.sort((function(e,t){return e.firstName<t.firstName?1:t.firstName<e.firstName?-1:0})),Object(j.a)(Object(j.a)({},e),{},{buttonType:!1,sortBy:"fname",people:i})}if("lNAME_INCRE"===t.type){var c=Object(l.a)(e.people);return c.sort((function(e,t){return e.lastName>t.lastName?1:t.lastName>e.lastName?-1:0})),Object(j.a)(Object(j.a)({},e),{},{buttonType:!0,sortBy:"lname",people:c})}if("lNAME_DECRE"===t.type){var n=Object(l.a)(e.people);return n.sort((function(e,t){return e.lastName<t.lastName?1:t.lastName<e.lastName?-1:0})),Object(j.a)(Object(j.a)({},e),{},{buttonType:!1,sortBy:"lname",people:n})}if("EMAIL_INCRE"===t.type){var s=Object(l.a)(e.people);return s.sort((function(e,t){return e.email>t.email?1:t.email>e.email?-1:0})),Object(j.a)(Object(j.a)({},e),{},{buttonType:!0,sortBy:"email",people:s})}if("EMAIL_DECRE"===t.type){var r=Object(l.a)(e.people);return r.sort((function(e,t){return e.email<t.email?1:t.email<e.email?-1:0})),Object(j.a)(Object(j.a)({},e),{},{buttonType:!1,sortBy:"email",people:r})}if("DATE_INCRE"===t.type){var o=Object(l.a)(e.people);return o.sort((function(e,t){return e.date>t.date?1:t.date>e.date?-1:0})),Object(j.a)(Object(j.a)({},e),{},{buttonType:!0,sortBy:"fname",people:o})}if("DATE_DECRE"===t.type){var m=Object(l.a)(e.people);return m.sort((function(e,t){return e.date<t.date?1:t.date<e.date?-1:0})),Object(j.a)(Object(j.a)({},e),{},{buttonType:!1,sortBy:"date",people:m})}return e},b=[{id:"1",firstName:"Toma",lastName:"Cruise",email:"tomcrusise@gmail.com",date:"09-06-2020"},{id:"2",firstName:"Maria",lastName:"Sharapova",email:"mariamharapova@gmail.com",date:""},{id:"3",firstName:"John",lastName:"Towa",email:"JohnTowa@gmail.com",date:""},{id:"4",firstName:"Jack",lastName:"Kuri",email:"Jack@gmail.com",date:""},{id:"5",firstName:"Tony",lastName:"Teddy",email:"Teddy@gmail.com",date:""},{id:"6",firstName:"Laria",lastName:"Sampon",email:"Sampon@gmail.com",date:""},{id:"7",firstName:"Mohamet",lastName:"Huhi",email:"Huhi@gmail.com",date:""},{id:"8",firstName:"Karia",lastName:"Vuiton",email:"Vuiton@gmail.com",date:""},{id:"9",firstName:"Luis",lastName:"Cater",email:"Cater@gmail.com",date:""},{id:"10",firstName:"Nova",lastName:"Sharapova",email:"mariamharapova@gmail.com",date:""},{id:"11",firstName:"Arcara",lastName:"Lava",email:"Lava@gmail.com",date:""}],p=a(11);a(30);var u=function(e){var t=e.id,a=Object(c.useState)(b),n=Object(o.a)(a,2),s=n[0],r=(n[1],Object(c.useState)({id:"",name:"",email:"",date:""})),l=Object(o.a)(r,2),j=(l[0],l[1]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:function(){j(s.filter((function(e){return e.id===t}))),console.log(s)}}),Object(i.jsx)(p.b,{to:"/",children:"Back to home"})]})};var d=function(e){var t=e.people,a=function(e){p.b,"profile/".concat(e)};return Object(i.jsx)("div",{className:"list-person",children:t.map((function(e){var t=e.id,c=e.firstName,n=e.lastName,s=e.email,r=e.date;return Object(i.jsxs)("div",{className:"person-info",children:[Object(i.jsx)("p",{children:c}),Object(i.jsx)("p",{children:n}),Object(i.jsx)("p",{children:s}),Object(i.jsx)("p",{children:r}),Object(i.jsx)("button",{className:"check-person",onClick:a(t),children:" Go to profile"})]},t)}))})},O=a(9),f={people:b,buttonType:!1};var N=function(){var e=Object(c.useState)(8),t=Object(o.a)(e,2),a=t[0],n=(t[1],Object(c.useReducer)(m,f)),s=Object(o.a)(n,2),r=s[0],j=s[1],b=function(e){var t=e.currentTarget.value,a=r.buttonType;"fname"===t&&!1===a&&(console.log("atc"),j({type:"fNAME_INCRE"})),"fname"===t&&!0===a&&(console.log("atc1"),j({type:"fNAME_DECRE"})),"lname"===t&&!1===a&&j({type:"lNAME_INCRE"}),"lname"===t&&!0===a&&j({type:"lNAME_DECRE"}),"email"===t&&!1===a&&j({type:"EMAIL_INCRE"}),"email"===t&&!0===a&&j({type:"EMAIL_DECRE"})};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"list-staff",children:[Object(i.jsxs)("div",{className:"tool-bar",children:[Object(i.jsxs)("p",{children:["Show"," ",Object(i.jsx)("select",{id:"entries-quantum",name:"entries-quantum",children:function(e){for(var t=[],a=1;a<=e;a++)t.push(Object(i.jsx)("option",{value:a,children:a},a));return t}(a)})," ","entries"]}),Object(i.jsx)("input",{type:"text",placeholder:"Search"})]}),Object(i.jsxs)("div",{className:"list-info",children:[Object(i.jsxs)("div",{className:"list-title",children:[Object(i.jsxs)("p",{children:["Firstname"," ",Object(i.jsx)("button",{value:"fname",onClick:b,children:r.buttonType?Object(i.jsx)(O.b,{size:"20"}):Object(i.jsx)(O.a,{size:"20"})})]}),Object(i.jsxs)("p",{children:["Lastname"," ",Object(i.jsx)("button",{value:"lname",onClick:b,children:r.buttonType?Object(i.jsx)(O.b,{size:"20"}):Object(i.jsx)(O.a,{size:"20"})})]}),Object(i.jsxs)("p",{children:["Email"," ",Object(i.jsx)("button",{value:"email",onClick:b,children:r.buttonType?Object(i.jsx)(O.b,{size:"20"}):Object(i.jsx)(O.a,{size:"20"})})]}),Object(i.jsxs)("p",{children:["Date"," ",Object(i.jsx)("button",{value:"date",onClick:b,children:r.buttonType?Object(i.jsx)(O.b,{size:"20"}):Object(i.jsx)(O.a,{size:"20"})})]}),Object(i.jsx)("p",{children:"Profile"})]}),Object(i.jsx)(d,{people:Object(l.a)(r.people)}),Object(i.jsxs)("div",{className:"pagination",children:[Object(i.jsx)("button",{className:"prev",onClick:function(){},children:"Previous"}),Object(i.jsx)("button",{className:"next",onClick:function(){},children:"Next"})]})]})]})})},h=a(2);var x=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(p.a,{children:Object(i.jsxs)(h.c,{children:[Object(i.jsx)(h.a,{path:"/",exact:!0}),Object(i.jsx)(h.a,{path:"/profile/:id",children:Object(i.jsx)(u,{})})]})}),Object(i.jsx)(N,{})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.54012c50.chunk.js.map