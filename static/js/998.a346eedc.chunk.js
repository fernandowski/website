"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[998],{40998:(e,t,r)=>{r.r(t),r.d(t,{submitTraceJob:()=>c,trace:()=>o});var a=r(3825),s=r(54994),n=r(57778);async function o(e,t,r){const o=(0,s.Dl)(e),c=t.toJSON();c.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(c.resultTypes=JSON.stringify(t.resultTypes));const i=(0,s.jV)(o.query,{query:(0,s.lF)({...c,f:"json"}),...r}),l=`${o.path}/trace`;return(0,a.A)(l,i).then((e=>function(e,t){const{data:r}=e,a=n.A.fromJSON(r.traceResults);return a.aggregatedGeometry&&t&&(a.aggregatedGeometry.line&&(a.aggregatedGeometry.line.spatialReference=t.clone()),a.aggregatedGeometry.multipoint&&(a.aggregatedGeometry.multipoint.spatialReference=t.clone()),a.aggregatedGeometry.polygon&&(a.aggregatedGeometry.polygon.spatialReference=t.clone())),a}(e,t.outSpatialReference)))}async function c(e,t,r){const n=(0,s.Dl)(e),o=t.toJSON();o.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(o.resultTypes=JSON.stringify(t.resultTypes));const c=(0,s.jV)(n.query,{query:(0,s.lF)({...o,async:!0,f:"json"}),...r}),i=`${n.path}/trace`,{data:l}=await(0,a.A)(i,c);return l.statusUrl}}}]);
//# sourceMappingURL=998.a346eedc.chunk.js.map