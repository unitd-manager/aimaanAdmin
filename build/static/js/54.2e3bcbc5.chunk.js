(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[54,168],{141:function(e,t,c){"use strict";var n=c(63),o=c(12),i=c(58),a=c(3);t.a=function(e){var t=Object(o.f)(),c=t.pathname.split("/")[1],s=t.pathname.split("/")[2];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:e.heading}),Object(a.jsxs)(n.c,{children:[Object(a.jsx)(n.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),c?Object(a.jsx)(n.d,{active:!0,children:c}):"",s?Object(a.jsx)(n.d,{active:!0,children:s}):""]})]})}},143:function(e,t,c){"use strict";var n=c(155);c(178);t.a=function(e,t){return"success"===t?n.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?n.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?n.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?n.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(n.b)(e)}},146:function(e,t,c){"use strict";c.r(t);var n=c(63),o=(c(1),c(3));function i(e){var t=e.details,c=void 0===t?null:t,i=e.title;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(n.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(o.jsxs)(n.eb,{children:[Object(o.jsx)(n.s,{children:i}),c&&Object(o.jsxs)(n.s,{children:[Object(o.jsx)(n.eb,{children:Object(o.jsxs)("small",{children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(o.jsx)(n.eb,{className:"d-flex",children:Object(o.jsxs)("small",{children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,a=e.subtitle,s=e.creationModificationDate;return Object(o.jsxs)(n.i,{className:"shadow-none",children:[Object(o.jsx)(i,{details:s,title:c}),Object(o.jsxs)(n.j,{className:"p-4",children:[Object(o.jsx)(n.m,{className:"text-muted mb-3",children:a||""}),Object(o.jsx)("div",{children:t})]})]})}},1485:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c(9),i=c(27),a=c(1),s=c(63),r=c(12),l=c(155),d=c(615),j=c(141),u=c(146),b=c(298),h=c(297),O=c(143),m=(c(257),c(255),c(7)),p=c(256),f=c(320),x=c(3);function v(e){var t=e.editSectionData,c=e.navigate,n=e.applyChanges,o=e.backToList,i=e.id;return Object(x.jsx)(s.A,{children:Object(x.jsx)(s.C,{children:Object(x.jsx)(p.a,{children:Object(x.jsxs)(s.eb,{children:[Object(x.jsx)(s.s,{children:Object(x.jsx)(s.e,{className:"shadow-none",color:"primary",onClick:function(){t(),setTimeout((function(){c("/Section")}),1100)},children:"Save"})}),Object(x.jsx)(s.s,{children:Object(x.jsx)(s.e,{className:"shadow-none",color:"primary",onClick:function(){t(),n()},children:"Apply"})}),Object(x.jsx)(s.s,{children:Object(x.jsx)(s.e,{className:"shadow-none",color:"dark",onClick:function(){window.confirm("Are you sure you want to cancel  \n  \n You will lose any changes made")?c("/Section"):n()},children:" Cancel"})}),Object(x.jsx)(s.s,{children:Object(x.jsx)(f.a,{pictureroom:"SectionPic",ifpiture:!0,id:i,columnname:"section_id",tablename:"section"})}),Object(x.jsx)(s.s,{children:Object(x.jsx)(s.e,{className:"shadow-none",color:"dark",onClick:function(){o()},children:"Back to List"})})]})})})})}var g=c(193);t.default=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),c=t[0],p=t[1],f=Object(a.useState)("1"),y=Object(i.a)(f,2),C=y[0],w=y[1],N=Object(a.useState)(!1),S=Object(i.a)(N,2),P=S[0],_=S[1],k=Object(a.useState)(""),T=Object(i.a)(k,2),A=T[0],D=T[1],M=Object(a.useState)(""),H=Object(i.a)(M,2),E=H[0],Y=H[1],B=Object(a.useState)(),R=Object(i.a)(B,2),F=R[0],U=R[1],I=Object(a.useState)({modelType:""}),G=Object(i.a)(I,2),L=G[0],V=G[1],z=Object(r.h)().id,J=Object(r.g)(),q=function(){m.a.post("/section/getSectionById",{section_id:z}).then((function(e){p(e.data.data[0])})).catch((function(){Object(O.a)("Section Data Not Found","info")}))},W=function(e){p(Object(o.a)(Object(o.a)({},c),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(a.useEffect)((function(){q(),m.a.get("/section/getValueList").then((function(e){U(e.data.data)})).catch((function(){Object(O.a)("valuelist not found","info")}))}),[z]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(j.a,{heading:c&&c.section_title}),Object(x.jsx)(v,{editSectionData:function(){""!==c.section_title?(c.modification_date=g.a,m.a.post("/section/editSection",c).then((function(){Object(O.a)("Record editted successfully","success"),q()})).catch((function(){Object(O.a)("Unable to edit record.","error")}))):Object(O.a)("Please fill all required fields","warning")},navigate:J,applyChanges:function(){},DeleteSection:function(){m.a.post("/section/deleteSection",{section_id:z}).then((function(){Object(O.a)("Record editted successfully","success")})).catch((function(){Object(O.a)("Unable to edit record.","error")}))},backToList:function(){J("/Section")},id:z}),Object(x.jsx)(s.A,{children:Object(x.jsx)(s.C,{children:Object(x.jsx)(u.default,{title:"Section Details",creationModificationDate:c,children:Object(x.jsxs)(s.eb,{children:[Object(x.jsx)(s.s,{md:"3",children:Object(x.jsxs)(s.C,{children:[Object(x.jsxs)(s.H,{children:["Title",Object(x.jsx)("span",{className:"required",children:" *"})]}),Object(x.jsx)(s.E,{type:"text",onChange:W,value:c&&c.section_title,name:"section_title"})]})}),Object(x.jsx)(s.s,{md:"4",children:Object(x.jsxs)(s.C,{children:[Object(x.jsx)(s.H,{children:"Section Type"}),Object(x.jsxs)(s.E,{type:"select",onChange:W,value:c&&c.section_type,name:"section_type",children:[Object(x.jsx)("option",{defaultValue:"selected",children:"Please Select"}),F&&F.map((function(e){return Object(x.jsx)("option",{value:e.value,children:e.value},e.value)}))]})]})}),Object(x.jsxs)(s.s,{md:"4",children:[Object(x.jsx)(s.H,{children:"Button Position"}),Object(x.jsxs)(s.E,{type:"select",onChange:W,value:c&&c.button_position,name:"button_position",children:[Object(x.jsx)("option",{defaultValue:"selected",children:"Please Select"}),Object(x.jsx)("option",{value:"Top",children:"Top"}),Object(x.jsx)("option",{value:"Admin",children:"Admin"}),Object(x.jsx)("option",{value:"Reports",children:"Reports"})]})]}),Object(x.jsxs)(s.s,{md:"3",children:[Object(x.jsx)(s.H,{children:"Groups"}),Object(x.jsxs)(s.E,{type:"select",onChange:W,value:c&&c.groups,name:"groups",children:[Object(x.jsx)("option",{defaultValue:"selected",children:"Please Select"}),Object(x.jsx)("option",{value:"Reports",children:"Reports"}),Object(x.jsx)("option",{value:"Home",children:"Home"}),Object(x.jsx)("option",{value:"Tender/Project",children:"Tender/Project"}),Object(x.jsx)("option",{value:"Finance/Admin/Purchase",children:"Finance/Admin/Purchase"}),Object(x.jsx)("option",{value:"Payroll/HR",children:"Payroll/HR"}),Object(x.jsx)("option",{value:"Admin",children:"Admin"}),Object(x.jsx)("option",{value:"App",children:"App"})]})]}),Object(x.jsx)(s.s,{md:"4",children:Object(x.jsxs)(s.C,{children:[Object(x.jsx)(s.H,{children:"Routes"}),Object(x.jsx)(s.E,{type:"text",onChange:W,value:c&&c.routes,name:"routes"})]})}),Object(x.jsx)(s.s,{md:"4",children:Object(x.jsxs)(s.C,{children:[Object(x.jsx)(s.H,{children:"Number Of Rows"}),Object(x.jsx)(s.E,{type:"text",onChange:W,value:c&&c.number_of_rows,name:"number_of_rows"})]})}),Object(x.jsxs)(s.s,{md:"3",children:[Object(x.jsx)(s.H,{children:"Published"}),Object(x.jsxs)(s.C,{children:[Object(x.jsx)(s.E,{type:"radio",name:"published",value:"1",onChange:W,defaultChecked:c&&1===c.published&&!0}),Object(x.jsx)(s.H,{children:"Yes"}),Object(x.jsx)(s.E,{type:"radio",name:"published",value:"0",onChange:W,defaultChecked:c&&0===c.published&&!0}),Object(x.jsx)(s.H,{children:"No"})]})]})]})})})}),Object(x.jsxs)(u.default,{children:[Object(x.jsx)(l.a,{}),Object(x.jsx)(s.R,{tabs:!0,children:Object(x.jsx)(s.S,{children:Object(x.jsx)(s.T,{className:"1"===C?"active":"",onClick:function(){var e;C!==(e="1")&&w(e)},children:"Picture"})})}),Object(x.jsx)(s.gb,{className:"p-4",activeTab:C,children:Object(x.jsx)(s.hb,{tabId:"1",children:Object(x.jsx)(s.A,{children:Object(x.jsxs)(s.C,{children:[Object(x.jsx)(s.eb,{children:Object(x.jsx)(s.s,{xs:"12",md:"3",className:"mb-3",children:Object(x.jsx)(s.e,{className:"shadow-none",color:"primary",onClick:function(){D("SectionPic"),Y(["JPG","JPEG","PNG","GIF","OGG","MP3","WAV","M4A"]),V({modelType:"picture"}),_(!0)},children:Object(x.jsx)(d.a,{className:"rounded-circle",width:"20"})})})}),Object(x.jsx)(h.a,{moduleId:z,attachmentModal:P,setAttachmentModal:_,roomName:A,fileTypes:E,altTagData:"Section Data",desc:"Section Data",recordType:"Picture",mediaType:L.modelType}),Object(x.jsx)(b.a,{moduleId:z,roomName:"SectionPic",recordType:"Picture"})]})})})})]})]})}},193:function(e,t,c){"use strict";var n=c(179),o=c.n(n),i=o()().format("DD-MM-YYYY h:mm:ss a"),a=o()(i,"DD-MM-YYYY h:mm:ss a").format("DD-MM-YYYY HH:mm:ss");console.log(a),t.a=a},255:function(e,t,c){},256:function(e,t,c){"use strict";var n=c(63),o=c(3),i={textAlign:"right",marginRight:"10px"},a={outline:"none",border:"none"};t.a=function(e){var t=e.children;return Object(o.jsx)(n.i,{className:"shadow-none",children:Object(o.jsx)(n.j,{style:i,children:Object(o.jsx)("div",{className:"btn btn-space text-nowrap shadow-none outline-none",style:a,children:t})})})}},297:function(e,t,c){"use strict";var n=c(27),o=c(1),i=c(63),a=c(307),s=c(7),r=c(143),l=c(3);t.a=function(e){var t=e.attachmentModal,c=e.setAttachmentModal,d=e.moduleId,j=e.roomName,u=e.fileTypes,b=e.altTagData,h=e.desc,O=e.update,m=e.setUpdate,p=Object(o.useState)([]),f=Object(n.a)(p,2),x=f[0],v=f[1],g=Object(o.useState)(),y=Object(n.a)(g,2),C=y[0],w=y[1],N=Object(o.useState)(null),S=Object(n.a)(N,2),P=S[0],_=S[1];return Object(l.jsx)("div",{children:Object(l.jsxs)(i.N,{isOpen:t,children:[Object(l.jsx)(i.Q,{children:"Upload Media"}),Object(l.jsxs)(i.O,{children:[Object(l.jsxs)(i.C,{children:[Object(l.jsx)(a.a,{multiple:!0,handleChange:function(e){var t=Object.entries(e).map((function(e){return e[1]}));v(e),w(t),console.log(e)},name:"file",types:u}),C?C.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:[" Name: ",e.name," "]})})})):Object(l.jsx)("span",{children:"No file selected"})]}),P&&Object(l.jsx)("div",{className:"progress mt-2",children:Object(l.jsx)("div",{className:"progress-bar h-4",role:"progressbar","aria-valuenow":P,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(P,"%")},children:"".concat(P,"% uploaded")})})]}),Object(l.jsxs)(i.P,{children:[Object(l.jsx)(i.e,{color:"primary",className:"shadow-none",onClick:function(){!function(){if(x){var e=new FormData;Object.entries(x).map((function(e){return e[1]})).forEach((function(t){e.append("files",t)})),e.append("record_id",d),e.append("room_name",j),e.append("alt_tag_data",b),e.append("description",h),s.a.post("/file/uploadFiles",e,{onUploadProgress:function(e){console.log(Math.round(e.loaded/e.total*100)),_(Math.round(e.loaded/e.total*100))}}).then((function(){Object(r.a)("Files Uploaded Successfully","success"),c(!1),m(!O)})).catch((function(){c(!1),Object(r.a)("Unable to upload File","error"),m(!O)}))}else Object(r.a)("No files selected","info")}()},children:"Upload"}),Object(l.jsx)(i.e,{color:"secondary",className:"shadow-none",onClick:function(){window.location.reload(),c(!1)},children:"Cancel"})]})]})})}},298:function(e,t,c){"use strict";var n=c(27),o=c(1),i=c(274),a=c.n(i),s=c(315),r=c(143),l=c(7),d=c(3);t.a=function(e){var t=e.moduleId,c=e.roomName,i=e.update,j=e.setUpdate,u={},b=Object(o.useState)(null),h=Object(n.a)(b,2),O=h[0],m=h[1],p=function(){l.a.post("/file/getListOfFiles",{record_id:t,room_name:c}).then((function(e){m(e.data)}))};return Object(o.useEffect)((function(){p()}),[i]),Object(o.useEffect)((function(){p()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("table",{style:u,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{style:u,children:[Object(d.jsx)("th",{style:u,children:"File Name"}),Object(d.jsx)("th",{width:"5%"})]})}),Object(d.jsx)("tbody",{children:O?O.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{style:u,children:Object(d.jsx)("a",{href:"http://43.228.126.245/aimaanAPI/storage/uploads/".concat(e.name),target:"_blank",rel:"noreferrer",children:e.name})}),Object(d.jsx)("td",{style:u,children:Object(d.jsxs)("button",{type:"button",className:"btn shadow-none",onClick:function(){var t;t=e.media_id,a.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&l.a.post("/file/deleteFile",{media_id:t}).then((function(e){console.log(e),a.a.fire("Deleted!","Media has been deleted.","success"),j(!i)})).catch((function(){Object(r.a)("Unable to Delete Media","info")}))}))},children:[Object(d.jsx)(s.a,{})," "]})})]},e.media_id)})):Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("p",{children:"no files uploaded yet"})})})})]})})}},320:function(e,t,c){"use strict";c(1);var n=c(12),o=c(63),i=c(274),a=c.n(i),s=c(315),r=c(7),l=c(143),d=c(3);t.a=function(e){var t=e.id,c=e.columnname,i=e.tablename,j=e.ifpiture,u=void 0!==j&&j,b=e.ifAttachment,h=void 0!==b&&b,O=e.pictureroom,m=e.attachmentroom,p=Object(n.g)(),f=function(e,t){r.a.post("/file/deleteFileByRoomNameAndId",{room_name:t,record_id:e}).then((function(e){200===e.status?(Object(l.a)("Media and Records files deleted.","error"),p(-1)):Object(l.a)("Unable to delete record.","error")})).catch((function(){Object(l.a)("Network connection error.")}))},x=function(){a.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&r.a.post("/commonApi/deleteRecord",{idvalue:t,columnname:c,tablename:i}).then((function(e){200===e.status?u?f(t,O):h?f(t,m):(Object(l.a)("Record deleted successfully."),p(-1)):Object(l.a)("Unable to delete record.","error")})).catch((function(){Object(l.a)("Network connection error.")}))}))};return Object(d.jsxs)(o.e,{color:"danger",onClick:function(){x()},children:["Delete ",Object(d.jsx)(s.a,{size:20})]})}},615:function(e,t,c){"use strict";var n=c(1),o=c.n(n),i=c(0),a=c.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},s.apply(this,arguments)}function r(e,t){if(null==e)return{};var c,n,o=function(e,t){if(null==e)return{};var c,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||(o[c]=e[c]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(o[c]=e[c])}return o}var l=Object(n.forwardRef)((function(e,t){var c=e.color,n=void 0===c?"currentColor":c,i=e.size,a=void 0===i?24:i,l=r(e,["color","size"]);return o.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),o.a.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),o.a.createElement("polyline",{points:"21 15 16 10 5 21"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="Image",t.a=l}}]);
//# sourceMappingURL=54.2e3bcbc5.chunk.js.map