(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),u=n.n(o),l=(n(9),n(3));n(11);function r(){var e=Object(a.useState)("-------"),t=Object(l.a)(e,2),n=t[0],o=t[1];return c.a.createElement("div",{className:"parent"},c.a.createElement("div",{className:"child"},c.a.createElement("p",null," Your Input Request To Server: "),c.a.createElement("input",{type:"text",id:"textbox"}),c.a.createElement("button",{onClick:function(){""!=document.getElementById("textbox").value&&fetch("/"+document.getElementById("textbox").value).then(function(e){return e.json()}).then(function(e){o(e.response)}).catch(function(e){console.log(e)})}},"Submit")),c.a.createElement("div",{className:"child"},c.a.createElement("p",null," Response From Server: "),c.a.createElement("button",{className:"but"}," ",n," ")))}var i=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,14)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,u=t.getTTFB;n(e),a(e),c(e),o(e),u(e)})};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(r,null)),document.getElementById("root")),i()},4:function(e,t,n){e.exports=n(13)},9:function(e,t,n){}},[[4,3,2]]]);
//# sourceMappingURL=main.55b95dbb.chunk.js.map