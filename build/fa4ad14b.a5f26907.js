(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),l=(n(0),n(145)),o={},c={id:"plugins/en/tcp-logger",title:"tcp-logger",description:"\x3c!--",source:"@site/docs/plugins/en/tcp-logger.md",permalink:"/docs/plugins/en/tcp-logger",editUrl:"https://github.com/apache/incubator-apisix/edit/master/website/docs/plugins/en/tcp-logger.md",sidebar:"docs",previous:{title:"syslog",permalink:"/docs/plugins/en/syslog"},next:{title:"udp-logger",permalink:"/docs/plugins/en/udp-logger"}},b=[{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],i={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"name"},"Name"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"tcp-logger")," is a plugin which push Log data requests to TCP servers."),Object(l.b)("p",null,"This will provide the ability to send Log data requests as JSON objects to Monitoring tools and other TCP servers."),Object(l.b)("p",null,"This plugin provides the ability to push Log data as a batch to you're external TCP servers. In case if you did not recieve the log data don't worry give it some time it will automatically send the logs after the timer function expires in our Batch Processor."),Object(l.b)("p",null,"For more info on Batch-Processor in Apache APISIX please refer.\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"../batch-processor.md"}),"Batch-Processor")),Object(l.b)("h2",{id:"attributes"},"Attributes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Requirement"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"host"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"required"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"IP address or the Hostname of the TCP server.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"port"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"required"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Target upstream port.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"timeout"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Timeout for the upstream to send data.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tls"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Boolean value to control whether to perform SSL verification")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tls_options"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tls options")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A unique identifier to identity the batch processor")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"batch_max_size"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Max size of each batch, default is 1000")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"inactive_timeout"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"maximum age in seconds when the buffer will be flushed if inactive, default is 5s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buffer_duration"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Maximum age in seconds of the oldest entry in a batch before the batch must be processed, default is 5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"max_retry_count"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Maximum number of retries before removing from the processing pipe line; default is zero")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"retry_delay"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number of seconds the process execution should be delayed if the execution fails; default is 1")))),Object(l.b)("h2",{id:"how-to-enable"},"How To Enable"),Object(l.b)("p",null,"The following is an example on how to enable the tcp-logger for a specific route."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "tcp-logger": {\n                 "host": "127.0.0.1",\n                 "port": 5044,\n                 "tls": false,\n                 "batch_max_size": 1,\n                 "name": "tcp logger"\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),Object(l.b)("h2",{id:"test-plugin"},"Test Plugin"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"success:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),Object(l.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(l.b)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable the ",Object(l.b)("inlineCode",{parentName:"p"},"tcp-logger"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'$ curl http://127.0.0.1:2379/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d value=\'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}p.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,O=u["".concat(o,".").concat(d)]||u[d]||s[d]||l;return n?r.a.createElement(O,c(c({ref:t},i),{},{components:n})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);