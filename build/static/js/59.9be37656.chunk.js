(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[59],{1024:function(e,t,n){e.exports=n(1025)},1025:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var r=a(n(1026)),o=a(n(1027));function a(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=r.default,t.CSVLink=o.default},1026:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),c=(r=a)&&r.__esModule?r:{default:r},i=n(745),s=n(746);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"buildURI",value:function(){return i.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,o=e.enclosingCharacter,a=e.uFEFF,c=e.target,i=e.specs,s=e.replace;this.state.page=window.open(this.buildURI(t,a,n,r,o),c,i,s)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(c.default.Component);l.defaultProps=Object.assign(s.defaultProps,{target:"_blank"}),l.propTypes=s.propTypes,t.default=l},1027:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),i=(r=c)&&r.__esModule?r:{default:r},s=n(745),l=n(746);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"buildURI",value:function(){return s.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var n=this.props,r=n.data,o=n.headers,a=n.separator,c=n.filename,i=n.enclosingCharacter,l=n.uFEFF,u=t&&"function"===typeof r?r():r,f=new Blob([l?"\ufeff":"",(0,s.toCSV)(u,o,a,i)]);return window.navigator.msSaveBlob(f,c),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(n){!1!==n?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.headers,a=t.separator,c=t.filename,s=t.uFEFF,l=t.children,u=(t.onClick,t.asyncOnClick,t.enclosingCharacter),f=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),d="undefined"===typeof window?"":this.buildURI(n,s,r,a,u);return i.default.createElement("a",o({download:c},f,{ref:function(t){return e.link=t},target:"_self",href:d,onClick:this.handleClick()}),l)}}]),t}(i.default.Component);u.defaultProps=l.defaultProps,u.propTypes=l.propTypes,t.default=u},1383:function(e,t,n){"use strict";n.r(t);var r=n(27),o=n(1),a=n(315),c=n(665),i=n(58),s=(n(522),n(63)),l=n(1024),u=n(492),f=n.n(u),d=(n(704),n(7)),p=n(3);t.default=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),n=t[0],u=t[1],y=Object(o.useState)(""),b=Object(r.a)(y,2),j=b[0],h=b[1],O=Object(o.useState)([]),v=Object(r.a)(O,2),g=v[0],m=v[1],x=Object(o.useState)(""),w=Object(r.a)(x,2),C=w[0],k=w[1],_=Object(o.useRef)(null),S=function(){d.a.get("/api/getProjects").then((function(e){console.log(e.data),u(e.data.data),m(e.data.data);var t=e.data.data,n=[["S.no","Code","Title","Company","Contact","Category","STATUS"]];t.forEach((function(e){n.push(["",e.project_code,e.title,e.company_name,e.contact_name,e.category,e.status])})),console.log(n),h(n)})).catch((function(e){console.log(e)}))};return Object(o.useEffect)((function(){return S(),function(){S()}}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(s.eb,{children:Object(p.jsx)(s.s,{children:Object(p.jsx)(s.i,{children:Object(p.jsxs)(s.j,{children:[Object(p.jsxs)(s.eb,{children:[Object(p.jsxs)(s.s,{md:"6",children:[Object(p.jsx)(i.b,{to:"/projects/addproject",children:Object(p.jsx)(s.e,{color:"primary",className:"mt-3",children:"Add Project"})}),Object(p.jsx)(l.CSVLink,{style:{marginTop:18,marginRight:10,marginLeft:10},className:"btn btn-block btn-success",data:j,children:"Excel"}),Object(p.jsx)(s.e,{onClick:function(){!function(){var e=new f.a("portrait","pt","A4");e.setFontSize(15);var t={startY:50,head:[["S.no","Code","Title","Company","Contact","Category","STATUS"]],body:n.map((function(e){return["",e.project_code,e.title,e.company_name,e.contact_name,e.category,e.status]}))};e.text("Project Report",40,40),e.autoTable(t),e.save("report.pdf")}()},color:"danger btn-outline",className:"mt-3",children:"PDF"})]}),Object(p.jsx)(s.s,{md:"2"}),Object(p.jsx)(s.s,{md:"4",children:Object(p.jsxs)(s.C,{children:[Object(p.jsx)(s.H,{children:"Status"}),Object(p.jsxs)(s.E,{onChange:function(e){k(e.target.value),console.log(C);var t=e.target.value,n=[["S.no","Code","Title","Company","Contact","Category","STATUS"]],r=[];g.forEach((function(e){e.status===t&&(r.push(e),n.push(["",e.project_code,e.title,e.company_name,e.contact_name,e.category,e.status]))})),console.log(n),h(n),u(r)},type:"select",name:"Select Category",children:[Object(p.jsx)("option",{value:"",children:"All"}),Object(p.jsx)("option",{value:"WIP",children:"WIP"}),Object(p.jsx)("option",{value:"Closed",children:"Closed"}),Object(p.jsx)("option",{value:"Hold",children:"Hold"})]})]})})]}),Object(p.jsxs)(s.ib,{ref:_,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"#"}),Object(p.jsx)("th",{}),Object(p.jsx)("th",{children:Object(p.jsx)(a.a,{})}),Object(p.jsx)("th",{children:"Code"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Company"}),Object(p.jsx)("th",{children:"Contact"}),Object(p.jsx)("th",{children:"Category"}),Object(p.jsx)("th",{children:"Status"})]})}),n.map((function(e){return Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.project_id}),Object(p.jsx)("td",{children:Object(p.jsx)(i.b,{to:"editproject/".concat(e.project_id),children:Object(p.jsx)(c.a,{})})}),Object(p.jsx)("td",{children:Object(p.jsx)(a.a,{})}),Object(p.jsx)("td",{children:e.project_code}),Object(p.jsx)("td",{children:e.title}),Object(p.jsx)("td",{children:e.company_name}),Object(p.jsx)("td",{children:e.contact_name}),Object(p.jsx)("td",{children:e.category}),Object(p.jsx)("td",{children:e.status})]})})}))]})]})})})})})}},315:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(0),c=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,c=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("polyline",{points:"3 6 5 6 21 6"}),o.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),o.a.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),o.a.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Trash2",t.a=l},522:function(e,t,n){},665:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(0),c=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,c=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),o.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Edit",t.a=l},745:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},c=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":r(e))&&!(e instanceof Array)}))},i=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},s=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(o(e),o(t)))}),[]))},l=t.jsons2arrays=function(e,t){var n=t=t||s(e),r=t;c(t)&&(n=t.map((function(e){return e.label})),r=t.map((function(e){return e.key})));var a=e.map((function(e){return r.map((function(t){return u(t,e)}))}));return[n].concat(o(a))},u=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,n,r){var o=e[t];if(void 0!==o&&null!==o)return o;r.splice(1)}),t);return void 0===n?e in t?t[e]:"":n},f=t.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},d=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return f(e)})).map((function(e){return""+n+e+n})).join(t)})).join("\n")},p=t.arrays2csv=function(e,t,n,r){return d(t?[t].concat(o(e)):e,n,r)},y=t.jsons2csv=function(e,t,n,r){return d(l(e,t),n,r)},b=t.string2csv=function(e,t,n,r){return t?t.join(n)+"\n"+e:e.replace(/"/g,'""')},j=t.toCSV=function(e,t,n,r){if(c(e))return y(e,t,n,r);if(i(e))return p(e,t,n,r);if("string"===typeof e)return b(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,r,o){var c=j(e,n,r,o),i=a()?"application/csv":"text/csv",s=new Blob([t?"\ufeff":"",c],{type:i}),l="data:"+i+";charset=utf-8,"+(t?"\ufeff":"")+c,u=window.URL||window.webkitURL;return"undefined"===typeof u.createObjectURL?l:u.createObjectURL(s)}},746:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var r,o=n(1),a=((r=o)&&r.__esModule,n(0));t.propTypes={data:(0,a.oneOfType)([a.string,a.array,a.func]).isRequired,headers:a.array,target:a.string,separator:a.string,filename:a.string,uFEFF:a.bool,onClick:a.func,asyncOnClick:a.bool,enclosingCharacter:a.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]}}]);
//# sourceMappingURL=59.9be37656.chunk.js.map