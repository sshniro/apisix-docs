(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),i=(n(0),n(179)),l={},c={id:"plugins/en/key-auth",title:"key-auth",description:"\x3c!--",source:"@site/docs/plugins/en/key-auth.md",permalink:"/docs/plugins/en/key-auth",editUrl:"https://github.com/apache/incubator-apisix/edit/master/website/docs/plugins/en/key-auth.md",sidebar:"docs",previous:{title:"jwt-auth",permalink:"/docs/plugins/en/jwt-auth"},next:{title:"consumer-restriction",permalink:"/docs/plugins/en/consumer-restriction"}},o=[{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={rightToc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"name"},"Name"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"key-auth")," is an authentication plugin, it should work with ",Object(i.b)("inlineCode",{parentName:"p"},"consumer")," together."),Object(i.b)("p",null,"Add Key Authentication (also sometimes referred to as an API key) to a Service or a Route. Consumers then add their key either in a querystring parameter or a header to authenticate their requests."),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Requirement"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"key"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"required"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"different consumer objects should use different values, it should be unique.")))),Object(i.b)("h2",{id:"how-to-enable"},"How To Enable"),Object(i.b)("p",null,"Two steps are required:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"creates a consumer object, and set the attributes of plugin ",Object(i.b)("inlineCode",{parentName:"li"},"key-auth"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-one"\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"You can open dashboard with a browser: ",Object(i.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),", to complete the above operation through the web interface, first add a route:\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"../images/plugin/key-auth-1.png",alt:null}))),Object(i.b)("p",null,"Then add key-auth plugin:\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"../images/plugin/key-auth-2.png",alt:null}))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"creates a route or service object, and enable plugin ",Object(i.b)("inlineCode",{parentName:"li"},"key-auth"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("h2",{id:"test-plugin"},"Test Plugin"),Object(i.b)("p",null,"Here is a correct test example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ curl http://127.0.0.2:9080/index.html -H 'apikey: auth-one' -i\nHTTP/1.1 200 OK\n...\n")),Object(i.b)("p",null,"If the request does not set ",Object(i.b)("inlineCode",{parentName:"p"},"apikey")," correctly, will get a ",Object(i.b)("inlineCode",{parentName:"p"},"401")," response."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'$ curl http://127.0.0.2:9080/index.html -i\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Missing API key found in request"}\n\n$ curl http://127.0.0.2:9080/index.html -H \'apikey: abcabcabc\' -i\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Invalid API key in request"}\n')),Object(i.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(i.b)("p",null,"When you want to disable the ",Object(i.b)("inlineCode",{parentName:"p"},"key-auth")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'$ curl http://127.0.0.1:2379/v2/keys/apisix/routes/1 -X PUT -d value=\'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"key-auth")," plugin has been disabled now. It works for other plugins."))}b.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return n?r.a.createElement(m,c(c({ref:t},u),{},{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);