(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[97,168],{141:function(e,t,s){"use strict";var c=s(63),n=s(12),a=s(58),i=s(3);t.a=function(e){var t=Object(n.f)(),s=t.pathname.split("/")[1],r=t.pathname.split("/")[2];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:e.heading}),Object(i.jsxs)(c.c,{children:[Object(i.jsx)(c.d,{to:"/",tag:a.b,className:"text-decoration-none",children:"Home"}),s?Object(i.jsx)(c.d,{active:!0,children:s}):"",r?Object(i.jsx)(c.d,{active:!0,children:r}):""]})]})}},1414:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s(9),a=s(27),i=s(1),r=s(63),l=s(155),o=s(12),d=s(141),j=s(146),b=s(7),u=s(143),h=s(193),O=s(3);t.default=function(){var e=Object(i.useState)(),t=Object(a.a)(e,2),s=t[0],m=t[1],x=Object(i.useState)({key_text:"",value:""}),p=Object(a.a)(x,2),f=p[0],g=p[1],v=Object(o.h)().id,C=Object(o.g)(),y=function(e){g(Object(n.a)(Object(n.a)({},f),{},Object(c.a)({},e.target.name,e.target.value)))};return Object(i.useEffect)((function(){b.a.get("/valuelist/getValueListDropdown").then((function(e){m(e.data.data)})).catch((function(){Object(u.a)("Unable to edit record.","error")}))}),[v]),Object(O.jsxs)("div",{children:[Object(O.jsx)(d.a,{}),Object(O.jsx)(l.a,{}),Object(O.jsx)(r.eb,{children:Object(O.jsx)(r.s,{md:"6",xs:"12",children:Object(O.jsx)(j.default,{title:"Key Details",children:Object(O.jsxs)(r.A,{children:[Object(O.jsx)(r.C,{children:Object(O.jsx)(r.eb,{children:Object(O.jsxs)(r.s,{md:"12",children:[Object(O.jsxs)(r.H,{children:["Value List Name ",Object(O.jsx)("span",{className:"required",children:" *"})]}),Object(O.jsxs)(r.E,{type:"select",onChange:y,value:f&&f.key_text,name:"key_text",children:[Object(O.jsx)("option",{defaultValue:"selected",children:"Please Select"}),s&&s.map((function(e){return Object(O.jsx)("option",{value:e.name,children:e.name},e.name)}))]})]})})}),Object(O.jsx)(r.C,{children:Object(O.jsx)(r.eb,{children:Object(O.jsxs)(r.s,{md:"12",children:[Object(O.jsxs)(r.H,{children:["Value",Object(O.jsx)("span",{className:"required",children:" *"})]}),Object(O.jsx)(r.E,{type:"text",onChange:y,value:f&&f.value,name:"value"})]})})}),Object(O.jsx)(r.C,{children:Object(O.jsx)(r.eb,{children:Object(O.jsxs)("div",{className:"pt-3 mt-3 d-flex align-items-center gap-2",children:[Object(O.jsx)(r.e,{color:"primary",type:"button",className:"btn mr-2 shadow-none",onClick:function(){""!==f.key_text&&""!==f.value?(f.creation_date=h.a,b.a.post("/valuelist/insertValueList",f).then((function(e){var t=e.data.data.insertId;Object(u.a)("Valuelist inserted successfully.","success"),setTimeout((function(){C("/ValueListEdit/".concat(t))}),300)})).catch((function(){Object(u.a)("Unable to edit record.","error")}))):Object(u.a)("Please fill all required fields","warning")},children:"Save & Continue"}),Object(O.jsx)(r.e,{type:"submit",className:"btn btn-dark shadow-none",onClick:function(e){window.confirm("Are you sure you want to cancel? ")?C("/Valuelist"):e.preventDefault()},children:"Go to List"})]})})})]})})})})]})}},143:function(e,t,s){"use strict";var c=s(155);s(178);t.a=function(e,t){return"success"===t?c.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?c.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?c.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?c.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(c.b)(e)}},146:function(e,t,s){"use strict";s.r(t);var c=s(63),n=(s(1),s(3));function a(e){var t=e.details,s=void 0===t?null:t,a=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(c.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(n.jsxs)(c.eb,{children:[Object(n.jsx)(c.s,{children:a}),s&&Object(n.jsxs)(c.s,{children:[Object(n.jsx)(c.eb,{children:Object(n.jsxs)("small",{children:[" Creation: ",s&&s.created_by," ",s&&s.creation_date]})}),Object(n.jsx)(c.eb,{className:"d-flex",children:Object(n.jsxs)("small",{children:[" Modified: ",s&&s.modified_by," ",s&&s.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,s=e.title,i=e.subtitle,r=e.creationModificationDate;return Object(n.jsxs)(c.i,{className:"shadow-none",children:[Object(n.jsx)(a,{details:r,title:s}),Object(n.jsxs)(c.j,{className:"p-4",children:[Object(n.jsx)(c.m,{className:"text-muted mb-3",children:i||""}),Object(n.jsx)("div",{children:t})]})]})}},193:function(e,t,s){"use strict";var c=s(179),n=s.n(c),a=n()().format("DD-MM-YYYY h:mm:ss a"),i=n()(a,"DD-MM-YYYY h:mm:ss a").format("DD-MM-YYYY HH:mm:ss");console.log(i),t.a=i}}]);
//# sourceMappingURL=97.4460c4df.chunk.js.map