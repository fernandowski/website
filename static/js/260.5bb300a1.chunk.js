"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[260,3106],{37888:(e,t,r)=>{r.d(t,{v:()=>o});var s=r(24387);function o(e){e?.writtenProperties&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:o}=e;(0,s.H)(t)&&o&&t.originOf(r)!==o&&t.updateOrigin(r,o)}))}},24387:(e,t,r)=>{function s(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>s})},90260:(e,t,r)=>{r.d(t,{Xh:()=>Z,w6:()=>N});var s=r(35143),o=r(3825),n=r(50076),a=r(76460),i=r(50346),l=r(90534),c=r(46053),p=(r(81806),r(47249),r(28379)),u=r(85842),d=r(17707),h=r(37888),f=r(76797),y=r(91605),m=r(13312),v=r(13096),w=r(95363),g=r(82332);let S=null;function I(){return S}var x=r(65308),A=r(70652),b=r(79942),_=r(79880),R=r(65526),P=r(24907);const N=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,i.sg)((async(e,t,r)=>{switch(e){case Z.SAVE:return this._save(t);case Z.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return E(t)}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const s=null==e.spatialReference?{...e,spatialReference:E(t)}:e;return f.A.fromJSON(s,r)}const s=t.store,o=E(t);return null==o||null==s?.extent||!Array.isArray(s.extent)||s.extent.some((e=>e<j))?null:new f.A({xmin:s.extent[0],ymin:s.extent[1],xmax:s.extent[2],ymax:s.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,s=null!=r.version?r.version.toString():"";return this.parseVersionString(s)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,v.yG)(this.url,t.name):t.name;let s=t.name;if(!s&&this.url){const e=(0,v.qg)(this.url);null!=e&&(s=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(s=r+" - "+s),(0,v.cr)(s)}set url(e){if(null==e)return void this._set("url",e);const t=(0,v.HZ)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:a.A.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,s){(0,v.LS)(this,e,"layers",t,s)}get parsedUrl(){const e=this._get("url"),t=(0,l.An)(e);return t&&null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,g.F)(this.parsedUrl?.path??"",this.rootNode,e,this.customParameters,this.apiKey,a.A.getLogger(this),t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,r=e.rootPage?.nodes?.[t];if(null==r?.obb?.center||null==r.obb.halfSize)throw new n.A("sceneservice:invalid-node-page","Invalid node page.");if(r.obb.center[0]<j||null==this.fullExtent||this.fullExtent.hasZ)return;const s=r.obb.halfSize,o=r.obb.center[2],a=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.fullExtent.zmin=o-a,this.fullExtent.zmax=o+a}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<j)return;const r=t[2],s=t[3],{fullExtent:o}=this;o&&(o.zmin=r-s,o.zmax=r+s)}}async _fetchService(e){if(null==this.url)throw new n.A("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,o.A)(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,o.A)(this.parsedUrl?.path??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});t.ssl&&this.url&&(this.url=this.url.replace(/^http:/i,"https:"));let r=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(r=!0),r)return this._fetchVoxelServiceLayer();const s=t.data;this.read(s,this._getServiceContext()),this.validateLayer(s)}async _fetchVoxelServiceLayer(e){const t=(await(0,o.A)(this.parsedUrl?.path+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}async _saveAs(e,t){const r={...T,...t};let s=A.default.from(e);if(!s)throw new n.A("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,R.X)(s),s.id&&(s=s.clone(),s.id=null);const o=s.portal||x.A.getDefault();await this._ensureLoadBeforeSave(),s.type=U,s.portal=o;const a=(0,b.m)(s,"portal-item",!0),i={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(i,a,r),this.url&&(s.url=this.url),s.title||(s.title=this.title),O(s,r,M.newItem),await o.signIn(),await(o.user?.addItem({item:s,folder:r?.folder,data:i})),await(0,_.r)(this.resourceReferences,a),this.portalItem=s,(0,h.v)(a),a.portalItem=s,s}async _save(e){const t={...T,...e};if(!this.portalItem)throw new n.A("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,R.X)(this.portalItem),this.portalItem.type!==U)throw new n.A("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${U}"`);await this._ensureLoadBeforeSave();const r=(0,b.m)(this.portalItem,"portal-item",!0),s={layers:[this.write({},r)]};return await Promise.all(r.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(s,r,t),this.url&&(this.portalItem.url=this.url),this.portalItem.title||(this.portalItem.title=this.title),O(this.portalItem,t,M.existingItem),await(0,_.S)(this.portalItem,s,this.resourceReferences,r),(0,h.v)(r),this.portalItem}async _validateAgainstJSONSchema(e,t,r){const s=r?.validationOptions;(0,P.c)(t,{errorName:"sceneservice:save"},{ignoreUnsupported:s?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const o=s?.enabled,i=I();if(o&&i){const t=(await i()).validate(e,r.portalItemLayerType);if(!t.length)return;const o=`Layer item did not validate:\n${t.join("\n")}`;if(a.A.getLogger(this).error(`_validateAgainstJSONSchema(): ${o}`),"throw"===s.failPolicy){const e=t.map((e=>new n.A("sceneservice:schema-validation",e)));throw new n.A("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:e})}}}};return(0,s._)([(0,c.MZ)(w.id)],t.prototype,"id",void 0),(0,s._)([(0,c.MZ)({type:m.A})],t.prototype,"spatialReference",void 0),(0,s._)([(0,p.w)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,s._)([(0,c.MZ)({type:f.A})],t.prototype,"fullExtent",void 0),(0,s._)([(0,p.w)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:y.A})],t.prototype,"heightModelInfo",void 0),(0,s._)([(0,c.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,s._)([(0,c.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],t.prototype,"version",void 0),(0,s._)([(0,p.w)("version",["store.version"])],t.prototype,"readVersion",null),(0,s._)([(0,c.MZ)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,s._)([(0,c.MZ)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,s._)([(0,c.MZ)({type:String})],t.prototype,"title",void 0),(0,s._)([(0,p.w)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,s._)([(0,p.w)("service","title",["name"])],t.prototype,"readTitleService",null),(0,s._)([(0,c.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,s._)([(0,c.MZ)(w.OZ)],t.prototype,"url",null),(0,s._)([(0,d.K)("url")],t.prototype,"writeUrl",null),(0,s._)([(0,c.MZ)()],t.prototype,"parsedUrl",null),(0,s._)([(0,c.MZ)({readOnly:!0})],t.prototype,"store",void 0),(0,s._)([(0,c.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,s._)([(0,u.$)("esri.layers.mixins.SceneService")],t),t},j=-1e38;function E(e){if(null!=e.spatialReference)return m.A.fromJSON(e.spatialReference);const t=e.store,r=t.indexCRS||t.geographicCRS,s=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=s?new m.A(s):null}function O(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const s=t.getTypeKeywords();for(const o of s)e.typeKeywords.push(o);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===M.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}var M,L;(L=M||(M={}))[L.existingItem=0]="existingItem",L[L.newItem=1]="newItem";const U="Scene Service",T={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var Z;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(Z||(Z={}))},82332:(e,t,r)=>{r.d(t,{F:()=>n});var s=r(3825),o=r(50076);async function n(e,t,r,n,a,i,l){let c=null;if(null!=r){const t=`${e}/nodepages/`,o=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,s.A)(o,{query:{f:"json",...n,token:a},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(h){null!=i&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",o,h),c=h}}if(!t)return null;const p=t?.split("/").pop(),u=`${e}/nodes/`,d=u+p;try{return{type:"node",rootNode:(await(0,s.A)(d,{query:{f:"json",...n,token:a},responseType:"json",signal:l})).data,urlPrefix:u}}catch(h){throw new o.A("sceneservice:root-node-missing","Root node missing.",{pageError:c,nodeError:h,url:d})}}},33106:(e,t,r)=>{r.d(t,{addOrUpdateResources:()=>i,bg:()=>h,cL:()=>d,fetchResources:()=>a,removeAllResources:()=>c,removeResource:()=>l});var s=r(3825),o=r(50076),n=r(90534);async function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const s=(0,n.fj)(e.itemUrl,"resources"),{start:o=1,num:a=10,sortOrder:i="asc",sortField:l="resource"}=t,c={query:{start:o,num:a,sortOrder:i,sortField:l,token:e.apiKey},signal:r?.signal},p=await e.portal.request(s,c);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((t=>{let{created:r,size:s,resource:o}=t;return{created:new Date(r),size:s,resource:e.resourceFromPath(o)}}))}}async function i(e,t,r,s){const a=new Map;for(const{resource:n,content:l,compress:c,access:u}of t){if(!n.hasPath())throw new o.A(`portal-item-resource-${r}:invalid-path`,"Resource does not have a valid path");const[e,t]=p(n.path),s=`${e}/${c??""}/${u??""}`;a.has(s)||a.set(s,{prefix:e,compress:c,access:u,files:[]}),a.get(s).files.push({fileName:t,content:l})}await e.load(s);const i=(0,n.fj)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:o,compress:n,access:l,files:c}of a.values()){const t=25;for(let r=0;r<c.length;r+=t){const a=c.slice(r,r+t),p=new FormData;o&&"."!==o&&p.append("resourcesPrefix",o),n&&p.append("compress","true"),l&&p.append("access",l);let u=0;for(const{fileName:e,content:t}of a)p.append("file"+ ++u,t,e);p.append("f","json"),await e.portal.request(i,{method:"post",body:p,signal:s?.signal})}}}async function l(e,t,r){if(!t.hasPath())throw new o.A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const s=(0,n.fj)(e.userItemUrl,"removeResources");await e.portal.request(s,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function c(e,t){await e.load(t);const r=(0,n.fj)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function u(e){const[t,r]=function(e){const t=(0,n.Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[s,o]=p(t);return[s,o,r]}async function d(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,s.A)(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,s]=u(e.path);return e.portalItem.resourceFromPath((0,n.fj)(r,t+s))}},79880:(e,t,r)=>{r.d(t,{S:()=>l,r:()=>i});var s=r(50076),o=r(50346),n=r(49723),a=r(33106);async function i(e,t,r){const s=await c(e,t,r);await p(s,t,r)}async function l(e,t,r,s,o){const n=await c(r,s,o);await e.update({data:t}),await p(n,s,o)}async function c(e,t,i){if(!t?.resources)return;const l=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const c=new Set(t.resources.toKeep.map((e=>e.resource.path))),p=new Set,u=[];c.forEach((t=>{l.delete(t),e.paths.push(t)}));const d=[],h=[],f=[];for(const r of t.resources.toUpdate)if(l.delete(r.resource.path),c.has(r.resource.path)||p.has(r.resource.path)){const{resource:t,content:s,finish:o}=r,i=(0,a.bg)(t,(0,n.lk)());e.paths.push(i.path),d.push({resource:i,content:await(0,a.cL)(s),compress:r.compress}),o&&f.push((()=>o(i)))}else{e.paths.push(r.resource.path),h.push({resource:r.resource,content:await(0,a.cL)(r.content),compress:r.compress});const t=r.finish;t&&f.push((()=>t(r.resource))),p.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),l.has(r.resource.path))l.delete(r.resource.path);else{d.push({resource:r.resource,content:await(0,a.cL)(r.content),compress:r.compress});const e=r.finish;e&&f.push((()=>e(r.resource)))}if(d.length||h.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,33106));await e(t.portalItem,d,"add",i),await e(t.portalItem,h,"update",i)}if(f.forEach((e=>e())),0===u.length)return l;const y=await(0,o.Ol)(u);if((0,o.Te)(i),y.length>0)throw new s.A("save:resources","Failed to save one or more resources",{errors:y});return l}async function p(e,t,r){if(!e||!t.portalItem)return;const s=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);s.push(e.portalItem.removeResource(e,r))}await(0,o.Lx)(s)}},65526:(e,t,r)=>{r.d(t,{X:()=>a});var s=r(86560),o=r(50076),n=r(90924);function a(e){if(s.A.apiKey&&(0,n.Q)(e.portal.url))throw new o.A("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}},24907:(e,t,r)=>{r.d(t,{c:()=>a,d:()=>o});var s=r(50076);async function o(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const n=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function a(e,t,r){let o=(e.messages??[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:r,details:o}=e;return new s.A(t,r,o)}));if(e.blockedRelativeUrls&&(o=o.concat(e.blockedRelativeUrls.map((e=>new s.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:s}=r;e&&(o=o.filter((e=>{let{name:r}=e;return!(n.has(r)||t.includes(r))}))),s&&(o=o.filter((e=>"web-document-write:property-required"!==e.name)))}if(o.length>0)throw new s.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}}}]);
//# sourceMappingURL=260.5bb300a1.chunk.js.map