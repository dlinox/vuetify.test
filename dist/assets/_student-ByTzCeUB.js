import{d as K,i as L,b as d,r as o,o as P,c as Q,w as t,a as e,h as _,g as s,t as m,f as W,u as p}from"./index-Bt-WY-_A.js";import{l as X,m as Y,n as F,e as Z,f as ee}from"./index-JxKka6Z2.js";import{A as te}from"./index-D7Wm7ZK5.js";import{_ as le}from"./ListHistoy.vue_vue_type_script_setup_true_lang-Do8-3XwF.js";import{r as V,e as ae}from"./ruleUtils-B_kFGKyT.js";import"./data-table.constants-C9jLg9DU.js";const oe=_("small",null,"Nueva Atencion",-1),ne=_("small",null,"Historial",-1),ue={class:"mb-2"},se={class:"mb-2"},re={class:"mb-2"},ie={class:"mb-2"},ye=K({__name:"_student",setup(de){const g=L(),f=d("attention"),h=d([]),A=d([]),n=d(null),u=d({...te}),w=d(!1),x=d(null),I=async v=>{u.value.report_number=await X(v)},E=async()=>{var i,b,y,r;const{valid:v}=await((i=x.value)==null?void 0:i.validate());if(!v)return;w.value=!0;let a={...u.value,person_id:(b=n.value)==null?void 0:b.id,person_type:"001"};await Y(a,"001"),(y=x.value)==null||y.reset(),n.value=await F(g.params.document),u.value.email=((r=n.value)==null?void 0:r.email)||"",w.value=!1};return(async()=>{var a;n.value=await F(g.params.document),(await Z()).filter(i=>{i.type==="001"&&h.value.push(i)}),A.value=await ee(),u.value.email=((a=n.value)==null?void 0:a.email)||""})(),(v,a)=>{const i=o("v-tab"),b=o("v-tabs"),y=o("v-toolbar"),r=o("v-icon"),G=o("v-card-title"),N=o("v-card-text"),U=o("v-text-field"),c=o("v-col"),B=o("v-combobox"),H=o("v-textarea"),D=o("v-row"),j=o("v-btn"),M=o("v-spacer"),O=o("v-card-actions"),$=o("v-form"),k=o("v-tabs-window-item"),z=o("v-tabs-window"),J=o("v-card");return P(),Q(J,null,{default:t(()=>[e(y,null,{default:t(()=>[e(b,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=l=>f.value=l)},{default:t(()=>[e(i,{value:"attention"},{default:t(()=>[oe]),_:1}),e(i,{value:"history"},{default:t(()=>[ne]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(G,null,{default:t(()=>{var l;return[_("small",null,[e(r,{class:"mb-1"},{default:t(()=>[s(" mdi-account ")]),_:1}),s(" "+m((l=n.value)==null?void 0:l.full_name),1)])]}),_:1}),e(N,{class:"border-b"},{default:t(()=>{var l,C,R,T,S,q;return[_("p",ue,[e(r,null,{default:t(()=>[s(" mdi-phone ")]),_:1}),s(" "+m((l=n.value)==null?void 0:l.phone_number)+" | ",1),e(r,null,{default:t(()=>[s(" mdi-email ")]),_:1}),s(" "+m((C=n.value)==null?void 0:C.email),1)]),_("p",se,[e(r,null,{default:t(()=>[s(" mdi-school ")]),_:1}),s(" "+m((R=n.value)==null?void 0:R.career_name)+" | "+m((T=n.value)==null?void 0:T.student_code),1)]),_("p",re,[e(r,null,{default:t(()=>[s(" mdi-human-male ")]),_:1}),s(" "+m((S=n.value)==null?void 0:S.father_name),1)]),_("p",ie,[e(r,null,{default:t(()=>[s(" mdi-human-female ")]),_:1}),s(" "+m((q=n.value)==null?void 0:q.mother_name),1)])]}),_:1}),e(z,{modelValue:f.value,"onUpdate:modelValue":a[6]||(a[6]=l=>f.value=l)},{default:t(()=>[e(k,{value:"attention"},{default:t(()=>[e($,{ref_key:"formRef",ref:x,onSubmit:W(E,["prevent"])},{default:t(()=>[e(D,{justify:"center"},{default:t(()=>[e(c,{cols:"10",md:"8"},{default:t(()=>[e(N,null,{default:t(()=>[e(D,{justify:"center"},{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(U,{modelValue:u.value.email,"onUpdate:modelValue":a[1]||(a[1]=l=>u.value.email=l),label:"Correo",rules:[p(V),p(ae)],hint:"El correo es obligatorio, para el envio de correos, asegurese de que sea correcto.","persistent-hint":""},null,8,["modelValue","rules"])]),_:1}),e(c,{cols:"12",md:"8"},{default:t(()=>[e(B,{modelValue:u.value.type_attention_id,"onUpdate:modelValue":[a[2]||(a[2]=l=>u.value.type_attention_id=l),I],items:h.value,label:"Tipo de Atencion","return-object":!1,rules:[p(V)]},null,8,["modelValue","items","rules"])]),_:1}),e(c,{cols:"12",md:"4"},{default:t(()=>[e(U,{modelValue:u.value.report_number,"onUpdate:modelValue":a[3]||(a[3]=l=>u.value.report_number=l),label:"Nro de Reporte",rules:[p(V)],readonly:""},null,8,["modelValue","rules"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(H,{modelValue:u.value.description,"onUpdate:modelValue":a[4]||(a[4]=l=>u.value.description=l),label:"Descripcion",rules:[p(V)]},null,8,["modelValue","rules"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(B,{modelValue:u.value.derivate_to,"onUpdate:modelValue":a[5]||(a[5]=l=>u.value.derivate_to=l),items:A.value,label:"Derivar a",chips:"",multiple:"","return-object":!1},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(j,{color:"primary",type:"button",link:"",to:"/a/attentions"},{default:t(()=>[s(" Volver ")]),_:1}),e(M),e(j,{color:"primary",type:"submit",variant:"flat",loading:w.value},{default:t(()=>[s(" Guardar atención ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1}),e(k,{value:"history"},{default:t(()=>{var l;return[e(le,{document:(l=n.value)==null?void 0:l.student_code,person:n.value,person_type:"001"},null,8,["document","person"])]}),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{ye as default};
