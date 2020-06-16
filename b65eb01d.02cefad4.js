(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),i=(n(0),n(179)),l={},c={id:"plugins/en/limit-req",title:"limit-req",description:"\x3c!--",source:"@site/docs/plugins/en/limit-req.md",permalink:"/docs/plugins/en/limit-req",editUrl:"https://github.com/apache/incubator-apisix/edit/master/website/docs/plugins/en/limit-req.md",sidebar:"docs",previous:{title:"limit-count",permalink:"/docs/plugins/en/limit-count"},next:{title:"http-logger",permalink:"/docs/plugins/en/http-logger"}},o=[{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],b={rightToc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"name"},"Name"),Object(i.b)("p",null,'limit request rate using the "leaky bucket" method.'),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Requirement"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rate"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"is the specified request rate (number per second) threshold. Requests exceeding this rate (and below ",Object(i.b)("inlineCode",{parentName:"td"},"burst"),") will get delayed to conform to the rate.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"burst"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"is the number of excessive requests per second allowed to be delayed. Requests exceeding this hard limit will get rejected immediately.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"key"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'is the user specified key to limit the rate, now accept those as key: "remote_addr"(client\'s IP), "server_addr"(server\'s IP), "X-Forwarded-For/X-Real-IP" in request header.')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rejected_code"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"optional"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The HTTP status code returned when the request exceeds the threshold is rejected. The default is 503.")))),Object(i.b)("h2",{id:"how-to-enable"},"How To Enable"),Object(i.b)("p",null,"Here's an example, enable the limit req plugin on the specified route:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-req": {\n            "rate": 1,\n            "burst": 2,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"You can open dashboard with a browser: ",Object(i.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),", to complete the above operation through the web interface, first add a route:"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"../images/plugin/limit-req-1.png",alt:"add route"}))),Object(i.b)("p",null,"Then add limit-req plugin:"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"../images/plugin/limit-req-2.png",alt:"add plugin"}))),Object(i.b)("h2",{id:"test-plugin"},"Test Plugin"),Object(i.b)("p",null,"The above configuration limits the request rate to 1 per second. If it is greater than 1 and less than 3, the delay will be added. If the rate exceeds 3, it will be rejected:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"curl -i http://127.0.0.1:9080/index.html\n")),Object(i.b)("p",null,"When you exceed, you will receive a response header with a 503 return code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),Object(i.b)("p",null,"This means that the limit req plugin is in effect."),Object(i.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(i.b)("p",null,"When you want to disable the limit req plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"The limit req plugin has been disabled now. It works for other plugins."))}u.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,m=d["".concat(l,".").concat(s)]||d[s]||p[s]||i;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);