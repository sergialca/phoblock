(this["webpackJsonppho-block"]=this["webpackJsonppho-block"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/pho_logo.685cb461.png"},19:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(15),r=a.n(o),c=a(9),i=a(1),s=a(18),u=a(6),m=Object(n.createContext)("u"),p=a(16),d=a.n(p),E=(a(24),function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(n.useContext)(m).user;return l.a.createElement("div",{className:"navbar"},l.a.createElement("button",{className:"activator",onClick:function(){o((function(){return!a}))}},l.a.createElement(s.a,null)),l.a.createElement(u.b,{to:"/home"},l.a.createElement("img",{className:"logo",src:d.a,alt:"pho block logo"})),r.logged?l.a.createElement("ul",{className:a?"links show-nav":"links"},l.a.createElement(u.b,{className:"ali",to:"/about"},"About"),l.a.createElement(u.b,{className:"ali dist",to:"/profile"},"Profile")):l.a.createElement("ul",{className:a?"links show-nav":"links"},l.a.createElement(u.b,{className:"ali dist",to:"/about"},"About"),l.a.createElement(u.b,{className:"ali dist",to:"/login"},"Log in"),l.a.createElement(u.b,{className:"ali",to:"/signup"},"Sign Up")))}),h=function(){return l.a.createElement("div",null,l.a.createElement(E,null),"Login Page")},g=function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",null,l.a.createElement("div",null),l.a.createElement("div",null)))},b=function(){return l.a.createElement("div",null,l.a.createElement(E,null),"Profile")},v=(a(30),function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"text-wrapper"},l.a.createElement("p",{className:"title"},"PhoBlock"),l.a.createElement("p",{className:"sub-title"},"A community driven photo sharing app. Your pictures. Your platform.")))}),f=(a(31),function(e){var t=e.url,a=e.orientation,n=e.alt;return l.a.createElement("div",{className:a},l.a.createElement("div",{className:"img-back",style:{backgroundImage:"url(".concat(t,")")},alt:n}),l.a.createElement("div",{className:"btn-wrapper"},l.a.createElement("button",{className:"btn-download"},"Download")))}),k=(a(32),function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(v,null),l.a.createElement("section",{className:"img-wrapper"},l.a.createElement(f,{url:"https://images.wallpaperscraft.com/image/sunset_sky_clouds_121865_1080x1920.jpg",orientation:"portrait",alt:"sunset"}),l.a.createElement(f,{url:"https://www.redskycreative.co.uk/wp-content/uploads/2018/07/Red-Sky-Creative-Design-Print-Faringdon.jpg",orientation:"horizontal",alt:"red sky"}),l.a.createElement(f,{url:"https://cdn.techjuice.pk/wp-content/uploads/2017/09/shorthandmalaysiahowtobuy-mr.jpg",orientation:"horizontal",alt:"Malysia"}),l.a.createElement(f,{url:"https://hostelgeeks.com/wp-content/uploads/2018/08/best-hostels-seoul-korea.jpg",orientation:"horizontal",alt:"Seoul"}),l.a.createElement(f,{url:"http://unaideaunviaje.com/wp-content/uploads/2016/09/barcelona-40-cosas-ver-hacer-recomendadas-locales-unaideaunviaje-04.jpg",orientation:"horizontal",alt:"Barcelona"})))}),w=function(){return l.a.createElement("div",null,l.a.createElement(E,null),"About")};a(33);var N=function(){var e=Object(n.useState)(function(){var e=localStorage.getItem("phouser");return e&&e.token?{logged:!0,name:e.name,mail:e.email,token:e.sessionToken}:{logged:!1}}()),t=Object(c.a)(e,2),a=t[0],o=t[1];return l.a.createElement(m.Provider,{value:{user:a,setUser:o}},l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/login",component:h}),l.a.createElement(i.b,{path:"/signup",component:g}),l.a.createElement(i.b,{path:"/",exact:!0,component:k}),l.a.createElement(i.b,{path:"/about",component:w}),l.a.createElement(i.b,{path:"/login",component:b}),l.a.createElement(i.a,{to:"/"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(u.a,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6377650e.chunk.js.map