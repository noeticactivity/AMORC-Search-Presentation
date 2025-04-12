"use strict";(self.webpackChunkrosicrucian_presentation=self.webpackChunkrosicrucian_presentation||[]).push([[550],{8550:(e,t,s)=>{s.d(t,{diagram:()=>V});var o=s(3194),i=s(772),n=s(609),a=s(2275),r=s(2556);s(446),s(3755),s(6213),s(3509),s(1516);const d="rect",l="rectWithTitle",c="statediagram",p=`${c}-state`,g="transition",b=`${g} note-edge`,h=`${c}-note`,u=`${c}-cluster`,y=`${c}-cluster-alt`,f="parent",w="note",x="----",$=`${x}${w}`,m=`${x}${f}`,v="fill:none",T="fill: #333",S="text",k="normal";let D={},A=0;function B(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:x;return`state-${arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}${null!==t&&t.length>0?`${s}${t}`:""}-${e}`}const L=(e,t,s,i,n,r)=>{const c=s.id,g=void 0===(x=i[c])||null===x?"":x.classes?x.classes.join(" "):"";var x;if("root"!==c){let t=d;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==o.D&&(t=s.type),D[c]||(D[c]={id:c,shape:t,description:a.e.sanitizeText(c,(0,a.c)()),classes:`${g} ${p}`});const i=D[c];s.description&&(Array.isArray(i.description)?(i.shape=l,i.description.push(s.description)):i.description.length>0?(i.shape=l,i.description===c?i.description=[s.description]:i.description=[i.description,s.description]):(i.shape=d,i.description=s.description),i.description=a.e.sanitizeTextOrArray(i.description,(0,a.c)())),1===i.description.length&&i.shape===l&&(i.shape=d),!i.type&&s.doc&&(a.l.info("Setting cluster for ",c,E(s)),i.type="group",i.dir=E(s),i.shape=s.type===o.a?"divider":"roundedWithTitle",i.classes=i.classes+" "+u+" "+(r?y:""));const n={labelStyle:"",shape:i.shape,labelText:i.description,classes:i.classes,style:"",id:c,dir:i.dir,domId:B(c,A),type:i.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:h,style:"",id:c+$+"-"+A,domId:B(c,A,w),type:i.type,padding:15},o={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:i.classes,style:"",id:c+m,domId:B(c,A,f),type:"group",padding:0};A++;const a=c+m;e.setNode(a,o),e.setNode(t.id,t),e.setNode(c,n),e.setParent(c,a),e.setParent(t.id,a);let r=c,d=t.id;"left of"===s.note.position&&(r=t.id,d=c),e.setEdge(r,d,{arrowhead:"none",arrowType:"",style:v,labelStyle:"",classes:b,arrowheadStyle:T,labelpos:"c",labelType:S,thickness:k})}else e.setNode(c,n)}t&&"root"!==t.id&&(a.l.trace("Setting node ",c," to be child of its parent ",t.id),e.setParent(c,t.id)),s.doc&&(a.l.trace("Adding nodes children "),C(e,s,s.doc,i,n,!r))},C=(e,t,s,i,n,r)=>{a.l.trace("items",s),s.forEach((s=>{switch(s.stmt){case o.b:case o.D:L(e,t,s,i,n,r);break;case o.S:{L(e,t,s.state1,i,n,r),L(e,t,s.state2,i,n,r);const o={id:"edge"+A,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:v,labelStyle:"",label:a.e.sanitizeText(s.description,(0,a.c)()),arrowheadStyle:T,labelpos:"c",labelType:S,thickness:k,classes:g};e.setEdge(s.state1.id,s.state2.id,o,A),A++}}}))},E=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.c;if(e.doc)for(let s=0;s<e.doc.length;s++){const o=e.doc[s];"dir"===o.stmt&&(t=o.value)}return t},R={setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){return t.db.extract(t.db.getRootDocV2()),t.db.getClasses()},draw:async function(e,t,s,o){a.l.info("Drawing state diagram (v2)",t),D={},o.db.getDirection();const{securityLevel:l,state:p}=(0,a.c)(),g=p.nodeSpacing||50,b=p.rankSpacing||50;a.l.info(o.db.getRootDocV2()),o.db.extract(o.db.getRootDocV2()),a.l.info(o.db.getRootDocV2());const h=o.db.getStates(),u=new i.T({multigraph:!0,compound:!0}).setGraph({rankdir:E(o.db.getRootDocV2()),nodesep:g,ranksep:b,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let y;L(u,void 0,o.db.getRootDocV2(),h,o.db,!0),"sandbox"===l&&(y=(0,n.Ltv)("#i"+t));const f="sandbox"===l?(0,n.Ltv)(y.nodes()[0].contentDocument.body):(0,n.Ltv)("body"),w=f.select(`[id="${t}"]`),x=f.select("#"+t+" g");await(0,r.r)(x,u,["barb"],c,t);a.u.insertTitle(w,"statediagramTitleText",p.titleTopMargin,o.db.getDiagramTitle());const $=w.node().getBBox(),m=$.width+16,v=$.height+16;w.attr("class",c);const T=w.node().getBBox();(0,a.i)(w,v,m,p.useMaxWidth);const S=`${T.x-8} ${T.y-8} ${m} ${v}`;a.l.debug(`viewBox ${S}`),w.attr("viewBox",S);const k=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const i of k){const e=i.getBBox(),t=document.createElementNS("http://www.w3.org/2000/svg",d);t.setAttribute("rx",0),t.setAttribute("ry",0),t.setAttribute("width",e.width),t.setAttribute("height",e.height),i.insertBefore(t,i.firstChild)}}},V={parser:o.p,db:o.d,renderer:R,styles:o.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,o.d.clear()}}}}]);
//# sourceMappingURL=550.cbe66a04.chunk.js.map