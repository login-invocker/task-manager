(this["webpackJsonptask-bot-discord-client"]=this["webpackJsonptask-bot-discord-client"]||[]).push([[0],{252:function(e,t){e.exports={API_URL:"https://task-bot-server.invocker.repl.co"}},332:function(e,t,n){},333:function(e,t,n){},408:function(e,t,n){},490:function(e,t,n){},491:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(41),c=n.n(s),i=(n(332),n(42)),o=n(79),u=n(45),l=n(500),d=n(86),b=n(195),j=n(39),p=(n(333),n(26)),h=n.n(p),m=n(44),x=n(503),f=n(507),O=n(63),g=n(243),v=n(252),y=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t.username,password:t.password,firstName:t.firstName,lastName:t.lastName,email:t.email,cellphone:t.cellphone,birthday:t.birthday},e.next=3,g.post("".concat(v.API_URL,"/api/user"),n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t.username,password:t.password},e.next=3,g.post("".concat(v.API_URL,"/api/user/login"),n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=n(319),w=function(e){I.a[e.type]({message:e.message,description:e.description})},C=n(505),T=n(6),M=function(e){return Object(T.jsx)(C.a,{className:"site-page-header",onBack:function(){return e.onback},title:e.title,subTitle:e.subTitle,extra:e.extra})};var P=function(){var e=Object(u.g)(),t=Object(u.h)(),n=Object(a.useContext)(Ee),r=(t.state||{from:{pathname:"/"}}).from,s=function(){var t=Object(m.a)(h.a.mark((function t(a){var s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(a);case 2:if(201===(s=t.sent).status){t.next=8;break}return w({type:"success",message:"Ch\xe0o m\u1eebng \u0111\u1ebfn v\u1edbi You Task!"}),t.abrupt("return",void n.signin((function(){e.replace(r)})));case 8:w({type:"error",message:s.data.message});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)(M,{onback:"null",title:"Login"}),Object(T.jsxs)("p",{children:["You must log in to view the page at ",r.pathname]}),Object(T.jsxs)(x.a,Object(j.a)(Object(j.a)({},{labelCol:{span:8},wrapperCol:{span:8}}),{},{name:"basic",initialValues:{remember:!0},onFinish:s,onFinishFailed:function(e){},children:[Object(T.jsx)(x.a.Item,{label:"User Name",name:"username",rules:[{required:!0,message:"Please input your name"}],children:Object(T.jsx)(f.a,{})}),Object(T.jsx)(x.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your pass!"}],children:Object(T.jsx)(f.a.Password,{})}),Object(T.jsx)(x.a.Item,Object(j.a)(Object(j.a)({},{wrapperCol:{offset:8,span:16}}),{},{children:Object(T.jsx)(O.a,{type:"primary",htmlType:"submit",children:"Login"})}))]}))]})},Y=n(510),E=n(243),F=n(252),N=(n(48),function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E.post("".concat(F.API_URL,"/api/task"),{title:t.title,content:t.content,isModel:t.isModel,isEmergency:t.isEmergency,isImportant:t.isImportant}),e.abrupt("return",!0);case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),D=function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("".concat(F.API_URL,"/api/task"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.delete("".concat(F.API_URL,"/api/task/").concat(t.id));case 3:return n=e.sent,e.abrupt("return",200===n.status);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.status="\u0110\xe3 ho\xe0n th\xe0nh"===t.status,"Yes"===t.isModel||!0===t.isModel?t.isModel=!0:t.isModel=!1,"Yes"===t.isImportant||!0===t.isImportant?t.isImportant=!0:t.isImportant=!1,"Yes"===t.isEmergency||!0===t.isEmergency?t.isEmergency=!0:t.isEmergency=!1,e.prev=4,e.next=7,E.put("".concat(F.API_URL,"/api/task/"),{task:t});case 7:return n=e.sent,e.abrupt("return",200===n.data.code);case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("".concat(F.API_URL,"/api/task/eisenhower"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},t&&(n={startDate:t.startDate,endDate:t.endDate}),e.prev=2,e.next=5,E.post("".concat(F.API_URL,"/api/task/bar-chart"),n);case 5:return a=e.sent,e.abrupt("return",a.data);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),U={labelCol:{span:8},wrapperCol:{span:8}},B={wrapperCol:{offset:8,span:16}},_=function(){var e=function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:if(!e.sent){e.next=7;break}return e.abrupt("return",w({type:"success",message:"T\u1ea1o task th\xe0nh c\xf4ng"}));case 7:return e.abrupt("return",w({type:"success",message:"T\u1ea1o task th\u1ea5t b\u1ea1i"}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(M,{onback:"null",title:"Create Task",subTitle:"Create a today task"}),Object(T.jsxs)(x.a,Object(j.a)(Object(j.a)({},U),{},{name:"basic",initialValues:{remember:!0},onFinish:e,onFinishFailed:function(e){},children:[Object(T.jsx)(x.a.Item,{label:"Title",name:"title",rules:[{required:!0,message:"Please input your title of task"}],children:Object(T.jsx)(f.a,{})}),Object(T.jsx)(x.a.Item,{label:"Content",name:"content",rules:[{message:"Please input your content!"}],children:Object(T.jsx)(f.a,{})}),Object(T.jsx)(x.a.Item,{label:"Model Task",name:"isModel",children:Object(T.jsx)(Y.a,{checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(T.jsx)(x.a.Item,{label:"Task important?",name:"isImportant",children:Object(T.jsx)(Y.a,{checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(T.jsx)(x.a.Item,{label:"Task emergency?",name:"isEmergency",children:Object(T.jsx)(Y.a,{checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(T.jsx)(x.a.Item,Object(j.a)(Object(j.a)({},B),{},{children:Object(T.jsx)(O.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))]})},W=n(237),q=(n(408),n(502)),H=n(320),V=n(494),J=n(504),K=n(509),z=n(501),X=n(512),$=n(48),G=n.n($),Q=["DD/MM/YYYY","DD/MM/YY","YYYY-MM-DD"],Z=function(e){var t=e.editing,n=e.dataIndex,a=e.title,r=e.inputType,s=e.record,c=(e.index,e.children),i=Object(b.a)(e,["editing","dataIndex","title","inputType","record","index","children"]),o="chinh-xac-la-date"===r?Object(T.jsx)(q.a,{format:Q}):"switch"===r?Object(T.jsx)(Y.a,{checkedChildren:"Yes",unCheckedChildren:"No"}):Object(T.jsx)(f.a,{});return Object(T.jsx)("td",Object(j.a)(Object(j.a)({},i),{},{children:t&&"switch"!==r?Object(T.jsx)(x.a.Item,{name:n,style:{margin:0},rules:[{required:!0,message:"Please Input ".concat(a,"!")}],children:o}):t&&"switch"===r?Object(T.jsx)(x.a.Item,{name:n,valuePropName:(!0===s.isModel||"Yes"===s.isModel)&&"isModel"===n||(!0===s.isImportant||"Yes"===s.isImportant)&&"isImportant"===n||(!0===s.isEmergency||"Yes"===s.isEmergency)&&"isEmergency"===n?"checked":"",style:{margin:0},rules:[{required:!0}],children:o}):c}))},ee=function(){var e=x.a.useForm(),t=Object(i.a)(e,1)[0],n=Object(a.useState)([]),r=Object(i.a)(n,2),s=r[0],c=r[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],b=function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:(t=e.sent)?(c(t),w({type:"success",message:"L\u1ea5y d\u1eef li\u1ec7u th\xe0nh c\xf4ng!"})):w({type:"error",message:"L\u1ea5y d\u1eef li\u1ec7u th\u1ea5t b\u1ea1i!"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){b()}),[]);var p=function(){var e=Object(m.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:if(t=e.sent,n=[],!t){e.next=7;break}for(a=0;a<t.length;a++)n.push({key:a.toString(),id:t[a]._id,title:t[a].title,content:t[a].content||"Ch\u01b0a c\u1eadp nh\u1eadp",status:t[a].status?"\u0110\xe3 ho\xe0n th\xe0nh":"Ch\u01b0a ho\xe0n th\xe0nh",date:G()(t[a].date).format(Q[2]),isModel:!0===t[a].isModel?"Yes":"No",isImportant:!0===t[a].isImportant?"Yes":"No",isEmergency:!0===t[a].isEmergency?"Yes":"No"});return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e){return e.key===l},g=function(){d("")},v=function(){var e=Object(m.a)(h.a.mark((function e(n){var a,r,i,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.validateFields();case 3:if((a=e.sent).isModel=!0===a.isModel||"Yes"===a.isModel?"Yes":"No",a.isImportant=!0===a.isImportant||"Yes"===a.isImportant?"Yes":"No",a.isEmergency=!0===a.isEmergency||"Yes"===a.isEmergency?"Yes":"No",r=Object(W.a)(s),!((i=r.findIndex((function(e){return n===e.key})))>-1)){e.next=26;break}return o=r[i],r.splice(i,1,Object(j.a)(Object(j.a)({},o),a)),c(r),d(""),e.prev=14,e.next=17,S(r[i]);case 17:e.sent?(w({type:"success",message:"C\u1eadp nh\u1eadt th\xf4ng tin th\xe0nh c\xf4ng!"}),d("")):w({type:"error",message:"Th\u1eed l\u1ea1i sau!"}),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(14),w({type:"error",message:"Th\u1eed l\u1ea1i sau!"});case 24:e.next=29;break;case 26:r.push(a),c(r),d("");case 29:e.next=33;break;case 31:e.prev=31,e.t1=e.catch(0);case 33:case"end":return e.stop()}}),e,null,[[0,31],[14,21]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(h.a.mark((function e(n){var a,r,i,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.validateFields();case 3:if(a=e.sent,r=Object(W.a)(s),!((i=r.findIndex((function(e){return n===e.key})))>-1)){e.next=22;break}return e.prev=7,e.next=10,L(r[i]);case 10:o=e.sent,r.splice(i,1),c(r),d(""),w(o?{type:"success",message:"X\xf3a th\xe0nh c\xf4ng!"}:{type:"error",message:"Th\u1eed l\u1ea1i sau!"}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),w({type:"error",message:"Th\u1eed l\u1ea1i sau!"});case 20:e.next=25;break;case 22:r.push(a),c(r),d("");case 25:e.next=29;break;case 27:e.prev=27,e.t1=e.catch(0);case 29:case"end":return e.stop()}}),e,null,[[0,27],[7,17]])})));return function(t){return e.apply(this,arguments)}}(),k=[{title:"id Task",dataIndex:"id",width:"10%",editable:!1},{title:"Title Task",dataIndex:"title",width:"20%",editable:!0},{title:"Status Task",dataIndex:"status",width:"10%",editable:!1,render:function(e){var t="\u0110\xe3 ho\xe0n th\xe0nh"===e?"green":"geekblue";return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(H.a,{color:t,children:e})})}},{title:"Content Task",dataIndex:"content",width:"20%",editable:!0},{title:"Date (".concat(Q[2],")"),dataIndex:"date",width:"15%",editable:!0,filters:[{text:"Today",value:"no need value"}],onFilter:function(e,t){var n=new Date;return G()(n).format("YYYY-MM-DD")===t.date}},{title:"Important",dataIndex:"isImportant",width:"5%",editable:!0,filters:[{text:"Task Important",value:"Yes"},{text:"Task not Important",value:"No"}],onFilter:function(e,t){return t.isImportant===e}},{title:"Emergency",dataIndex:"isEmergency",width:"5%",editable:!0,filters:[{text:"Task Emergency",value:"Yes"},{text:"Task not Emergency",value:"No"}],onFilter:function(e,t){return t.isEmergency===e}},{title:"Model task",dataIndex:"isModel",width:"5%",editable:!0,filters:[{text:"Task Model",value:"Yes"}],onFilter:function(e,t){return"Yes"===t.isModel}},{title:"operation",dataIndex:"operation",render:function(e,n){return f(n)?Object(T.jsxs)("span",{children:[Object(T.jsx)("a",{href:"javascript:;",onClick:function(){return v(n.key)},style:{marginRight:8},children:"Save"}),Object(T.jsx)(V.a,{title:"Sure to cancel?",onConfirm:g,children:Object(T.jsx)("a",{children:"Cancel"})}),Object(T.jsx)("a",{href:"javascript:;",onClick:function(){return y(n.key)},style:{marginLeft:8},children:"Remove"})]}):Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(J.a.Link,{disabled:""!==l,onClick:function(){return function(e){t.setFieldsValue(Object(j.a)({id:"",title:"",content:"",date:"",isImportant:!1,isEmergency:!1,isModel:!1},e)),d(e.key)}(n)},children:"Edit"})})}}].map((function(e){return e.editable?Object(j.a)(Object(j.a)({},e),{},{onCell:function(t){return{record:t,inputType:"date"===e.dataIndex?"date":"isModel"===e.dataIndex||"isImportant"===e.dataIndex||"isEmergency"===e.dataIndex?"switch":"text",dataIndex:e.dataIndex,title:e.title,editing:f(t)}}}):e}));return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(M,{onback:"null",title:"Manager Task",extra:[Object(T.jsx)(O.a,{type:"primary",icon:Object(T.jsx)(X.a,{spin:!0}),onClick:function(){return b()},children:"Click to async data"},"1")]}),Object(T.jsx)(K.a,{message:"D\xf9ng l\u1ec7nh `$done +idTask` channel discord \u0111\u1ec3  \u0111\xe1nh d\u1ea5u ho\xe0n th\xe0nh task",type:"warning"}),Object(T.jsx)(x.a,{form:t,component:!1,children:Object(T.jsx)(z.a,{components:{body:{cell:Z}},bordered:!0,dataSource:s,columns:k,rowClassName:"editable-row",pagination:{onChange:g}})})]})},te=n(498),ne=n(499),ae=n(188),re=function(e){var t=e.config,n=e.colors;return Object(T.jsx)(ae.Doughnut,{data:{labels:t.labels,datasets:[{label:"Population (millions)",backgroundColor:n,data:t.data}]},onElementsClick:function(e){e[0]&&console.log(e[0]._datasetIndex+", "+e[0]._index)},option:{title:{display:!0,text:"Predicted world population (millions) in 2050"}}})},se=n(508),ce=n(322),ie=n(310),oe=Math.PI/180,ue=function(e){var t=e.cx,n=e.cy,a=e.midAngle,r=e.innerRadius,s=e.outerRadius,c=e.percent,i=(e.index,r+.5*(s-r)),o=t+i*Math.cos(-a*oe),u=n+i*Math.sin(-a*oe);return Object(T.jsx)("text",{x:o,y:u,fill:"white",textAnchor:o>t?"start":"end",dominantBaseline:"central",children:"".concat((100*c).toFixed(0),"%")})},le=function(e){var t=e.config,n=e.colors;return Object(T.jsx)(se.a,{width:400,height:400,children:Object(T.jsx)(ce.a,{data:t,cx:200,cy:200,labelLine:!1,label:ue,outerRadius:80,dataKey:"value",children:t.map((function(e,t){return Object(T.jsx)(ie.a,{fill:n[t%n.length]},"cell-".concat(t))}))})})},de=[],be=[],je=function(){var e=r.a.useState({}),t=Object(i.a)(e,2),n=(t[0],t[1]);r.a.useEffect(Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:(t=e.sent)&&(w({type:"success",message:"L\u1ea5y d\u1eef li\u1ec7u th\xe0nh c\xf4ng!"}),de=t,function(){de.forEach((function(){var e=Math.floor(16777215*Math.random()).toString(16);e="#"+e,be.push(e)}))}(),n(""));case 4:case"end":return e.stop()}}),e)}))));return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(M,{onback:"null",title:"Manager Time with matrix EISENHOWER",extra:[Object(T.jsx)(O.a,{type:"primary",icon:Object(T.jsx)(X.a,{spin:!0}),onClick:function(){return n()},children:"Click to async data"})]}),Object(T.jsxs)(te.a,{children:[Object(T.jsx)(ne.a,{span:18,push:6,children:Object(T.jsx)(re,{colors:be,config:{labels:de.map((function(e){return e.title})),data:de.map((function(e){return e.timePercent}))}})}),Object(T.jsx)(ne.a,{span:6,pull:18,children:Object(T.jsx)(le,{colors:be,config:function(){var e=[];return de.forEach((function(t){var n={name:t.title,value:t.timePercent};e.push(n)})),e}()})})]})]})},pe=function(){var e=Object(u.g)(),t=function(){var t=Object(m.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(n);case 2:201===(a=t.sent).status?w({type:"error",message:a.data.message}):(w({type:"success",message:"T\u1ea1o t\xe0i kho\u1ea3n th\xe0nh c\xf4ng!"}),e.push("/login"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)(M,{onback:"null",title:"Register account"}),Object(T.jsxs)(x.a,Object(j.a)(Object(j.a)({},{labelCol:{span:8},wrapperCol:{span:8}}),{},{name:"basic",initialValues:{remember:!0},onFinish:t,onFinishFailed:function(e){},children:[Object(T.jsx)(x.a.Item,{label:"User Name",name:"username",rules:[{required:!0,message:"Please input your name"}],children:Object(T.jsx)(f.a,{})}),Object(T.jsx)(x.a.Item,{label:"Password",name:"password",rules:[{message:"Please input your pass!"}],children:Object(T.jsx)(f.a,{})}),Object(T.jsx)(x.a.Item,{label:"First name",name:"firstName",rules:[{message:"Please input your pass!"}],children:Object(T.jsx)(f.a,{})}),Object(T.jsx)(x.a.Item,{label:"last name",name:"lastName",rules:[{message:"Please input your lastName!"}],children:Object(T.jsx)(f.a,{})}),Object(T.jsx)(x.a.Item,{label:"Email",name:"email",rules:[{message:"Please input your email!"}],children:Object(T.jsx)(f.a,{})}),Object(T.jsx)(x.a.Item,{label:"cellphone",name:"cellphone",rules:[{message:"Please input your cellphone!"}],children:Object(T.jsx)(f.a,{})}),Object(T.jsx)(x.a.Item,{label:"birthday",name:"birthday",rules:[{message:"Please input your birthday!"}],children:Object(T.jsx)(f.a,{})}),Object(T.jsx)(x.a.Item,{label:"Address",name:"address",rules:[{message:"Please input your birthday!"}],children:Object(T.jsx)(f.a,{})}),Object(T.jsx)(x.a.Item,Object(j.a)(Object(j.a)({},{wrapperCol:{offset:8,span:16}}),{},{children:Object(T.jsx)(O.a,{type:"primary",htmlType:"submit",children:"Register"})}))]}))]})},he=n(511),me=function(e){var t=r.a.useState(e.config),n=Object(i.a)(t,2),a=n[0],s=n[1];return r.a.useEffect((function(){s(e.config)})),Object(T.jsx)(ae.Bar,{data:{labels:a.date,datasets:[{label:"All Task",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:a.allTask},{label:"Task done",backgroundColor:"rgba(155,231,91,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:a.taskDone},{label:"Task Unfinished",backgroundColor:"red",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:a.taskUnfinished}]},options:{legend:{display:!0},title:{display:!0,text:"B\u1ea3ng th\u1ed1ng k\xea kh\u1ed1i l\u01b0\u1ee3ng c\xf4ng vi\u1ec7c trong ".concat(a.date?a.date.length:""," ng\xe0y t\u1eeb ").concat(a.date?a.date[0]:""," \u0111\u1ebfn ").concat(a.date?a.date[a.date.length-1]:"")}}})},xe=q.a.RangePicker;var fe=[{path:"/login",component:P},{path:"/create-task",component:_,isPrivate:!0},{path:"/manager-task",component:ee,isPrivate:!0},{path:"/manager-time",component:je,isPrivate:!0},{path:"/analytics-task",component:function(){var e=r.a.useState({}),t=Object(i.a)(e,2),n=(t[0],t[1]),a=r.a.useState({}),s=Object(i.a)(a,2),c=s[0],o=s[1];return r.a.useEffect((function(){return R().then((function(e){console.log(e),o(e),e&&w({type:"success",message:"L\u1ea5y d\u1eef li\u1ec7u th\xe0nh c\xf4ng!"})})),!0}),[]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(M,{onback:"null",title:"Manager Time with matrix EISENHOWER",extra:[Object(T.jsx)(he.b,{direction:"vertical",size:12,children:Object(T.jsx)(xe,{ranges:{Today:[G()(),G()()],"This Month":[G()().startOf("month"),G()().endOf("month")],"This week":[G()().startOf("week"),G()().endOf("week")]},onChange:function(e,t){var n={startDate:t[0],endDate:t[1]};R(n).then((function(e){console.log(e),o(e),e&&w({type:"success",message:"L\u1ea5y d\u1eef li\u1ec7u m\u1edbi c\xf4ng!"})}))}})}),Object(T.jsx)(O.a,{type:"primary",icon:Object(T.jsx)(X.a,{spin:!0}),onClick:function(){return n()},children:"Click to async data"})]}),Object(T.jsxs)(te.a,{children:[Object(T.jsx)(ne.a,{span:18,push:6,children:Object(T.jsx)(me,{config:c})}),Object(T.jsx)(ne.a,{span:6,pull:18})]})]})},isPrivate:!0},{path:"/register",component:pe,isPrivate:!1}];function Oe(){return Object(T.jsx)(u.d,{children:fe.map((function(e,t){return Object(T.jsx)(ge,Object(j.a)({},e),t)}))})}function ge(e){return e.isPrivate?Object(T.jsx)(ve,{path:e.path,children:Object(T.jsx)(e.component,{})}):Object(T.jsx)(u.b,{path:e.path,render:function(t){return Object(T.jsx)(e.component,Object(j.a)(Object(j.a)({},t),{},{routes:e.routes}))}})}function ve(e){var t=e.children,n=Object(b.a)(e,["children"]),r=Object(a.useContext)(Ee);return Object(T.jsx)(u.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){var n=e.location;return r.user?t:Object(T.jsx)(u.a,{to:{pathname:"/login",state:{from:n}}})}}))}var ye=n(513),ke=n(514),Ie=n(515),we=n(516),Ce=n(517),Te=(n(490),l.a.Header),Me=l.a.Content,Pe=l.a.Footer,Ye=l.a.Sider,Ee=Object(a.createContext)();var Fe=function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(De,{children:Object(T.jsx)(l.a,{children:Object(T.jsxs)(o.a,{children:[Object(T.jsxs)(Ye,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){},onCollapse:function(e,t){},children:[Object(T.jsx)("div",{className:"logo",children:Object(T.jsx)(Le,{})}),Object(T.jsxs)(d.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["4"],children:[Object(T.jsx)(d.a.Item,{icon:Object(T.jsx)(ye.a,{}),children:Object(T.jsx)(o.b,{to:"/login",children:"Login"})},"1"),Object(T.jsx)(d.a.Item,{icon:Object(T.jsx)(ke.a,{}),children:Object(T.jsx)(o.b,{to:"/create-task",children:"Create Task"})},"2"),Object(T.jsx)(d.a.Item,{icon:Object(T.jsx)(Ie.a,{}),children:Object(T.jsx)(o.b,{to:"/manager-task",children:"Manager Task"})},"3"),Object(T.jsx)(d.a.Item,{icon:Object(T.jsx)(we.a,{}),children:Object(T.jsx)(o.b,{to:"/manager-time",children:"Manager Time"})},"4"),Object(T.jsx)(d.a.Item,{icon:Object(T.jsx)(Ce.a,{}),children:Object(T.jsx)(o.b,{to:"/analytics-task",children:"Analytic Task"})},"6"),Object(T.jsx)(d.a.Item,{icon:Object(T.jsx)(ye.a,{}),children:Object(T.jsx)(o.b,{to:"/register",children:"Register"})},"5")]})]}),Object(T.jsxs)(l.a,{children:[Object(T.jsx)(Te,{className:"site-layout-sub-header-background",style:{padding:0}}),Object(T.jsx)(Me,{style:{margin:"24px 16px 0"},children:Object(T.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:Object(T.jsx)(Oe,{})})}),Object(T.jsx)(Pe,{style:{textAlign:"center"},children:"Ant Design \xa92018 Created by Ant UED - T\u1ea1o b\u1edfi Dang Thanh Tung"})]})]})})})})},Ne={isAuthenticated:!1,signin:function(e){Ne.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){Ne.isAuthenticated=!1,setTimeout(e,100)}};function De(e){var t=e.children,n=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1];return{user:n,signin:function(e){return Ne.signin((function(){r("user"),e()}))},signout:function(e){return Ne.signout((function(){r(null),e()}))}}}();return Object(T.jsx)(Ee.Provider,{value:n,children:t})}function Le(){var e=Object(u.g)(),t=Object(a.useContext)(Ee);return t.user?Object(T.jsxs)("p",{children:["Welcome!"," ",Object(T.jsx)("button",{onClick:function(){t.signout((function(){return e.push("/")}))},children:"Sign out"})]}):Object(T.jsx)("p",{children:"You are not logged in."})}var Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,518)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(Fe,{})}),document.getElementById("root")),Se()}},[[491,1,2]]]);
//# sourceMappingURL=main.438fc18c.chunk.js.map