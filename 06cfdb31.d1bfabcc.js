(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{134:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(9),i=(t(0),t(179)),c={},l={id:"plugins/en/consumer-restriction",title:"consumer-restriction",description:"\x3c!--",source:"@site/docs/plugins/en/consumer-restriction.md",permalink:"/docs/plugins/en/consumer-restriction",editUrl:"https://github.com/apache/incubator-apisix/edit/master/website/docs/plugins/en/consumer-restriction.md",sidebar:"docs",previous:{title:"key-auth",permalink:"/docs/plugins/en/key-auth"},next:{title:"cors",permalink:"/docs/plugins/en/cors"}},o=[{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={rightToc:o};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"name"},"Name"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"consumer-restriction")," can restrict access to a Service or a Route by either\nwhitelisting or blacklisting consumers. Support single or multiple consumers."),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Requirement"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"whitelist"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"optional"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"List of consumers to whitelist")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"blacklist"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"optional"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"List of consumers to blacklist")))),Object(i.b)("p",null,"One of ",Object(i.b)("inlineCode",{parentName:"p"},"whitelist")," or ",Object(i.b)("inlineCode",{parentName:"p"},"blacklist")," must be specified, and they can not work\ntogether."),Object(i.b)("h2",{id:"how-to-enable"},"How To Enable"),Object(i.b)("p",null,"Creates a route or service object, and enable plugin ",Object(i.b)("inlineCode",{parentName:"p"},"consumer-restriction"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'curl http://127.0.0.1:9080/apisix/admin/consumers/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "username": "jack1",\n    "plugins": {\n        "basic-auth": {\n            "username":"jack2019",\n            "password": "123456"\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/consumers/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "username": "jack2",\n    "plugins": {\n        "basic-auth": {\n            "username":"jack2020",\n            "password": "123456"\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {},\n        "consumer-restriction": {\n            "whitelist": [\n                "jack1"\n            ]\n        }\n    }\n}\'\n')),Object(i.b)("h2",{id:"test-plugin"},"Test Plugin"),Object(i.b)("p",null,"Requests from jack1:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ curl -u jack2019:123456 http://127.0.0.1:9080/index.html\nHTTP/1.1 200 OK\n...\n")),Object(i.b)("p",null,"Requests from jack2:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ curl -u jack2020:123456 http://127.0.0.1:9080/index.html -i\nHTTP/1.1 403 Forbidden\n...\n{"message":"You are not allowed"}\n')),Object(i.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(i.b)("p",null,"When you want to disable the ",Object(i.b)("inlineCode",{parentName:"p"},"consumer-restriction")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {}\n    }\n}\'\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"consumer-restriction")," plugin has been disabled now. It works for other plugins."))}s.isMDXComponent=!0},179:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return t?a.a.createElement(m,l(l({ref:n},u),{},{components:t})):a.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);