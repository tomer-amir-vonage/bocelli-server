webpackJsonp([1],{"1/oy":function(e,t){},"6HPJ":function(e,t){},"8qdX":function(e,t){},"9M+g":function(e,t){},CE8n:function(e,t){},GfHa:function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("/5sW"),s=r("Dd8w"),a=r.n(s),o=r("NYxO"),i={name:"App",computed:a()({},Object(o.c)(["isLoggedIn"]))},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[r("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),e._v(" "),r("b-navbar-brand",{attrs:{href:"#"}},[e._v("Bocelli")]),e._v(" "),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",[e.isLoggedIn?[r("b-nav-item",{attrs:{href:"#/"}},[e._v("Home")]),e._v(" "),r("b-nav-item",{attrs:{href:"#/chat"}},[e._v("Chat")])]:[r("b-nav-item",{attrs:{href:"#/login"}},[e._v("Login")]),e._v(" "),r("b-nav-item",{attrs:{href:"#/register"}},[e._v("Register")])]],2)],1)],1),e._v(" "),r("router-view")],1)},staticRenderFns:[]};var c=r("VU/8")(i,u,!1,function(e){r("8qdX")},null,null).exports,l=r("Xxa5"),p=r.n(l),f=r("exGp"),m=r.n(f),d=r("mtWM"),v=r.n(d);v.a.defaults.baseURL="https://bocelli.herokuapp.com";var b,h,g,_=function(e){return v.a.post("/api/user/login",e)},x=function(e){return v.a.post("/api/user/register",e)},w=function(){return v.a.get("/api/help-requests")},y=this,N={login:(g=m()(p.a.mark(function e(t,r){var n=t.commit;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(r);case 3:r=e.sent,n("SET_USER",r.data),e.next=11;break;case 7:if(e.prev=7,e.t0=e.catch(0),401!==e.t0.response.status){e.next=11;break}throw new Error("Wrong Username/Password given");case 11:case"end":return e.stop()}},e,y,[[0,7]])})),function(e,t){return g.apply(this,arguments)}),register:(h=m()(p.a.mark(function e(t,r){var n=t.commit;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(r);case 3:r=e.sent,n("SET_USER",r.data),e.next=11;break;case 7:if(e.prev=7,e.t0=e.catch(0),401!==e.t0.response.status){e.next=11;break}throw new Error("Wrong Username/Password given");case 11:case"end":return e.stop()}},e,y,[[0,7]])})),function(e,t){return h.apply(this,arguments)}),helpRequests:(b=m()(p.a.mark(function e(t){var r,n=t.commit;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:r=e.sent,n("SET_REQUESTS",r.data);case 4:case"end":return e.stop()}},e,y)})),function(e){return b.apply(this,arguments)})};n.a.use(o.a);var E=new o.a.Store({state:{user:{},requests:{}},getters:{user:function(e){var t=e.user;return t},isLoggedIn:function(e){return!!e.user.username},onCallWith:function(e){return"TODO"}},mutations:{SET_USER:function(e,t){e.user=t},SET_REQUESTS:function(e,t){e.requests=t}},actions:N}),k=r("/ocq"),T={beforeRouteEnter:function(e,t,r){r(function(e){e.user.username||r({name:"Login"})})},data:function(){return{}},mounted:function(){this.helpRequests()},computed:a()({},Object(o.d)(["user","requests"]),Object(o.c)(["isLoggedIn"])),methods:a()({},Object(o.b)(["helpRequests"]))},M={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Hello "+e._s(e.user.firstName)+" "+e._s(e.user.lastName))]),e._v(" "),r("div",e._l(e.requests,function(t){return r("b-card",{key:t.id,staticClass:"mb-2",attrs:{title:t.text}},[r("b-button",{attrs:{href:"#/chat",variant:"primary"}},[e._v("Start Helping")])],1)}))])},staticRenderFns:[]};var R=r("VU/8")(T,M,!1,function(e){r("sVO9")},null,null).exports,L={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("b-alert",{attrs:{variant:"danger",show:""!==e.error}},[e._v(e._s(e.error))]),e._v(" "),r("h2",[e._v("Please Login")]),e._v(" "),r("b-form",{on:{submit:e.doLogin}},[r("b-form-group",{attrs:{label:"Username"}},[r("b-form-input",{attrs:{type:"text"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"password"}},[r("b-form-input",{attrs:{type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),r("b-button",{attrs:{type:"button",variant:"primary"},on:{click:e.doLogin}},[e._v("Submit")])],1)],1)},staticRenderFns:[]};var O=r("VU/8")({data:function(){return{user:{},error:""}},methods:{doLogin:function(){var e=this;this.user.username&&this.user.password?this.$store.dispatch("login",this.user).then(function(){e.$router.replace({name:"Home"})}).catch(function(t){e.error=t.message}):this.error="Please fill all the field"}}},L,!1,function(e){r("CE8n")},null,null).exports,U={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("b-alert",{attrs:{variant:"danger",show:""!==e.error}},[e._v(e._s(e.error))]),e._v(" "),r("h2",[e._v("Register")]),e._v(" "),r("b-form",{on:{submit:e.doLogin}},[r("b-form-group",{attrs:{label:"Username"}},[r("b-form-input",{attrs:{type:"text"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"password"}},[r("b-form-input",{attrs:{type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"First Name"}},[r("b-form-input",{attrs:{type:"text"},model:{value:e.user.firstName,callback:function(t){e.$set(e.user,"firstName",t)},expression:"user.firstName"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"Last Name"}},[r("b-form-input",{attrs:{type:"text"},model:{value:e.user.lastName,callback:function(t){e.$set(e.user,"lastName",t)},expression:"user.lastName"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"Phone"}},[r("b-form-input",{attrs:{type:"tel"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),e._v(" "),r("b-button",{attrs:{type:"button",variant:"primary"},on:{click:e.doLogin}},[e._v("Register")])],1)],1)},staticRenderFns:[]};var S=r("VU/8")({data:function(){return{user:{},error:""}},methods:{doLogin:function(){var e=this;this.user.username&&this.user.password?this.$store.dispatch("register",this.user).then(function(){e.$router.replace({name:"Home"})}).catch(function(t){e.error=t.message}):this.error="Please fill all the field"}}},U,!1,function(e){r("6HPJ")},null,null).exports,j=r("wXKC");function D(e){e&&console.log(e.message)}var V=j.initSession("46228482","2_MX40NjIyODQ4Mn5-MTU0MzQ5OTIyNDYyNH5Yd0paenpZQm1NclM4MlF4V0N1ajNIV2Z-fg");V.on("streamDestroyed",function(e){if("networkDisconnected"===e.reason){e.preventDefault();var t=V.getSubscribersForStream(e.stream);if(t.length>0)document.getElementById(t[0].id).innerHTML="Lost connection. This could be due to your internet connection or because the other party lost their connection.",e.preventDefault()}});var $={beforeRouteEnter:function(e,t,r){r(function(e){e.isLoggedIn||r({name:"Login"})})},data:function(){return{session:{}}},mounted:function(){var e=this;console.log("monting Chat");var t=j.initPublisher(this.$el.children.publisher,{insertMode:"replace",publishAudio:!0,publishVideo:!1},D);V.connect("T1==cGFydG5lcl9pZD00NjIyODQ4MiZzaWc9NDIyNDJkZTZkNjdjMGY1ODg1ZjcwOTAwYzk0Y2E4M2YzMjZiZTM0MjpzZXNzaW9uX2lkPTJfTVg0ME5qSXlPRFE0TW41LU1UVTBNelE1T1RJeU5EWXlOSDVZZDBwYWVucFpRbTFOY2xNNE1sRjRWME4xYWpOSVYyWi1mZyZjcmVhdGVfdGltZT0xNTQzNDk5MjU5Jm5vbmNlPTAuOTQ0MjU0MjkxODA3MDk5MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTQ0MTA0MDU4JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9",function(e){e?(D(e),console.log("error")):V.publish(t,D)}),V.on("streamCreated",function(t){console.log("test"),V.subscribe(t.stream,e.$el.children.subscriber,{insertMode:"replace"},D)})},computed:a()({},Object(o.c)(["onCallWith","isLoggedIn"])),methods:{disconnect:function(){V.disconnect(),V.off(),this.$router.push({name:"Home"})}}},Z={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("On call with: "+e._s(e.onCallWith))]),e._v(" "),r("b-button",{attrs:{variant:"danger"},on:{click:e.disconnect}},[e._v("End Call")]),e._v(" "),r("div",{attrs:{id:"publisher"}}),e._v(" "),r("div",{attrs:{id:"subscriber"}})],1)},staticRenderFns:[]},C=r("VU/8")($,Z,!1,null,null,null).exports;n.a.use(k.a);var W=new k.a({routes:[{path:"/",name:"Home",component:R},{path:"/login",name:"Login",component:O},{path:"/register",name:"Register",component:S},{path:"/chat",name:"Chat",component:C}]}),H=r("e6fC");r("Jmt5"),r("9M+g");n.a.config.productionTip=!1,n.a.use(H.a),new n.a({el:"#app",store:E,router:W,render:function(e){return e(c)}})},sVO9:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a701e5fc2ac7f10531eb.js.map