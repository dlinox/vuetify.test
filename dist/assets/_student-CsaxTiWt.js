import{d as K,j as L,b as i,r as o,o as P,c as Q,w as t,a as e,h as _,g as s,t as m,f as W,u as y}from"./index-BkHqW4vA.js";import{k as X,l as Y,m as F,d as Z,e as ee}from"./index-tUKOBNPi.js";import{A as te}from"./index-D7Wm7ZK5.js";import{_ as le}from"./ListHistoy.vue_vue_type_script_setup_true_lang-B02b2qVb.js";import{e as ae,r as x}from"./ruleUtils-DvAtGyw3.js";import"./data-table.constants-C9jLg9DU.js";const oe=_("small",null,"Nueva Atencion",-1),ne=_("small",null,"Historial",-1),ue={class:"mb-2"},se={class:"mb-2"},re={class:"mb-2"},de={class:"mb-2"},ye=K({__name:"_student",setup(ie){const g=L(),p=i("attention"),h=i([]),A=i([]),n=i(null),u=i({...te}),V=i(!1),w=i(null),I=async v=>{u.value.report_number=await X(v)},E=async()=>{var d,f,b,r;const{valid:v}=await((d=w.value)==null?void 0:d.validate());if(!v)return;V.value=!0;let a={...u.value,person_id:(f=n.value)==null?void 0:f.id,person_type:"001"};await Y(a,"001"),(b=w.value)==null||b.reset(),n.value=await F(g.params.document),u.value.email=((r=n.value)==null?void 0:r.email)||"",V.value=!1};return(async()=>{var a;n.value=await F(g.params.document),(await Z()).filter(d=>{d.type==="001"&&h.value.push(d)}),A.value=await ee(),u.value.email=((a=n.value)==null?void 0:a.email)||""})(),(v,a)=>{const d=o("v-tab"),f=o("v-tabs"),b=o("v-toolbar"),r=o("v-icon"),G=o("v-card-title"),N=o("v-card-text"),U=o("v-text-field"),c=o("v-col"),j=o("v-combobox"),H=o("v-textarea"),k=o("v-row"),B=o("v-btn"),M=o("v-spacer"),O=o("v-card-actions"),$=o("v-form"),D=o("v-tabs-window-item"),z=o("v-tabs-window"),J=o("v-card");return P(),Q(J,null,{default:t(()=>[e(b,null,{default:t(()=>[e(f,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=l=>p.value=l)},{default:t(()=>[e(d,{value:"attention"},{default:t(()=>[oe]),_:1}),e(d,{value:"history"},{default:t(()=>[ne]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(G,null,{default:t(()=>{var l;return[_("small",null,[e(r,{class:"mb-1"},{default:t(()=>[s(" mdi-account ")]),_:1}),s(" "+m((l=n.value)==null?void 0:l.full_name),1)])]}),_:1}),e(N,{class:"border-b"},{default:t(()=>{var l,C,R,T,S,q;return[_("p",ue,[e(r,null,{default:t(()=>[s(" mdi-phone ")]),_:1}),s(" "+m((l=n.value)==null?void 0:l.phone_number)+" | ",1),e(r,null,{default:t(()=>[s(" mdi-email ")]),_:1}),s(" "+m((C=n.value)==null?void 0:C.email),1)]),_("p",se,[e(r,null,{default:t(()=>[s(" mdi-school ")]),_:1}),s(" "+m((R=n.value)==null?void 0:R.career_name)+" | "+m((T=n.value)==null?void 0:T.student_code),1)]),_("p",re,[e(r,null,{default:t(()=>[s(" mdi-human-male ")]),_:1}),s(" "+m((S=n.value)==null?void 0:S.father_name),1)]),_("p",de,[e(r,null,{default:t(()=>[s(" mdi-human-female ")]),_:1}),s(" "+m((q=n.value)==null?void 0:q.mother_name),1)])]}),_:1}),e(z,{modelValue:p.value,"onUpdate:modelValue":a[6]||(a[6]=l=>p.value=l)},{default:t(()=>[e(D,{value:"attention"},{default:t(()=>[e($,{ref_key:"formRef",ref:w,onSubmit:W(E,["prevent"])},{default:t(()=>[e(k,{justify:"center"},{default:t(()=>[e(c,{cols:"10",md:"8"},{default:t(()=>[e(N,null,{default:t(()=>[e(k,{justify:"center"},{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(U,{modelValue:u.value.email,"onUpdate:modelValue":a[1]||(a[1]=l=>u.value.email=l),label:"Correo",rules:[y(ae)],hint:"El correo es obligatorio, para el envio de correos, asegurese de que sea correcto.","persistent-hint":""},null,8,["modelValue","rules"])]),_:1}),e(c,{cols:"12",md:"8"},{default:t(()=>[e(j,{modelValue:u.value.type_attention_id,"onUpdate:modelValue":[a[2]||(a[2]=l=>u.value.type_attention_id=l),I],items:h.value,label:"Tipo de Atencion","return-object":!1,rules:[y(x)]},null,8,["modelValue","items","rules"])]),_:1}),e(c,{cols:"12",md:"4"},{default:t(()=>[e(U,{modelValue:u.value.report_number,"onUpdate:modelValue":a[3]||(a[3]=l=>u.value.report_number=l),label:"Nro de Reporte",rules:[y(x)],readonly:""},null,8,["modelValue","rules"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(H,{modelValue:u.value.description,"onUpdate:modelValue":a[4]||(a[4]=l=>u.value.description=l),label:"Descripcion",rules:[y(x)]},null,8,["modelValue","rules"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(j,{modelValue:u.value.derivate_to,"onUpdate:modelValue":a[5]||(a[5]=l=>u.value.derivate_to=l),items:A.value,label:"Derivar a",chips:"",multiple:"","return-object":!1},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(B,{color:"primary",type:"button",link:"",to:"/a/attentions"},{default:t(()=>[s(" Volver ")]),_:1}),e(M),e(B,{color:"primary",type:"submit",variant:"flat",loading:V.value},{default:t(()=>[s(" Guardar atención ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1}),e(D,{value:"history"},{default:t(()=>{var l;return[e(le,{document:(l=n.value)==null?void 0:l.student_code,person:n.value,person_type:"001"},null,8,["document","person"])]}),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{ye as default};
