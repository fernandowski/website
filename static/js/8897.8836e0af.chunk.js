/*! For license information please see 8897.8836e0af.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[8897],{48897:(e,t,i)=>{i.d(t,{A:()=>$,d:()=>L});var a=i(77816),n=i(39879),o=i(66418),r=i(65079),c=i(76527),s=i(62785),l=i(6676),d=i(80416),h=i(76988),u=i(32811),f=i(67294),m=i(26964);const v="button",b="button--text-visible",g="button--compact",p="indicator-text",k="icon-container",y="slot-container",x="slot-container--hidden",z="text-container",w="text-container--visible",_="indicator-with-icon",E="indicator-without-icon",C="tooltip",$=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.mutationObserver=(0,l.c)("mutation",(()=>(0,a.$x)(this))),this.guid=`calcite-action-${(0,o.g)()}`,this.indicatorId=`${this.guid}-indicator`,this.buttonId=`${this.guid}-button`,this.handleTooltipSlotChange=e=>{const t=e.target.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-tooltip")))[0];t&&(t.referenceElement=this.buttonEl)},this.active=!1,this.alignment=void 0,this.appearance="solid",this.compact=!1,this.disabled=!1,this.icon=void 0,this.iconFlipRtl=!1,this.indicator=!1,this.label=void 0,this.loading=!1,this.scale="m",this.text=void 0,this.textEnabled=!1,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0}onMessagesChange(){}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}connectedCallback(){(0,r.c)(this),(0,s.c)(this),(0,h.c)(this),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}async componentWillLoad(){(0,c.s)(this),(0,u.i)()&&await(0,h.s)(this)}componentDidLoad(){(0,c.a)(this)}disconnectedCallback(){(0,r.d)(this),(0,s.d)(this),(0,h.d)(this),this.mutationObserver?.disconnect()}componentDidRender(){(0,r.u)(this)}async setFocus(){await(0,c.c)(this),this.buttonEl?.focus()}renderTextContainer(){const{text:e,textEnabled:t}=this,i={[z]:!0,[w]:t};return e?(0,a.h)("div",{class:i,key:"text-container"},e):null}renderIndicatorText(){const{indicator:e,messages:t,indicatorId:i,buttonId:n}=this;return(0,a.h)("div",{"aria-labelledby":n,"aria-live":"polite",class:p,id:i,role:"region"},e?t.indicator:null)}renderIconContainer(){const{loading:e,icon:t,scale:i,el:n,iconFlipRtl:o,indicator:r}=this,c="l"===i?"l":"m",s=e?(0,a.h)("calcite-loader",{inline:!0,label:this.messages.loading,scale:c}):null,l=t?(0,a.h)("calcite-icon",{class:{[_]:r},flipRtl:o,icon:t,scale:(0,d.g)(this.scale)}):null,h=s||l,u=h||n.children?.length,f=(0,a.h)("div",{class:{[y]:!0,[x]:e}},(0,a.h)("slot",null));return u?(0,a.h)("div",{"aria-hidden":"true",class:k,key:"icon-container"},h,f):null}render(){const{active:e,compact:t,disabled:i,icon:o,loading:c,textEnabled:s,label:l,text:d,indicator:h,indicatorId:u,buttonId:f,messages:m}=this,p=l||d,k=p?`${p}${h?` (${m.indicator})`:""}`:"",y={[v]:!0,[b]:s,[g]:t};return(0,a.h)(a.xr,{key:"0e061330c72e61acb61e53d2d94e1478c03c8083"},(0,a.h)(r.I,{key:"d34028dbfeb72982aa3fe6847663b16672f3e6ea",disabled:i},(0,a.h)("button",{key:"c05c642ffb09bb466c0c4d1be0b8aac79b2dcdff","aria-busy":(0,n.t)(c),"aria-controls":h?u:null,"aria-disabled":(0,n.t)(i),"aria-label":k,"aria-pressed":(0,n.t)(e),class:y,disabled:i,id:f,ref:e=>this.buttonEl=e},this.renderIconContainer(),this.renderTextContainer(),!o&&h&&(0,a.h)("div",{class:E,key:"indicator-no-icon"})),(0,a.h)("slot",{key:"8ab8d03371d7cd7211e5ab1a083b9b7b9017db79",name:C,onSlotchange:this.handleTooltipSlotChange}),this.renderIndicatorText()))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);outline-color:transparent;background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1));color:var(--calcite-action-text-color, var(--calcite-color-text-3));text-align:unset;flex:1 0 auto}.button:hover,.button:focus{background-color:var(--calcite-action-background-color-hover, var(--calcite-color-foreground-2));color:var(--calcite-action-text-color-pressed, var(--calcite-color-text-1))}.button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.button:active{background-color:var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3))}.icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1.5rem}.text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus{color:var(--calcite-action-text-color-pressed, var(--calcite-color-text-1));background-color:var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3))}:host([active]) .button:active{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .text-container{opacity:var(--calcite-opacity-disabled)}:host([loading]) calcite-loader[inline]{margin-inline-end:0px}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]) .button:active{background-color:var(--calcite-color-transparent-press)}:host([data-active]) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}.indicator-with-icon{position:relative}.indicator-with-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-without-icon{margin-inline:0.25rem;inline-size:1rem;position:relative}.indicator-without-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-color-foreground-1);opacity:var(--calcite-opacity-disabled)}:host([disabled]):host([active]) .button,:host([disabled]):host([active]) .button:hover,:host([disabled]):host([active]) .button:focus{background-color:var(--calcite-color-foreground-3);opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}'}},[1,"calcite-action",{active:[516],alignment:[513],appearance:[513],compact:[516],disabled:[516],icon:[1],iconFlipRtl:[516,"icon-flip-rtl"],indicator:[516],label:[1],loading:[516],scale:[513],text:[1],textEnabled:[516,"text-enabled"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function L(){if("undefined"===typeof customElements)return;["calcite-action","calcite-icon","calcite-loader"].forEach((e=>{switch(e){case"calcite-action":customElements.get(e)||customElements.define(e,$);break;case"calcite-icon":customElements.get(e)||(0,f.d)();break;case"calcite-loader":customElements.get(e)||(0,m.d)()}}))}L()},80416:(e,t,i)=>{function a(e){return"l"===e?"m":"s"}async function n(e){await(function(e){return"function"===typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}i.d(t,{c:()=>n,g:()=>a})},67294:(e,t,i)=>{i.d(t,{I:()=>f,d:()=>m});var a=i(77816),n=i(39879),o=i(6676),r=i(32811);const c="flip-rtl",s={},l={},d={s:16,m:24,l:32};function h(e){let{icon:t,scale:i}=e;const a=d[i],n=function(e){const t=!isNaN(Number(e.charAt(0))),i=e.split("-");if(i.length>0){const t=/[a-z]/i;e=i.map(((e,i)=>e.replace(t,(function(e,t){return 0===i&&0===t?e:e.toUpperCase()})))).join("")}return t?`i${e}`:e}(t),o="F"===n.charAt(n.length-1);return`${o?n.substring(0,n.length-1):n}${a}${o?"F":""}`}function u(e){return s[e]}const f=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.visible||this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}render(){const{el:e,flipRtl:t,pathData:i,scale:o,textLabel:r}=this,s=(0,n.a)(e),l=d[o],h=!!r,u=[].concat(i||"");return(0,a.h)(a.xr,{key:"41c9d3006a5887061fdb2144102447b2f490eb72","aria-hidden":(0,n.t)(!h),"aria-label":h?r:null,role:h?"img":null},(0,a.h)("svg",{key:"9fc84ba4eac40fc822babbfe276b2add5ee1c952","aria-hidden":"true",class:{[c]:"rtl"===s&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${l} ${l}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},u.map((e=>"string"===typeof e?(0,a.h)("path",{d:e}):(0,a.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})))))}async loadIconPathData(){const{icon:e,scale:t,visible:i}=this;if(!(0,r.i)()||!e||!i)return;const n={icon:e,scale:t},o=u(h(n))||await async function(e){const t=h(e),i=u(t);if(i)return i;l[t]||(l[t]=fetch((0,a.OX)(`./assets/icon/${t}.json`)).then((e=>e.json())).catch((()=>(console.error(`"${t}" is not a valid calcite-ui-icon name`),""))));const n=await l[t];return s[t]=n,n}(n);e===this.icon&&(this.pathData=o)}waitUntilVisible(e){this.intersectionObserver=(0,o.c)("intersection",(t=>{t.forEach((t=>{t.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function m(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((e=>{if("calcite-icon"===e)customElements.get(e)||customElements.define(e,f)}))}m()},65079:(e,t,i)=>{i.d(t,{I:()=>y,c:()=>g,d:()=>p,u:()=>u});var a=i(77816),n=i(32811);const o=/firefox/i.test((0,n.g)()),r=o?new WeakMap:null;function c(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function s(e){const t=e.target;if(o&&!r.get(t))return;const{disabled:i}=t;i&&e.preventDefault()}const l=["mousedown","mouseup","click"];function d(e){const t=e.target;o&&!r.get(t)||t.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const h={capture:!0};function u(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void f(e);v(e),e.el.removeAttribute("aria-disabled")}function f(e){if(e.el.click=c,o){const t=function(e){return e.el.parentElement||e.el}(e),i=r.get(e.el);return i!==t&&(b(i),r.set(e.el,t)),void m(r.get(e.el))}m(e.el)}function m(e){e&&(e.addEventListener("pointerdown",s,h),l.forEach((t=>e.addEventListener(t,d,h))))}function v(e){if(delete e.el.click,o){const t=r.get(e.el);let i=!1;if(t?.children)for(const a of t.children)if("disabled"in a&&a.disabled&&a!==e.el){i=!0;break}return i||b(t),void r.delete(e.el)}b(e.el)}function b(e){e&&(e.removeEventListener("pointerdown",s,h),l.forEach((t=>e.removeEventListener(t,d,h))))}function g(e){e.disabled&&o&&f(e)}function p(e){o&&v(e)}const k="interaction-container",y=(e,t)=>{let{disabled:i}=e;return(0,a.h)("div",{class:k,inert:i},...t)}},76527:(e,t,i)=>{i.d(t,{a:()=>s,c:()=>l,s:()=>c});var a=i(77816),n=i(32811);const o=new WeakMap,r=new WeakMap;function c(e){r.set(e,new Promise((t=>o.set(e,t))))}function s(e){o.get(e)()}async function l(e){if(await function(e){return r.get(e)}(e),(0,n.i)())return(0,a.$x)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},26964:(e,t,i)=>{i.d(t,{L:()=>c,d:()=>s});var a=i(77816),n=i(66418),o=i(62785);const r={loader:"loader",loaderParts:"loader__svgs",loaderPart:"loader__svg",loaderPartId:e=>`${r.loaderPart}--${e}`,loaderText:"loader__text",loaderPercentage:"loader__percentage"},c=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.formatValue=()=>"determinate-value"!==this.type?`${this.value}`:this.formatter.format(this.value/100),this.inline=!1,this.label=void 0,this.scale="m",this.type=void 0,this.value=0,this.text="",this.effectiveLocale=""}connectedCallback(){(0,o.c)(this),this.updateFormatter()}disconnectedCallback(){(0,o.d)(this)}render(){const{el:e,inline:t,label:i,scale:o,text:c,type:s,value:l}=this,d=e.id||(0,n.g)(),h=t?this.getInlineSize(o):this.getSize(o),u=.45*h,f=`0 0 ${h} ${h}`,m=s?.startsWith("determinate"),v=2*u*Math.PI,b=l/100*v,g=v-b,p=Math.floor(l),k={"aria-valuenow":p,"aria-valuemin":0,"aria-valuemax":100,complete:100===p},y={r:u,cx:h/2,cy:h/2},x={"stroke-dasharray":`${b} ${g}`};return(0,a.h)(a.xr,{key:"b84a28c551e2484735b2cb7bad89a7a1d608fe13","aria-label":i,id:d,role:"progressbar",...m?k:{}},(0,a.h)("div",{key:"7ea0d6f2a742c8950cff2196bc454cc8ec3be037",class:r.loaderParts},[1,2,3].map((e=>(0,a.h)("svg",{"aria-hidden":"true",class:{[r.loaderPart]:!0,[r.loaderPartId(e)]:!0},key:e,viewBox:f,...3===e&&m?{style:x}:{}},(0,a.h)("circle",{...y})))),m&&(0,a.h)("div",{key:"2732fc9cbbaade638eb6241776b2aecea6177ed5",class:r.loaderPercentage},this.formatValue())),c&&(0,a.h)("div",{key:"5050af5bb4d979e4f83ac997f0f98aa69be86f52",class:r.loaderText},c))}formatterPropsChange(){this.updateFormatter()}getSize(e){return{s:32,m:56,l:80}[e]}getInlineSize(e){return{s:12,m:16,l:20}[e]}updateFormatter(){"determinate-value"===this.type&&this.formatter?.resolvedOptions().locale!==this.effectiveLocale&&(this.formatter=new Intl.NumberFormat(this.effectiveLocale,{style:"percent"}))}get el(){return this}static get watchers(){return{effectiveLocale:["formatterPropsChange"],type:["formatterPropsChange"]}}static get style(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-color-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem);will-change:contents}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--3);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem;--calcite-internal-loader-value-line-height:0.625rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem;--calcite-internal-loader-value-line-height:1.375rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem;--calcite-internal-loader-value-line-height:1.71875rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{display:block;text-align:center;color:var(--calcite-color-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);line-height:var(--calcite-internal-loader-value-line-height);align-self:center}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise;display:flex}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}:host([type=determinate]),:host([type=determinate-value]){animation:none;stroke:var(--calcite-color-border-3)}:host([type=determinate]) .loader__svgs,:host([type=determinate-value]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3,:host([type=determinate-value]) .loader__svg--3{animation:none;stroke:var(--calcite-color-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-color-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-color-brand)}33%{stroke:var(--calcite-color-brand-press)}66%{stroke:var(--calcite-color-brand-hover)}100%{stroke:var(--calcite-color-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-loader",{inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1],effectiveLocale:[32]},void 0,{effectiveLocale:["formatterPropsChange"],type:["formatterPropsChange"]}]);function s(){if("undefined"===typeof customElements)return;["calcite-loader"].forEach((e=>{if("calcite-loader"===e)customElements.get(e)||customElements.define(e,c)}))}s()},76988:(e,t,i)=>{i.d(t,{c:()=>f,d:()=>m,s:()=>d,u:()=>u});var a=i(77816),n=i(62785),o=i(32811);const r={};function c(){throw new Error("could not fetch component message bundle")}function s(e){e.messages={...e.defaultMessages,...e.messageOverrides}}function l(){}async function d(e){e.defaultMessages=await h(e,e.effectiveLocale),s(e)}async function h(e,t){if(!(0,o.i)())return{};const{el:i}=e,s=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return r[i]||(r[i]=fetch((0,a.OX)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||c(),e.json()))).catch((()=>c()))),r[i]}((0,n.g)(t,"t9n"),s)}async function u(e,t){e.defaultMessages=await h(e,t),s(e)}function f(e){e.onMessagesChange=v}function m(e){e.onMessagesChange=l}function v(){s(this)}}}]);
//# sourceMappingURL=8897.8836e0af.chunk.js.map