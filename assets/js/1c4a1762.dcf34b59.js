"use strict";(self.webpackChunkbluesky_documentation=self.webpackChunkbluesky_documentation||[]).push([[387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={id:"database",title:"Database Component",sidebar_label:"Database"},o=void 0,i={unversionedId:"documentation/core/database",id:"documentation/core/database",title:"Database Component",description:"Component Available",source:"@site/docs/documentation/core/database.md",sourceDirName:"documentation/core",slug:"/documentation/core/database",permalink:"/bluesky-documentation/docs/documentation/core/database",draft:!1,editUrl:"https://github.com/GitScorz/bluesky/edit/documentation/docs/documentation/core/database.md",tags:[],version:"current",frontMatter:{id:"database",title:"Database Component",sidebar_label:"Database"},sidebar:"mySidebar",previous:{title:"Proxy",permalink:"/bluesky-documentation/docs/documentation/core/proxy"},next:{title:"Callbacks",permalink:"/bluesky-documentation/docs/documentation/core/callbacks"}},c={},s=[{value:"Required Attributes",id:"required-attributes",level:2},{value:"<strong>Server</strong>:",id:"server",level:3},{value:"Methods",id:"methods",level:2},{value:"<strong>Server</strong>",id:"server-1",level:3},{value:"<code>isConnected</code>",id:"isconnected",level:4},{value:"<code>insert</code>",id:"insert",level:4},{value:"<code>insertOne</code>",id:"insertone",level:4},{value:"<code>find</code>",id:"find",level:4},{value:"<code>findOne</code>",id:"findone",level:4},{value:"<code>update</code>",id:"update",level:4},{value:"<code>updateOne</code>",id:"updateone",level:4},{value:"<code>delete</code>",id:"delete",level:4},{value:"<code>deleteOne</code>",id:"deleteone",level:4},{value:"<code>count</code>",id:"count",level:4},{value:"<strong>Client</strong>",id:"client",level:3},{value:"Events",id:"events",level:2},{value:"<strong>Server</strong>",id:"server-2",level:3},{value:"<code>Database:Server:Ready</code>",id:"databaseserverready",level:4},{value:"<strong>Client</strong>",id:"client-1",level:3},{value:"Query Table",id:"query-table",level:2},{value:"Insert",id:"insert-1",level:4},{value:"Find",id:"find-1",level:4},{value:"Update",id:"update-1",level:4},{value:"Delete",id:"delete-1",level:4},{value:"Count",id:"count-1",level:4},{value:"Other Helpful Tips",id:"other-helpful-tips",level:2},{value:"Ordering",id:"ordering",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{style:{width:"fit-content",margin:"auto",textAlign:"center"}},(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",{colspan:"2"},"Component Available")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Server"),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Client"),(0,l.kt)("td",null,"No")))),(0,l.kt)("p",null,"This is the default Database wrapper that we use, this is a modified version of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dcr30/fivem-mongodb"},"fivem-mongodb"),"."),(0,l.kt)("h2",{id:"required-attributes"},"Required Attributes"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"server"},(0,l.kt)("strong",{parentName:"h3"},"Server"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"isConnected: function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insert: function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insertOne: function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"find: function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"findOne: function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"update: function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"updateOne: function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delete: function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deleteOne: function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"count: function"))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"server-1"},(0,l.kt)("strong",{parentName:"h3"},"Server")),(0,l.kt)("h4",{id:"isconnected"},(0,l.kt)("inlineCode",{parentName:"h4"},"isConnected")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"None"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Return wether or not there is an active connection to the database"))),(0,l.kt)("h4",{id:"insert"},(0,l.kt)("inlineCode",{parentName:"h4"},"insert")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"params: table, callback: function"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"table"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Inserts a list of items into the specified collection."))),(0,l.kt)("h4",{id:"insertone"},(0,l.kt)("inlineCode",{parentName:"h4"},"insertOne")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"params: table, callback: function"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"table"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Inserts a single item into the specified collection."))),(0,l.kt)("h4",{id:"find"},(0,l.kt)("inlineCode",{parentName:"h4"},"find")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"params: table, callback: function"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"table"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Returns all documents that match the query."))),(0,l.kt)("h4",{id:"findone"},(0,l.kt)("inlineCode",{parentName:"h4"},"findOne")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"params: table, callback: function"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"table"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Returns the first document that match the query."))),(0,l.kt)("h4",{id:"update"},(0,l.kt)("inlineCode",{parentName:"h4"},"update")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"params: table, callback: function, isUpdateOne: boolean"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"table"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Updates all documents that match the filter if ",(0,l.kt)("inlineCode",{parentName:"li"},"isUpdateOne")," is false, or updates the first document that matches the filter if ",(0,l.kt)("inlineCode",{parentName:"li"},"isUpdateOne")," true"))),(0,l.kt)("h4",{id:"updateone"},(0,l.kt)("inlineCode",{parentName:"h4"},"updateOne")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"params: table, callback: function"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"table"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Updates the first document that matches the filter."))),(0,l.kt)("h4",{id:"delete"},(0,l.kt)("inlineCode",{parentName:"h4"},"delete")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"params: table, callback: function"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"table"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Deletes all documents that match the filter."))),(0,l.kt)("h4",{id:"deleteone"},(0,l.kt)("inlineCode",{parentName:"h4"},"deleteOne")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"params: table, callback: function"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"table"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Deletes the first document that match the filter."))),(0,l.kt)("h4",{id:"count"},(0,l.kt)("inlineCode",{parentName:"h4"},"count")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"params: table, callback: function"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"int"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Counts the number of documents that match the filter."))),(0,l.kt)("h3",{id:"client"},(0,l.kt)("strong",{parentName:"h3"},"Client")),(0,l.kt)("p",null,"This component has no client methods."),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"server-2"},(0,l.kt)("strong",{parentName:"h3"},"Server")),(0,l.kt)("h4",{id:"databaseserverready"},(0,l.kt)("inlineCode",{parentName:"h4"},"Database:Server:Ready")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Sent Values"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"None"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Indicates both authentication & game databases are connected."))),(0,l.kt)("h3",{id:"client-1"},(0,l.kt)("strong",{parentName:"h3"},"Client")),(0,l.kt)("p",null,"No client events are fired from this component."),(0,l.kt)("h2",{id:"query-table"},"Query Table"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"All of the methods in this component are expecting a table that has all of the query data for MongoDB. Below are some examples of how certain operations are done."),(0,l.kt)("h4",{id:"insert-1"},"Insert"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Lua"},"exports['bs_base']:FetchComponent('Database'):insertOne({ \n    collection = 'somecollection',\n    document = {\n        SomeKey = 'SomeData',\n        int = 0,\n        bool = true,\n        table = {\n            something = 'something'\n        },\n    }\n}, function (success, result, insertedIds)\n    if not success then return end\n\n    -- Do stuff here\nend)\n")),(0,l.kt)("h4",{id:"find-1"},"Find"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Lua"},"exports['bs_base']:FetchComponent('Database'):findOne({\n    collection = 'somecollection',\n    query = {\n        SomeKey = 'SomeData'\n    }\n}, function (success, results)\n    if not success then return end\n\n    -- Do stuff here\nend)\n")),(0,l.kt)("h4",{id:"update-1"},"Update"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Lua"},"exports['bs_base']:FetchComponent('Database'):updateOne({\n    collection = 'somecollection',\n    query = {\n        SomeKey = 'SomeData',\n    }, \n    update = { \n        [\"$set\"] = { \n            SomeKey = 'SomeOtherData'\n        }\n    }\n})\n")),(0,l.kt)("h4",{id:"delete-1"},"Delete"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Lua"},"exports['bs_base']:FetchComponent('Database'):deleteOne({\n    collection = 'somecollection',\n    query = {\n        SomeKey = 'SomeOtherData'\n    }\n}, function (success, results)\n    if not success then return end\n\n    -- Do stuff here\nend)\n")),(0,l.kt)("h4",{id:"count-1"},"Count"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Lua"},"exports['bs_base']:FetchComponent('Database'):count({\n    collection = 'somecollection',\n    query = {\n        SomeKey = 'SomeData'\n    }\n}, function (success, count)\n    if not success then return end\n\n    -- Do stuff here\nend)\n")),(0,l.kt)("h2",{id:"other-helpful-tips"},"Other Helpful Tips"),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"ordering"},"Ordering"),(0,l.kt)("p",null,"You may want to order your results, achieving this is very simple and just requires passing an options table in the query. ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," is to order ascending, and ",(0,l.kt)("inlineCode",{parentName:"p"},"-1")," is order descending"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Lua"},"exports['bs_base']:FetchComponent('Database'):findOne({\n    collection = 'somecollection',\n    query = {\n        SomeKey = 'SomeData'\n    },\n    options = {\n        filter = {\n            SomeKey = -1\n        }\n    }\n}, function (success, results)\n    if not success then return end\n\n    -- Do stuff here\nend)\n")),(0,l.kt)("p",null,"Should you need to do anything else that isn't covered in this document, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/"},"MongoDB Documentation")))}p.isMDXComponent=!0}}]);