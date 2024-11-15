"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[241],{1488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(5893),a=t(1151);const o={title:"Configuration",description:"How to modify enchantment properties and their incompatibilities between each other",sidebar_position:3},s=void 0,c={id:"incantationem/configuration",title:"Configuration",description:"How to modify enchantment properties and their incompatibilities between each other",source:"@site/wiki/incantationem/configuration.md",sourceDirName:"incantationem",slug:"/incantationem/configuration",permalink:"/wiki/incantationem/configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Configuration",description:"How to modify enchantment properties and their incompatibilities between each other",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Curses",permalink:"/wiki/incantationem/content/curses"}},r={},l=[{value:"Config options",id:"config-options",level:3},{value:"Modifying incompatibility between enchantments",id:"modifying-incompatibility-between-enchantments",level:2},{value:"Example tag file",id:"example-tag-file",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Every enchantment and curse added by Incantationem can have their ways of obtaining altered via the configuration file. This file is located at your game's ",(0,i.jsx)(n.code,{children:".minecraft/config/incantationem.json"}),". It can be edited in-game, although by different methods on each loader:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Neoforge"}),": Mods > select Incantationem > Config"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Fabric"}),": Install ",(0,i.jsx)(n.a,{href:"https://modrinth.com/mod/modmenu/",children:"ModMenu"})," then click Mods > select Incantationem > click the sliders at the top-right corner."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"config-options",children:"Config options"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Is Luck Based"}),": Whether this enchantment's effects should be triggered through luck or every time."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Success Rate"}),": If luck based, how often in percentage this enchantment can be triggered"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Show apply message"}),": Whether or not a message should be displayed when luck-based enchantments are triggered; note that if you're connected to a server where this is disabled, your own configuration will be ignored."]}),"\n",(0,i.jsx)(n.h2,{id:"modifying-incompatibility-between-enchantments",children:"Modifying incompatibility between enchantments"}),"\n",(0,i.jsxs)(n.p,{children:["Each enchantment and curse's incompatiblity list is managed through ",(0,i.jsx)(n.a,{href:"https://minecraft.wiki/w/Tag",children:"tags"}),", which can be altered through ",(0,i.jsx)(n.a,{href:"https://kubejs.com/",children:"KubeJS"})," and ",(0,i.jsx)(n.a,{href:"https://minecraft.wiki/w/Data_pack",children:"Data Packs"}),". All tags have the following format:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"incantationem:exclusive_set/<id>"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["All enchantments' ids can be checked with the command ",(0,i.jsx)(n.code,{children:"/enchant @p incantationem:"}),"'s autocomplete (requires cheats)."]}),"\n",(0,i.jsx)(n.h3,{id:"example-tag-file",children:"Example tag file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="data/incantationem/tags/enchantment/exclusive_set/charmed.json"',children:'{\r\n  "replace": false,\r\n  "values": [\r\n    "incantationem:tough_luck"\r\n  ]\r\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This file disallows ",(0,i.jsx)(n.a,{href:"./content/enchantments#charmed",children:"Charmed"})," (",(0,i.jsx)(n.code,{children:"incantationem:charmed"}),") from being combined with ",(0,i.jsx)(n.a,{href:"./content/curses#curse-of-tough-luck",children:"Tough Luck"})," (",(0,i.jsx)(n.code,{children:"incantationem:tough_luck"}),")."]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(7294);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);