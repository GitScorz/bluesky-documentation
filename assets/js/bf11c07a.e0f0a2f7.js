"use strict";(self.webpackChunkbluesky_documentation=self.webpackChunkbluesky_documentation||[]).push([[816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={id:"fetch",title:"Fetch Component",sidebar_label:"Fetch"},o=void 0,i={unversionedId:"documentation/core/fetch",id:"documentation/core/fetch",title:"Fetch Component",description:"Component Available",source:"@site/docs/documentation/core/fetch.md",sourceDirName:"documentation/core",slug:"/documentation/core/fetch",permalink:"/bluesky-documentation/docs/documentation/core/fetch",draft:!1,editUrl:"https://github.com/GitScorz/bluesky/edit/documentation/docs/documentation/core/fetch.md",tags:[],version:"current",frontMatter:{id:"fetch",title:"Fetch Component",sidebar_label:"Fetch"},sidebar:"mySidebar",previous:{title:"Player",permalink:"/bluesky-documentation/docs/documentation/core/player"},next:{title:"Spawn",permalink:"/bluesky-documentation/docs/documentation/core/spawn"}},c={},s=[{value:"Required Attributes",id:"required-attributes",level:2},{value:"<strong>Server</strong>",id:"server",level:3},{value:"<strong>Client</strong>",id:"client",level:3},{value:"Methods",id:"methods",level:2},{value:"<strong>Server</strong>",id:"server-1",level:3},{value:"<code>Source</code>",id:"source",level:4},{value:"<code>Database</code>",id:"database",level:4},{value:"<code>PlayerData</code>",id:"playerdata",level:4},{value:"<code>All</code>",id:"all",level:4},{value:"<strong>Client</strong>",id:"client-1",level:3},{value:"Events",id:"events",level:2},{value:"<strong>Server</strong>",id:"server-2",level:3},{value:"<strong>Client</strong>",id:"client-2",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{style:{width:"fit-content",margin:"auto",textAlign:"center"}},(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",{colspan:"2"},"Component Available")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Server"),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Client"),(0,l.kt)("td",null,"No")))),(0,l.kt)("p",null,"This component is how you retrieve player data created from the ",(0,l.kt)("a",{parentName:"p",href:"/bluesky-documentation/docs/documentation/core/player"},"Player Component"),"."),(0,l.kt)("h2",{id:"required-attributes"},"Required Attributes"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"server"},(0,l.kt)("strong",{parentName:"h3"},"Server")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Source: function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PlayerData: function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"All: function"))),(0,l.kt)("h3",{id:"client"},(0,l.kt)("strong",{parentName:"h3"},"Client")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"None"))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"server-1"},(0,l.kt)("strong",{parentName:"h3"},"Server")),(0,l.kt)("h4",{id:"source"},(0,l.kt)("inlineCode",{parentName:"h4"},"Source")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"source: int"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"player: table"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Returns the data stored under the provided source in the Players table, if none exist returns nil."))),(0,l.kt)("h4",{id:"database"},(0,l.kt)("inlineCode",{parentName:"h4"},"Database")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"key: string, value: any"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"player: table"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Will search the users collection trying to find an entry that matches the query, if it finds a match it will retrieve that players data from the database & the website."))),(0,l.kt)("h4",{id:"playerdata"},(0,l.kt)("inlineCode",{parentName:"h4"},"PlayerData")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"key: string, value: any"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"player: table"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Search Players list for a player with the matching data, if none exist returns nil."))),(0,l.kt)("h4",{id:"all"},(0,l.kt)("inlineCode",{parentName:"h4"},"All")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"None"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Return"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},(0,l.kt)("inlineCode",{parentName:"li"},"players: table"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": ",(0,l.kt)("span",{style:{color:"#cecece"}},"Returns the complete Players list."))),(0,l.kt)("h3",{id:"client-1"},(0,l.kt)("strong",{parentName:"h3"},"Client")),(0,l.kt)("p",null,"This component has no client methods."),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"server-2"},(0,l.kt)("strong",{parentName:"h3"},"Server")),(0,l.kt)("p",null,"No server events are fired from this component."),(0,l.kt)("h3",{id:"client-2"},(0,l.kt)("strong",{parentName:"h3"},"Client")),(0,l.kt)("p",null,"No client events are fired from this component."))}p.isMDXComponent=!0}}]);