import{d as H,b as _,c as M,w as t,l as O,r as a,o as W,a as e,h as r,t as m,f as $,g as q}from"./index-Bckyz5mu.js";import{_ as z}from"./ListHistoy.vue_vue_type_script_setup_true_lang-BYF-QS43.js";import{A as x,h as E,g as F,b as J,e as K}from"./index-BcvGTFtq.js";import"./data-table.constants-B0R7xaSt.js";const L=r("small",null,"Nueva Atencion",-1),P=r("small",null,"Historial",-1),te=H({__name:"_worker",setup(Q){const g=O(),d=_("attention"),i=_([]),c=_([]),u=_(null),n=_({...x}),A=async()=>{var l;let v={...n.value,person_id:(l=u.value)==null?void 0:l.id};await K(v,"003"),n.value={...x}};return(async()=>{u.value=await E(g.params.document),i.value=await F(),c.value=await J()})(),(v,l)=>{const U=a("v-toolbar-title"),p=a("v-tab"),D=a("v-tabs"),N=a("v-toolbar"),f=a("v-combobox"),s=a("v-col"),j=a("v-text-field"),k=a("v-textarea"),b=a("v-row"),B=a("v-card-text"),C=a("v-spacer"),R=a("v-btn"),T=a("v-card-actions"),I=a("v-form"),V=a("v-tabs-window-item"),S=a("v-tabs-window"),G=a("v-card");return W(),M(G,null,{default:t(()=>[e(N,{density:"compact"},{default:t(()=>[e(U,null,{default:t(()=>{var o,w,y;return[r("small",null,m((o=u.value)==null?void 0:o.name)+" "+m((w=u.value)==null?void 0:w.paternal_surname)+" "+m((y=u.value)==null?void 0:y.maternal_surname),1)]}),_:1}),e(D,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=o=>d.value=o)},{default:t(()=>[e(p,{value:"attention"},{default:t(()=>[L]),_:1}),e(p,{value:"history"},{default:t(()=>[P]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(S,{modelValue:d.value,"onUpdate:modelValue":l[5]||(l[5]=o=>d.value=o)},{default:t(()=>[e(V,{value:"attention"},{default:t(()=>[e(I,{ref:"formRef",onSubmit:$(A,["prevent"])},{default:t(()=>[e(b,{justify:"center"},{default:t(()=>[e(s,{cols:"10",md:"8"},{default:t(()=>[e(B,null,{default:t(()=>[e(b,{justify:"center"},{default:t(()=>[e(s,{cols:"10",md:"8"},{default:t(()=>[e(f,{modelValue:n.value.type_attention_id,"onUpdate:modelValue":l[1]||(l[1]=o=>n.value.type_attention_id=o),items:i.value,label:"Tipo de Atencion",outlined:"","return-object":!1,dense:""},null,8,["modelValue","items"])]),_:1}),e(s,{cols:"12",md:"4"},{default:t(()=>[e(j,{modelValue:n.value.report_number,"onUpdate:modelValue":l[2]||(l[2]=o=>n.value.report_number=o),label:"Nro de Reporte",outlined:"",dense:""},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(k,{modelValue:n.value.description,"onUpdate:modelValue":l[3]||(l[3]=o=>n.value.description=o),label:"Descripcion",outlined:"",dense:""},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(f,{modelValue:n.value.derivate_to,"onUpdate:modelValue":l[4]||(l[4]=o=>n.value.derivate_to=o),items:c.value,label:"Derivar a",chips:"",multiple:"","return-object":!1},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(C),e(R,{color:"primary",type:"submit",variant:"flat"},{default:t(()=>[q(" Guardar atención ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1}),e(V,{value:"history"},{default:t(()=>{var o;return[e(z,{document:(o=u.value)==null?void 0:o.document_number},null,8,["document"])]}),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{te as default};