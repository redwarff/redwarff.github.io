import{S as w,i as D,s as M,k,a as b,q as O,I as N,l as p,h as c,c as A,m as v,r as q,n as f,C as d,b as y,A as E,M as S}from"../../../chunks/index-acf84982.js";function I(h,a,n){const s=h.slice();return s[1]=a[n],s}function K(h){let a,n,s,u=h[1].name+"",_;return{c(){a=k("li"),n=k("a"),s=k("i"),_=O(u),this.h()},l(i){a=p(i,"LI",{class:!0});var r=v(a);n=p(r,"A",{href:!0,target:!0});var o=v(n);s=p(o,"I",{class:!0}),v(s).forEach(c),_=q(o,u),o.forEach(c),r.forEach(c),this.h()},h(){f(s,"class","fa-solid fa-arrow-up-right-from-square svelte-m5axcb"),f(n,"href",h[1].href),f(n,"target","_blank"),f(a,"class","svelte-m5axcb")},m(i,r){y(i,a,r),d(a,n),d(n,s),d(n,_)},p:E,d(i){i&&c(a)}}}function C(h){let a,n,s,u,_,i,r,o=h[0],l=[];for(let e=0;e<o.length;e+=1)l[e]=K(I(h,o,e));return{c(){a=k("meta"),n=b(),s=k("div"),u=k("h1"),_=O("Odkazy"),i=b(),r=k("ul");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){const m=N('[data-svelte="svelte-y895g6"]',document.head);a=p(m,"META",{name:!0,content:!0}),m.forEach(c),n=A(e),s=p(e,"DIV",{class:!0});var t=v(s);u=p(t,"H1",{});var z=v(u);_=q(z,"Odkazy"),z.forEach(c),i=A(t),r=p(t,"UL",{class:!0});var x=v(r);for(let g=0;g<l.length;g+=1)l[g].l(x);x.forEach(c),t.forEach(c),this.h()},h(){document.title="Odkazy | Geozem",f(a,"name","description"),f(a,"content","Geod\xE9zie Zem\xE1nek - rodinn\xE1 geodetick\xE1 kancel\xE1\u0159. Odkazy na extern\xED str\xE1nky t\xFDkaj\xEDc\xED se na\u0161ich slu\u017Eeb, nahl\xED\u017Een\xED do katastru."),f(r,"class","svelte-m5axcb"),f(s,"class","container")},m(e,m){d(document.head,a),y(e,n,m),y(e,s,m),d(s,u),d(u,_),d(s,i),d(s,r);for(let t=0;t<l.length;t+=1)l[t].m(r,null)},p(e,[m]){if(m&1){o=e[0];let t;for(t=0;t<o.length;t+=1){const z=I(e,o,t);l[t]?l[t].p(z,m):(l[t]=K(z),l[t].c(),l[t].m(r,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=o.length}},i:E,o:E,d(e){c(a),e&&c(n),e&&c(s),S(l,e)}}}function G(h){return[[{name:"Nahl\xED\u017Een\xED do katastru nemovitost\xED",href:"https://nahlizenidokn.cuzk.cz/"},{name:"Katastr\xE1ln\xED mapy",href:"https://katastralnimapy.cuzk.cz/"},{name:"Katastr\xE1ln\xED \xFA\u0159ady",href:"https://www.cuzk.cz/Dokument.aspx?PRARESKOD=998&MENUID=0&AKCE=GEN:SEZNAM_KU"},{name:"\u010Cesk\xFD \xFA\u0159ad zem\u011Bm\u011B\u0159ick\xFD a katastr\xE1ln\xED",href:"https://cuzk.cz/"},{name:"Formul\xE1\u0159e katastru nemovitost\xED ke sta\u017Een\xED",href:"https://cuzk.cz/formulare"}]]}class L extends w{constructor(a){super(),D(this,a,G,C,M,{})}}export{L as default};