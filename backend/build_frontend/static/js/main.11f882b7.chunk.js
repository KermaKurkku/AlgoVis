(this.webpackJsonpalgovis=this.webpackJsonpalgovis||[]).push([[0],{209:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n(0),c=n.n(a),i=n(15),u=n.n(i),s=n(42),o=n(6),f=n.n(o),p=n(14),b=n(47),d=n(215),l=n(212),h=n(218),j=n(217),m=n(213),O=n(216),x=c.a.forwardRef((function(e,t){var n={height:"".concat(40*e.height,"em"),maxHeight:"".concat(40,"em"),width:"".concat(e.width,"%"),background:e.main?"#FF7A32":e.sub?"#2EF550":"#1890ff",zIndex:50,borderStyle:"solid",borderWidth:"1px",borderColor:"#f0f2f5"};return Object(r.jsx)("div",{style:n,ref:t})}));x.displayName="Bar";var v=x,y=function(e){var t={};return c.a.Children.forEach(e,(function(e){if(!e.ref.current)return null;var n=e.ref.current.getBoundingClientRect();t[e.key]=n})),t},g=function(e){var t=e.children,n=Object(a.useState)({}),r=Object(b.a)(n,2),i=r[0],u=r[1],s=Object(a.useState)({}),o=Object(b.a)(s,2),f=o[0],p=o[1],d=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e}),[e]),t.current}(t);return Object(a.useLayoutEffect)((function(){var e=y(t);u(e)}),[t]),Object(a.useLayoutEffect)((function(){var e=y(d);p(e)}),[d]),Object(a.useEffect)((function(){!f||!i||Object.keys(f).length<Object.keys(i).length||Object.keys(f).length&&c.a.Children.forEach(t,(function(e){var t=e.ref.current,n=f[e.key],r=i[e.key];if(n&&r){var a=n.left-r.left;a&&requestAnimationFrame((function(){t.style.transform="translateX(".concat(a,"px)"),t.style.transition="transform 0ms",requestAnimationFrame((function(){t.style.transform="",t.style.transition="transform 300ms"}))}))}}))}),[i,f,t]),t},w=function(e){var t=e.componentWidth,n=Object(s.c)((function(e){return e.numberList.size})),c=Object(s.c)((function(e){return e.numberList.list})),i=Object(s.c)((function(e){return e.currentNumber})),u=100/n*t/n;return Object(r.jsx)("div",{style:{display:"flex"},children:Object(r.jsx)(g,{children:c.map((function(e,t){var c=Object(a.createRef)();return Object(r.jsx)(v,{width:u,height:e/n,main:t===i.main,sub:t===i.sub,ref:c},e)}))})})},k=n(214),S=n(71),E=n(39),N="ADD_LIST",z="CHANGE_SIZE",L=function(e){return{type:N,payload:e}},T=n(125),I=n.n(T),C="";C="/api";var R,A={fetchNew:function(){var e=Object(p.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(C,"/list?size=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B={list:[],size:25},_=function(e){return function(){var t=Object(p.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.fetchNew(e);case 2:r=t.sent,n(L(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{list:Object(E.a)(t.payload),size:e.size};case z:return Object(S.a)(Object(S.a)({},e),{},{size:t.payload});default:return e}},W=n(55),D=n(126),H="SET_CURRENT",U="SET_MAIN",V="SET_SUB",M="REMOVE_CURRENT",G="REMOVE_SUB",J=function(e){return{type:U,payload:{main:e}}},K=function(e){return{type:V,payload:{sub:e}}},P=function(){return{type:M}},Q=function(){return{type:G}},q={main:-1,sub:null},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return{main:t.payload.main,sub:t.payload.sub};case U:return{main:t.payload.main,sub:e.sub};case V:return{main:e.main,sub:t.payload.sub};case M:return{main:-1,sub:null};case G:return Object(S.a)({sub:null},e);default:return e}},Z="SET_RUNNING",Y="SET_STOPPED",$="SET_FINISHED",ee="SET_WAITING",te=function(){return{type:$}},ne="waiting",re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return"running";case Y:return"stopped";case $:return"finished";case ee:return"waiting";default:return e}},ae=n(127),ce=Object(W.combineReducers)({numberList:F,currentNumber:X,running:re}),ie=Object(W.createStore)(ce,Object(ae.composeWithDevTools)(Object(W.applyMiddleware)(D.a))),ue=function(){switch(ie.getState().running){case"running":return"running";case"finished":return"finished";default:return"stopped"}},se=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(s.b)(),t=Object(a.useState)(25),n=Object(b.a)(t,2),c=n[0],i=n[1],u=Object(s.c)((function(e){return e.numberList.size}));Object(a.useEffect)((function(){e(_(u))}),[u]);return Object(r.jsx)("div",{children:Object(r.jsx)(k.a,{min:3,max:60,onChange:function(e){"number"!==typeof e||isNaN(Number(e))||i(e)},onAfterChange:function(t){"number"===typeof t&&(t>60&&(t=60),e(function(e){return function(){var t=Object(p.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:z,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)))},value:"number"===typeof c?c:25,tipFormatter:null,disabled:"running"===ue()})})};!function(e){e.BubbleSort="BubbleSort",e.InsertionSort="InsertionSort",e.QuickSort="QuickSort",e.BogoSort="BogoSort"}(R||(R={}));var fe=function e(t,n){var r=Object(E.a)(ie.getState().numberList.list);setTimeout((function(){if("stopped"!==ue()){if(r[t]>r[t+1]){var a=[r[t+1],r[t]];r[t]=a[0],r[t+1]=a[1],ie.dispatch(L(r))}t++,ie.dispatch(J(t)),t===n-1?e(-1,n-1):0===n?(ie.dispatch(P()),ie.dispatch(te())):e(t,n)}else ie.dispatch(P())}),500)},pe=function(){var e=Object(E.a)(ie.getState().numberList.list);ie.dispatch(J(0)),fe(0,e.length)},be=function(){var e=Object(p.a)(f.a.mark((function e(t,n,r){var a,c,i,u,s,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(E.a)(t),c=a[r],ie.dispatch(J(r)),i=n,c){e.next=6;break}return e.abrupt("return",-1);case 6:u=n;case 7:if(!(u<r)){e.next=17;break}if("stopped"!==ue()){e.next=10;break}return e.abrupt("return",-1);case 10:return ie.dispatch(K(u)),e.next=13,se(400);case 13:a[u]<c&&(s=[a[u],a[i]],a[i]=s[0],a[u]=s[1],ie.dispatch(L(a)),i++);case 14:u++,e.next=7;break;case 17:return o=[a[r],a[i]],a[i]=o[0],a[r]=o[1],ie.dispatch(L(a)),e.abrupt("return",i);case 22:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),de=function(){var e=Object(p.a)(f.a.mark((function e(t,n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("stopped"!==ue()){e.next=2;break}return e.abrupt("return");case 2:if(r=Object(E.a)(ie.getState().numberList.list),!(t<n)){e.next=13;break}return e.next=6,be(r,t,n);case 6:if(-1!==(a=e.sent)){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,de(t,a-1);case 11:return e.next=13,de(a+1,n);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(E.a)(ie.getState().numberList.list),ie.dispatch(J(-1)),e.next=4,de(0,t.length-1);case 4:ie.dispatch(P()),"running"===ue()&&ie.dispatch(te());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=n(128),je=n.n(he),me=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(E.a)(ie.getState().numberList.list),n=ie.getState().numberList.size,r=!1,a=0;case 4:if(!(a<n-1)){e.next=16;break}return e.next=7,se(200);case 7:if("stopped"!==ue()){e.next=9;break}return e.abrupt("return");case 9:if(ie.dispatch(J(a)),!(t[a]>t[a+1])){e.next=13;break}return r=!r,e.abrupt("break",16);case 13:a++,e.next=4;break;case 16:if(!r){e.next=24;break}return ie.dispatch(L(je.a.shuffle(t))),ie.dispatch(J(-1)),e.next=21,se(400);case 21:return e.next=23,me();case 23:return e.abrupt("return",e.sent);case 24:return ie.dispatch(te()),e.abrupt("return");case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie.dispatch(J(-1)),e.next=3,me();case 3:ie.dispatch(P());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=1;case 1:if(!(n<t.length)){e.next=26;break}if("stopped"!==ue()){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,se(300);case 6:r=n,ie.dispatch(J(n));case 8:if(!(r>0&&t[r-1]>t[r])){e.next=22;break}if("stopped"!==ue()){e.next=11;break}return e.abrupt("return");case 11:return e.next=13,se(400);case 13:ie.dispatch(P()),ie.dispatch(K(r-1)),a=[t[r-1],t[r]],t[r]=a[0],t[r-1]=a[1],ie.dispatch(L(Object(E.a)(t))),r--,e.next=8;break;case 22:ie.dispatch(Q());case 23:n++,e.next=1;break;case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(E.a)(ie.getState().numberList.list),ie.dispatch(J(-1)),e.next=4,xe(t);case 4:ie.dispatch(P()),ie.dispatch(te());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="BubbleSort"===e.t0?3:"QuickSort"===e.t0?6:"BogoSort"===e.t0?9:"InsertionSort"===e.t0?12:15;break;case 3:return e.next=5,pe();case 5:return e.abrupt("return",e.sent);case 6:return e.next=8,le();case 8:return e.abrupt("return",e.sent);case 9:return e.next=11,Oe();case 11:return e.abrupt("return",e.sent);case 12:return e.next=14,ve();case 14:return e.abrupt("return",e.sent);case 15:return e.abrupt("return");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=d.a.Title,we=l.a.Header,ke=l.a.Footer,Se=l.a.Sider,Ee=l.a.Content,Ne=function(){var e=Object.values(R),t=Object(a.useState)(e[0]),n=Object(b.a)(t,2),c=n[0],i=n[1],u=Object(a.useRef)(null),o=function(e){var t=function(){var t,n;return{width:(null===(t=e.current)||void 0===t?void 0:t.offsetWidth)||0,height:(null===(n=e.current)||void 0===n?void 0:n.offsetHeight)||0}},n=Object(a.useState)({width:0,height:0}),r=Object(b.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){var n=function(){i(t())};return e.current&&i(t()),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[e]),c}(u).width,d=Object(s.b)(),x=Object(s.c)((function(e){return e.running})),v=Object(s.c)((function(e){return e.numberList.size})),y=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("finished"!==x){e.next=3;break}return e.next=3,d(_(v));case 3:return d(function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:Z});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=c,e.next=7,ye(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{children:Object(r.jsxs)(l.a,{children:[Object(r.jsxs)(we,{className:"header",children:[Object(r.jsx)("div",{}),Object(r.jsx)(h.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:Object(r.jsx)(h.a.Item,{children:"AlgoVis"},"1")})]}),Object(r.jsxs)(l.a,{style:{margin:"0 5em 0 5em"},children:[Object(r.jsxs)(Se,{width:"20%",className:"site-layout-background",theme:"light",children:[Object(r.jsx)(ge,{level:2,style:{margin:"0,5em auto",padding:"0.2em 1em"},children:"Select list size"}),Object(r.jsx)(oe,{}),"stopped"===x||"finished"===x||"waiting"===x?Object(r.jsx)(j.a,{type:"primary",block:!0,size:"large",style:{margin:"1em auto"},onClick:y,children:"Visualize"}):Object(r.jsx)(j.a,{type:"primary",block:!0,size:"large",style:{margin:"1em auto"},onClick:function(){d(function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:Y});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Stop visualization"}),Object(r.jsx)(m.a,{children:"Select sorting algorithm"}),Object(r.jsx)(h.a,{mode:"inline",style:{borderRight:0},defaultOpenKeys:["slider","sub2"],defaultSelectedKeys:[e[0]],onClick:function(e){(function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("waiting"===x){e.next=4;break}return e.next=3,d(_(v));case 3:d(function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:ee});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),i(e.key)},children:e.map((function(e){return Object(r.jsx)(h.a.Item,{disabled:"running"===x,children:e},e)}))})]}),Object(r.jsx)(l.a,{style:{padding:"0 10em em"},children:Object(r.jsx)(Ee,{className:"site-layout-content",id:"container",style:{padding:24,margin:0},children:Object(r.jsxs)("div",{ref:u,children:[Object(r.jsx)(w,{componentWidth:o}),Object(r.jsx)(m.a,{}),Object(r.jsx)(O.a,{}),Object(r.jsx)(O.a,{})]})})})]}),Object(r.jsx)(ke,{style:{textAlign:"center"},children:"AlgoVis algorithm visualizer @2020 Created by Jere Salmensaari"})]})})};n(208);u.a.render(Object(r.jsx)(s.a,{store:ie,children:Object(r.jsx)(Ne,{})}),document.getElementById("root"))}},[[209,1,2]]]);
//# sourceMappingURL=main.11f882b7.chunk.js.map