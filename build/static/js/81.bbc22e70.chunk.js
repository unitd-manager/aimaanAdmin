(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[81],{1041:function(t,e,p){},1422:function(t,e,p){"use strict";p.r(e);var n=p(27),r=p(1),i=p(275),s=p(58),o=p(63),c=(p(254),p(195),p(196),p(157)),a=p.n(c),l=(p(198),p(199),p(200),p(202),p(1041),p(7)),_=p(201),x=p(3);e.default=function(){var t=Object(r.useState)(),e=Object(n.a)(t,2),p=e[0],c=e[1],k=Object(r.useState)(!1),d=Object(n.a)(k,2),m=d[0],y=d[1];Object(r.useEffect)((function(){l.a.get("/usergroup/getusergroup").then((function(t){c(t.data.data),a()("#example").DataTable({pagingType:"full_numbers",pageLength:20,processing:!0,dom:"Bfrtip",buttons:[{extend:"print",text:"Print",className:"shadow-none btn btn-primary"}]}),y(!1)})).catch((function(){y(!1)}))}),[]);var j=[{name:"#",selector:"id",sortable:!0,grow:0,width:"auto"},{name:"",selector:"edit",sortable:!0,grow:0,width:"auto",wrap:!0},{name:"Title",selector:"title",sortable:!0,grow:5},{name:"ID",selector:"user_group_id",sortable:!0,grow:1,cell:function(t){return Object(x.jsx)("span",{children:t.closing.join(", ")})}}];return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"MainDiv",children:Object(x.jsx)("div",{className:"",children:Object(x.jsxs)(_.a,{title:"UserGroup List",loading:m,Button:Object(x.jsx)(s.b,{to:"/UserGroupDetails",children:Object(x.jsx)(o.e,{color:"primary",className:"shadow-none",children:"Add New"})}),children:[Object(x.jsx)("thead",{children:Object(x.jsx)("tr",{children:j.map((function(t){return Object(x.jsx)("td",{children:t.name},t.name)}))})}),Object(x.jsx)("tbody",{children:p&&p.map((function(t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t.user_group_id}),Object(x.jsx)("td",{children:Object(x.jsx)(s.b,{to:"/UserGroupEdit/".concat(t.user_group_id),children:Object(x.jsx)(i.a,{})})}),Object(x.jsx)("td",{children:t.title}),Object(x.jsx)("td",{children:t.user_group_id})]},t.user_group_id)}))})]})})})})}},197:function(t){t.exports=JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 5","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":8,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":24,"s":[30],"e":[100]},{"t":40}]},"r":{"k":0},"p":{"k":[187.875,77.125,0]},"a":{"k":[-76.375,-2.875,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":8,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":24,"s":[200,200,100],"e":[100,100,100]},{"t":40}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[0.3137254901960784,0.803921568627451,0.5372549019607843,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":1,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 4","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":6,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":22,"s":[30],"e":[100]},{"t":36}]},"r":{"k":0},"p":{"k":[162.125,76.625,0]},"a":{"k":[-76.375,-2.875,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":6,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":22,"s":[200,200,100],"e":[100,100,100]},{"t":36}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[1,0.8392156862745098,0.34509803921568627,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":2,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 3","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":4,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":20,"s":[30],"e":[100]},{"t":32}]},"r":{"k":0},"p":{"k":[135.625,76.625,0]},"a":{"k":[-76.375,-2.875,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":4,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":20,"s":[200,200,100],"e":[100,100,100]},{"t":32}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[0,0.7490196078431373,0.9529411764705882,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 2","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":2,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":16,"s":[30],"e":[100]},{"t":28}]},"r":{"k":0},"p":{"k":[109.375,76.625,0]},"a":{"k":[-76.625,-3.125,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":2,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":16,"s":[200,200,100],"e":[100,100,100]},{"t":28}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[0.9490196078431372,0.39215686274509803,0.36470588235294116,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"\u5f62\u72b6\u56fe\u5c42 1","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":0,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":12,"s":[30],"e":[100]},{"t":24}]},"r":{"k":0},"p":{"k":[82.625,76.625,0]},"a":{"k":[-76.625,-3.375,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":0,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":12,"s":[200,200,100],"e":[100,100,100]},{"t":24}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"k":[0,0,0,1]},"o":{"k":100},"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u692d\u5706 1","np":3,"mn":"ADBE Vector Group"}],"ip":0,"op":40,"st":0,"bm":0,"sr":1}],"v":"4.5.4","ddd":0,"ip":0,"op":40,"fr":24,"w":280,"h":160}')},201:function(t,e,p){"use strict";var n=p(63),r=(p(1),p(203)),i=p.n(r),s=p(197),o=p(3),c=function(){var t={loop:!0,autoplay:!0,renderer:"svg",animationData:s,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return Object(o.jsx)("div",{children:Object(o.jsx)(i.a,{options:t,height:100,width:100})})};e.a=function(t){return Object(o.jsx)("div",{children:Object(o.jsx)(n.i,{children:Object(o.jsxs)(n.j,{children:[Object(o.jsxs)(n.eb,{className:"mb-2 title_border",children:[Object(o.jsxs)(n.s,{children:[Object(o.jsx)(n.o,{tag:"h5",children:t.title}),Object(o.jsx)(n.m,{className:"mb-2 text-muted",tag:"h6",children:t.subtitle})]}),Object(o.jsx)(n.s,{className:"d-flex",style:{justifyContent:"flex-end"},xl:3,sm:12,children:t.Button})]}),t.loading?Object(o.jsx)(c,{}):Object(o.jsx)(n.ib,{id:"example",className:"no-wrap mt-3 align-middle example ".concat(t.additionalClasses),striped:!0,responsive:!0,borderless:!0,children:t.children})]})})})}},275:function(t,e,p){"use strict";var n=p(1),r=p.n(n),i=p(0),s=p.n(i);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var p=arguments[e];for(var n in p)Object.prototype.hasOwnProperty.call(p,n)&&(t[n]=p[n])}return t},o.apply(this,arguments)}function c(t,e){if(null==t)return{};var p,n,r=function(t,e){if(null==t)return{};var p,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)p=i[n],e.indexOf(p)>=0||(r[p]=t[p]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)p=i[n],e.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(t,p)&&(r[p]=t[p])}return r}var a=Object(n.forwardRef)((function(t,e){var p=t.color,n=void 0===p?"currentColor":p,i=t.size,s=void 0===i?24:i,a=c(t,["color","size"]);return r.a.createElement("svg",o({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.a.createElement("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}))}));a.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},a.displayName="Edit2",e.a=a}}]);
//# sourceMappingURL=81.bbc22e70.chunk.js.map