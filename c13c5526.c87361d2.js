(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(9),r=(n(0),n(179)),c={},s={id:"plugins/en/prometheus",title:"prometheus",description:"\x3c!--",source:"@site/docs/plugins/en/prometheus.md",permalink:"/apisix-docs/docs/plugins/en/prometheus",editUrl:"https://github.com/apache/incubator-apisix/edit/master/website/docs/plugins/en/prometheus.md",sidebar:"docs",previous:{title:"redirect",permalink:"/apisix-docs/docs/plugins/en/redirect"},next:{title:"skywalking",permalink:"/apisix-docs/docs/plugins/en/skywalking"}},o=[{value:"Attributes",id:"attributes",children:[]},{value:"How to enable it",id:"how-to-enable-it",children:[]},{value:"How to fetch the metric data",id:"how-to-fetch-the-metric-data",children:[{value:"Grafana dashboard",id:"grafana-dashboard",children:[]},{value:"Available metrics",id:"available-metrics",children:[]}]}],p={rightToc:o};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"prometheus"},"prometheus"),Object(r.b)("p",null,"This plugin exposes metrics in Prometheus Exposition format."),Object(r.b)("h2",{id:"attributes"},"Attributes"),Object(r.b)("p",null,"none."),Object(r.b)("h2",{id:"how-to-enable-it"},"How to enable it"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"prometheus")," plugin can be enable with empty table, because it doesn't have\nany options yet."),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "prometheus":{}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),Object(r.b)("p",null,"You can open dashboard with a browser: ",Object(r.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),", to complete the above operation through the web interface, first add a route:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../images/plugin/prometheus-1.png",alt:null}))),Object(r.b)("p",null,"Then add prometheus plugin:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../images/plugin/prometheus-2.png",alt:null}))),Object(r.b)("h2",{id:"how-to-fetch-the-metric-data"},"How to fetch the metric data"),Object(r.b)("p",null,"We fetch the metric data from the specified url ",Object(r.b)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"curl -i http://127.0.0.1:9080/apisix/prometheus/metrics\n")),Object(r.b)("p",null,"Puts this uri address into prometheus, and it will automatically fetch\nthese metric data."),Object(r.b)("p",null,"For example like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"scrape_configs:\n  - job_name: 'apisix'\n    metrics_path: '/apisix/prometheus/metrics'\n    static_configs:\n    - targets: ['127.0.0.1:9080']\n")),Object(r.b)("p",null,"And we can check the status at prometheus console:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../doc/images/plugin/prometheus01.png",alt:null}))),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../doc/images/plugin/prometheus02.png",alt:null}))),Object(r.b)("h3",{id:"grafana-dashboard"},"Grafana dashboard"),Object(r.b)("p",null,"Metrics exported by the plugin can be graphed in Grafana using a drop in dashboard."),Object(r.b)("p",null,"You can goto ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://grafana.com/grafana/dashboards/11719"}),"Grafana meta")," for ",Object(r.b)("inlineCode",{parentName:"p"},"Grafana")," meta data."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../doc/images/plugin/grafana_1.png",alt:null}))),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../doc/images/plugin/grafana_2.png",alt:null}))),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../doc/images/plugin/grafana_3.png",alt:null}))),Object(r.b)("h3",{id:"available-metrics"},"Available metrics"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Status codes"),": HTTP status codes returned by upstream services. These are available per service and across all services."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Bandwidth"),": Total Bandwidth (egress/ingress) flowing through apisix. This metric is available per service and as a sum across all services."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"etcd reachability"),": A gauge type with a value of 0 or 1, representing if etcd can be reached by a apisix or not."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Connections"),": Various Nginx connection metrics like active, reading, writing, and number of accepted connections.")),Object(r.b)("p",null,"Here is the original metric data of apisix:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'$ curl http://127.0.0.2:9080/apisix/prometheus/metrics\n# HELP apisix_bandwidth Total bandwidth in bytes consumed per service in Apisix\n# TYPE apisix_bandwidth counter\napisix_bandwidth{type="egress",service="127.0.0.2"} 183\napisix_bandwidth{type="egress",service="bar.com"} 183\napisix_bandwidth{type="egress",service="foo.com"} 2379\napisix_bandwidth{type="ingress",service="127.0.0.2"} 83\napisix_bandwidth{type="ingress",service="bar.com"} 76\napisix_bandwidth{type="ingress",service="foo.com"} 988\n# HELP apisix_etcd_reachable Config server etcd reachable from Apisix, 0 is unreachable\n# TYPE apisix_etcd_reachable gauge\napisix_etcd_reachable 1\n# HELP apisix_http_status HTTP status codes per service in Apisix\n# TYPE apisix_http_status counter\napisix_http_status{code="200",service="127.0.0.2"} 1\napisix_http_status{code="200",service="bar.com"} 1\napisix_http_status{code="200",service="foo.com"} 13\n# HELP apisix_nginx_http_current_connections Number of HTTP connections\n# TYPE apisix_nginx_http_current_connections gauge\napisix_nginx_http_current_connections{state="accepted"} 11994\napisix_nginx_http_current_connections{state="active"} 2\napisix_nginx_http_current_connections{state="handled"} 11994\napisix_nginx_http_current_connections{state="reading"} 0\napisix_nginx_http_current_connections{state="total"} 1191780\napisix_nginx_http_current_connections{state="waiting"} 1\napisix_nginx_http_current_connections{state="writing"} 1\n# HELP apisix_nginx_metric_errors_total Number of nginx-lua-prometheus errors\n# TYPE apisix_nginx_metric_errors_total counter\napisix_nginx_metric_errors_total 0\n')))}l.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(m,s(s({ref:t},p),{},{components:n})):i.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<r;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);