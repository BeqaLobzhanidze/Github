(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{15:function(e,t,r){e.exports={container:"User_container__3qu7K",leftside:"User_leftside__YFzBT",rightside:"User_rightside__2gXKl",image:"User_image__CX8bQ",list:"User_list__zfpWW",orgs:"User_orgs__1d1IY",repos:"User_repos__1rZry",wrapper:"User_wrapper__YR-1U"}},16:function(e,t,r){e.exports={form:"SignInForm_form__why9g",container:"SignInForm_container__17Ghy",input:"SignInForm_input__21p9I",SignIn:"SignInForm_SignIn__XlO4N",SignUp:"SignInForm_SignUp__2PahT",restart:"SignInForm_restart__1K1eL",cont:"SignInForm_cont__1CHDz"}},18:function(e,t,r){e.exports={main:"Dashboard_main__1C_Dr",container:"Dashboard_container__Eh1-u",buttonContainer:"Dashboard_buttonContainer__3W0ei",loadmore:"Dashboard_loadmore__2oKCc",wrapper:"Dashboard_wrapper__3po_A"}},22:function(e,t,r){e.exports={container:"NavBar_container__1jspF",image:"NavBar_image__3LWkb",headers:"NavBar_headers__34x9g",logout:"NavBar_logout__3jh3C"}},26:function(e,t,r){e.exports={form:"SignUpForm_form__1i60t",container:"SignUpForm_container__2X8LZ",SignUp:"SignUpForm_SignUp__2MUxH"}},27:function(e,t,r){e.exports={container:"Search_container__2NDn8",wrapper:"Search_wrapper__prrAx"}},30:function(e,t,r){e.exports={User:"User_User__h2Mhc",img:"User_img__1riux",user:"User_user__1Rzag"}},33:function(e,t,r){e.exports={add:"ToggleFavorite_add__sr5mE",remove:"ToggleFavorite_remove__36qRG"}},34:function(e,t,r){e.exports={container:"FavoriteUser_container__12fBo",image:"FavoriteUser_image__25S4t"}},35:function(e,t,r){e.exports={container:"ModalForm_container__2Heb8",buttons:"ModalForm_buttons__2r-N3"}},46:function(e,t,r){},47:function(e,t,r){e.exports={input:"Input_input__3_rur"}},48:function(e,t,r){e.exports={container:"Favorites_container__1PvVa",smallContainer:"Favorites_smallContainer__3NqiV"}},84:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(23),s=r.n(c),i=r(7),o=r(2),u=r(4),l=r.n(u),j=r(9),d=r(13),h=r.n(d),b="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";function p(){return(p=Object(j.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://api.github.com/search/users?q=followers:%3E=1000&per_page=".concat(t),{headers:{Authorization:"token ".concat(b)}});case 3:return r=e.sent,e.abrupt("return",r.data.items);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var O=function(e){return p.apply(this,arguments)},f=r(30),m=r.n(f),v="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",x="https://api.github.com/users/";function g(){return(g=Object(j.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(x).concat(t),{headers:{Authorization:"token ".concat(v)}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var _=function(e){return g.apply(this,arguments)},w="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",y="https://api.github.com/users/";function S(){return(S=Object(j.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(y).concat(t,"/repos?per_page=10"),{headers:{Authorization:"token ".concat(w)}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){return S.apply(this,arguments)},F="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",U="https://api.github.com/users/";function I(){return(I=Object(j.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(U).concat(t,"/orgs?per_page=3"),{headers:{Authorization:"token ".concat(F)}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(e){return I.apply(this,arguments)},k=r(0),E=Object(n.createContext)();function A(e){var t=e.children,r=Object(n.useState)({follwers:"",followings:"",username:"",url:""}),a=Object(o.a)(r,2),c=a[0],s=a[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),l=u[0],j=u[1],d=Object(n.useState)([]),h=Object(o.a)(d,2),b=h[0],p=h[1];return Object(n.useEffect)((function(){c.username&&(N(c.username).then((function(e){return j(e)})),C(c.username).then((function(e){return p(e)})))}),[c.username]),Object(k.jsx)(E.Provider,{value:{watchers:c,setWatchers:s,repos:l,organisation:b},children:t})}function P(){var e=Object(n.useContext)(E);if(!e)throw new Error("");return e}var D=r(6);var z=function(e){var t=e.property,r=Object(n.useState)({followers:"",followings:"",username:"",url:""}),a=Object(o.a)(r,2),c=a[0],s=a[1],i=P().setWatchers;return Object(n.useEffect)((function(){_(t.login).then((function(e){return s({followers:e.followers,followings:e.following,username:e.login,url:e.avatar_url})}))}),[]),Object(k.jsx)("div",{className:m.a.User,children:Object(k.jsxs)(D.b,{to:"/user/".concat(c.username),onClick:function(){i({followers:c.followers,followings:c.followings,username:c.username,url:c.url})},children:[Object(k.jsx)("div",{className:m.a.img,children:Object(k.jsx)("img",{src:t.avatar_url,alt:"users avatar"})}),c?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("h1",{children:["Username : ",t.login]}),Object(k.jsxs)("h1",{children:["Followers : ",c.followers]}),Object(k.jsxs)("h1",{children:["Followings : ",c.followings]})]}):Object(k.jsx)("h1",{children:"null"})]})})},T="/Dashboard",R="/SignUp",Z="/favorites",q="/search",L=r(18),Y=r.n(L),M=r(14),B=r.n(M);var W=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(20),s=Object(o.a)(c,2),i=s[0],u=s[1],l=Object(n.useState)(!1),j=Object(o.a)(l,2),d=j[0],h=j[1],b=Object(n.useState)(""),p=Object(o.a)(b,2),f=p[0],m=p[1];return Object(n.useEffect)((function(){var e=!0;return h(!0),O(i).then((function(t){e&&a(t)})).catch((function(e){return m(e.message)})).finally((function(){return h(!1)})),function(){return e=!1}}),[i]),Object(n.useEffect)((function(){localStorage.setItem("path",T)}),[]),Object(k.jsxs)("main",{className:Y.a.main,children:[f&&Object(k.jsx)("h1",{children:f}),d?Object(k.jsx)("div",{className:Y.a.wrapper,children:Object(k.jsx)(B.a,{size:50,color:"green"})}):Object(k.jsxs)(k.Fragment,{children:[0!=r.length?Object(k.jsx)("section",{className:Y.a.container,children:r.map((function(e){return Object(k.jsx)(z,{property:e},e.id)}))}):Object(k.jsx)("h1",{children:"Loading..."}),Object(k.jsx)("div",{className:Y.a.buttonContainer,children:Object(k.jsx)("button",{onClick:function(){return u(i+20)},className:Y.a.loadmore,children:"Load More"})})]})]})},H="https://comm-auth.kapo.dev";function V(){return(V=Object(j.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(H,"/auth/signup"),t,{headers:{"Content-Type":"application/json"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return K.apply(this,arguments)}function K(){return(K=Object(j.a)(l.a.mark((function e(t){var r,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,n=t.password,e.next=3,h.a.post("".concat(H,"/auth/signin"),{username:r,password:n},{headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=r(45);function J(e){e?localStorage.setItem("accesToken",e):localStorage.removeItem("accesToken")}function Q(e){if(!e)return{valid:!1,payload:null};var t=Object(X.a)(e),r=Date.now()/1e3;return{valid:t.exp>r,payload:t.payload}}var $="AUTH_INITIALIZED",ee="AUTH_LOGIN",te="AUTH_LOGOUT";function re(e,t){return{type:$,payload:{isAuthenticated:e,user:t}}}function ne(e){return{type:ee,payload:{user:e}}}var ae=function(e){try{var t=localStorage.getItem("accesToken"),r=Q(t),n=r.valid,a=r.payload;e(n&&t?re(!0,a):re(!1,null))}catch(c){e(re(!1,null))}},ce={isInitialized:!1,isAuthenticated:!1,user:null};function se(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:var r=t.payload,n=r.isAuthenticated,a=r.user;return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:n,user:a,isInitialized:!0});case ee:var c=t.payload.user;return Object(i.a)(Object(i.a)({},e),{},{user:c,isAuthenticated:!0});case te:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1,user:null});default:return e}}var ie=Object(n.createContext)();function oe(e){var t=e.children,r=Object(n.useReducer)(se,ce),a=Object(o.a)(r,2),c=a[0],s=a[1];function u(){return(u=Object(j.a)(l.a.mark((function e(t,r){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t,r);case 2:return n=e.sent,J(a=n.token),c=Q(a),s(ne(c.payload)),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){ae(s)}),[]),c.isInitialized,Object(k.jsx)(ie.Provider,{value:Object(i.a)(Object(i.a)({},c),{},{login:function(e,t){return u.apply(this,arguments)},logout:function(){J(),s({type:te})},dispatch:s}),children:t})}function ue(){var e=Object(n.useContext)(ie);if(!e)throw new Error("Invalid cotnext");return e}var le=r(16),je=r.n(le);var de=function(e){var t=e.state,r=Object(n.useState)(""),a=Object(o.a)(r,2),c=a[0],s=a[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),l=u[0],j=u[1],d=Object(n.useState)(!1),h=Object(o.a)(d,2),b=h[0],p=h[1],O=Object(n.useState)(""),f=Object(o.a)(O,2),m=f[0],v=f[1],x=Object(n.useState)(-1),g=Object(o.a)(x,2),_=g[0],w=g[1],y=ue().login;return Object(n.useEffect)((function(){var e=!0;return-1!=_&&(p(!0),y({username:c,password:l}).then((function(){e&&p(!0)})).catch((function(e){return v(e.response.data.message)})),localStorage.setItem("path",T)),function(){return e=!1}}),[_]),Object(k.jsx)("main",{className:je.a.container,children:Object(k.jsxs)("form",{className:je.a.form,children:[m&&Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("h4",{style:{color:"red",width:"300px"},children:m})}),b&&!m?Object(k.jsx)(B.a,{size:50,color:"green"}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h1",{children:(null===t||void 0===t?void 0:t.success)&&Object(k.jsx)("h3",{style:{textAlign:"center",marginTop:"20px",color:"red"},children:"Sign In Succesfully"})}),Object(k.jsxs)("div",{className:je.a.input,children:[Object(k.jsx)("label",{htmlFor:"username",children:"Username"}),Object(k.jsx)("input",{type:"text",id:"username",placeholder:"Username",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(k.jsxs)("div",{className:je.a.input,children:[Object(k.jsx)("label",{htmlFor:"Password",children:"Password"}),Object(k.jsx)("input",{type:"password",id:"Password",placeholder:"Password",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(k.jsxs)("div",{className:je.a.cont,children:[Object(k.jsx)("button",{className:je.a.SignIn,onClick:function(e){return function(e){e.preventDefault(),w(_+1)}(e)},children:"Sign In"}),Object(k.jsx)(D.b,{to:R,children:Object(k.jsx)("button",{className:je.a.SignUp,children:"Sign Up"})})]})]})]})})},he=r(46),be=r.n(he);var pe=function(e){var t=e.location.state;return Object(k.jsx)("div",{className:be.a.cotnainer,children:Object(k.jsx)(de,{state:t})})},Oe=r(24),fe=r(47),me=r.n(fe);var ve=function(e){var t=e.value,r=e.type,n=e.setUser,a=e.user;return Object(k.jsxs)("div",{className:me.a.input,children:[Object(k.jsx)("label",{htmlFor:t,children:t}),Object(k.jsx)("input",{type:r,id:t,name:t,placeholder:t,value:a.value,onChange:function(e){n((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(Oe.a)({},e.target.name,e.target.value))}))}})]})},xe=r(26),ge=r.n(xe),_e=r(3),we=[{id:1,value:"username",type:"text"},{id:2,value:"firstName",type:"text"},{id:3,value:"lastName",type:"text"},{id:4,value:"email",type:"email"},{id:5,value:"birthDate",type:"date"},{id:6,value:"password",type:"password"}];var ye=function(){var e=Object(n.useState)({username:"",firstName:"",lastName:"",email:"",birthDate:"",password:""}),t=Object(o.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=s[0],u=s[1],l=Object(n.useState)(""),j=Object(o.a)(l,2),d=j[0],h=j[1],b=Object(n.useState)(-1),p=Object(o.a)(b,2),O=p[0],f=p[1],m=Object(_e.g)();return Object(n.useEffect)((function(){-1!=O&&(u(!0),function(e){return V.apply(this,arguments)}(r).then((function(){return m.push("/",{success:!0})})).catch((function(e){return h(e.response.data.message)})).finally((function(){return u(!1)})))}),[O]),Object(k.jsx)("main",{className:ge.a.container,children:Object(k.jsxs)("form",{className:ge.a.form,children:[d&&Object(k.jsx)("h4",{style:{color:"red",width:"300px"},children:d}),i?Object(k.jsx)(B.a,{color:"green",size:50}):Object(k.jsxs)(k.Fragment,{children:[we.map((function(e){return Object(k.jsx)(ve,{value:e.value,type:e.type,setUser:a,user:r},e.id)})),Object(k.jsx)("button",{type:"submit",className:ge.a.SignUp,onClick:function(e){return function(e){e.preventDefault(),f(O+1)}(e)},children:"Sign Up"})]})]})})};var Se=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(ye,{})})};var Ne=function(e){var t=e.children;return ue().isAuthenticated?Object(k.jsx)(_e.a,{to:localStorage.getItem("path")?localStorage.getItem("path"):T}):Object(k.jsx)(k.Fragment,{children:t})};var Fe=function(e){var t=e.children;return ue().isAuthenticated?Object(k.jsx)(k.Fragment,{children:t}):Object(k.jsx)(_e.a,{to:"/"})},Ue=r(15),Ie=r.n(Ue),Ce=r(49),ke=Object(n.createContext)();function Ee(e){var t=e.children,r=Object(n.useState)([]),a=Object(o.a)(r,2),c=a[0],s=a[1],i=Object(n.useState)(!0),u=Object(o.a)(i,2),l=u[0],j=u[1];return Object(k.jsx)(ke.Provider,{value:{favorites:c,setFavorites:s,setIsFavorite:j,isFavorite:l},children:t})}function Ae(){var e=Object(n.useContext)(ke);if(!e)throw new Error("");return e}var Pe=r(33),De=r.n(Pe);var ze=function(){var e=Ae(),t=e.setFavorites,r=e.favorites,a=e.setIsFavorite,c=e.isFavorite,s=P().watchers;return Object(n.useEffect)((function(){r.filter((function(e){return e.username==s.username})).length>0?a(!0):a(!1)}),[r]),Object(k.jsx)("div",{children:c?Object(k.jsx)("div",{className:De.a.remove,children:Object(k.jsx)("button",{onClick:function(){t((function(e){return e.filter((function(e){return e.username!=s.username}))}))},children:"Remove from Favorites"})}):Object(k.jsx)("div",{className:De.a.add,children:Object(k.jsx)("button",{onClick:function(){t((function(e){return[].concat(Object(Ce.a)(e),[{username:s.username,url:s.url}])}))},children:"Add to Favorites"})})})};var Te=function(){var e=P(),t=e.watchers,r=e.repos,a=e.organisation,c=e.setWatchers,s=Object(_e.h)().id,i=Object(n.useState)(!1),u=Object(o.a)(i,2),l=u[0],j=u[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),b=h[0],p=h[1];return Object(n.useEffect)((function(){t.followers||(j(!0),_(s).then((function(e){return c({followers:e.followers,followings:e.following,username:s,url:e.avatar_url})})).catch((function(e){return p(e.message)})).finally((function(){return j(!1)}))),localStorage.setItem("path","/user/".concat(s))}),[]),Object(k.jsxs)("div",{className:Ie.a.container,children:[b&&Object(k.jsx)("h1",{children:b}),l?Object(k.jsx)("div",{className:Ie.a.wrapper,children:Object(k.jsx)(B.a,{color:"green",size:50})}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:Ie.a.leftside,children:[Object(k.jsx)("div",{className:Ie.a.image,children:Object(k.jsx)("img",{src:t.url,alt:"asd"})}),Object(k.jsx)("div",{children:Object(k.jsx)(ze,{username:t.username,url:t.url})}),Object(k.jsxs)("div",{className:Ie.a.list,children:[Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{children:"Username - "}),t.username]}),Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{children:"Followers - "}),t.followers]}),Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{children:"Followings - "}),t.followings]})]}),Object(k.jsx)("div",{className:Ie.a.orgs,children:0!=a.length?Object(k.jsx)(k.Fragment,{children:a.map((function(e){return Object(k.jsx)("img",{src:e.avatar_url,alt:"orgs pic"},e.avatar_url)}))}):Object(k.jsx)("h1",{children:"There are no Organisation"})})]}),Object(k.jsxs)("div",{className:Ie.a.rightside,children:[Object(k.jsx)("div",{className:Ie.a.repos,children:"Repos"}),0!=r.length?Object(k.jsx)(k.Fragment,{children:r.map((function(e){return Object(k.jsx)("div",{children:Object(k.jsx)("a",{href:e.html_url,children:e.name})},e.id)}))}):Object(k.jsx)(k.Fragment,{})]})]})]})},Re=r(34),Ze=r.n(Re),qe=document.querySelector("#modal");var Le=function(e){var t=e.children,r=Object(n.useRef)(null);return r.current||(r.current=document.createElement("div")),Object(n.useEffect)((function(){return qe.appendChild(r.current),function(){qe.removeChild(r.current)}}),[]),Object(c.createPortal)(Object(k.jsx)("div",{children:t}),r.current)},Ye=r(35),Me=r.n(Ye);var Be=function(e){var t=e.property,r=e.setShowModal,n=Ae().setFavorites;return Object(k.jsxs)("div",{className:Me.a.container,children:[Object(k.jsxs)("h1",{children:["You really want to delete ",t.username,"?"]}),Object(k.jsxs)("div",{className:Me.a.buttons,children:[Object(k.jsx)("button",{onClick:function(){n((function(e){return e.filter((function(e){return e.username!=t.username}))}))},children:"Yes"}),Object(k.jsx)("button",{onClick:function(){return r(!1)},children:"No"})]})]})};var We=function(e){var t=e.property,r=Object(n.useState)(!1),a=Object(o.a)(r,2),c=a[0],s=a[1];return Object(k.jsxs)("div",{className:Ze.a.container,children:[Object(k.jsx)("div",{className:Ze.a.image,children:Object(k.jsx)("img",{src:t.url,alt:"avatar"})}),Object(k.jsx)("h1",{style:{color:"white"},children:t.username}),Object(k.jsx)("div",{children:Object(k.jsx)("button",{onClick:function(){return s(!0)},children:"Delete"})}),c&&Object(k.jsx)(Le,{children:Object(k.jsx)(Be,{property:t,setShowModal:s})})]})},He=r(48),Ve=r.n(He);var Ge=function(){var e=Ae().favorites;return Object(n.useEffect)((function(){localStorage.setItem("path",Z)}),[]),Object(k.jsx)("div",{className:Ve.a.container,children:e?Object(k.jsx)(k.Fragment,{children:e.map((function(e){return Object(k.jsx)("div",{children:Object(k.jsx)(We,{property:e})},e.username)}))}):null})},Ke=r(27),Xe=r.n(Ke);var Je=[{path:"/",exact:!0,page:pe,guard:Ne},{path:R,exact:!1,page:Se,guard:Ne},{path:T,exact:!1,page:W,guard:Fe},{path:"/user/:id",exact:!1,page:Te,guard:Fe},{path:Z,exact:!1,page:Ge,guard:Fe},{path:q,exact:!1,page:function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)([]),s=Object(o.a)(c,2),i=s[0],u=s[1],l=Object(n.useState)(-1),j=Object(o.a)(l,2),d=j[0],h=j[1],b=Object(n.useState)(!1),p=Object(o.a)(b,2),O=p[0],f=p[1],m=Object(n.useState)(""),v=Object(o.a)(m,2),x=v[0],g=v[1];return Object(n.useEffect)((function(){-1!=d&&(f(!0),_(r).then((function(e){return u(e)})).catch((function(e){return g(e.message)})).finally((function(){return f(!1)})))}),[d]),Object(n.useEffect)((function(){localStorage.setItem("path",q)}),[]),Object(k.jsxs)("div",{className:Xe.a.container,children:[x&&Object(k.jsx)("h1",{children:x}),O?Object(k.jsx)("div",{className:Xe.a.wrapper,children:Object(k.jsx)(B.a,{color:"green",size:50})}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("input",{type:"text",placeholder:"search user",value:r,onChange:function(e){return a(e.target.value)}}),Object(k.jsx)("button",{onClick:function(){return h(d+1)},children:"search"}),0!=i.length?Object(k.jsx)(z,{className:Xe.a.User,property:i}):null]})]})},guard:Fe}];var Qe=function(){return Object(k.jsxs)(_e.d,{children:[Je.map((function(e){var t=e.page,r=e.guard;return Object(k.jsx)(_e.b,{path:e.path,exact:e.exact,render:function(e){return Object(k.jsx)(r,{children:Object(k.jsx)(t,Object(i.a)({},e))})}},e.path)})),Object(k.jsx)(_e.b,{children:Object(k.jsx)("h1",{children:"404"})})]})},$e=r(22),et=r.n($e);var tt=function(){var e=ue().logout;return Object(k.jsxs)("div",{className:et.a.container,children:[Object(k.jsx)("div",{className:et.a.image}),Object(k.jsxs)("div",{className:et.a.headers,children:[Object(k.jsx)(D.c,{activeStyle:{color:"red"},to:T,children:"Dashboard"}),Object(k.jsx)(D.c,{activeStyle:{color:"red"},to:q,children:"Search"}),Object(k.jsx)(D.c,{activeStyle:{color:"red"},to:Z,children:"Favourites"})]}),Object(k.jsx)("div",{className:et.a.logout,children:Object(k.jsx)("button",{onClick:e,children:"Log Out"})})]})};var rt=function(){var e=ue().isAuthenticated;return Object(k.jsx)(A,{children:Object(k.jsx)(Ee,{children:Object(k.jsxs)(D.a,{children:[e?Object(k.jsx)(tt,{}):null,Object(k.jsx)(Qe,{})]})})})};s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(oe,{children:Object(k.jsx)(rt,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.855f4916.chunk.js.map