function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequiree8ef;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequiree8ef=a),a.register("27Lyk",function(t,n){"use strict";e(t.exports,"register",()=>r,e=>r=e),e(t.exports,"resolve",()=>o,e=>o=e);var r,o,a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("bnIU3",function(t,n){e(t.exports,"onMount",()=>a("6ojdr").onMount),a("6ojdr")}),a("27Lyk").register(JSON.parse('{"4w3QM":"index.612bee74.js","4T8yP":"unclicked_reply.2de01727.png","dIebM":"hover_unclicked_reply.6076faa3.png","4GBht":"logout.158a5343.png","9SXBS":"hover_logout.540d5229.png","kS3gr":"unclicked_mentions.a9eeaec9.png","ba7P2":"hover_unclicked_mentions.873dd787.png","17RA7":"clicked_dm.a1f6e5f4.png","e4fzL":"hover_clicked_dm.1f39b073.png","gLKbw":"dm_header.9f9af675.png","iayzi":"index.2b3017da.css","lNGh4":"index.3365a9b4.css","k9EaU":"index.2a36cab2.js","5AkmO":"index.e9ebad38.js","gqlKI":"index.0d539254.css","UMZC9":"index.6ca814f3.css"}'));var l=a("6ojdr"),i=a("bnr5I"),s=a("5Kaln"),c=a("aprjk"),l=a("6ojdr"),p={};p=new URL("../"+a("27Lyk").resolve("kS3gr"),import.meta.url).toString();var d={};d=new URL("../"+a("27Lyk").resolve("ba7P2"),import.meta.url).toString();var u={};u=new URL("../"+a("27Lyk").resolve("4T8yP"),import.meta.url).toString();var m={};m=new URL("../"+a("27Lyk").resolve("dIebM"),import.meta.url).toString();var f={};f=new URL("../"+a("27Lyk").resolve("17RA7"),import.meta.url).toString();var _={};_=new URL("../"+a("27Lyk").resolve("e4fzL"),import.meta.url).toString();var g={};g=new URL("../"+a("27Lyk").resolve("4GBht"),import.meta.url).toString();var v={};v=new URL("../"+a("27Lyk").resolve("9SXBS"),import.meta.url).toString();var h={};function b(e,t,n){let r=e.slice();return r[2]=t[n],r}function y(e){let t,n;let r=e[5].messages+"";return{c(){t=(0,l.element)("p"),n=(0,l.text)(r),(0,l.set_style)(t,"color","red")},m(e,r){(0,l.insert)(e,t,r),(0,l.append)(t,n)},p:l.noop,d(e){e&&(0,l.detach)(t)}}}function H(e){let t;let n=e[1],r=[];for(let t=0;t<n.length;t+=1)r[t]=S(b(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=(0,l.empty)()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);(0,l.insert)(e,t,n)},p(e,o){if(1&o){let a;for(a=0,n=e[1];a<n.length;a+=1){let l=b(e,n,a);r[a]?r[a].p(l,o):(r[a]=S(l),r[a].c(),r[a].m(t.parentNode,t))}for(;a<r.length;a+=1)r[a].d(1);r.length=n.length}},d(e){(0,l.destroy_each)(r,e),e&&(0,l.detach)(t)}}}function S(e){let t,n,r,o,a,i,s,c,p,d,u,m;let f=e[2].source+"",_=e[2].author.username+"",g=e[2].createdTime+"",v=e[2].content+"";return{c(){t=(0,l.element)("a"),n=(0,l.element)("p"),r=(0,l.text)(f),o=(0,l.text)(" | "),a=(0,l.text)(_),i=(0,l.space)(),s=(0,l.element)("span"),c=(0,l.text)(g),p=(0,l.element)("br"),d=(0,l.space)(),u=(0,l.element)("p"),m=(0,l.space)(),(0,l.attr)(n,"id","source"),(0,l.attr)(n,"class","imptDetails svelte-v8ych1"),(0,l.attr)(s,"id","dateTime"),(0,l.attr)(t,"class","conversation svelte-v8ych1"),(0,l.attr)(t,"href","/messages")},m(e,f){(0,l.insert)(e,t,f),(0,l.append)(t,n),(0,l.append)(n,r),(0,l.append)(n,o),(0,l.append)(n,a),(0,l.append)(t,i),(0,l.append)(t,s),(0,l.append)(s,c),(0,l.append)(t,p),(0,l.append)(t,d),(0,l.append)(t,u),u.innerHTML=v,(0,l.append)(t,m)},p:l.noop,d(e){e&&(0,l.detach)(t)}}}function k(e){let t;return{c(){(t=(0,l.element)("p")).textContent="waiting..."},m(e,n){(0,l.insert)(e,t,n)},p:l.noop,d(e){e&&(0,l.detach)(t)}}}function R(e){let n,r,o,a,b,S,R,w,L,x;r=new s.default({props:{mentions:t(p),hoverMentions:t(d),dm:t(f),hoverDM:t(_),reply:t(u),hoverReply:t(m),logout:t(g),hoverLogout:t(v),class:"navbar"}}),b=new i.default({props:{title:"Messages",icon:t(h)}});let E={ctx:e,current:null,token:null,hasCatch:!0,pending:k,then:H,catch:y,value:1,error:5};return(0,l.handle_promise)(e[0],E),L=new c.default({props:{mentions:t(p),hoverMentions:t(d),dm:t(f),hoverDM:t(_),reply:t(u),hoverReply:t(m),logout:t(g),hoverLogout:t(v)}}),{c(){n=(0,l.element)("div"),(0,l.create_component)(r.$$.fragment),o=(0,l.space)(),a=(0,l.element)("div"),(0,l.create_component)(b.$$.fragment),S=(0,l.space)(),R=(0,l.element)("main"),E.block.c(),w=(0,l.space)(),(0,l.create_component)(L.$$.fragment),(0,l.attr)(R,"class","svelte-v8ych1"),(0,l.attr)(a,"class","content svelte-v8ych1"),(0,l.attr)(n,"class","desktopFormat svelte-v8ych1")},m(e,t){(0,l.insert)(e,n,t),(0,l.mount_component)(r,n,null),(0,l.append)(n,o),(0,l.append)(n,a),(0,l.mount_component)(b,a,null),(0,l.append)(a,S),(0,l.append)(a,R),E.block.m(R,E.anchor=null),E.mount=()=>R,E.anchor=null,(0,l.append)(n,w),(0,l.mount_component)(L,n,null),x=!0},p(t,[n]){e=t,(0,l.update_await_block_branch)(E,e,n)},i(e){x||((0,l.transition_in)(r.$$.fragment,e),(0,l.transition_in)(b.$$.fragment,e),(0,l.transition_in)(L.$$.fragment,e),x=!0)},o(e){(0,l.transition_out)(r.$$.fragment,e),(0,l.transition_out)(b.$$.fragment,e),(0,l.transition_out)(L.$$.fragment,e),x=!1},d(e){e&&(0,l.detach)(n),(0,l.destroy_component)(r),(0,l.destroy_component)(b),E.block.d(),E.token=null,E=null,(0,l.destroy_component)(L)}}}async function w(){let e=await fetch("/api/messages"),t=await e.json();if(e.ok)return t;throw Error(t)}function L(e){return[w()]}h=new URL("../"+a("27Lyk").resolve("gLKbw"),import.meta.url).toString();class x extends l.SvelteComponent{constructor(e){super(),(0,l.init)(this,e,L,R,l.safe_not_equal,{})}}new x({target:document.body});
//# sourceMappingURL=index.612bee74.js.map
