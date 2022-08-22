"use strict";(self.webpackChunkbluesky_documentation=self.webpackChunkbluesky_documentation||[]).push([[436],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"convars",title:"Convars",sidebar_label:"Convars",tags:["Convars","Setup"]},s=void 0,i={unversionedId:"getting-started/convars",id:"getting-started/convars",title:"Convars",description:"Convars can be very powerful for defining configuration variables on the server. A convar is basically a configuration variable that you can set and get from any resource. You don't have to use a resource to get or set these values, you can also use commands in the (server) console or through a RCON client.",source:"@site/docs/getting-started/convars.md",sourceDirName:"getting-started",slug:"/getting-started/convars",permalink:"/bluesky-documentation/docs/getting-started/convars",draft:!1,editUrl:"https://github.com/GitScorz/bluesky/edit/documentation/docs/getting-started/convars.md",tags:[{label:"Convars",permalink:"/bluesky-documentation/docs/tags/convars"},{label:"Setup",permalink:"/bluesky-documentation/docs/tags/setup"}],version:"current",frontMatter:{id:"convars",title:"Convars",sidebar_label:"Convars",tags:["Convars","Setup"]},sidebar:"mySidebar",previous:{title:"Installation",permalink:"/bluesky-documentation/docs/getting-started/installation"},next:{title:"Resource List",permalink:"/bluesky-documentation/docs/getting-started/resources"}},l={},c=[{value:"Base",id:"base",level:2},{value:"Mongo DB",id:"mongo-db",level:2},{value:"MDT",id:"mdt",level:2},{value:"Discord",id:"discord",level:2},{value:"Voip",id:"voip",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Convars can be very powerful for defining configuration variables on the server. A convar is basically a configuration variable that you can set and get from any resource. You don't have to use a resource to get or set these values, you can also use commands in the (server) console or through a RCON client."),(0,a.kt)("p",null,"Make sure you set this in a ",(0,a.kt)("inlineCode",{parentName:"p"},".cfg")," file."),(0,a.kt)("h2",{id:"base"},"Base"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'set rrp_version "1.0.0"\nset log_level 0\nset api_address "http://localhost:1337/"\nset api_token "whatever you want"\nset motd "Look, it\'s Blue Sky Framework!"\n')),(0,a.kt)("h2",{id:"mongo-db"},"Mongo DB"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'set mongodb_auth_url "mongodb://localhost:27017"\nset mongodb_auth_database "your_auth_database"\nset mongodb_game_url "mongodb://localhost:27017"\nset mongodb_game_database "your_game_database"\n')),(0,a.kt)("h2",{id:"mdt"},"MDT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'set mdt_api_address "http://localhost:1337/"\n')),(0,a.kt)("h2",{id:"discord"},"Discord"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'set discord_log_webhook "your_discord_webhook"\nset discord_bot_token "your_discord_bot_token"\nset discord_pwnzor_webhook "your_discord_webhook_anticheat"\n')),(0,a.kt)("h2",{id:"voip"},"Voip"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'setr voice_useNativeAudio "true"\nsetr voice_use3dAudio "true"\nsetr voice_enableRadioAnim 1\nsetr voice_useSendingRangeOnly true\n')),(0,a.kt)("p",null,"You can check more convars for ",(0,a.kt)("strong",{parentName:"p"},"Voip")," at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvarianKnight/pma-voice"},(0,a.kt)("strong",{parentName:"a"},"pma-voice"))," github repository."),(0,a.kt)("p",null,"Once that convars are done you need to have ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},(0,a.kt)("strong",{parentName:"a"},"MongoDB"))," installed and the databases created, I'm pretty sure you can start the server normally after that :D"))}d.isMDXComponent=!0}}]);