(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[90,168],{1407:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(9),a=c(27),r=c(1),i=c(63),o=c(12),l=c(179),d=c.n(l),j=c(155),b=c(141),h=c(146),O=c(143),u=c(7),m=c(193),x=c(3);t.default=function(){var e=Object(r.useState)(),t=Object(a.a)(e,2),c=t[0],l=t[1],f=Object(o.g)(),g=Object(r.useState)({title:"",creation_date:d()(),content_date:d()(),content_type:""}),p=Object(a.a)(g,2),v=p[0],C=p[1];return Object(r.useEffect)((function(){u.a.get("/contact/getContact").then((function(e){l(e.data.data),console.log(c)}))}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)(b.a,{}),Object(x.jsx)(j.a,{}),Object(x.jsx)(i.eb,{children:Object(x.jsx)(i.s,{md:"6",children:Object(x.jsx)(h.default,{title:"Key Details",children:Object(x.jsxs)(i.A,{children:[Object(x.jsx)(i.C,{children:Object(x.jsx)(i.eb,{children:Object(x.jsxs)(i.s,{md:"12",children:[Object(x.jsx)(i.H,{children:"Name"}),Object(x.jsx)(i.E,{type:"text",onChange:function(e){C(Object(n.a)(Object(n.a)({},v),{},Object(s.a)({},e.target.name,e.target.value)))},value:v&&v.first_name,name:"first_name"})]})})}),Object(x.jsx)(i.C,{children:Object(x.jsx)(i.eb,{children:Object(x.jsxs)("div",{className:"pt-3 mt-3 d-flex align-items-center gap-2",children:[Object(x.jsx)(i.e,{className:"shadow-none",color:"primary",onClick:function(){""!==v.first_name?(v.creation_date=m.a,u.a.post("/contact/insertContact",v).then((function(e){var t=e.data.data.insertId;Object(O.a)("Customer inserted successfully.","success"),setTimeout((function(){f("/CustomerEdit/".concat(t))}),300)})).catch((function(){Object(O.a)("Network connection error.","error")}))):Object(O.a)("Please fill all required fields.","error")},children:"Save"}),Object(x.jsx)(i.e,{onClick:function(){f(-1)},type:"button",className:"btn btn-dark shadow-none",children:"Cancel"})]})})})]})})})})]})}},141:function(e,t,c){"use strict";var s=c(63),n=c(12),a=c(58),r=c(3);t.a=function(e){var t=Object(n.f)(),c=t.pathname.split("/")[1],i=t.pathname.split("/")[2];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:e.heading}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.d,{to:"/",tag:a.b,className:"text-decoration-none",children:"Home"}),c?Object(r.jsx)(s.d,{active:!0,children:c}):"",i?Object(r.jsx)(s.d,{active:!0,children:i}):""]})]})}},143:function(e,t,c){"use strict";var s=c(155);c(178);t.a=function(e,t){return"success"===t?s.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?s.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?s.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?s.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(s.b)(e)}},146:function(e,t,c){"use strict";c.r(t);var s=c(63),n=(c(1),c(3));function a(e){var t=e.details,c=void 0===t?null:t,a=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(n.jsxs)(s.eb,{children:[Object(n.jsx)(s.s,{children:a}),c&&Object(n.jsxs)(s.s,{children:[Object(n.jsx)(s.eb,{children:Object(n.jsxs)("small",{children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(n.jsx)(s.eb,{className:"d-flex",children:Object(n.jsxs)("small",{children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,r=e.subtitle,i=e.creationModificationDate;return Object(n.jsxs)(s.i,{className:"shadow-none",children:[Object(n.jsx)(a,{details:i,title:c}),Object(n.jsxs)(s.j,{className:"p-4",children:[Object(n.jsx)(s.m,{className:"text-muted mb-3",children:r||""}),Object(n.jsx)("div",{children:t})]})]})}},193:function(e,t,c){"use strict";var s=c(179),n=c.n(s),a=n()().format("DD-MM-YYYY h:mm:ss a"),r=n()(a,"DD-MM-YYYY h:mm:ss a").format("DD-MM-YYYY HH:mm:ss");console.log(r),t.a=r}}]);
//# sourceMappingURL=90.887431d0.chunk.js.map