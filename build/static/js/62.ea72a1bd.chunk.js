(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[62,168],{141:function(e,t,c){"use strict";var s=c(63),n=c(12),i=c(58),r=c(3);t.a=function(e){var t=Object(n.f)(),c=t.pathname.split("/")[1],j=t.pathname.split("/")[2];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:e.heading}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),c?Object(r.jsx)(s.d,{active:!0,children:c}):"",j?Object(r.jsx)(s.d,{active:!0,children:j}):""]})]})}},143:function(e,t,c){"use strict";var s=c(155);c(178);t.a=function(e,t){return"success"===t?s.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?s.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?s.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?s.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(s.b)(e)}},1453:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(9),i=c(27),r=c(1),j=c(63),d=c(12),a=(c(257),c(255),c(141)),l=c(146),b=c(143),o=c(7),h=c(256),O=c(3);function x(e){var t=e.backToList,c=e.editFinanceData,s=e.navigate;return Object(O.jsx)(j.A,{children:Object(O.jsx)(j.C,{children:Object(O.jsx)(h.a,{children:Object(O.jsxs)(j.eb,{children:[Object(O.jsx)(j.s,{children:Object(O.jsx)(j.e,{color:"primary",onClick:function(){c()},children:"Save"})}),Object(O.jsx)(j.s,{children:Object(O.jsx)(j.e,{className:"shadow-none",color:"primary",onClick:function(){c()},children:"Apply"})}),Object(O.jsx)(j.s,{children:Object(O.jsx)(j.e,{className:"shadow-none",color:"dark",onClick:function(){t(),s("/Orders")},children:"Back to List"})})]})})})})}var u=c(179),m=c.n(u);function p(e){var t=e.financeDetails,c=e.handleInputs;return Object(O.jsx)(j.A,{children:Object(O.jsx)(j.C,{children:Object(O.jsxs)(j.eb,{children:[Object(O.jsx)(j.s,{md:"3",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:" Shipping Name "}),Object(O.jsx)(j.E,{type:"text",onChange:c,value:t&&t.shipping_first_name,name:"shipping_first_name"})]})}),Object(O.jsx)(j.s,{md:"3",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:" Address 1 "}),Object(O.jsx)(j.E,{type:"text",onChange:c,value:t&&t.shipping_address1,name:"shipping_address1"})]})}),Object(O.jsx)(j.s,{md:"3",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:" Address 2 "}),Object(O.jsx)(j.E,{type:"text",onChange:c,value:t&&t.shipping_address2,name:"shipping_address2"})]})}),Object(O.jsx)(j.s,{md:"3",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:" Country "}),Object(O.jsx)(j.E,{type:"text",onChange:c,value:t&&t.shipping_address_country,name:"shipping_address_country"})]})}),Object(O.jsx)(j.s,{md:"3",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:" Postal Code "}),Object(O.jsx)(j.E,{type:"text",onChange:c,value:t&&t.shipping_address_po_code,name:"shipping_address_po_code"})]})}),Object(O.jsx)(j.s,{md:"3",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:" Delivery Date"}),Object(O.jsx)(j.E,{type:"date",onChange:c,value:t&&m()(t.delivery_date&&t.delivery_date).format("YYYY-MM-DD"),name:"delivery_date"})]})})]})})})}function f(e){var t=e.financeDetails,c=e.handleInputs;return Object(O.jsx)(j.A,{children:Object(O.jsx)(j.C,{children:Object(O.jsx)(l.default,{title:"Main Details",children:Object(O.jsxs)(j.eb,{children:[Object(O.jsx)(j.s,{md:"3",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:"Order Id "}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[t&&t.order_id," "]})]})}),Object(O.jsx)(j.s,{md:"3",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:"Payment Method "}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[t&&t.payment_method," "]})]})}),Object(O.jsx)(j.s,{md:"3",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:"Order Date"}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:t&&t.order_date})]})}),Object(O.jsx)(j.s,{md:"3",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:"Delivery Date"}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:t&&t.delivery_date})]})}),Object(O.jsx)(j.s,{md:"3",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:"Amount"}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:t&&t.amount})]})}),Object(O.jsx)(j.s,{md:"3",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:"Status"}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:t&&t.order_status})]})}),Object(O.jsx)(j.s,{md:"3",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:"Published"}),Object(O.jsx)("br",{}),Object(O.jsx)(j.H,{children:"Yes"}),Object(O.jsx)(j.E,{name:"published",value:"1",type:"radio",defaultChecked:t&&1===t.published&&!0,onChange:c}),Object(O.jsx)(j.H,{children:"No"}),Object(O.jsx)(j.E,{name:"published",value:"0",type:"radio",defaultChecked:t&&0===t.published&&!0,onChange:c})]})})]})})})})}var g=c(193);function v(e){var t=e.historyDetails;return Object(O.jsx)(j.A,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(j.ib,{id:"example",children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{children:[{name:"Order Item"},{name:"Product Name"},{name:"Quantity"},{name:"Cost Price"},{name:"Delivery Date"}].map((function(e){return Object(O.jsx)("td",{children:e.name},e.name)}))})}),Object(O.jsx)("tbody",{children:t&&t.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.order_item_id}),Object(O.jsx)("td",{children:e.item_title}),Object(O.jsx)("td",{children:e.qty}),Object(O.jsx)("td",{children:e.unit_price}),Object(O.jsx)("td",{children:e.delivery_date}),Object(O.jsx)("td",{})]},e.order_item_id)}))})]})})})}function C(e){var t=e.financeDetails;return Object(O.jsx)(j.A,{children:Object(O.jsx)(j.C,{children:Object(O.jsxs)(j.eb,{children:[Object(O.jsx)(j.s,{md:"4",sm:"12",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:"Customer Name"}),Object(O.jsx)("br",{}),t&&t.cust_first_name]})}),Object(O.jsx)(j.s,{md:"4",sm:"12",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:" Address 1 "}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:t&&t.cust_address1})]})}),Object(O.jsx)(j.s,{md:"4",sm:"12",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:" Address 2 "}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:t&&t.cust_address2})]})}),Object(O.jsx)(j.s,{md:"4",sm:"12",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:" Country "}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:t&&t.cust_address_country})]})}),Object(O.jsx)(j.s,{md:"4",sm:"12",children:Object(O.jsxs)(j.C,{children:[Object(O.jsx)(j.H,{children:" Postal Code"}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:t&&t.cust_address_po_code})]})})]})})})}t.default=function(){var e=Object(r.useState)("1"),t=Object(i.a)(e,2),c=t[0],h=t[1],u=Object(r.useState)(),m=Object(i.a)(u,2),_=m[0],y=m[1],D=Object(r.useState)(),H=Object(i.a)(D,2),N=H[0],k=H[1],Y=Object(d.h)().id,A=Object(d.g)(),M=function(e){y(Object(n.a)(Object(n.a)({},_),{},Object(s.a)({},e.target.name,e.target.value)))},P=function(e){c!==e&&h(e)};return Object(r.useEffect)((function(){o.a.post("/orders/getFinancesById",{order_id:Y}).then((function(e){y(e.data.data)})).catch((function(){Object(b.a)("Order Data Not Found","info")})),o.a.post("/orders/getOrderHistoryById",{order_id:Y}).then((function(e){k(e.data.data)})).catch((function(){Object(b.a)("Fianance Data Not Found","info")}))}),[Y]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(a.a,{heading:_&&_.order_id}),Object(O.jsxs)(j.gb,{className:"p-4",activeTab:c,children:[Object(O.jsx)(x,{navigate:A,editFinanceData:function(){_.modification_date=g.a,o.a.post("/orders/editFinances",_).then((function(){Object(b.a)("Record edited successfully","success"),setTimeout((function(){A("/Orders")}),1100)})).catch((function(){Object(b.a)("Unable to edit record.","error")}))},applyChanges:function(){},backToList:function(){A("/Orders")}}),Object(O.jsx)(f,{financeDetails:_,creationModificationDate:_,handleInputs:M}),Object(O.jsx)(j.eb,{children:Object(O.jsxs)(j.R,{tabs:!0,children:[Object(O.jsx)(j.S,{children:Object(O.jsx)(j.T,{className:"1"===c?"active":"",onClick:function(){P("1")},children:"Delivery Address"})}),Object(O.jsx)(j.S,{children:Object(O.jsx)(j.T,{className:"2"===c?"active":"",onClick:function(){P("2")},children:"Customer Details"})}),Object(O.jsx)(j.S,{children:Object(O.jsx)(j.T,{className:"3"===c?"active":"",onClick:function(){P("3")},children:"Product Details"})})]})}),Object(O.jsx)(j.hb,{tabId:"1",children:Object(O.jsx)(l.default,{title:"Delivery Address",children:Object(O.jsx)(p,{financeDetails:_,handleInputs:M})})}),Object(O.jsx)(j.hb,{tabId:"2",children:Object(O.jsx)(l.default,{title:"Finance Details",children:Object(O.jsx)(C,{financeDetails:_})})}),Object(O.jsx)(j.hb,{tabId:"3",children:Object(O.jsx)(l.default,{title:"Product Details",children:Object(O.jsx)(v,{historyDetails:N})})})]})]})}},146:function(e,t,c){"use strict";c.r(t);var s=c(63),n=(c(1),c(3));function i(e){var t=e.details,c=void 0===t?null:t,i=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(n.jsxs)(s.eb,{children:[Object(n.jsx)(s.s,{children:i}),c&&Object(n.jsxs)(s.s,{children:[Object(n.jsx)(s.eb,{children:Object(n.jsxs)("small",{children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(n.jsx)(s.eb,{className:"d-flex",children:Object(n.jsxs)("small",{children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,r=e.subtitle,j=e.creationModificationDate;return Object(n.jsxs)(s.i,{className:"shadow-none",children:[Object(n.jsx)(i,{details:j,title:c}),Object(n.jsxs)(s.j,{className:"p-4",children:[Object(n.jsx)(s.m,{className:"text-muted mb-3",children:r||""}),Object(n.jsx)("div",{children:t})]})]})}},193:function(e,t,c){"use strict";var s=c(179),n=c.n(s),i=n()().format("DD-MM-YYYY h:mm:ss a"),r=n()(i,"DD-MM-YYYY h:mm:ss a").format("DD-MM-YYYY HH:mm:ss");console.log(r),t.a=r},255:function(e,t,c){},256:function(e,t,c){"use strict";var s=c(63),n=c(3),i={textAlign:"right",marginRight:"10px"},r={outline:"none",border:"none"};t.a=function(e){var t=e.children;return Object(n.jsx)(s.i,{className:"shadow-none",children:Object(n.jsx)(s.j,{style:i,children:Object(n.jsx)("div",{className:"btn btn-space text-nowrap shadow-none outline-none",style:r,children:t})})})}},257:function(e,t,c){}}]);
//# sourceMappingURL=62.ea72a1bd.chunk.js.map