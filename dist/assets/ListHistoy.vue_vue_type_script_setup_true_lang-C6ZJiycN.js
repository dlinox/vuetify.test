import{p as U,q as D}from"./index-rMzRKMBG.js";import{e as I,r as M}from"./ruleUtils-B_kFGKyT.js";import{d as O,b as i,r as n,o as v,e as V,a as e,w as t,g as l,F as w,j as T,c as G,t as p,A as J,u as S,h}from"./index-Dcw02d0D.js";const K=h("small",null," cancelar ",-1),P=h("small",null," Enviar ",-1),te=O({__name:"ListHistoy",props:{document:{type:String},person:{type:Object},person_type:{type:String}},setup(B){var g,b;const d=B,s=i(!1),f=i([]),E=i(null),r=i({attention_id:"",person_type:d.person_type,person_id:(g=d.person)==null?void 0:g.id,email:(b=d.person)==null?void 0:b.email}),_=i(!1),Q=async c=>{s.value=!0,r.value.attention_id=c.id},A=async()=>{var c,o;if(!((o=(c=r.value)==null?void 0:c.email)!=null&&o.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/))){alert("Correo no válido");return}_.value=!0,await U(r.value),_.value=!1,s.value=!1},y=async()=>{f.value=await D(d.document)};return y(),(c,o)=>{const N=n("v-toolbar-title"),j=n("v-spacer"),k=n("v-icon"),u=n("v-btn"),$=n("v-toolbar"),x=n("v-card-title"),m=n("v-card-text"),q=n("v-card-actions"),C=n("v-card"),z=n("v-text-field"),H=n("v-col"),Z=n("v-row"),F=n("v-dialog"),L=n("v-container");return v(),V(w,null,[e($,null,{default:t(()=>[e(N,null,{default:t(()=>[l("Historial de Atenciones")]),_:1}),e(j),e(u,{icon:"",onClick:y},{default:t(()=>[e(k,null,{default:t(()=>[l("mdi-refresh")]),_:1})]),_:1})]),_:1}),e(L,null,{default:t(()=>[(v(!0),V(w,null,T(f.value,(a,R)=>(v(),G(C,{key:R,variant:"tonal",class:"mb-4"},{default:t(()=>[e(x,null,{default:t(()=>[l(p(a.type_attention_name),1)]),_:2},1024),e(m,null,{default:t(()=>[l(p(a.description),1)]),_:2},1024),e(m,{class:"d-flex justify-end"},{default:t(()=>[e(k,{class:"me-2"},{default:t(()=>[l(" mdi-calendar ")]),_:1}),l(" "+p(a.created_at),1)]),_:2},1024),J("",!0)]),_:2},1024))),128)),e(F,{modelValue:s.value,"onUpdate:modelValue":o[3]||(o[3]=a=>s.value=a),"max-width":"500"},{default:t(()=>[e(C,null,{default:t(()=>[e(x,null,{default:t(()=>[l(" Enviar encuesta de satisfacción ")]),_:1}),e(m,null,{default:t(()=>[e(Z,null,{default:t(()=>[e(H,{cols:"12"},{default:t(()=>[e(z,{modelValue:r.value.email,"onUpdate:modelValue":o[0]||(o[0]=a=>r.value.email=a),modelModifiers:{trim:!0},rules:[S(I),S(M)],label:"Correo Electrónico",hint:"Ingrese el correo electrónico al que se enviará la encuesta","persistent-hint":"",ref_key:"emailRef",ref:E},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1}),e(q,null,{default:t(()=>[e(u,{color:"secondary",type:"button",onClick:o[1]||(o[1]=a=>s.value=!1)},{default:t(()=>[K]),_:1}),e(u,{color:"primary",type:"button",onClick:o[2]||(o[2]=a=>A()),loading:_.value},{default:t(()=>[P]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}}});export{te as _};
