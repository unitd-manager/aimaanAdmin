(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[107,168],{141:function(e,t,c){"use strict";var s=c(63),n=c(12),i=c(58),r=c(3);t.a=function(e){var t=Object(n.f)(),c=t.pathname.split("/")[1],o=t.pathname.split("/")[2];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:e.heading}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),c?Object(r.jsx)(s.d,{active:!0,children:c}):"",o?Object(r.jsx)(s.d,{active:!0,children:o}):""]})]})}},1426:function(e,t,c){"use strict";c.r(t);var s=c(27),n=c(1),i=c(63),r=c(12),o=c(179),a=c.n(o),l=c(141),d=c(146),j=c(143),b=c(7),u=c(3);t.default=function(){var e=a()().format("YYYY-MM-DD"),t=Object(n.useState)({support_id:"",title:"",date:e,value:"new",record_type:"Change Request",creation_date:a()()}),c=Object(s.a)(t,2),o=c[0],h=c[1],p=Object(n.useState)(),O=Object(s.a)(p,2),x=O[0],m=O[1],f=Object(r.g)();return Object(n.useEffect)((function(){b.a.get("/support/getSection").then((function(e){m(e.data.data)})).catch((function(){Object(j.a)("Support Data Not Found","info")}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)(l.a,{}),Object(u.jsx)(i.eb,{children:Object(u.jsx)(i.s,{md:"6",xs:"12",children:Object(u.jsx)(d.default,{title:"Key Details",children:Object(u.jsxs)(i.A,{children:[Object(u.jsx)(i.C,{children:Object(u.jsx)(i.eb,{children:Object(u.jsxs)(i.s,{md:"12",children:[Object(u.jsxs)(i.H,{children:["Module Name ",Object(u.jsx)("span",{className:"required",children:" *"})]}),Object(u.jsxs)(i.E,{type:"select",onChange:function(e){var t=e.target.value.split(",");o.title=t[0],o.section_id=parseInt(t[1]),h(o)},name:"section_id",children:[Object(u.jsx)("option",{defaultValue:"selected",children:"Please Select"}),x&&x.map((function(e){return Object(u.jsx)("option",{value:"".concat(e.section_title,",").concat(e.section_id),children:e.section_title},e.section_id)}))]})]})})}),Object(u.jsx)(i.C,{children:Object(u.jsx)(i.eb,{children:Object(u.jsxs)("div",{className:"mt-3 d-flex align-items-center gap-2",children:[Object(u.jsx)(i.e,{className:"shadow-none",color:"primary",onClick:function(){o.section_id?b.a.post("/support/insertSupport",o).then((function(e){var t=e.data.data.insertId;Object(j.a)("Support inserted successfully.","success"),setTimeout((function(){f("/SupportEdit/".concat(t))}),300)})).catch((function(){Object(j.a)("Unable to edit record.","error")})):Object(j.a)("Please select module.","error"),setTimeout((function(){f("/SupportEdit")}),800)},children:"Save & Continue"}),Object(u.jsx)(i.e,{type:"submit",className:"btn btn-dark shadow-none",onClick:function(e){window.confirm("Are you sure you want to cancel? ")?f("/Support"):e.preventDefault()},children:"Cancel"})]})})})]})})})})]})}},143:function(e,t,c){"use strict";var s=c(155);c(178);t.a=function(e,t){return"success"===t?s.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?s.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?s.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?s.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(s.b)(e)}},146:function(e,t,c){"use strict";c.r(t);var s=c(63),n=(c(1),c(3));function i(e){var t=e.details,c=void 0===t?null:t,i=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(n.jsxs)(s.eb,{children:[Object(n.jsx)(s.s,{children:i}),c&&Object(n.jsxs)(s.s,{children:[Object(n.jsx)(s.eb,{children:Object(n.jsxs)("small",{children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(n.jsx)(s.eb,{className:"d-flex",children:Object(n.jsxs)("small",{children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,r=e.subtitle,o=e.creationModificationDate;return Object(n.jsxs)(s.i,{className:"shadow-none",children:[Object(n.jsx)(i,{details:o,title:c}),Object(n.jsxs)(s.j,{className:"p-4",children:[Object(n.jsx)(s.m,{className:"text-muted mb-3",children:r||""}),Object(n.jsx)("div",{children:t})]})]})}}}]);
//# sourceMappingURL=107.6740ddf2.chunk.js.map