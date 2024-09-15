"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[1338],{91338:(e,n,t)=>{t.d(n,{getRampStops:()=>D});var l,o=t(69539),i=t(95444),r=t(24921),s=(t(50076),t(53084));t(63040),t(28808),t(89465);function a(e){switch(e){case"circle":return{rings:[[[8.5,.2],[7.06,.33],[5.66,.7],[4.35,1.31],[3.16,2.14],[2.14,3.16],[1.31,4.35],[.7,5.66],[.33,7.06],[.2,8.5],[.33,9.94],[.7,11.34],[1.31,12.65],[2.14,13.84],[3.16,14.86],[4.35,15.69],[5.66,16.3],[7.06,16.67],[8.5,16.8],[9.94,16.67],[11.34,16.3],[12.65,15.69],[13.84,14.86],[14.86,13.84],[15.69,12.65],[16.3,11.34],[16.67,9.94],[16.8,8.5],[16.67,7.06],[16.3,5.66],[15.69,4.35],[14.86,3.16],[13.84,2.14],[12.65,1.31],[11.34,.7],[9.94,.33],[8.5,.2]]]};case"square":return{rings:[[[.5,.5],[.5,16.5],[16.5,16.5],[16.5,.5],[.5,.5]]]};case"diamond":return{rings:[[[8.5,.5],[.2,8.5],[8.5,16.5],[16.5,8.5],[8.5,.5]]]};case"hexagon-pointy":return{rings:[[[15.86,12.75],[15.86,4.25],[8.5,0],[1.14,4.25],[1.14,12.75],[8.5,17],[15.86,12.75]]]};case"hexagon-flat":return{rings:[[[12.75,15.86],[17,8.5],[12.75,1.14],[4.25,1.14],[0,8.5],[4.25,15.86],[12.75,15.86]]]}}}function u(e){return"CIMVectorMarker"===e?.type?e.markerGraphics?.[0]:void 0}function c(e){return"CIMPolygonSymbol"===e?.symbol?.type?e.symbol.symbolLayers?.[0]:void 0}function f(e,n){"CIMVectorMarker"===e?.type&&null!=n&&(e.size=n)}function y(e,n){const t=u(e);t&&null!=n&&(t.geometry=a(n))}function m(e,n){const t=c(u(e));t&&null!=n&&(t.color=n.toArray())}function p(e,n,t){const l=c(u(e));l&&null!=n&&t&&(l.colorLocked=n)}function b(e,n){const{outerRingSize:t,innerDotSize:o,type:i,color:r,colorLocked:a,primitiveOverrides:u}=n,c="CIMPolygonSymbol"===e.data.symbol?.type?e.data.symbol.symbolLayers:null;if(2===c?.length)for(const s of c){const e=s.primitiveName===l.OuterRing;f(s,e?t:o),y(s,i),m(s,r),p(s,a,e)}return null!=t&&null!=o&&(e.data.primitiveOverrides=null),void 0!==u&&(e.data.primitiveOverrides=(0,s.o8)(u)),e}!function(e){e.OuterRing="reference-size-outer-ring",e.InnerDot="reference-size-inner-dot"}(l||(l={}));var d=t(29632),h=t(94439),g=t(60823),w=(t(76099),t(91896)),v=t(76940),z=t(7246);const S=30,k=12,I=24,L=[255,255,255],x=[200,200,200],C=[128,128,128],M=20,V=5;async function D(e,n,t,l,o,i,s){const a=n.legendOptions,u=a?.customValues,c=s||await R(e,t),f=n.stops,y=!!c,m=!!u,p=null!=n.minSize&&null!=n.maxSize,b=f&&f.length>1,d=!!n.target;if(!y||!m&&!(p||b&&!d))return;const w=(0,h.$d)(c);let v=!1,z=null,S=null;z=w&&!b?(0,r.LI)([n.minDataValue,n.maxDataValue]):u??await B(n,c,l,o?.type);const k=e?.authoringInfo,L="univariate-color-size"===k?.type,x=L&&"above-and-below"===k?.univariateTheme,C=!!(0,g._l)(e);if(!z&&b&&(z=f.map((e=>e.value)),v=f.some((e=>!!e.label)),"flow"===e.type&&(z=(0,r.LI)(z)),v&&(S=f.map((e=>e.label)))),w&&null!=z&&z?.length>2&&!x&&(z=[z[0],z[z.length-1]]),!z)return null;L&&5!==z?.length&&(z=E({minSize:z[0],maxSize:z[z.length-1]}));const M=w?A(e,z):null,V=(0,h.k_)(c),D=v?null:function(e,n){const t=e.length-1;return e.map(((e,l)=>(0,g.Dd)(e,l,t,n)))}(z,i);return(await Promise.all(z.map((async(i,r)=>{const s=w?M[r]:await $(n,c,i,l,o?.type);return{value:i,symbol:!C||"class-breaks"!==e.type&&"unique-value"!==e.type?F(x&&"class-breaks"===e.type?P(e,r):c,s):O(e,s,n.maxSize,t)??c,label:v?S[r]:D[r],size:C?I:s,outlineSize:V}})))).reverse()}function A(e,n){const t=e?.authoringInfo,l="univariate-color-size"===t?.type;let o=[k,S];if(l){const e=n[0],t=n[n.length-1],l=k,i=S;o=n.map((n=>l+(n-e)/(t-e)*(i-l)))}return l&&"below"===t?.univariateTheme&&o.reverse(),o}function O(e,n,t,l){const i="class-breaks"===e.type,r=i?e.classBreakInfos?.[0]?.symbol?.clone():e.uniqueValueInfos?.[0]?.symbol?.clone();return r&&"type"in r&&"cim"===r.type?(b(r,{color:l??(i?null:new o.A(x)),innerDotSize:n*(I/t)||1,outerRingSize:I}),r):null}function P(e,n){const t=e.classBreakInfos,l=t.length,o=l<2||!(n>=2)?t[0].symbol.clone():t[l-1].symbol.clone();return e.visualVariables.some((e=>"color"===e.type))&&(o.type.includes("3d")?q(o):_(o)),o}async function R(e,n){if("flow"===e.type)return(0,g.Zo)(e,n);if("pie-chart"===e.type)return new v.A({color:null,outline:e.outline?.width?e.outline:new z.A});let t=null,l=null;if("simple"===e.type)t=e.symbol;else if("class-breaks"===e.type){const n=e.classBreakInfos;t=n&&n[0]&&n[0].symbol,l=n.length>1}else if("unique-value"===e.type){const n=e.uniqueValueInfos;t=n?.[0]?.symbol,l=null!=n&&n.length>1}return!t||function(e){if(e)return(0,i.wk)(e)?!!e.symbolLayers&&e.symbolLayers.some((e=>e&&"fill"===e.type)):e.type.includes("fill");return!1}(t)?null:(t=t.clone(),(n||l)&&(t.type.includes("3d")?q(t):_(t)),t)}function q(e){"line-3d"===e.type?e.symbolLayers.forEach((e=>{e.material={color:C}})):e.symbolLayers.forEach((e=>{"icon"!==e.type||e.resource?.href?e.material={color:x}:(e.material={color:L},e.outline={color:C,size:1.5})}))}function _(e){const n=(0,w.g4)();if("cim"===e.type)(0,d.Fe)(e,new o.A(x));else if(e.type.includes("line"))e.color=C;else if(e.color=n?C:L,"simple-marker"===e.type)if(e.outline){const n=e.outline?.color?.toHex();"#ffffff"===n&&(e.outline.color=C)}else e.outline={color:C,width:1.5}}async function B(e,n,l,o){const i=(await Promise.resolve().then(t.bind(t,15492))).getSizeRangeAtScale(e,l,o),s=i&&E(i);if(!i||!s)return;let a=s.map((n=>function(e,n,t){const l=t.minSize,o=t.maxSize,i=n.minDataValue,r=n.maxDataValue;let s;s=e<=l?i:e>=o?r:(e-l)/(o-l)*(r-i)+i;return s}(n,e,i)));a=(0,r.LI)(a);for(let t=1;t<a.length-1;t++){const i=await T(e,n,a[t],a[t-1],l,o);i&&(a[t]=i[0],s[t]=i[1])}return a}function E(e){const n=e.minSize,t=e.maxSize,l=V,o=(t-n)/(l-1),i=[];for(let r=0;r<l;r++)i.push(n+o*r);return i}async function T(e,n,t,l,o,i){const s=await $(e,n,t,o,i),a=await $(e,n,l,o,i),u=(0,r.lc)(t),c=u.fractional,f=M;let y=u.integer,m=null,p=null;t>0&&t<1&&(m=10**c,y=(0,r.lc)(t*=m).integer);for(let b=y-1;b>=0;b--){const l=10**b;let u=Math.floor(t/l)*l,c=Math.ceil(t/l)*l;null!=m&&(u/=m,c/=m);let y=(u+c)/2;[,y]=(0,r.LI)([u,y,c],{indexes:[1]});const d=await $(e,n,u,o,i),h=await $(e,n,c,o,i),g=await $(e,n,y,o,i),w=(0,r.u5)(s,d,a,null),v=(0,r.u5)(s,h,a,null),z=(0,r.u5)(s,g,a,null);let S=w.previous<=f,k=v.previous<=f;if(S&&k&&(w.previous<=v.previous?(S=!0,k=!1):(k=!0,S=!1)),S?p=[u,d]:k?p=[c,h]:z.previous<=f&&(p=[y,g]),p)break}return p}async function $(e,n,l,o,i){const{getSize:r}=await Promise.resolve().then(t.bind(t,15492));return r(e,l,{scale:o,view:i,shape:"simple-marker"===n.type?n.style:null})}function F(e,n){const t=e.clone();if((0,i.wk)(t))(0,h.$d)(t)||t.symbolLayers.forEach((e=>{"fill"!==e.type&&(e.size=n)}));else if(function(e){return"esri.symbols.SimpleMarkerSymbol"===e.declaredClass}(t))t.size=n;else if(function(e){return"esri.symbols.PictureMarkerSymbol"===e.declaredClass}(t)){const e=t.width,l=t.height;t.height=n,t.width=n*(e/l)}else!function(e){return"esri.symbols.SimpleLineSymbol"===e.declaredClass}(t)?function(e){return"esri.symbols.TextSymbol"===e.declaredClass}(t)&&t.font&&(t.font.size=n):t.width=n;return t}}}]);
//# sourceMappingURL=1338.190a5f04.chunk.js.map