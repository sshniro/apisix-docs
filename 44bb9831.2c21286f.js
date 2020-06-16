(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{152:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(9),i=(r(0),r(179)),o={},c={id:"plugins/en/proxy-mirror",title:"proxy-mirror",description:"\x3c!--",source:"@site/docs/plugins/en/proxy-mirror.md",permalink:"/apisix-docs/docs/plugins/en/proxy-mirror",editUrl:"https://github.com/apache/incubator-apisix/edit/master/website/docs/plugins/en/proxy-mirror.md",sidebar:"docs",previous:{title:"proxy-cache",permalink:"/apisix-docs/docs/plugins/en/proxy-cache"},next:{title:"redirect",permalink:"/apisix-docs/docs/plugins/en/redirect"}},l=[{value:"Attributes",id:"attributes",children:[{value:"Examples",id:"examples",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"proxy-mirror"},"proxy-mirror"),Object(i.b)("p",null,"The proxy-mirror plugin, which provides the ability to mirror client requests."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note"),":  The response returned by the mirror request is ignored."),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Requirement"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"host"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify a mirror service address, e.g. ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://127.0.0.1:9797"}),"http://127.0.0.1:9797")," (address needs to contain schema: http or https, not URI part)")))),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("h4",{id:"enable-the-plugin"},"Enable the plugin"),Object(i.b)("p",null,"1:  enable the proxy-mirror plugin for a specific route :"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "proxy-mirror": {\n           "host": "http://127.0.0.1:9797"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1999": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),Object(i.b)("p",null,"Test plugin\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 12\nConnection: keep-alive\nServer: APISIX web server\nDate: Wed, 18 Mar 2020 13:01:11 GMT\nLast-Modified: Thu, 20 Feb 2020 14:21:41 GMT\n\nhello world\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Since the specified mirror address is 127.0.0.1:9797, so to verify whether this plugin is in effect, we need to confirm on the service with port 9797.\nFor example, we can start a simple server:  python -m SimpleHTTPServer 9797")),Object(i.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(i.b)("p",null,"Remove the corresponding JSON in the plugin configuration to disable the plugin immediately without restarting the service:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1999": 1\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"The plugin has been disabled now."))}b.isMDXComponent=!0},179:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);