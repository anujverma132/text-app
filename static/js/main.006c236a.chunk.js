(this["webpackJsonptext-utils"]=this["webpackJsonptext-utils"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:"Navbar"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"/",children:"Link"})}),Object(o.jsxs)("li",{className:"nav-item dropdown",children:[Object(o.jsx)("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Dropdown"}),Object(o.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",href:"/",children:"Action"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",href:"/",children:"Another action"})}),Object(o.jsx)("li",{children:Object(o.jsx)("hr",{className:"dropdown-divider"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",href:"/",children:"Something else here"})})]})]}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link disabled",href:"/",tabIndex:"-1","aria-disabled":"true",children:"Disabled"})})]}),Object(o.jsxs)("div",{class:"form-check form-switch ",children:[Object(o.jsx)("input",{class:"form-check-input",onClick:e.togglemode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{class:"form-check-label text-".concat("light"===e.mode?"dark":"light"),for:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function d(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container ",children:[Object(o.jsx)("h1",{style:{color:"dark"===e.mode?"white":"#042743"},children:"Hello React"}),Object(o.jsx)("p",{style:{color:"dark"===e.mode?"white":"#042743"},children:"This is a Text Util App"}),Object(o.jsx)("textarea",{style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},rows:"8",cols:"150",value:n,onChange:function(e){r(e.target.value)}}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(t){t.preventDefault();var a=n.toUpperCase();r(a),e.showalert("Converted to Uppercase","success")},className:"btn btn-primary",children:"Convert To Upper case"})})]}),Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h1",{style:{color:"dark"===e.mode?"white":"#042743"},children:"Text Analysis is here!"}),Object(o.jsxs)("p",{style:{color:"dark"===e.mode?"white":"#042743"},children:[n.split(" ").length," word and ",n.length," characters."]}),Object(o.jsx)("h2",{style:{color:"dark"===e.mode?"white":"#042743"},children:" Preview "}),Object(o.jsx)("p",{style:{color:"dark"===e.mode?"white":"#042743"},children:n})]})]})}function b(e){return e.alert&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," ",e.alert.msg]})})}var j=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),j=s[0],h=s[1],m=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{mode:a,togglemode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",m("Dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",m("Light mode has been enabled","success"))}}),Object(o.jsx)(b,{alert:j}),Object(o.jsx)(d,{mode:a,showalert:m})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.006c236a.chunk.js.map