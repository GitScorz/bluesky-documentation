"use strict";(self.webpackChunkbluesky_documentation=self.webpackChunkbluesky_documentation||[]).push([[403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={id:"notifications-component",title:"Notification Component",sidebar_label:"Notification"},a=void 0,l={unversionedId:"documentation/external/notifications/notifications-component",id:"documentation/external/notifications/notifications-component",title:"Notification Component",description:"Component Available",source:"@site/docs/documentation/external/notifications/notifications.md",sourceDirName:"documentation/external/notifications",slug:"/documentation/external/notifications/",permalink:"/bluesky-documentation/docs/documentation/external/notifications/",draft:!1,editUrl:"https://github.com/GitScorz/bluesky/edit/documentation/docs/documentation/external/notifications/notifications.md",tags:[],version:"current",frontMatter:{id:"notifications-component",title:"Notification Component",sidebar_label:"Notification"},sidebar:"mySidebar",previous:{title:"Fetch",permalink:"/bluesky-documentation/docs/documentation/external/character/extensions/character-fetch"},next:{title:"Component",permalink:"/bluesky-documentation/docs/documentation/external/queue/"}},c={},s=[{value:"Required Attributes",id:"required-attributes",level:2},{value:"<strong>Server</strong>",id:"server",level:3},{value:"<strong>Client</strong>",id:"client",level:3},{value:"Methods",id:"methods",level:2},{value:"<strong>Server</strong>",id:"server-1",level:3},{value:"<strong>Client</strong>",id:"client-1",level:3},{value:"<code>Clear</code>",id:"clear",level:4},{value:"<code>SendAlert</code>",id:"sendalert",level:4},{value:"<code>SendError</code>",id:"senderror",level:4},{value:"<code>Custom</code>",id:"custom",level:4},{value:"Events",id:"events",level:2},{value:"<strong>Server</strong>",id:"server-2",level:3},{value:"<strong>Client</strong>",id:"client-2",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{style:{width:"fit-content",margin:"auto",textAlign:"center"}},(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"},"Component Available")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Server"),(0,o.kt)("td",null,"No")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Client"),(0,o.kt)("td",null,"Yes")))),(0,o.kt)("p",null,"This component allows displaying toast messages to the client"),(0,o.kt)("h2",{id:"required-attributes"},"Required Attributes"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"server"},(0,o.kt)("strong",{parentName:"h3"},"Server")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"None"))),(0,o.kt)("h3",{id:"client"},(0,o.kt)("strong",{parentName:"h3"},"Client")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"None"))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"server-1"},(0,o.kt)("strong",{parentName:"h3"},"Server")),(0,o.kt)("p",null,"This component has no server methods."),(0,o.kt)("h3",{id:"client-1"},(0,o.kt)("strong",{parentName:"h3"},"Client")),(0,o.kt)("h4",{id:"clear"},(0,o.kt)("inlineCode",{parentName:"h4"},"Clear")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,o.kt)("span",{style:{color:"#cecece"}},(0,o.kt)("inlineCode",{parentName:"li"},"None"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Return"),": ",(0,o.kt)("span",{style:{color:"#cecece"}},(0,o.kt)("inlineCode",{parentName:"li"},"None"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": ",(0,o.kt)("span",{style:{color:"#cecece"}},"Clear all notifications"))),(0,o.kt)("h4",{id:"sendalert"},(0,o.kt)("inlineCode",{parentName:"h4"},"SendAlert")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,o.kt)("span",{style:{color:"#cecece"}},(0,o.kt)("inlineCode",{parentName:"li"},"message: string, duration?: number"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Return"),": ",(0,o.kt)("span",{style:{color:"#cecece"}},(0,o.kt)("inlineCode",{parentName:"li"},"None"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": ",(0,o.kt)("span",{style:{color:"#cecece"}},"Shows a information notification for the provided duration"))),(0,o.kt)("h4",{id:"senderror"},(0,o.kt)("inlineCode",{parentName:"h4"},"SendError")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,o.kt)("span",{style:{color:"#cecece"}},(0,o.kt)("inlineCode",{parentName:"li"},"message: string, duration?: number"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Return"),": ",(0,o.kt)("span",{style:{color:"#cecece"}},(0,o.kt)("inlineCode",{parentName:"li"},"None"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": ",(0,o.kt)("span",{style:{color:"#cecece"}},"Shows a error notification for the provided duration"))),(0,o.kt)("h4",{id:"custom"},(0,o.kt)("inlineCode",{parentName:"h4"},"Custom")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Parameters"),": ",(0,o.kt)("span",{style:{color:"#cecece"}},(0,o.kt)("inlineCode",{parentName:"li"},"message: string, duration?: number, style: table"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Return"),": ",(0,o.kt)("span",{style:{color:"#cecece"}},(0,o.kt)("inlineCode",{parentName:"li"},"None"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": ",(0,o.kt)("span",{style:{color:"#cecece"}},"Shows a notification with custom styling, provided table should be using the key as the CSS tag and the value as the CSS value."))),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"server-2"},(0,o.kt)("strong",{parentName:"h3"},"Server")),(0,o.kt)("p",null,"No server events are fired from this component."),(0,o.kt)("h3",{id:"client-2"},(0,o.kt)("strong",{parentName:"h3"},"Client")),(0,o.kt)("p",null,"No client events are fired from this component."))}p.isMDXComponent=!0}}]);