"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[7359],{17359:(e,t,n)=>{n.r(t),n.d(t,{loadGLTFMesh:()=>O});var r=n(69539),o=n(3825),s=n(50076),l=n(87663),a=n(15941),u=n(63919),c=n(44680),i=n(9392),f=n(55855),p=n(79629),d=n(44032),m=n(75257),x=n(63713),g=n(56623),T=n(99773),y=n(88105),h=n(45136),w=n(33328),b=n(6381);Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,n){const r=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,l=t.typedBufferStride,a=n?n.count:t.count;let u=(n?.dstIndex??0)*o,c=(n?.srcIndex??0)*l;for(let i=0;i<a;++i){for(let e=0;e<9;++e)r[u+e]=s[c+e];u+=o,c+=l}}},Symbol.toStringTag,{value:"Module"}));Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,n){const r=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,l=t.typedBufferStride,a=n?n.count:t.count;let u=(n?.dstIndex??0)*o,c=(n?.srcIndex??0)*l;for(let i=0;i<a;++i){for(let e=0;e<16;++e)r[u+e]=s[c+e];u+=o,c+=l}}},Symbol.toStringTag,{value:"Module"}));n(39539);var v=n(52007),A=n(64591),E=n(2e3);function B(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,b.GJ)(e.ElementType)))}var C=n(53848),R=n(11109),S=n(56516),M=n(420),_=n(37040),F=n(50791),I=n(93345);async function O(e,t,n){const u=new R.R(function(e){const t=e?.resolveFile;return t?{busy:!1,request:async(e,n,r)=>{const s=t?.(e)??e,l="image"===n?"image":"binary"===n||"image+type"===n?"array-buffer":"json";return(await(0,o.A)(s,{responseType:l,signal:r?.signal,timeout:0})).data}}:null}(n)),c=(await(0,S.y)(u,t,n,!0)).model,p=c.lods.shift(),h=new Map,w=new Map;c.textures.forEach(((e,t)=>h.set(t,function(e){return new m.A({data:((0,_.x3)(e.data),e.data),wrap:G(e.parameters.wrap)})}(e)))),c.materials.forEach(((e,t)=>w.set(t,function(e,t){const n=new r.A(function(e,t){return(0,f.fA)(L(e[0]),L(e[1]),L(e[2]),t)}(e.color,e.opacity)),o=e.emissiveFactor?new r.A(function(e){return(0,i.fA)(L(e[0]),L(e[1]),L(e[2]))}(e.emissiveFactor)):null,s=e=>e?new x.A({scale:e.scale?[e.scale[0],e.scale[1]]:[1,1],rotation:(0,a.KJ)(e.rotation??0),offset:e.offset?[e.offset[0],e.offset[1]]:[0,0]}):null;return new d.A({color:n,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:o,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:z(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:s(e.colorTextureTransform),normalTextureTransform:s(e.normalTextureTransform),occlusionTextureTransform:s(e.occlusionTextureTransform),emissiveTextureTransform:s(e.emissiveTextureTransform),metallicRoughnessTextureTransform:s(e.metallicRoughnessTextureTransform)})}(e,h))));const b=function(e){let t=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},r=new Map,o=new Map,s=[];for(const a of e.parts){const{attributes:{position:e,normal:u,color:c,tangent:i,texCoord0:f}}=a,p=`\n      ${$(e,r)}/\n      ${$(u,r)}/\n      ${$(c,r)}/\n      ${$(i,r)}/\n      ${$(f,r)}/\n      ${P(a.transform)}\n    `;let d=!1;const m=(0,l.tE)(o,p,(()=>(d=!0,{start:t,length:e.count})));d&&(t+=e.count),u&&(n.normal=!0),c&&(n.color=!0),i&&(n.tangent=!0),f&&(n.texCoord0=!0),s.push({gltf:a,writeVertices:d,region:m})}return{vertexAttributes:{position:B(y.Xm,t),normal:n.normal?B(y.xs,t):null,tangent:n.tangent?B(y.Eq,t):null,color:n.color?B(y.XP,t):null,texCoord0:n.texCoord0?B(y.gH,t):null},parts:s,components:[]}}(p);for(const r of b.parts)j(b,r,w);const{position:v,normal:A,tangent:E,color:M,texCoord0:F}=b.vertexAttributes,I=(0,T.TE)(e,n),O=e.spatialReference.isGeographic?(0,T.TE)(e):I,k=(0,C.UR)({vertexAttributes:{position:v.typedBuffer,normal:A?.typedBuffer,tangent:E?.typedBuffer},vertexSpace:O,spatialReference:e.spatialReference},I,{allowBufferReuse:!0,sourceUnit:"meters"});if(!k)throw new s.A("loadGLTFMesh()","Failed to load mesh from glTF due to projection errors");return{transform:null,vertexSpace:I,components:b.components,spatialReference:e.spatialReference,vertexAttributes:new g.H({...k,color:M?.typedBuffer,uv:F?.typedBuffer})}}function $(e,t){if(null==e)return"-";const n=e.typedBuffer;return`${(0,l.tE)(t,n.buffer,(()=>t.size))}/${n.byteOffset}/${n.byteLength}`}function P(e){return null!=e?e.toString():"-"}function j(e,t,n){t.writeVertices&&function(e,t){const{position:n,normal:r,tangent:o,color:s,texCoord0:l}=e.vertexAttributes,i=t.region.start,{attributes:f,transform:p}=t.gltf,d=f.position.count;if((0,h.d)(n.slice(i,d),f.position,p),null!=f.normal&&null!=r){const e=(0,u.Ge)((0,c.vt)(),p),t=r.slice(i,d);(0,h.c)(t,f.normal,e),(0,a.or)(e)&&(0,h.e)(t,t)}else null!=r&&(0,A.f)(r,0,0,1,{dstIndex:i,count:d});if(null!=f.tangent&&null!=o){const e=(0,u.z0)((0,c.vt)(),p),t=o.slice(i,d);(0,w.a)(t,f.tangent,e),(0,a.or)(e)&&(0,w.n)(t,t)}else null!=o&&(0,E.f)(o,0,0,1,1,{dstIndex:i,count:d});if(null!=f.texCoord0&&null!=l?(0,v.a)(l.slice(i,d),f.texCoord0):null!=l&&(0,v.f)(l,0,0,{dstIndex:i,count:d}),null!=f.color&&null!=s){const e=f.color,t=s.slice(i,d);if(4===e.elementCount)e instanceof y.Eq?(0,w.b)(t,e,255):e instanceof y.XP?(0,E.a)(t,e):e instanceof y.Uz&&(0,w.b)(t,e,1/256);else{(0,E.f)(t,255,255,255,255);const n=y.eI.fromTypedArray(t.typedBuffer,t.typedBufferStride);e instanceof y.xs?(0,h.f)(n,e,255):e instanceof y.eI?(0,A.a)(n,e):e instanceof y.nS&&(0,h.f)(n,e,1/256)}}else null!=s&&(0,E.f)(s.slice(i,d),255,255,255,255)}(e,t);const{indices:r,attributes:o,primitiveType:s,material:l}=t.gltf;let i=(0,M.x)(r||o.position.count,s);const f=t.region.start;if(f){const e=new Uint32Array(i);for(let t=0;t<i.length;t++)e[t]+=f;i=e}e.components.push(new p.A({name:t.gltf.name,faces:i,material:n.get(l),shading:o.normal?"source":"flat",trustSourceNormals:!0}))}function z(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function G(e){return{horizontal:k(e.s),vertical:k(e.t)}}function k(e){switch(e){case I.pF.CLAMP_TO_EDGE:return"clamp";case I.pF.MIRRORED_REPEAT:return"mirror";case I.pF.REPEAT:return"repeat"}}function L(e){return e**(1/F.T)*255}}}]);
//# sourceMappingURL=7359.657d4a25.chunk.js.map