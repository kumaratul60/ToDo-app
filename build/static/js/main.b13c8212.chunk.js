(this["webpackJsonptodo-firebase"]=this["webpackJsonptodo-firebase"]||[]).push([[0],{72:function(e,t,o){},82:function(e,t,o){},84:function(e,t,o){"use strict";o.r(t);var n=o(2),c=o.n(n),a=o(17),i=o.n(a),d=(o(72),o(62)),r=o(32),s=o(112),j=o(114),l=o(115),u=o(107),p=o(113),b=o(108),O=o(109),h=o(110),f=o(111),m=o(116),x=o(30),g=x.a.initializeApp({apiKey:"AIzaSyBQVzU0aZCVsiBAgatAQycDQEorj18Qw4M",authDomain:"todo-app-dad9c.firebaseapp.com",projectId:"todo-app-dad9c",storageBucket:"todo-app-dad9c.appspot.com",messagingSenderId:"490646945795",appId:"1:490646945795:web:648514000a3c52c3920e36",measurementId:"G-J9VPPNGDNT"}).firestore(),v=o(61),C=o.n(v),S=o(60),k=o.n(S),y=o(104),T=o(7),w=Object(y.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #00",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var A=function(e){var t=w(),o=Object(n.useState)(!1),c=Object(r.a)(o,2),a=c[0],i=c[1],d=Object(n.useState)(),s=Object(r.a)(d,2),j=s[0],l=s[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(p.a,{open:a,onClose:function(e){return i(!1)},children:Object(T.jsxs)("div",{className:t.paper,children:[Object(T.jsx)("h3",{children:"Edit the todo"}),Object(T.jsx)("input",{placeholder:e.todo.todo,value:j,onChange:function(e){return l(e.target.value)}}),Object(T.jsx)(u.a,{onClick:function(){g.collection("todos").doc(e.todo.id).set({todo:j,timestamp:x.a.firestore.FieldValue.serverTimestamp()},{merge:!0}),i(!1)},children:" Update Todo"})]})}),Object(T.jsx)(b.a,{children:Object(T.jsx)(O.a,{maxWidth:"md",children:Object(T.jsx)(h.a,{container:!0,spacing:2,children:Object(T.jsxs)(f.a,{children:[Object(T.jsx)(m.a,{primary:e.todo.todo}),Object(T.jsx)(k.a,{onClick:function(e){return i(!0)}}),Object(T.jsx)(C.a,{onClick:function(t){return g.collection("todos").doc(e.todo.id).delete()}})]})})})})]})};o(82);var F=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),o=t[0],c=t[1],a=Object(n.useState)(""),i=Object(r.a)(a,2),p=i[0],b=i[1];return console.log("\ud83d\udc7d",p),Object(n.useEffect)((function(){g.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){c(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]),Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)("h1",{children:"Todo-App\ud83d\ude80 "}),Object(T.jsxs)("form",{children:[Object(T.jsxs)(s.a,{children:[Object(T.jsx)(j.a,{children:" Write a Todo \u2705"}),Object(T.jsx)(l.a,{value:p,onChange:function(e){return b(e.target.value)}})]}),Object(T.jsxs)(u.a,{disabled:!p,type:"submit",onClick:function(e){e.preventDefault(),g.collection("todos").add({todo:p,timestamp:x.a.firestore.FieldValue.serverTimestamp()}),c([].concat(Object(d.a)(o),[p])),b(""),console.log(o)},variant:"contained",color:"primary",children:["Add todo"," "]})]}),Object(T.jsx)("ul",{children:o.map((function(e){return Object(T.jsx)(A,{todo:e})}))})]})},I=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,118)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;o(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(F,{})}),document.getElementById("root")),I()}},[[84,1,2]]]);
//# sourceMappingURL=main.b13c8212.chunk.js.map