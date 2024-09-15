"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[9766],{21479:(e,t,i)=>{i.d(t,{f:()=>a});var r=i(20664),s=i(482),n=i(14556),o=i(80963);function a(e,t,i,a){if(null==t||null==a)return!1;const l=(0,s.Qk)(t,s.Wv),c=(0,s.Qk)(a,s.zp);if(l===c&&l!==s.rz.UNKNOWN||(0,o.aI)(t,a))return i[0]=1,i[1]=1,i[2]=1,!0;if(l===s.rz.SPHERICAL_ECEF){const t=(0,r.l)(e),o=t/Math.sqrt(e[0]*e[0]+e[1]*e[1]),a=t/n.$O.radius;if(c===s.rz.WEB_MERCATOR)return i[0]=o*a,i[1]=o*a,i[2]=1,!0;if(c===s.rz.WGS84||c===s.rz.CGCS2000){const e=s.iE;return i[0]=e*o*a,i[1]=e*a,i[2]=1,!0}}else if(l===s.rz.PLATE_CARREE){if(c===s.rz.WGS84||c===s.rz.CGCS2000)return i[0]=s.iE,i[1]=s.iE,i[2]=1,!0;if(c===s.rz.WEB_MERCATOR){const t=e[1]/n.$O.radius;return i[0]=1,i[1]=1/Math.cos(t),i[2]=1,!0}}return!1}},79115:(e,t,i)=>{i.d(t,{z:()=>a});var r=i(15941),s=i(9392),n=i(482),o=i(14556);function a(e,t,i,r){if(null==t||null==r)return!1;const s=(0,n.t_)(t,r,d);if(s.projector===n.pO)return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],!0;if(null==s.projector)return!1;const{source:a,dest:u}=s;if(u.spatialReferenceId===n.rz.WEB_MERCATOR){const t=n.w5[a.spatialReferenceId][n.rz.WGS84];return null!=t&&(t(e,0,c,0),(0,n.s7)(c,0,i,0),i[3]=l(c[1],e[2],e[3],o.$O.radius),!0)}if(a.spatialReferenceId!==n.rz.WGS84&&a.spatialReferenceId!==n.rz.CGCS2000||u.spatialReferenceId!==n.rz.PLATE_CARREE){s.projector(e,0,i,0);const t=a.metersPerUnit??1,r=u.metersPerUnit??1;i[3]=e[3]*t/r}else{const t=n.w5[a.spatialReferenceId][n.rz.SPHERICAL_ECEF],r=n.w5[n.rz.SPHERICAL_ECEF][n.rz.PLATE_CARREE];let c=e[3];null!=t&&null!=r&&(c=l(e[1],e[2],e[3],o.$O.radius)),s.projector(e,0,i,0),i[3]=c}return!0}function l(e,t,i,r){const s=r+t;if(s<r/2||i>s)return Number.MAX_VALUE;const n=Math.abs(u*e)+Math.asin(i/s);return n>=Math.PI/2?Number.MAX_VALUE:i/Math.cos(n)}const c=(0,s.vt)(),d=(0,n.Ur)(),u=(0,r.kU)(1)},28586:(e,t,i)=>{var r,s,n,o,a,l,c,d,u,h,p,m,g,f,y;i.d(t,{CP:()=>n,EF:()=>f,El:()=>c,LU:()=>r,Nt:()=>d,Pl:()=>b,Qg:()=>y,TJ:()=>g,_N:()=>a,eN:()=>o,h7:()=>s,vE:()=>v}),function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"}(r||(r={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(s||(s={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.NotSet="NotSet"}(n||(n={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet"}(o||(o={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(a||(a={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(l||(l={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(c||(c={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(d||(d={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(u||(u={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(h||(h={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(p||(p={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(m||(m={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(g||(g={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(f||(f={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(y||(y={}));const b=-1,v=-2},99766:(e,t,i)=>{i.r(t),i.d(t,{default:()=>me});var r=i(35143),s=i(50076),n=i(81806),o=i(76460),a=i(30726),l=i(68134),c=i(52394),d=i(46053),u=(i(47249),i(85842)),h=i(63919),p=i(44680),m=i(34761),g=i(13191),f=i(4336),y=i(20664),b=i(9392),v=i(55855),_=i(34111),w=i(5809),E=i(21479),x=i(14487),M=i(88105),C=i(28586),R=i(12482),T=i(64465),P=i(65768);class S extends P.P{constructor(e,t,i,r,s,n,o){super(e,0,0,0,t),this.nodesCached=i,this.vboMB=r,this.textureMB=s,this.vboMBCached=n,this.textureMBCached=o}}var U=i(57662),A=i(83491),N=i(75228),O=i(35493),I=i(83490),L=i(93345);const F={[C.El.Points]:null,[C.El.Lines]:null,[C.El.LineStrip]:null,[C.El.Triangles]:L.WR.TRIANGLES,[C.El.TriangleStrip]:L.WR.TRIANGLE_STRIP,[C.El.NotSet]:null},H={[C._N.Opaque]:I.sf.Opaque,[C._N.Mask]:I.sf.Mask,[C._N.Blend]:I.sf.Blend},B={[C.TJ.Back]:I.s2.Back,[C.TJ.Front]:I.s2.Front,[C.TJ.None]:I.s2.None,[C.TJ.NotSet]:I.s2.Back},V={[C.Nt.WrapYBit]:{s:L.pF.CLAMP_TO_EDGE,t:L.pF.REPEAT},[C.Nt.WrapXBit]:{s:L.pF.REPEAT,t:L.pF.CLAMP_TO_EDGE},[C.Nt.WrapXy]:{s:L.pF.REPEAT,t:L.pF.REPEAT},[C.Nt.None]:{s:L.pF.CLAMP_TO_EDGE,t:L.pF.CLAMP_TO_EDGE},[C.Nt.NotSet]:{s:L.pF.CLAMP_TO_EDGE,t:L.pF.CLAMP_TO_EDGE}},z={[C.LU.U8]:1,[C.LU.I8]:1,[C.LU.U16]:2,[C.LU.I16]:2,[C.LU.U32]:4,[C.LU.I32]:4,[C.LU.F32]:4,[C.LU.F64]:8,[C.LU.Utf8String]:1,[C.LU.NotSet]:1};var D=i(39356),j=i(45270),k=i(29808),G=i(3112),W=i(48168);class Z{constructor(e){this.layerUid=[],this.type=G.dz.TILES3D,this.slicePlaneEnabled=!1,this.isGround=!0,this.layerView=e,this.layerUid.push(e.layer.uid)}intersect(e,t,i,r,s,n){const o=e.results,a=e.options.store===G.oH.ALL;if(e.options.filteredLayerUids.includes(this.layerView.layer.uid))return;const l=this.layerView.view._stage.renderView.componentObjectCollection,c=new W.JG(n??!1,e.options.normalRequired);this.layerView.objects.forEach((s=>{s.visible&&s.intersectionGeometry&&l.intersect(s,i,r,e.tolerance,null,c,((s,n,l,c)=>{if(n>=0){if(null!=t&&!t(i,r,n))return;const s=e=>{const t=new j.kV(this.layerView.layer.uid,(()=>this._createTiles3DGraphic(this.layerView.layer,{})));e.set(this.type,t,n,l)};if(this.isGround&&(null==o.ground.dist||n<o.ground.dist)&&s(o.ground),e.options.isFiltered)return;if((null==o.min.dist||n<o.min.dist)&&s(o.min),(null==o.max.dist||n>o.max.dist)&&s(o.max),a){const t=(0,k.G7)(e.ray);s(t),e.results.all.push(t)}}}))}))}_createTiles3DGraphic(e,t){return new D.A({layer:e,sourceLayer:e,attributes:t})}}var $,q,J=i(95225),X=i(59231),Y=i(10231),K=i(16449),Q=i(55002),ee=i(91555),te=i(657),ie=i(97808),re=i(81148),se=i(50468),ne=i(25672),oe=i(96897),ae=i(66470),le=i(52757),ce=i(91196),de=i(90992);(q=$||($={}))[q.API=1]="API",q[q.VerboseAPI=2]="VerboseAPI",q[q.Error=3]="Error";class ue{constructor(){this.handle=0,this.isVisible=!1,this.components=[],this.texMemoryUsage=0,this.vboMemoryUsage=0,this.cpuMemoryUsage=0,this.textures=[]}totalMemory(){return this.texMemoryUsage+this.vboMemoryUsage+this.cpuMemoryUsage}}function he(e){return Math.round(e/1048.576)/1e3}let pe=class extends((0,A.w)(ce.A)){constructor(){super(...arguments),this.type="integrated-mesh-3dtiles",this._visibleGeometryChangedSchedulerHandle=null,this._wasmLayerId=-1,this.ignoresMemoryFactor=!1,this.drapeTargetType=U.sv.WithoutRasterImage,this._lyrHandleToObjects=new Map,this._initialCullFace=new Map,this._suspendedHandle=null,this._dbgFlags=new Set}initialize(){if(this._dbgFlags.add($.Error),this._dbg($.VerboseAPI,"Tiles3DLayerView3D initialize() called"),!this._canProjectWithoutEngine())throw new s.A("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const e=(0,N.Bk)(this).then((e=>{this._intersectionHandler=new Z(this),this.view.sceneIntersectionHelper.addIntersectionHandler(this._intersectionHandler),this._updatingHandles.add((()=>this.slicePlaneEnabled),(e=>this._slicePlaneEnabledChange(e))),this._elevationProvider=new O.e({view:this.view,layerElevationSource:this,intersectionHandler:this._intersectionHandler}),this.view.elevationProvider.register("im",this._elevationProvider),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this),this._wasmLayerId=e;const t=this.view.resourceController.memoryController.newCache(`t3d-${this.uid}`,(e=>this._onRemoveFromCache(e)));this._memCache=t,this.addHandles([(0,l.wB)((()=>this.layer.elevationInfo),(e=>this._elevationInfoChanged(e)))]),this._suspendedHandle=(0,l.wB)((()=>this.suspended),(e=>{const t=(0,N.pw)(this.view);t&&t.setEnabled(this,!e)}),l.Vh)})).catch((e=>{if((0,N.r8)(this),this._wasmLayerId=-1,e===C.Pl)throw new s.A("tiles3d:addLayer-failure","The 3d tiles layer description was invalid.",{});if(e===C.vE)throw new s.A("tiles3d:addLayer-failure","The 3d tiles layer web assembly module failed to download.",{})}));this.addResolvingPromise(e)}destroy(){this._dbg($.VerboseAPI,"Tiles3DLayerView3D destroy() called"),(0,N.r8)(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null),this._intersectionHandler&&(this.view.sceneIntersectionHelper.removeIntersectionHandler(this._intersectionHandler),this._intersectionHandler=null),this._elevationProvider&&(this._elevationProvider.objectsChanged(this._obbs),this.view.elevationProvider.unregister(this._elevationProvider),this._elevationProvider=null),this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this),this._lyrHandleToObjects.forEach((e=>this.freeObject(e))),this._lyrHandleToObjects.clear(),this._initialCullFace.clear(),this._memCache=(0,a.pR)(this._memCache),this._updatingHandles=(0,a.pR)(this._updatingHandles),this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle&&(this._visibleGeometryChangedSchedulerHandle.remove(),this._visibleGeometryChangedSchedulerHandle=null)}_visibleGeometryChanged(){null==this._visibleGeometryChangedSchedulerHandle&&(this._visibleGeometryChangedSchedulerHandle=(0,c._)((()=>{this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle=null})))}_slicePlaneEnabledChange(e){this._intersectionHandler&&(this._intersectionHandler.slicePlaneEnabled=e),this.objects.forEach((t=>{const i=this._collection.getMaterial(t);i.commonMaterialParameters.hasSlicePlane=e,i.commonMaterialParameters.cullFace=e?I.s2.None:this._initialCullFace.get(t)}))}_elevationInfoChanged(e){const t=(0,N.pw)(this.view);t&&t.setLayerOffset(this,(0,R.M7)(e))}get _obbs(){return this.objects.map((e=>this._collection.getComponentObb(e)))}get wasmLayerId(){return this._wasmLayerId}get usedMemory(){let e=0;return this._lyrHandleToObjects.forEach((t=>{t.isVisible&&(e+=t.totalMemory())})),e}get unloadedMemory(){let e=0;return this._lyrHandleToObjects.forEach((t=>{t.isVisible||(e+=t.totalMemory())})),e}get visibleAtCurrentScale(){return(0,de.E5)(this.layer.effectiveScaleRange,this.view.terrainScale)}get performanceInfo(){let e=0,t=0,i=0,r=0,s=0,n=0;return this._lyrHandleToObjects.forEach((o=>{o.isVisible?(e+=o.texMemoryUsage,t+=o.vboMemoryUsage,s++):(i+=o.texMemoryUsage,r+=o.vboMemoryUsage,n++)})),new S(this.usedMemory,s,n,he(t),he(e),he(r),he(i))}_canProjectWithoutEngine(){if(this.view.state.viewingMode===T.RT.Local){const e=this.view.renderSpatialReference?.isWebMercator?3857:this.view.renderSpatialReference?.wkid??-1;if(3857!==e&&32662!==e)return!1}return!0}get _stage(){return this.view._stage}get _collection(){return this._stage.renderView.componentObjectCollection}get elevationOffset(){return(0,R.M7)(this.layer.elevationInfo)}get elevationRange(){const e=this.fullExtent;return e?.zmin&&e?.zmax?new J.H(e.zmin,e.zmax):null}getElevationRange(e){return null}get fullExtent(){return this.layer.fullExtent}get objects(){return Array.from(this._lyrHandleToObjects.values()).reduce(((e,t)=>e.concat(t.components)),new Array)}isUpdating(){const e=(0,N.pw)(this.view);return!(this._wasmLayerId<0||null==e)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}async createRenderable(e){const t=e.meshData;if(null==t.data)throw new Error("meshData.data undefined");if(t.desc=JSON.parse(t.desc),null==t.desc)throw new Error("meshData.desc undefined");const i=(0,b.ci)(t.desc.origin),r=new Array,s=new Map,o=new ue;o.handle=e.handle,this._lyrHandleToObjects.set(e.handle,o);const a=this.view.basemapTerrain.spatialReference;let l,c;if("global"===this.view.viewingMode){const e=(0,g.vt)();(0,w.l)(_.fv,i,e,a),l=(0,h.z0)((0,p.vt)(),e),c=(0,h.B8)((0,p.vt)(),l)}else l=p.zK,c=p.zK;const d=(0,g.vt)();(0,m.Tl)(d,d,i);const u=(0,m.sC)((0,b.vt)(),d);let M=null;const R=(0,b.vt)();if(t.desc.obb){const e=t.desc.obb.quaternion;M=new X.ab(t.desc.obb.center,t.desc.obb.halfSize,(0,f.fA)(e[0],e[1],e[2],e[3]))}for(let h=0;h<t.desc.prims.length;h++){const e=t.desc.prims[h];if(this._dbg($.VerboseAPI,JSON.stringify(e)),e.ptype===C.El.Lines)continue;if(null==F[e.ptype]||null==t.data){this._dbg($.VerboseAPI,"[Unsupported Feature] Unsupported primitive mode ("+e.ptype+"). Skipping primitive.");continue}const d=t.desc?.materials&&null!=e.materialId?t.desc.materials[e.materialId]:null,m=null!=d?d.lightingModel:C.EF.Unlit,g=!(0,n.A)("disable-feature:im-shading"),{positionView:f,positionAttr:_,normalsView:w,normalsAttr:T,colorAttr:P,texCoord0Attr:S,indicesView:U}=this.getBufferViews(e,t.data.buffer,l,g);if(null==_||null==f||null==U)continue;const A={colors:null!=P,textureCoordinates:null!=S?ie.q.Default:ie.q.None,hasNormals:null!=w,needsNormals:g},N=_.data.length/_.size,O=(e,t)=>!e||e.data.length/e.size===N||(this._dbg($.Error,`${t} !== numPos. Skipping primitive.`),!1);if(!O(S,"numTexcoord")||!O(P,"numColors")||!O(T,"normals"))continue;const L=(0,K.h)(A);if(null!=M?M=M.clone():(M=(0,X.OX)(_),(0,y.g)(R,M.center,i),M.center=R),l!==p.zK)for(let t=0;t<f.count;t++)f.getVec(t,R),(0,y.t)(R,R,l),f.setVec(t,R);const V=L.createBuffer(_.data.length),z=new Map([[ae.r.POSITION,_]]);null!=S&&z.set(ae.r.UV0,S),null!=P&&z.set(ae.r.COLOR,P),null!=T&&z.set(ae.r.NORMALCOMPRESSED,T),z.forEach(((e,t)=>{null!=e&&(0,le.zC)(t,e,null,null,V,0)}));const D=new Uint32Array([0,U.typedBuffer.length]),j={vertices:{data:V.buffer,count:V.byteLength/L.stride,layoutParameters:A},positionData:{positions:f.typedBuffer,indices:U.typedBuffer},indices:U.typedBuffer,componentOffsets:D};o.cpuMemoryUsage+=f.count,o.cpuMemoryUsage+=U.count;const k=this.view.renderSpatialReference,G=(0,b.vt)(),W=[1,1,1];(0,E.f)(u,k,W,a)||this._dbg($.Error,"Unsupported coordinate system for IM overlay"),(0,x.F)(u,k,G,a);const Z=this._collection.createObject(new Y.i((0,v.fA)(G[0],G[1],W[0],W[1]),new Q.d(u,c),M,j));d&&this._collection.updateMaterial(Z,(e=>{e.baseColor=d.baseColorFactor,e.usePBR=m===C.EF.Pbr,e.hasParametersFromSource=!1,e.baseColorTexture=this._getTexture(d.baseColorTex,t,s),e.usePBR&&(e.mrrFactors=[d.metallicFactor,d.roughnessFactor,0],e.emissiveFactor=d.emissiveFactor??[0,0,0],e.metallicRoughnessTexture=this._getTexture(d.metalTex,t,s),e.emissionTexture=this._getTexture(d.emissiveTex,t,s),e.occlusionTexture=this._getTexture(d.occlusionTex,t,s),e.normalTexture=this._getTexture(d.normalTex,t,s)),e.objectOpacity=0,e.alphaDiscardMode=I.sf.Mask;const i=[];e.baseColorTexture&&i.push(e.baseColorTexture.loadPromise),e.usePBR&&e.metallicRoughnessTexture&&i.push(e.metallicRoughnessTexture.loadPromise),e.usePBR&&e.emissionTexture&&i.push(e.emissionTexture.loadPromise),e.usePBR&&e.occlusionTexture&&i.push(e.occlusionTexture.loadPromise),e.usePBR&&e.normalTexture&&i.push(e.normalTexture.loadPromise);const n=Promise.all(i);r.push(n),n.then((()=>{e.alphaDiscardMode=H[d.alphaMode],e.objectOpacity=1,o.texMemoryUsage+=e.baseColorTexture?.glTexture?.usedMemory||0,e.usePBR&&(o.texMemoryUsage+=e.metallicRoughnessTexture?.glTexture?.usedMemory||0,o.texMemoryUsage+=e.emissionTexture?.glTexture?.usedMemory||0,o.texMemoryUsage+=e.occlusionTexture?.glTexture?.usedMemory||0,o.texMemoryUsage+=e.normalTexture?.glTexture?.usedMemory||0)})),e.commonMaterialParameters.doubleSided=d.isDoubleSided,e.commonMaterialParameters.cullFace=d.faceCulling?B[d.faceCulling]:I.s2.Back,this._initialCullFace.set(Z,e.commonMaterialParameters.cullFace),e.commonMaterialParameters.hasSlicePlane=this.slicePlaneEnabled,e.componentParameters.castShadows=ee.d0.All,e.textureAlphaCutoff=d.alphaCutoff??.1,e.alphaDiscardMode=H[d.alphaMode],e.isIntegratedMesh=!0,e.polygonOffsetEnabled=!1,e.hasOccludees=!1,e.ellipsoidMode=(0,re.V)(this.view.spatialReference)})),o.components.push(Z),o.vboMemoryUsage+=this._collection.getObjectGPUMemoryUsage(Z)}if(await Promise.all(r),s.forEach((e=>{o.textures.push(e)})),!this._memCache)throw new Error("no memCache");return this._memCache.put(`${o.handle}`,o,o.totalMemory()),{memUsageBytes:o.totalMemory()}}freeRenderable(e){const t=this._lyrHandleToObjects.get(e);t&&(this.freeObject(t),this._lyrHandleToObjects.delete(e))}freeObject(e){this._memCache&&this._memCache.pop(`${e.handle}`),e.components.forEach((t=>{e.textures.forEach((e=>{this._stage.remove(e)})),this._collection.destroyObject(t),this._initialCullFace.delete(t)}))}setRenderableVisibility(e,t,i){if(this._memCache){for(let r=0;r<i;++r){const i=e[r],s=t[r];if(!s)continue;const n=this._lyrHandleToObjects.get(i);n&&(this._visibleGeometryChanged(),n.isVisible=s,n.components.forEach((e=>{this._collection.setObjectVisibility(e,s),this._elevationProvider.objectChanged(this._collection.getComponentObb(e))})),this._memCache.pop(`${i}`))}for(let r=0;r<i;++r){const i=e[r],s=t[r];if(s)continue;const n=this._lyrHandleToObjects.get(i);n&&(this._visibleGeometryChanged(),n.isVisible=s,n.components.forEach((e=>{this._collection.setObjectVisibility(e,s),this._elevationProvider.objectChanged(this._collection.getComponentObb(e))})),this._memCache.put(`${i}`,n,n.totalMemory()))}}}_getTexture(e,t,i){let r=null;if(e&&t.desc?.images&&t.data?.buffer){const s=t.desc.images[e?.imageId];if(r=i.get(s),!r&&s){const n=this._stage.renderView.renderingContext.parameters.maxMaxAnisotropy,o=n>1,a=V[e.wrapMode??C.Nt.None];let l=s.alpha?4:3;const c=new Uint8Array(t.data.buffer,s.data.byteOffset,s.data.byteCount);let d=null,u=null,h=null;switch(s.format){case C.h7.Raw:s.pixelFormat===C.CP.R8?(d=c.buffer,l=1,u=""):s.pixelFormat===C.CP.Rgb8?(d=c.buffer,l=3,u=""):s.pixelFormat===C.CP.Rgba8&&(d=c.buffer,l=4,u="");break;case C.h7.Dxt1:d=c.buffer,l=3,u=I.JS.DDS_ENCODING;break;case C.h7.Dxt5:d=c.buffer,l=4,u=I.JS.DDS_ENCODING;break;case C.h7.Png:u="image/png",h=document.createElement("img");break;case C.h7.Jpeg:u="image/jpeg",h=document.createElement("img");break;case C.h7.Etc2:u="image/ktx",h=document.createElement("img");break;case C.h7.Astc:this._dbg($.Error,"Astc texture not supported");break;case C.h7.Pvrtc:this._dbg($.Error,"Pvrtc texture not supported")}if(h&&u){const e=new Blob([c],{type:u});h.src=URL.createObjectURL(e),d=h}d&&null!=u&&(r=new oe.g(d,{mipmap:o,maxAnisotropy:n,encoding:u,wrap:a,components:l,noUnpackFlip:!0,width:s.mip0Width,height:s.mip0Height}),this._stage.add(r),i.set(s,r))}}return r?new te.Y(this.view._stage.renderView.textures,r.id):null}getBufferViews(e,t,i,r){let s,n,o,a,l,c,d,u=null;for(let p=0;p<e.atrbs.length;p++){const d=e.atrbs[p],m=d.view,g=void 0,f=m.byteOffset+m.byteCount,y=m.byteCount/z[m.type],b=[...Array(y).keys()].map((e=>e));try{switch(d.sem){case C.eN.Position:3!==m.ncomp||m.type!==C.LU.F32?this._dbg($.Error,"[Unsupported Feature] Unsupported view for Position ("+m+")"):(s=new M.xs(t,m.byteOffset,g,f),n=new se.n(s.typedBuffer,b,3));break;case C.eN.Normal:if(3!==m.ncomp||m.type!==C.LU.F32)this._dbg($.Error,"[Unsupported Feature] Unsupported view for Normal ("+m+")");else if(r){const e=new M.xs(t,m.byteOffset,g,f),r=(0,ne._l)(e.typedBuffer,i);l=new M.Qt(r),c=new se.n(l.typedBuffer,b,2)}break;case C.eN.TexCoord:2!==m.ncomp||m.type!==C.LU.F32?this._dbg($.Error,"[Unsupported Feature] Unsupported view for Texcoord ("+m+")"):void 0===a&&(a=new se.n(new M.gH(t,m.byteOffset,g,f).typedBuffer,b,2));break;case C.eN.Color:4===m.ncomp?(m.type===C.LU.F32&&(u=new M.Eq(t,m.byteOffset,g,f)),m.type===C.LU.U8&&(u=new M.XP(t,m.byteOffset,g,f)),m.type===C.LU.U16&&(u=new M.Uz(t,m.byteOffset,g,f))):3===m.ncomp&&(m.type===C.LU.F32&&(u=new M.xs(t,m.byteOffset,g,f)),m.type===C.LU.U8&&(u=new M.eI(t,m.byteOffset,g,f)),m.type===C.LU.U16&&(u=new M.nS(t,m.byteOffset,g,f))),null==u?this._dbg($.VerboseAPI,"[Unsupported Feature] Unsupported view for Color ("+m+")"):o=new se.n(u.typedBuffer,b,m.ncomp);break;case C.eN.FeatureIndex:break;default:this._dbg($.VerboseAPI,"[Unsupported Feature] Unsupported semantic ("+d.sem+"). Skipping vertex attribute.")}}catch(h){this._dbg($.VerboseAPI,"Error Creating buffer ("+h+"). Skipping vertex attribute.")}}if(e.index){const i=e.index.view,r=void 0,s=i.byteOffset+i.byteCount;switch(e.index.view.type){case C.LU.U16:d=new M.h(t,i.byteOffset,r,s);break;case C.LU.U32:d=new M.P(t,i.byteOffset,r,s);break;case C.LU.U8:default:this._dbg($.Error,"[Unsupported Feature] index type not supported ("+i.type+").")}}if(null==d&&null!=s){const e=s.count;if(e<65535){const t=new Uint16Array(e);d=new M.h(t)}else{const t=new Uint32Array(e);d=new M.P(t)}for(let t=0;t<e;t++)d.set(t,t)}return{positionView:s,positionAttr:n,colorAttr:o,texCoord0Attr:a,indicesView:d,normalsView:l,normalsAttr:c}}_onRemoveFromCache(e){const t=(0,N.pw)(this.view);t&&t.onRenderableEvicted(this,e.handle,e.totalMemory()),this.freeRenderable(e.handle)}_dbg(e,t){this._dbgFlags.has(e)&&(e===$.Error?o.A.getLogger(this).error(t):o.A.getLogger(this).warn(t))}};(0,r._)([(0,d.MZ)()],pe.prototype,"_visibleGeometryChangedSchedulerHandle",void 0),(0,r._)([(0,d.MZ)()],pe.prototype,"layer",void 0),(0,r._)([(0,d.MZ)({readOnly:!0})],pe.prototype,"visibleAtCurrentScale",null),(0,r._)([(0,d.MZ)()],pe.prototype,"elevationOffset",null),pe=(0,r._)([(0,u.$)("esri.views.3d.layers.IntegratedMesh3DTilesLayerView3D")],pe);const me=pe},83491:(e,t,i)=>{i.d(t,{w:()=>d});var r=i(35143),s=i(54901),n=i(50346),o=i(68134),a=i(46053),l=(i(81806),i(76460),i(47249),i(85842)),c=i(47700);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,c.jI)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,s.hA)((()=>e.abort()))),await(0,o.C_)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,n.Te)(t);const i=(0,c.Hu)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}};return(0,r._)([(0,a.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,a.MZ)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,r._)([(0,l.$)("esri.views.3d.layers.LayerView3D")],t),t}},35493:(e,t,i)=>{i.d(t,{e:()=>_});var r=i(35143),s=i(91967),n=i(54099),o=i(76460),a=i(46053),l=(i(81806),i(47249),i(85842)),c=i(34761),d=i(13191),u=i(20664),h=i(9392),p=i(79115),m=i(2413),g=i(93582),f=i(95225),y=i(15255),b=i(29808),v=i(3112);let _=class extends(n.A.EventedMixin(s.A)){constructor(e){super(e),this._tmpEvent=new y.L,this._renderCoordsHelper=e.view.renderCoordsHelper,this._renderSR=this._renderCoordsHelper.spatialReference,this._layerElevationSource=e.layerElevationSource}initialize(){this._intersector=(0,b.hz)(this.view.state.viewingMode),this._intersector.options.store=v.oH.MIN,this._intersector.options.normalRequired=!1,this._tmpEvent.context=this.intersectionHandler.isGround?"ground":"scene"}get spatialReference(){return this.view?.elevationProvider?.spatialReference}getElevation(e,t,i,r){const s=this._renderCoordsHelper,n=(0,u.s)(x,e,t,i);if(!s.toRenderCoords(n,r,n))return o.A.getLogger(this).error("could not project point to compute elevation"),null;const{layerElevationSource:a,_intersector:l,intersectionHandler:c}=this,d=a.fullExtent,h=null!=d&&Number.isFinite(d.xmin)&&Number.isFinite(d.xmax)&&Number.isFinite(d.ymin)&&Number.isFinite(d.ymax)&&Number.isFinite(d.zmin)&&Number.isFinite(d.zmax)?new f.H(d.zmin,d.zmax):a.elevationRange;if(null==h)return null;const p=a.elevationOffset,m=h.elevationRangeMin+p,g=h.elevationRangeMax+p,y=s.setAltitude(M,g,n),b=s.setAltitude(C,m,n);return l.reset(y,b,null),c.intersect(l,null,y,b,null,!0),l.results.min.getIntersectionPoint(n)?s.getAltitude(n):null}getSphereElevationBounds(e,t){return(0,p.z)(e,t,E,this._renderSR),this._layerElevationSource.getElevationRange(E)}getRootElevationBounds(){const e=this.layerElevationSource.fullExtent;return e?.hasZ?new f.H(e.zmin,e.zmax):null}objectsChanged(e){this.spatialReference&&(this._computeLayerExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}objectChanged(e){this.spatialReference&&(this._computeObjectExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}_computeObjectExtent(e,t){(0,m.Ie)(t),this._expandExtent(e,t)}_computeLayerExtent(e,t){(0,m.Ie)(t);for(const i of e)this._expandExtent(i,t)}_expandExtent(e,t){const i=this.spatialReference;if(null==i)return;if(null==e)return;(0,c.I0)(w,e.quaternion),w[12]=e.center[0],w[13]=e.center[1],w[14]=e.center[2];const r=e.halfSize;for(let s=0;s<8;++s)x[0]=1&s?r[0]:-r[0],x[1]=2&s?r[1]:-r[1],x[2]=4&s?r[2]:-r[2],(0,u.h)(x,x,w),this._renderCoordsHelper.fromRenderCoords(x,x,i),(0,m.fT)(t,x,t)}};(0,r._)([(0,a.MZ)({constructOnly:!0})],_.prototype,"layerElevationSource",void 0),(0,r._)([(0,a.MZ)({constructOnly:!0})],_.prototype,"intersectionHandler",void 0),(0,r._)([(0,a.MZ)({constructOnly:!0})],_.prototype,"view",void 0),(0,r._)([(0,a.MZ)()],_.prototype,"spatialReference",null),_=(0,r._)([(0,l.$)("esri.views.3d.layers.i3s.LayerElevationProvider")],_);const w=(0,d.vt)(),E=(0,g.f)(0,0,0,0),x=(0,h.vt)(),M=(0,h.vt)(),C=(0,h.vt)()},10231:(e,t,i)=>{i.d(t,{i:()=>r});class r{constructor(e,t,i,r){this.toMapSpace=e,this.transform=t,this.obb=i,this.geometry=r}}},55002:(e,t,i)=>{i.d(t,{d:()=>r});class r{constructor(e,t){this.position=e,this.rotationScale=t,this.origin=void 0}}},657:(e,t,i)=>{i.d(t,{Y:()=>n});var r=i(30726),s=i(50346);class n{constructor(e,t){this._textures=e,this.loadPromise=null,this._disposed=!1;const i=this._textures.acquire(t);(0,s.$X)(i)?(i.then((e=>{this._disposed?(0,r.Gz)(e):this._textureRef=e})),this.loadPromise=i):this._textureRef=i}dispose(){this._textureRef=(0,r.Gz)(this._textureRef),this._disposed=!0}get glTexture(){return null!=this._textureRef?this._textureRef.glTexture:null}}},91196:(e,t,i)=>{i.d(t,{A:()=>g});var r=i(35143),s=i(91967),n=i(54099),o=i(5632),a=i(76460),l=i(30726),c=i(91291),d=i(46053),u=(i(81806),i(47249),i(85842)),h=i(19451),p=i(90992);let m=class extends((0,o.sA)((0,c.g)(n.A.EventedMixin(s.A)))){constructor(e){super(e),this._updatingHandles=new h.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";a.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,t=this.layer?.visibilityTimeExtent;return!e||!t||!e.intersection(t).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,p.g7)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,p.g7)(t)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,r._)([(0,d.MZ)()],m.prototype,"view",void 0),(0,r._)([(0,d.MZ)()],m.prototype,"fullOpacity",null),(0,r._)([(0,d.MZ)()],m.prototype,"layer",void 0),(0,r._)([(0,d.MZ)()],m.prototype,"parent",void 0),(0,r._)([(0,d.MZ)({readOnly:!0})],m.prototype,"suspended",null),(0,r._)([(0,d.MZ)({readOnly:!0})],m.prototype,"suspendInfo",null),(0,r._)([(0,d.MZ)({readOnly:!0})],m.prototype,"legendEnabled",null),(0,r._)([(0,d.MZ)({type:Boolean,readOnly:!0})],m.prototype,"updating",null),(0,r._)([(0,d.MZ)({readOnly:!0})],m.prototype,"updatingProgress",null),(0,r._)([(0,d.MZ)()],m.prototype,"updateSuspended",null),(0,r._)([(0,d.MZ)()],m.prototype,"visible",null),(0,r._)([(0,d.MZ)({readOnly:!0})],m.prototype,"visibleAtCurrentScale",null),(0,r._)([(0,d.MZ)({readOnly:!0})],m.prototype,"visibleAtCurrentTimeExtent",null),m=(0,r._)([(0,u.$)("esri.views.layers.LayerView")],m);const g=m}}]);
//# sourceMappingURL=9766.79984f8e.chunk.js.map