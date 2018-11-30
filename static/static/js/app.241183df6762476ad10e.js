webpackJsonp([1],{"1/oy":function(e,t){},"8qdX":function(e,t){},"9M+g":function(e,t){},CE8n:function(e,t){},GfHa:function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("/5sW"),s=r("Dd8w"),a=r.n(s),o=r("NYxO"),i={name:"App",computed:a()({},Object(o.b)(["isLoggedIn"]))},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[r("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),e._v(" "),r("b-navbar-brand",{attrs:{href:"#"}},[e._v("Bocelli")]),e._v(" "),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",[e.isLoggedIn?[r("b-nav-item",{attrs:{href:"#/"}},[e._v("Home")]),e._v(" "),r("b-nav-item",{attrs:{href:"#/chat"}},[e._v("Chat")])]:[r("b-nav-item",{attrs:{href:"#/login"}},[e._v("Login")]),e._v(" "),r("b-nav-item",{attrs:{href:"#/register"}},[e._v("Register")])]],2)],1)],1),e._v(" "),r("router-view")],1)},staticRenderFns:[]};var c=r("VU/8")(i,u,!1,function(e){r("8qdX")},null,null).exports,l=r("Xxa5"),d=r.n(l),m=r("exGp"),f=r.n(m),p=r("mtWM"),v=r.n(p);v.a.defaults.baseURL=Object({NODE_ENV:"production"}).API_SERVER;var b,h=function(e){return v.a.post("/api/user/login",e)},g=this,_={login:(b=f()(d.a.mark(function e(t,r){var n=t.commit;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(r);case 3:r=e.sent,n("SET_USER",r.data),e.next=11;break;case 7:if(e.prev=7,e.t0=e.catch(0),401!==e.t0.response.status){e.next=11;break}throw new Error("Wrong Username/Password given");case 11:case"end":return e.stop()}},e,g,[[0,7]])})),function(e,t){return b.apply(this,arguments)})};n.a.use(o.a);var N=new o.a.Store({state:{user:{}},getters:{user:function(e){var t=e.user;return t},isLoggedIn:function(e){return!!e.user.username},onCallWith:function(e){return"TODO"}},mutations:{SET_USER:function(e,t){e.user=t}},actions:_}),w=r("/ocq"),x={beforeRouteEnter:function(e,t,r){r(function(e){e.user.username||r({name:"Login"})})},data:function(){return{}},computed:a()({},Object(o.c)(["user"]),Object(o.b)(["isLoggedIn"]))},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("h1",[this._v("Hello "+this._s(this.user.firstName)+" "+this._s(this.user.lastName))]),this._v(" "),t("div")])},staticRenderFns:[]};var M=r("VU/8")(x,y,!1,function(e){r("TlaA")},null,null).exports,E={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("b-alert",{attrs:{variant:"danger",show:""!==e.error}},[e._v(e._s(e.error))]),e._v(" "),r("h2",[e._v("Please Login")]),e._v(" "),r("b-form",{on:{submit:e.doLogin}},[r("b-form-group",{attrs:{label:"Username"}},[r("b-form-input",{attrs:{type:"text"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"password"}},[r("b-form-input",{attrs:{type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),r("b-button",{attrs:{type:"button",variant:"primary"},on:{click:e.doLogin}},[e._v("Submit")])],1)],1)},staticRenderFns:[]};var T=r("VU/8")({data:function(){return{user:{},error:""}},methods:{doLogin:function(){var e=this;this.user.username&&this.user.password?this.$store.dispatch("login",this.user).then(function(){e.$router.replace({name:"Home"})}).catch(function(t){e.error=t.message}):this.error="Please fill all the field"}}},E,!1,function(e){r("CE8n")},null,null).exports,k={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("b-alert",{attrs:{variant:"danger",show:""!==e.error}},[e._v(e._s(e.error))]),e._v(" "),r("h2",[e._v("Register")]),e._v(" "),r("b-form",{on:{submit:e.doLogin}},[r("b-form-group",{attrs:{label:"Username"}},[r("b-form-input",{attrs:{type:"text"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"password"}},[r("b-form-input",{attrs:{type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"First Name"}},[r("b-form-input",{attrs:{type:"text"},model:{value:e.user.firstName,callback:function(t){e.$set(e.user,"firstName",t)},expression:"user.firstName"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"Last Name"}},[r("b-form-input",{attrs:{type:"text"},model:{value:e.user.lastName,callback:function(t){e.$set(e.user,"lastName",t)},expression:"user.lastName"}})],1),e._v(" "),r("b-button",{attrs:{type:"button",variant:"primary"},on:{click:e.doLogin}},[e._v("Register")])],1)],1)},staticRenderFns:[]};var O=r("VU/8")({data:function(){return{user:{},error:""}},methods:{doLogin:function(){var e=this;this.user.username&&this.user.password?this.$store.dispatch("login",this.user).then(function(){e.$router.replace({name:"Home"})}).catch(function(t){e.error=t.message}):this.error="Please fill all the field"}}},k,!1,function(e){r("f3O2")},null,null).exports,L=r("wXKC");function R(e){e&&console.log(e.message)}var j=L.initSession("46228482","2_MX40NjIyODQ4Mn5-MTU0MzQ5OTIyNDYyNH5Yd0paenpZQm1NclM4MlF4V0N1ajNIV2Z-fg");j.on("streamDestroyed",function(e){if("networkDisconnected"===e.reason){e.preventDefault();var t=j.getSubscribersForStream(e.stream);if(t.length>0)document.getElementById(t[0].id).innerHTML="Lost connection. This could be due to your internet connection or because the other party lost their connection.",e.preventDefault()}});var D={beforeRouteEnter:function(e,t,r){r(function(e){e.isLoggedIn||r({name:"Login"})})},data:function(){return{session:{}}},mounted:function(){var e=this;console.log("monting Chat");var t=L.initPublisher(this.$el.children.publisher,{insertMode:"replace",publishAudio:!0,publishVideo:!1},R);j.connect("T1==cGFydG5lcl9pZD00NjIyODQ4MiZzaWc9NDIyNDJkZTZkNjdjMGY1ODg1ZjcwOTAwYzk0Y2E4M2YzMjZiZTM0MjpzZXNzaW9uX2lkPTJfTVg0ME5qSXlPRFE0TW41LU1UVTBNelE1T1RJeU5EWXlOSDVZZDBwYWVucFpRbTFOY2xNNE1sRjRWME4xYWpOSVYyWi1mZyZjcmVhdGVfdGltZT0xNTQzNDk5MjU5Jm5vbmNlPTAuOTQ0MjU0MjkxODA3MDk5MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTQ0MTA0MDU4JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9",function(e){e?(R(e),console.log("error")):j.publish(t,R)}),j.on("streamCreated",function(t){console.log("test"),j.subscribe(t.stream,e.$el.children.subscriber,{insertMode:"replace"},R)})},computed:a()({},Object(o.b)(["onCallWith","isLoggedIn"])),methods:{disconnect:function(){j.disconnect(),j.off(),this.$router.push({name:"Home"})}}},V={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("On call with: "+e._s(e.onCallWith))]),e._v(" "),r("b-button",{attrs:{variant:"danger"},on:{click:e.disconnect}},[e._v("End Call")]),e._v(" "),r("div",{attrs:{id:"publisher"}}),e._v(" "),r("div",{attrs:{id:"subscriber"}})],1)},staticRenderFns:[]},U=r("VU/8")(D,V,!1,null,null,null).exports;n.a.use(w.a);var Z=new w.a({routes:[{path:"/",name:"Home",component:M},{path:"/login",name:"Login",component:T},{path:"/register",name:"Register",component:O},{path:"/chat",name:"Chat",component:U}]}),$=r("e6fC");r("Jmt5"),r("9M+g");n.a.config.productionTip=!1,n.a.use($.a),new n.a({el:"#app",store:N,router:Z,render:function(e){return e(c)}})},TlaA:function(e,t){},f3O2:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.241183df6762476ad10e.js.map