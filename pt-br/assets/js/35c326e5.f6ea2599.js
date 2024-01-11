"use strict";(self.webpackChunkcafeteria_dev=self.webpackChunkcafeteria_dev||[]).push([[741],{513:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var o=a(5893),i=a(1151);const t={title:"Configura\xe7\xe3o",description:"Como mudar propriedades de encantamentos e suas incompatibilidades entre si",sidebar_position:3},s=void 0,r={id:"incantationem/configuration",title:"Configura\xe7\xe3o",description:"Como mudar propriedades de encantamentos e suas incompatibilidades entre si",source:"@site/i18n/pt-br/docusaurus-plugin-content-docs-wiki/current/incantationem/configuration.md",sourceDirName:"incantationem",slug:"/incantationem/configuration",permalink:"/pt-br/wiki/incantationem/configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Configura\xe7\xe3o",description:"Como mudar propriedades de encantamentos e suas incompatibilidades entre si",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Maldi\xe7\xf5es",permalink:"/pt-br/wiki/incantationem/content/curses"}},d={},c=[{value:"Terminologia",id:"terminologia",level:3},{value:"Modificando a incompatibilidade entre encantamentos",id:"modificando-a-incompatibilidade-entre-encantamentos",level:2},{value:"Exemplo de arquivo de tag",id:"exemplo-de-arquivo-de-tag",level:3}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Todo encantamento e maldi\xe7\xe3o adicionados pelo Incantationem podem ter suas maneiras de conseguir alterados atrav\xe9s do arquivo de configura\xe7\xe3o. Esse arquivo \xe9 localizado no caminho ",(0,o.jsx)(n.code,{children:".minecraft/config/incantationem.json"})," de seu jogo, mas \xe9 muito mais f\xe1cil edit\xe1-lo usando o  ",(0,o.jsx)(n.a,{href:"https://modrinth.com/mod/modmenu/",children:"ModMenu"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"terminologia",children:"Terminologia"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"N\xedvel m\xe1ximo"}),": O maior n\xedvel que este encantamento pode ser normalmente. Esta op\xe7\xe3o n\xe3o est\xe1 dispon\xedvel em encantamentos espec\xedficos nem em todas as maldi\xe7\xf5es."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Dispon\xedvel aleatoriamente"}),": Permite que este encantamento/maldi\xe7\xe3o seja obtido atrav\xe9s da Mesa de Encantamento e ba\xfas em estruturas simples/iniciais",(0,o.jsx)(n.code,{children:"*"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Dispon\xedvel em trocas de livros"}),": Permite que este encantamento/maldi\xe7\xe3o seja obtido atrav\xe9s de trocas com Alde\xf5es",(0,o.jsx)(n.code,{children:"*"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Dispon\xedvel como tesouro"}),": Permite que este encantamento seja obtido atrav\xe9s de ba\xfas em estruturas complexas/avan\xe7adas",(0,o.jsx)(n.code,{children:"*"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"*"})," Inclui livros e equipamento encantado."]}),"\n",(0,o.jsx)(n.h2,{id:"modificando-a-incompatibilidade-entre-encantamentos",children:"Modificando a incompatibilidade entre encantamentos"}),"\n",(0,o.jsxs)(n.p,{children:["Cada lista de incompatibilidade \xe9 gerenciada por ",(0,o.jsx)(n.a,{href:"https://pt.minecraft.wiki/w/Marca%C3%A7%C3%A3o",children:"tags"}),", que podem ser alteradas atrav\xe9s do ",(0,o.jsx)(n.a,{href:"https://kubejs.com/",children:"KubeJS"})," ou ",(0,o.jsx)(n.a,{href:"https://pt.minecraft.wiki/w/Pacote_de_dados",children:"Data Packs"}),". Todas as tags seguem o seguinte formato:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"incantationem:*_incompatible"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Onde * \xe9 o nome do encantamento internamente; todos os nomes internos podem ser checados com o autocomplete do comando ",(0,o.jsx)(n.code,{children:"/enchant @p incantationem:"})," (requer trapa\xe7as)."]}),"\n",(0,o.jsx)(n.h3,{id:"exemplo-de-arquivo-de-tag",children:"Exemplo de arquivo de tag"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="data/incantationem/tags/enchantment/charmed.json"',children:'{\r\n  "replace": false,\r\n  "values": [\r\n    "incantationem:tough_luck"\r\n  ]\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Este arquivo n\xe3o permite que o ",(0,o.jsx)(n.a,{href:"./content/enchantments#talism%C3%A3",children:"Talism\xe3"})," (",(0,o.jsx)(n.code,{children:"incantationem:charmed"}),") seja combinado com a ",(0,o.jsx)(n.a,{href:"./content/curses#maldi%C3%A7%C3%A3o-da-m%C3%A1-sorte",children:"Maldi\xe7\xe3o da M\xe1 Sorte"})," (",(0,o.jsx)(n.code,{children:"incantationem:tough_luck"}),")."]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>s});var o=a(7294);const i={},t=o.createContext(i);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);