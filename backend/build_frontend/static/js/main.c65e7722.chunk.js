(this.webpackJsonpalgovis=this.webpackJsonpalgovis||[]).push([[0],{207:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n(0),c=n(14),u=n.n(c),i=n(41),s=n(6),o=n.n(s),p=n(16),f=n(75),b=n(213),l=n(210),d=n(216),h=n(215),j=n(211),m=n(214),x=function(e){var t=e.height,n=e.width,a=e.main,c=e.sub,u={height:"".concat(40*t,"em"),maxHeight:"".concat(40,"em"),width:"".concat(n,"%"),background:a?"#FF7A32":c?"#2EF550":"#1890ff",zIndex:50,borderStyle:"solid",borderWidth:"1px",borderColor:"#f0f2f5"};return Object(r.jsx)("div",{style:u})},O=function(){var e=Object(i.c)((function(e){return e.numberList.size})),t=Object(i.c)((function(e){return e.numberList.list})),n=Object(i.c)((function(e){return e.currentNumber}));return Object(r.jsx)("div",{style:{display:"flex"},children:t.map((function(t,a){return Object(r.jsx)(x,{width:100/e,height:t/e,main:a===n.main,sub:a===n.sub},t)}))})},v=n(212),y=n(44),g="ADD_LIST",w="CHANGE_SIZE",k=function(e){return{type:g,payload:e}},S=n(124),E=n.n(S),N="";N="/api";var T,z={fetchNew:function(){var e=Object(p.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(N,"/list?size=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I={list:[],size:25},L=function(e){return function(){var t=Object(p.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.fetchNew(e);case 2:r=t.sent,n(k(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{list:Object(y.a)(t.payload),size:e.size};case w:return{list:e.list,size:t.payload};default:return e}},_=n(54),A=n(125),B=n(128),R="SET_CURRENT",F="SET_MAIN",D="SET_SUB",U="REMOVE_CURRENT",V="REMOVE_SUB",H=function(e){return{type:F,payload:{main:e}}},M=function(e){return{type:D,payload:{sub:e}}},P=function(){return{type:U}},G={main:-1,sub:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return{main:t.payload.main,sub:t.payload.sub};case F:return{main:t.payload.main,sub:e.sub};case D:return{main:e.main,sub:t.payload.sub};case U:return{main:-1,sub:null};case V:return Object(B.a)({sub:null},e);default:return e}},K="SET_RUNNING",Q="SET_STOPPED",W="SET_FINISHED",Z="SET_WAITING",q=function(){return{type:W}},X="waiting",Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return"running";case Q:return"stopped";case W:return"finished";case Z:return"waiting";default:return e}},$=n(126),ee=Object(_.combineReducers)({numberList:C,currentNumber:J,running:Y}),te=Object(_.createStore)(ee,Object($.composeWithDevTools)(Object(_.applyMiddleware)(A.a))),ne=function(){switch(te.getState().running){case"running":return"running";case"finished":return"finished";default:return"stopped"}},re=function(){var e=Object(i.b)(),t=Object(a.useState)(25),n=Object(f.a)(t,2),c=n[0],u=n[1],s=Object(i.c)((function(e){return e.numberList.size}));Object(a.useEffect)((function(){e(L(s))}),[s]);return Object(r.jsx)("div",{children:Object(r.jsx)(v.a,{min:3,max:60,onChange:function(e){"number"!==typeof e||isNaN(Number(e))||u(e)},onAfterChange:function(t){"number"===typeof t&&(t>60&&(t=60),e(function(e){return function(){var t=Object(p.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:w,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)))},value:"number"===typeof c?c:25,tipFormatter:null,disabled:"running"===ne()})})};!function(e){e.BubbleSort="BubbleSort",e.QuickSort="QuickSort",e.BogoSort="BogoSort"}(T||(T={}));var ae=function e(t,n){var r=Object(y.a)(te.getState().numberList.list);setTimeout((function(){if("stopped"!==ne()){if(r[t]>r[t+1]){var a=[r[t+1],r[t]];r[t]=a[0],r[t+1]=a[1],te.dispatch(k(r))}t++,te.dispatch(H(t)),t===n-1?e(-1,n-1):0==n?(te.dispatch(P()),te.dispatch(q())):e(t,n)}else te.dispatch(P())}),80)},ce=function(){var e=Object(y.a)(te.getState().numberList.list);te.dispatch(H(0)),ae(0,e.length)},ue=function(){var e=Object(p.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(p.a)(o.a.mark((function e(t,n,r){var a,c,u,i,s,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(y.a)(t),c=a[r],te.dispatch(H(r)),u=n,c){e.next=6;break}return e.abrupt("return",-1);case 6:i=n;case 7:if(!(i<r)){e.next=17;break}if("stopped"!==ne()){e.next=10;break}return e.abrupt("return",-1);case 10:return te.dispatch(M(i)),e.next=13,ue(80);case 13:a[i]<c&&(s=[a[i],a[u]],a[u]=s[0],a[i]=s[1],te.dispatch(k(a)),u++);case 14:i++,e.next=7;break;case 17:return p=[a[r],a[u]],a[u]=p[0],a[r]=p[1],te.dispatch(k(a)),e.abrupt("return",u);case 22:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),se=function(){var e=Object(p.a)(o.a.mark((function e(t,n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("stopped"!==ne()){e.next=2;break}return e.abrupt("return");case 2:if(r=Object(y.a)(te.getState().numberList.list),!(t<n)){e.next=13;break}return e.next=6,ie(r,t,n);case 6:if(-1!==(a=e.sent)){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,se(t,a-1);case 11:return e.next=13,se(a+1,n);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),oe=function(){var e=Object(p.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(y.a)(te.getState().numberList.list),te.dispatch(H(-1)),e.next=4,se(0,t.length-1);case 4:te.dispatch(P()),"running"===ne()&&te.dispatch(q());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(p.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(p.a)(o.a.mark((function e(){var t,n,r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(y.a)(te.getState().numberList.list),n=te.getState().numberList.size,r=!1,a=0;case 4:if(!(a<n-1)){e.next=16;break}return e.next=7,pe(100);case 7:if("stopped"!==ne()){e.next=9;break}return e.abrupt("return");case 9:if(te.dispatch(H(a)),!(t[a]>t[a+1])){e.next=13;break}return r=!r,e.abrupt("break",16);case 13:a++,e.next=4;break;case 16:if(!r){e.next=27;break}return e.next=19,z.fetchNew(n);case 19:return c=e.sent,te.dispatch(k(c)),te.dispatch(H(-1)),e.next=24,pe(100);case 24:return e.next=26,fe();case 26:return e.abrupt("return",e.sent);case 27:return te.dispatch(q()),e.abrupt("return");case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return te.dispatch(H(-1)),e.next=3,fe();case 3:te.dispatch(P());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(p.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="BubbleSort"===e.t0?3:"QuickSort"===e.t0?6:"BogoSort"===e.t0?9:12;break;case 3:return e.next=5,ce();case 5:return e.abrupt("return",e.sent);case 6:return e.next=8,oe();case 8:return e.abrupt("return",e.sent);case 9:return e.next=11,be();case 11:return e.abrupt("return",e.sent);case 12:return e.abrupt("return");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=b.a.Title,he=l.a.Header,je=l.a.Footer,me=l.a.Sider,xe=l.a.Content,Oe=function(){var e=Object.values(T),t=Object(a.useState)(e[0]),n=Object(f.a)(t,2),c=n[0],u=n[1],s=Object(i.b)(),b=Object(i.c)((function(e){return e.running})),x=Object(i.c)((function(e){return e.numberList.size})),v=function(){var e=Object(p.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("finished"!==b){e.next=3;break}return e.next=3,s(L(x));case 3:return s(function(){var e=Object(p.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:K});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=c,e.next=7,le(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{children:Object(r.jsxs)(l.a,{children:[Object(r.jsxs)(he,{className:"header",children:[Object(r.jsx)("div",{}),Object(r.jsx)(d.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:Object(r.jsx)(d.a.Item,{children:"AlgoVis"},"1")})]}),Object(r.jsxs)(l.a,{style:{margin:"0 5em 0 5em"},children:[Object(r.jsxs)(me,{width:"20%",className:"site-layout-background",theme:"light",children:[Object(r.jsx)(de,{level:2,style:{margin:"0,5em auto",padding:"0.2em 1em"},children:"Select list size"}),Object(r.jsx)(re,{}),"stopped"===b||"finished"===b||"waiting"===b?Object(r.jsx)(h.a,{type:"primary",block:!0,size:"large",style:{margin:"1em auto"},onClick:v,children:"Visualize"}):Object(r.jsx)(h.a,{type:"primary",block:!0,size:"large",style:{margin:"1em auto"},onClick:function(){s(function(){var e=Object(p.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:Q});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),setTimeout((function(){ne()}),20)},children:"Stop visualization"}),Object(r.jsx)(j.a,{children:"Select sorting algorithm"}),Object(r.jsx)(d.a,{mode:"inline",style:{borderRight:0},defaultOpenKeys:["slider","sub2"],defaultSelectedKeys:[e[0]],onClick:function(e){(function(){var e=Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("waiting"===b){e.next=4;break}return e.next=3,s(L(x));case 3:s(function(){var e=Object(p.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:Z});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),u(e.key)},children:e.map((function(e){return Object(r.jsx)(d.a.Item,{disabled:"running"===b,children:e},e)}))})]}),Object(r.jsx)(l.a,{style:{padding:"0 10em em"},children:Object(r.jsxs)(xe,{className:"site-layout-content",style:{padding:24,margin:0},children:[Object(r.jsx)(O,{}),Object(r.jsx)(j.a,{}),Object(r.jsx)(m.a,{}),Object(r.jsx)(m.a,{})]})})]}),Object(r.jsx)(je,{style:{textAlign:"center"},children:"AlgoVis algorithm visualizer @2020 Created by Jere Salmensaari"})]})})};n(206);u.a.render(Object(r.jsx)(i.a,{store:te,children:Object(r.jsx)(Oe,{})}),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.c65e7722.chunk.js.map