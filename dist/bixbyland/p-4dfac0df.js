let e,t,n=0,s=!1,l=!1,o=!1,r=!1;const i=window,c=document,a={t:0,s:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s)},f=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),u={},$=new WeakMap,d=e=>$.get(e),p=(e,t)=>$.set(t.l=e,t),m=(e,t)=>t in e,b=e=>console.error(e),h=new Map,y=new Map,w=i.__stencil_cssshim,g=[],v=[],_=[],j=(e,t)=>n=>{e.push(n),s||(s=!0,t&&4&a.t?x(k):a.raf(k))},S=(e,t)=>{let n=0,s=0;for(;n<e.length&&(s=performance.now())<t;)try{e[n++](s)}catch(e){b(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},k=()=>{n++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){b(e)}e.length=0})(g);const e=2==(6&a.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;S(v,e),S(_,e),v.length>0&&(_.push(...v),v.length=0),(s=g.length+v.length+_.length>0)?a.raf(k):n=0},x=e=>Promise.resolve().then(e),O=j(g,!1),M=j(v,!0),R={},U=e=>null!=e,L=e=>e.toLowerCase(),P=e=>"o"===(e=(typeof e)[0])||"f"===e,T=()=>i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_bixbyland("./p-3ea8955c.js"),C=async()=>{const e=new RegExp("/bixbyland(\\.esm)?\\.js($|\\?|#)"),t=Array.from(c.querySelectorAll("script")).find(t=>e.test(t.src)||"bixbyland"===t.getAttribute("data-namespace")),n=t["data-opts"];{const e=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,i.location.href));return E(e.href),window.customElements||await __sc_import_bixbyland("./p-860d8016.js"),Object.assign({},n,{resourcesUrl:e.href})}},E=e=>{const t=(()=>`__sc_import_${"bixbyland".replace(/\s|-/g,"_")}`)();try{i[t]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const s=new Map;i[t]=n=>{const l=new URL(n,e).href;let o=s.get(l);if(!o){const e=c.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${l}'; window.${t}.m = m;`],{type:"application/javascript"})),o=new Promise(n=>{e.onload=()=>{n(i[t].m),e.remove()}}),s.set(l,o),c.head.appendChild(e)}return o}}},A=new WeakMap,W=e=>"sc-"+e,q=(e,t,...n)=>{let s,l,o=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)o=t[n],Array.isArray(o)?a(o):null!=o&&"boolean"!=typeof o&&((r="function"!=typeof e&&!P(o))&&(o=String(o)),r&&i?c[c.length-1].o+=o:c.push(r?{t:0,o}:o),i=r)};if(a(n),t){s=t.key||void 0,l=t.name;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,F);const f={t:0,i:e,u:c.length>0?c:null,$:void 0,p:t};return f.h=s,f.g=l,f},D={},F={forEach:(e,t)=>e.map(H).forEach(t),map:(e,t)=>e.map(H).map(t).map(N)},H=e=>({vattrs:e.p,vchildren:e.u,vkey:e.h,vname:e.g,vtag:e.i,vtext:e.o}),N=e=>({t:0,p:e.vattrs,u:e.vchildren,h:e.vkey,g:e.vname,i:e.vtag,o:e.vtext}),B=(e,t,n,s,l,o)=>{if(n!==s)if("class"===t){const t=e.classList;V(n).forEach(e=>t.remove(e)),V(s).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(t.startsWith("on")&&!m(e,t))t=m(e,L(t))?L(t.substring(2)):L(t[2])+t.substring(3),n&&a.rel(e,t,n,!1),s&&a.ael(e,t,s,!1);else{const n=m(e,t),r=P(s);if((n||r&&null!==s)&&!l)try{if(e.tagName.includes("-"))e[t]=s;else{const n=null==s?"":s;e[t]!==n&&(e[t]=n)}}catch(e){}null==s||!1===s?e.removeAttribute(t):(!n||4&o||l)&&!r&&(s=!0===s?"":s.toString(),e.setAttribute(t,s))}},V=e=>e?e.split(/\s+/).filter(e=>e):[],z=(e,t,n,s)=>{const l=11===t.$.nodeType&&t.$.host?t.$.host:t.$,o=e&&e.p||R,r=t.p||R;for(s in o)s in r||B(l,s,o[s],void 0,n,t.t);for(s in r)B(l,s,o[s],r[s],n,t.t)},G=(n,s,o)=>{let i,a,f,u=s.u[o],$=0;if(l||(r=!0,"slot"===u.i&&(u.t|=u.u?2:1)),U(u.o))u.$=c.createTextNode(u.o);else if(1&u.t)u.$=c.createTextNode("");else if(i=u.$=c.createElement(2&u.t?"slot-fb":u.i),z(null,u,!1),u.u)for($=0;$<u.u.length;++$)(a=G(n,u,$,i))&&i.appendChild(a);return u.$["s-hn"]=t,3&u.t&&(u.$["s-sr"]=!0,u.$["s-cr"]=e,u.$["s-sn"]=u.g||"",(f=n&&n.u&&n.u[o])&&f.i===u.i&&n.$&&I(n.$,!1)),u.$},I=(e,n)=>{a.t|=1;const s=e.childNodes;for(let e=s.length-1;e>=0;e--){const l=s[e];l["s-hn"]!==t&&l["s-ol"]&&(Y(l).insertBefore(l,X(l)),l["s-ol"].remove(),l["s-ol"]=void 0,r=!0),n&&I(l,n)}a.t&=-2},J=(e,t,n,s,l,o)=>{let r,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(;l<=o;++l)s[l]&&(r=G(null,n,l,e))&&(s[l].$=r,i.insertBefore(r,X(t)))},K=(e,t,n,s)=>{for(;t<=n;++t)U(e[t])&&(s=e[t].$,se(e[t],!0),o=!0,s["s-ol"]?s["s-ol"].remove():I(s,!0),s.remove())},Q=(e,t)=>e.i===t.i&&("slot"===e.i?e.g===t.g:e.h===t.h),X=e=>e&&e["s-ol"]||e,Y=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,Z=(e,t)=>{const n=t.$=e.$,s=e.u,l=t.u;let o;U(t.o)?(o=n["s-cr"])?o.parentNode.textContent=t.o:e.o!==t.o&&(n.textContent=t.o):("slot"===t.i||z(e,t,!1),U(s)&&U(l)?((e,t,n,s)=>{let l,o,r=0,i=0,c=0,a=0,f=t.length-1,u=t[0],$=t[f],d=s.length-1,p=s[0],m=s[d];for(;r<=f&&i<=d;)if(null==u)u=t[++r];else if(null==$)$=t[--f];else if(null==p)p=s[++i];else if(null==m)m=s[--d];else if(Q(u,p))Z(u,p),u=t[++r],p=s[++i];else if(Q($,m))Z($,m),$=t[--f],m=s[--d];else if(Q(u,m))"slot"!==u.i&&"slot"!==m.i||I(u.$.parentNode,!1),Z(u,m),e.insertBefore(u.$,$.$.nextSibling),u=t[++r],m=s[--d];else if(Q($,p))"slot"!==u.i&&"slot"!==m.i||I($.$.parentNode,!1),Z($,p),e.insertBefore($.$,u.$),$=t[--f],p=s[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&U(t[a].h)&&t[a].h===p.h){c=a;break}c>=0?((o=t[c]).i!==p.i?l=G(t&&t[i],n,c,e):(Z(o,p),t[c]=void 0,l=o.$),p=s[++i]):(l=G(t&&t[i],n,i,e),p=s[++i]),l&&Y(u.$).insertBefore(l,X(u.$))}r>f?J(e,null==s[d+1]?null:s[d+1].$,n,s,i,d):i>d&&K(t,r,f)})(n,s,t,l):U(l)?(U(e.o)&&(n.textContent=""),J(n,null,t,l,0,l.length-1)):U(s)&&K(s,0,s.length-1))},ee=(e,t,n,s,l,o,r,i)=>{for(s=0,l=(n=e.childNodes).length;s<l;s++)if(1===(t=n[s]).nodeType){if(t["s-sr"])for(r=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(n[o]["s-hn"]!==t["s-hn"])if(i=n[o].nodeType,""!==r){if(1===i&&r===n[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==n[o].textContent.trim()){t.hidden=!0;break}ee(t)}},te=[],ne=e=>{let t,n,s,l,r=e.childNodes,i=r.length,c=0,a=0,f=0;for(i=r.length;c<i;c++){if((t=r[c])["s-sr"]&&(n=t["s-cr"]))for(l=t["s-sn"],a=(s=n.parentNode.childNodes).length-1;a>=0;a--)(n=s[a])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===l||1===f&&null===n.getAttribute("slot")&&""===l||1===f&&n.getAttribute("slot")===l)&&(te.some(e=>e.v===n)||(o=!0,n["s-sn"]=l,te.push({_:t,v:n})));1===t.nodeType&&ne(t)}},se=(e,t)=>{e&&(e.p&&e.p.ref&&e.p.ref(t?null:e.$),e.u&&e.u.forEach(e=>{se(e,t)}))},le=(e,t,n,s)=>{t.t|=16;const l=t.l;let o;s&&(o=ce(l,"componentWillLoad"));const r=()=>oe(e,t,n,l,s);return ae(o,()=>M(r))},oe=(n,s,i,f,u)=>{s.t&=-17,n["s-lr"]=!1,u&&((e,t)=>{((e,t,n,s)=>{let l=W(t.j),o=y.get(l);if(e=11===e.nodeType?e:c,o)if("string"==typeof o){let n,r=A.get(e=e.head||e);if(r||A.set(e,r=new Set),!r.has(l)){if(w){const e=(n=w.createHostStyle(s,l,o,!!(10&t.t)))["s-sc"];e&&(l=e,r=null)}else(n=c.createElement("style")).innerHTML=o;e.insertBefore(n,e.querySelector("link")),r&&r.add(l)}}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o])})(e.getRootNode(),t,0,e)})(n,i),s.t|=4;try{((n,s,i,f)=>{t=L(n.tagName);const u=s.S||{t:0},$=(e=>e&&e.i===D)(f)?f:q(null,null,f);if($.i=null,$.t|=4,s.S=$,$.$=u.$=n,e=n["s-cr"],l=!1,r=o=!1,Z(u,$),r){ne($.$);for(let e=0;e<te.length;e++){const t=te[e];if(!t.v["s-ol"]){const e=c.createTextNode("");e["s-nr"]=t.v,t.v.parentNode.insertBefore(t.v["s-ol"]=e,t.v)}}a.t|=1;for(let e=0;e<te.length;e++){const t=te[e],n=t._.parentNode;let s=t._.nextSibling,l=t.v["s-ol"];for(;l=l.previousSibling;){let e=l["s-nr"];if(e&&e["s-sn"]===t.v["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){s=e;break}}(!s&&n!==t.v.parentNode||t.v.nextSibling!==s)&&t.v!==s&&n.insertBefore(t.v,s)}a.t&=-2}o&&ee($.$),te.length=0})(n,s,0,f.render())}catch(e){b(e)}s.t&=-5,w&&w.updateHost(n),n["s-lr"]=!0,s.t|=2,n["s-rc"].length>0&&(n["s-rc"].forEach(e=>e()),n["s-rc"].length=0),re(n,s)},re=(e,t,n)=>{if(!e["s-al"]){const s=t.l,l=t.k;64&t.t||(t.t|=64,e.classList.add("hydrated"),ce(s,"componentDidLoad"),t.O(e),l||ie()),l&&((n=l["s-al"])&&(n.delete(e),0===n.size&&(l["s-al"]=void 0,l["s-init"]())),t.k=void 0)}},ie=()=>{c.documentElement.classList.add("hydrated"),a.t|=2},ce=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){b(e)}},ae=(e,t)=>e&&e.then?e.then(t):t(),fe=(e,t,n)=>{if(t.M){e.watchers&&(t.R=e.watchers);const s=Object.entries(t.M),l=e.prototype;if(s.forEach(([e,[s]])=>{31&s||2&n&&32&s?Object.defineProperty(l,e,{get(){return((e,t)=>d(e).U.get(t))(this,e)},set(n){((e,t,n,s)=>{const l=d(this),o=l.L,r=l.U.get(t),i=l.t;if(!((n=((e,t)=>null==e||P(e)?e:1&t?String(e):e)(n,s.M[t][0]))===r||8&i&&void 0!==r)&&(l.U.set(t,n),l.l)){if(s.R&&128&i){const e=s.R[t];e&&e.forEach(e=>{try{l.l[e].call(l.l,n,r,t)}catch(e){b(e)}})}2==(22&i)&&le(o,l,s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&s&&Object.defineProperty(l,e,{value(...t){const n=d(this);return n.P.then(()=>n.l[e](...t))}})}),1&n){const t=new Map;l.attributeChangedCallback=function(e,n,s){a.jmp(()=>{const n=t.get(e);this[n]=(null!==s||"boolean"!=typeof this[n])&&s})},e.observedAttributes=s.filter(([e,t])=>15&t[0]).map(([e,n])=>{const s=n[1]||e;return t.set(s,e),s})}}return e},ue=(e,t={})=>{const n=[],s=t.exclude||[],l=c.head,o=i.customElements,r=l.querySelector("meta[charset]"),u=c.createElement("style");let p;Object.assign(a,t),a.s=new URL(t.resourcesUrl||"./",c.baseURI).href,t.syncQueue&&(a.t|=4),e.forEach(e=>e[1].forEach(t=>{const l={t:t[0],j:t[1],M:t[2],T:t[3],R:{}},r=l.j;l.C=e[0],s.includes(r)||o.get(r)||(n.push(r),o.define(r,fe(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,L:e,U:new Map};t.P=new Promise(e=>t.O=e),$.set(e,t)}})(e)}connectedCallback(){p&&(clearTimeout(p),p=null),a.jmp(()=>((e,t)=>{if(0==(1&a.t)){const n=d(e);if(!(1&n.t)){let s;n.t|=1,s||4&t.t&&((e,t)=>{let n;n="",(t=e["s-cr"]=c.createComment(""))["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let t=e;for(;t=t.parentNode||t.host;)if(t["s-init"]&&!1===t["s-lr"]){n.k=t,(t["s-al"]=t["s-al"]||new Set).add(e);break}}t.M&&Object.entries(t.M).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),x(()=>(async(e,t,n,s,l)=>{if(0==(32&t.t)){t.t|=32,(l=(e=>{const t=e.j.replace(/-/g,"_"),n=e.C,s=h.get(n);return s?s[t]:__sc_import_bixbyland(`./${n}.entry.js`).then(e=>(h.set(n,e),e[t]),b)})(n)).then&&(l=await l),l.isProxied||(n.R=l.watchers,fe(l,n,2),l.isProxied=!0),t.t|=8;try{new l(t)}catch(e){b(e)}if(t.t&=-9,t.t|=128,!l.A&&l.style){let e=l.style;((e,t,n)=>{let s=y.get(e);f&&n?(s=s||new CSSStyleSheet).replace(t):s=t,y.set(e,s)})(W(n.j),e,!!(1&n.t)),l.A=!0}}const o=t.k,r=()=>le(e,t,n,!0);o&&!1===o["s-lr"]&&o["s-rc"]?o["s-rc"].push(r):r()})(e,n,t))}}})(this,l))}disconnectedCallback(){a.jmp(()=>(()=>{0==(1&a.t)&&w&&w.removeHost(this)})())}"s-init"(){const e=d(this);e.l&&re(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=d(e);2&n.t&&le(e,n,t,!1)}})(this,l)}componentOnReady(){return d(this).P}},l,1)))})),u.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles",""),l.insertBefore(u,r?r.nextSibling:l.firstChild),a.jmp(()=>p=setTimeout(ie,30))},$e=(e,t)=>t in u?u[t]:"window"===t?i:"document"===t?c:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?(()=>{const e=new URL(".",a.s);return e.origin!==i.location.origin?e.href:e.pathname})():"queue"===t?{write:M,read:O,tick:{then:e=>x(e)}}:void 0));u.store=(()=>{let e;return{getStore:()=>e,setStore:t=>{e=t},getState:()=>e&&e.getState(),mapDispatchToProps:(t,n)=>{Object.keys(n).forEach(s=>{const l=n[s];Object.defineProperty(t,s,{get:()=>(...t)=>e.dispatch(l(...t)),configurable:!0,enumerable:!0})})},mapStateToProps:(t,n)=>{const s=()=>{const s=n(e.getState());Object.keys(s).forEach(e=>{t[e]=s[e]})},l=e.subscribe(()=>s());return s(),l}}})();export{D as H,T as a,ue as b,$e as g,q as h,C as p,p as r};