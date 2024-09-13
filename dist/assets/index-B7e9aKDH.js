import{c as J}from"./careers-S8zIYKBd.js";import{a as j,_ as k}from"./DeleteItem.vue_vue_type_script_setup_true_lang-BVqnYp0e.js";import{D as S}from"./data-table.constants-C9jLg9DU.js";import{h as F,i as B,e as q,f as z,j as G}from"./index-DkboTV6d.js";import{E as O}from"./index-BlLmXW_0.js";import{d as E,b as c,r as o,o as N,c as C,w as a,a as e,g,u as I,h as K,t as H,m as W,e as L,F as M}from"./index-BRh64UmY.js";import"./index-D7Wm7ZK5.js";const Q=E({__name:"DataTableStudent",props:{typeAttentions:{},offices:{},users:{},type:{}},setup(m){const f=m,v=c({datas:[],fileName:"reporte",type:"xlsx"}),b=()=>{var n;v.value.datas=[{sheetData:(n=u.value)==null?void 0:n.data,sheetName:"Reporte",sheetFilter:["report_number","type_attention_name","person_document","person_code","person_name","unit_name","created_at"],sheetHeader:["N° Reporte","Tipo de atención","Documento","Código","Nombre","Unidad","Fecha"]}],new O(v.value).saveExcel()},x=[{title:"N° Reporte",value:"report_number"},{title:"Estudiante",value:"person_name"},{title:"Documento",value:"person_document"},{title:"Código",value:"person_code"},{title:"Unidad",value:"unit_name"},{title:"Tipo de atención",value:"type_attention_name"},{title:"Usuario",value:"user_id"},{title:"Fecha",value:"created_at"},{title:"",value:"actions"}],V=c(J.map(t=>({value:t.code,title:t.name}))),s=c(!1),l=c({page:1,itemsPerPage:10,search:"",filters:{},sortBy:[]}),u=c({...S}),i=async t=>{s.value=!0,t.value={...t.value,...t},u.value=await B(t.value,f.type),s.value=!1};return(t,n)=>{const _=o("v-icon"),y=o("v-btn"),P=o("v-text-field"),w=o("v-col"),A=o("v-select"),T=o("v-row"),D=o("v-card-item"),R=o("v-data-table-server"),U=o("v-card");return N(),C(U,null,{default:a(()=>{var r,d;return[e(D,null,{default:a(()=>[e(T,{justify:"space-between"},{default:a(()=>[e(w,{cols:"12",md:"5",class:"d-flex justify-end align-end"},{default:a(()=>[e(y,{icon:"",onClick:b,class:"mr-2",color:"green",variant:"tonal"},{default:a(()=>[e(_,null,{default:a(()=>[g("mdi-file-excel")]),_:1})]),_:1}),e(y,{icon:"",onClick:n[0]||(n[0]=p=>{var $;return I(F)(($=u.value)==null?void 0:$.data,l.value.filters)}),class:"mr-2",color:"red",variant:"tonal"},{default:a(()=>[e(_,null,{default:a(()=>[g("mdi-file-pdf-box")]),_:1})]),_:1}),e(P,{modelValue:l.value.search,"onUpdate:modelValue":n[1]||(n[1]=p=>l.value.search=p),label:"Buscar"},null,8,["modelValue"])]),_:1}),e(w,{cols:"12",md:"7",class:"d-flex justify-end align-end"},{default:a(()=>[e(A,{modelValue:l.value.filters.type_attention_id,"onUpdate:modelValue":[n[2]||(n[2]=p=>l.value.filters.type_attention_id=p),n[3]||(n[3]=p=>i(l.value))],items:t.typeAttentions,label:"Tipo de atención",dense:"",outlined:"",clearable:"",class:"mr-2"},null,8,["modelValue","items"]),e(A,{modelValue:l.value.filters.unit_code,"onUpdate:modelValue":[n[4]||(n[4]=p=>l.value.filters.unit_code=p),n[5]||(n[5]=p=>i(l.value))],items:V.value,label:"Carrera",dense:"",outlined:"",clearable:"",class:"mr-2"},null,8,["modelValue","items"]),e(A,{modelValue:l.value.filters.user_id,"onUpdate:modelValue":[n[6]||(n[6]=p=>l.value.filters.user_id=p),n[7]||(n[7]=p=>i(l.value))],items:t.users,label:"Usuario",dense:"",outlined:"",clearable:"",class:"mr-2"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),K("pre",null,"      "+H((r=u.value)==null?void 0:r.data)+`
    `,1),e(R,{"items-per-page":l.value.itemsPerPage,"onUpdate:itemsPerPage":n[9]||(n[9]=p=>l.value.itemsPerPage=p),headers:x,items:(d=u.value)==null?void 0:d.data,"items-length":u.value.total,search:l.value.search,"multi-sort":"",loading:s.value,"item-value":"id","items-per-page-text":"Número de filas por página:","onUpdate:options":i},{"item.user_id":a(({item:p})=>{var $;return[g(H(($=t.users.find(h=>String(h.value)===String(p.user_id)))==null?void 0:$.title),1)]}),"item.actions":a(({item:p})=>[e(j,{"form-state":p,onOnSuccess:n[8]||(n[8]=$=>i(l.value)),offices:t.offices,"type-attentions":t.typeAttentions,person_id:p.person_id,person_type:"001"},{btn:a(({activator:$})=>[e(y,W($,{density:"comfortable",icon:"mdi-pencil",class:"text-button",variant:"tonal"}),null,16)]),_:2},1032,["form-state","offices","type-attentions","person_id"]),e(k,{id:p.id,onOnSuccess:i},null,8,["id"])]),_:1},8,["items-per-page","items","items-length","search","loading"])]}),_:1})}}}),X=E({__name:"StudentReportWindow",props:{typeAttentions:{type:Array,default:()=>[]},offices:{type:Array,default:()=>[]},users:{type:Array,default:()=>[]}},setup(m){return(f,v)=>(N(),C(Q,{"type-attentions":m.typeAttentions,offices:m.offices,users:m.users,type:"001"},null,8,["type-attentions","offices","users"]))}}),Y=E({__name:"DataTableProfessor",props:{typeAttentions:{},offices:{},users:{},type:{}},setup(m){const f=m,v=c({datas:[],fileName:"reporte",type:"xlsx"}),b=()=>{var n;v.value.datas=[{sheetData:(n=u.value)==null?void 0:n.data,sheetName:"Reporte",sheetFilter:["report_number","type_attention_name","person_document","person_code","person_name","unit_name","created_at"],sheetHeader:["N° Reporte","Tipo de atención","Documento","Código","Nombre","Unidad","Fecha"]}],new O(v.value).saveExcel()},x=[{title:"N° Reporte",value:"report_number"},{title:"Estudiante",value:"person_name"},{title:"Documento",value:"person_document"},{title:"Código",value:"person_code"},{title:"Unidad",value:"unit_name"},{title:"Tipo de atención",value:"type_attention_name"},{title:"Fecha",value:"created_at"},{title:"",value:"actions"}],V=c(J.map(t=>({value:t.code,title:t.name}))),s=c(!1),l=c({page:1,itemsPerPage:10,search:"",filters:{},sortBy:[]}),u=c({...S}),i=async t=>{s.value=!0,t.value={...t.value,...t},u.value=await B(t.value,f.type),s.value=!1};return(t,n)=>{const _=o("v-icon"),y=o("v-btn"),P=o("v-text-field"),w=o("v-col"),A=o("v-select"),T=o("v-row"),D=o("v-card-item"),R=o("v-data-table-server"),U=o("v-card");return N(),C(U,null,{default:a(()=>{var r;return[e(D,null,{default:a(()=>[e(T,{justify:"space-between"},{default:a(()=>[e(w,{cols:"12",md:"5",class:"d-flex justify-end align-end"},{default:a(()=>[e(y,{icon:"",onClick:b,class:"mr-2",color:"green",variant:"tonal"},{default:a(()=>[e(_,null,{default:a(()=>[g("mdi-file-excel")]),_:1})]),_:1}),e(y,{icon:"",onClick:n[0]||(n[0]=d=>{var p;return I(F)((p=u.value)==null?void 0:p.data,l.value.filters)}),class:"mr-2",color:"red",variant:"tonal"},{default:a(()=>[e(_,null,{default:a(()=>[g("mdi-file-pdf-box")]),_:1})]),_:1}),e(P,{modelValue:l.value.search,"onUpdate:modelValue":n[1]||(n[1]=d=>l.value.search=d),label:"Buscar"},null,8,["modelValue"])]),_:1}),e(w,{cols:"12",md:"7",class:"d-flex justify-end align-end"},{default:a(()=>[e(A,{modelValue:l.value.filters.type_attention_id,"onUpdate:modelValue":[n[2]||(n[2]=d=>l.value.filters.type_attention_id=d),n[3]||(n[3]=d=>i(l.value))],items:t.typeAttentions,label:"Tipo de atención",dense:"",outlined:"",clearable:"",class:"mr-2"},null,8,["modelValue","items"]),e(A,{modelValue:l.value.filters.unit_code,"onUpdate:modelValue":[n[4]||(n[4]=d=>l.value.filters.unit_code=d),n[5]||(n[5]=d=>i(l.value))],items:V.value,label:"Carrera",dense:"",outlined:"",clearable:"",class:"mr-2"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),e(R,{"items-per-page":l.value.itemsPerPage,"onUpdate:itemsPerPage":n[7]||(n[7]=d=>l.value.itemsPerPage=d),headers:x,items:(r=u.value)==null?void 0:r.data,"items-length":u.value.total,search:l.value.search,"multi-sort":"",loading:s.value,"item-value":"id","items-per-page-text":"Número de filas por página:","onUpdate:options":i},{"item.actions":a(({item:d})=>[e(j,{"form-state":d,onOnSuccess:n[6]||(n[6]=p=>i(l.value)),offices:t.offices,"type-attentions":t.typeAttentions,person_id:d.person_id,person_type:"001"},{btn:a(({activator:p})=>[e(y,W(p,{density:"comfortable",icon:"mdi-pencil",class:"text-button",variant:"tonal"}),null,16)]),_:2},1032,["form-state","offices","type-attentions","person_id"]),e(k,{id:d.id,onOnSuccess:i},null,8,["id"])]),_:1},8,["items-per-page","items","items-length","search","loading"])]}),_:1})}}}),Z=E({__name:"ProfessorReportWindow",props:{typeAttentions:{type:Array,default:()=>[]},offices:{type:Array,default:()=>[]},users:{type:Array,default:()=>[]}},setup(m){return(f,v)=>(N(),C(Y,{"type-attentions":m.typeAttentions,offices:m.offices,type:"002",users:m.users},null,8,["type-attentions","offices","users"]))}}),ee=E({__name:"DataTableWorker",props:{typeAttentions:{},offices:{},users:{},type:{}},setup(m){const f=m,v=c({datas:[],fileName:"reporte",type:"xlsx"}),b=()=>{var t;v.value.datas=[{sheetData:(t=l.value)==null?void 0:t.data,sheetName:"Reporte",sheetFilter:["report_number","type_attention_name","person_document","person_code","person_name","unit_name","created_at"],sheetHeader:["N° Reporte","Tipo de atención","Documento","Código","Nombre","Unidad","Fecha"]}],new O(v.value).saveExcel()},x=[{title:"N° Reporte",value:"report_number"},{title:"Trabajador",value:"person_name"},{title:"Documento",value:"person_document"},{title:"Código",value:"person_code"},{title:"Unidad",value:"unit_name"},{title:"Tipo de atención",value:"type_attention_name"},{title:"Fecha",value:"created_at"},{title:"",value:"actions"}],V=c(!1),s=c({page:1,itemsPerPage:10,search:"",filters:{},sortBy:[]}),l=c({...S}),u=async i=>{V.value=!0,i.value={...i.value,...i},l.value=await B(i.value,f.type),V.value=!1};return(i,t)=>{const n=o("v-icon"),_=o("v-btn"),y=o("v-text-field"),P=o("v-col"),w=o("v-select"),A=o("v-row"),T=o("v-card-item"),D=o("v-data-table-server"),R=o("v-card");return N(),C(R,null,{default:a(()=>{var U;return[e(T,null,{default:a(()=>[e(A,{justify:"space-between"},{default:a(()=>[e(P,{cols:"12",md:"5",class:"d-flex justify-end align-end"},{default:a(()=>[e(_,{icon:"",onClick:b,class:"mr-2",color:"green",variant:"tonal"},{default:a(()=>[e(n,null,{default:a(()=>[g("mdi-file-excel")]),_:1})]),_:1}),e(_,{icon:"",onClick:t[0]||(t[0]=r=>{var d;return I(F)((d=l.value)==null?void 0:d.data,s.value.filters)}),class:"mr-2",color:"red",variant:"tonal"},{default:a(()=>[e(n,null,{default:a(()=>[g("mdi-file-pdf-box")]),_:1})]),_:1}),e(y,{modelValue:s.value.search,"onUpdate:modelValue":t[1]||(t[1]=r=>s.value.search=r),label:"Buscar"},null,8,["modelValue"])]),_:1}),e(P,{cols:"12",md:"7",class:"d-flex justify-end align-end"},{default:a(()=>[e(w,{modelValue:s.value.filters.type_attention_id,"onUpdate:modelValue":[t[2]||(t[2]=r=>s.value.filters.type_attention_id=r),t[3]||(t[3]=r=>u(s.value))],items:i.typeAttentions,label:"Tipo de atención",clearable:"",class:"mr-2"},null,8,["modelValue","items"]),e(w,{modelValue:s.value.filters.user_id,"onUpdate:modelValue":[t[4]||(t[4]=r=>s.value.filters.user_id=r),t[5]||(t[5]=r=>u(s.value))],items:i.users,label:"Usuario",dense:"",outlined:"",clearable:"",class:"mr-2"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),e(D,{"items-per-page":s.value.itemsPerPage,"onUpdate:itemsPerPage":t[7]||(t[7]=r=>s.value.itemsPerPage=r),headers:x,items:(U=l.value)==null?void 0:U.data,"items-length":l.value.total,search:s.value.search,"multi-sort":"",loading:V.value,"item-value":"id","items-per-page-text":"Número de filas por página:","onUpdate:options":u},{"item.actions":a(({item:r})=>[e(j,{"form-state":r,onOnSuccess:t[6]||(t[6]=d=>u(s.value)),offices:i.offices,"type-attentions":i.typeAttentions,person_id:r.person_id,person_type:"001"},{btn:a(({activator:d})=>[e(_,W(d,{density:"comfortable",icon:"mdi-pencil",class:"text-button",variant:"tonal"}),null,16)]),_:2},1032,["form-state","offices","type-attentions","person_id"]),e(k,{id:r.id,onOnSuccess:u},null,8,["id"])]),_:1},8,["items-per-page","items","items-length","search","loading"])]}),_:1})}}}),te=E({__name:"WorkerReportWindow",props:{typeAttentions:{type:Array,default:()=>[]},offices:{type:Array,default:()=>[]},users:{type:Array,default:()=>[]}},setup(m){return(f,v)=>(N(),C(ee,{"type-attentions":m.typeAttentions,offices:m.offices,users:m.users,type:"003"},null,8,["type-attentions","offices","users"]))}}),ae=E({__name:"DataTableAll",props:{typeAttentions:{},offices:{},users:{},type:{}},setup(m){const f=m,v=c({datas:[],fileName:"reporte",type:"xlsx"}),b=()=>{var t;v.value.datas=[{sheetData:(t=l.value)==null?void 0:t.data,sheetName:"Reporte",sheetFilter:["report_number","type_attention_name","person_document","person_code","person_name","unit_name","created_at"],sheetHeader:["N° Reporte","Tipo de atención","Documento","Código","Nombre","Unidad","Fecha"]}],new O(v.value).saveExcel()},x=[{title:"N° Reporte",value:"report_number"},{title:"Trabajador",value:"person_name"},{title:"Documento",value:"person_document"},{title:"Código",value:"person_code"},{title:"Unidad",value:"unit_name"},{title:"Tipo de atención",value:"type_attention_name"},{title:"Fecha",value:"created_at"},{title:"",value:"actions"}],V=c(!1),s=c({page:1,itemsPerPage:10,search:"",filters:{},sortBy:[]}),l=c({...S}),u=async i=>{V.value=!0,i.value={...i.value,...i},l.value=await B(i.value,f.type),V.value=!1};return(i,t)=>{const n=o("v-icon"),_=o("v-btn"),y=o("v-text-field"),P=o("v-col"),w=o("v-select"),A=o("v-row"),T=o("v-card-item"),D=o("v-data-table-server"),R=o("v-card");return N(),C(R,null,{default:a(()=>{var U;return[e(T,null,{default:a(()=>[e(A,{justify:"space-between"},{default:a(()=>[e(P,{cols:"12",md:"5",class:"d-flex justify-end align-end"},{default:a(()=>[e(_,{icon:"",onClick:b,class:"mr-2",color:"green",variant:"tonal"},{default:a(()=>[e(n,null,{default:a(()=>[g("mdi-file-excel")]),_:1})]),_:1}),e(_,{icon:"",onClick:t[0]||(t[0]=r=>{var d;return I(F)((d=l.value)==null?void 0:d.data,s.value.filters)}),class:"mr-2",color:"red",variant:"tonal"},{default:a(()=>[e(n,null,{default:a(()=>[g("mdi-file-pdf-box")]),_:1})]),_:1}),e(y,{modelValue:s.value.search,"onUpdate:modelValue":t[1]||(t[1]=r=>s.value.search=r),label:"Buscar"},null,8,["modelValue"])]),_:1}),e(P,{cols:"12",md:"7",class:"d-flex justify-end align-end"},{default:a(()=>[e(w,{modelValue:s.value.filters.type_attention_id,"onUpdate:modelValue":[t[2]||(t[2]=r=>s.value.filters.type_attention_id=r),t[3]||(t[3]=r=>u(s.value))],items:i.typeAttentions,label:"Tipo de atención",dense:"",outlined:"",clearable:"",class:"mr-2"},null,8,["modelValue","items"]),e(w,{modelValue:s.value.filters.user_id,"onUpdate:modelValue":[t[4]||(t[4]=r=>s.value.filters.user_id=r),t[5]||(t[5]=r=>u(s.value))],items:i.users,label:"Usuario",dense:"",outlined:"",clearable:"",class:"mr-2"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),e(D,{"items-per-page":s.value.itemsPerPage,"onUpdate:itemsPerPage":t[7]||(t[7]=r=>s.value.itemsPerPage=r),headers:x,items:(U=l.value)==null?void 0:U.data,"items-length":l.value.total,search:s.value.search,"multi-sort":"",loading:V.value,"item-value":"id","items-per-page-text":"Número de filas por página:","onUpdate:options":u},{"item.actions":a(({item:r})=>[e(j,{"form-state":r,onOnSuccess:t[6]||(t[6]=d=>u(s.value)),offices:i.offices,"type-attentions":i.typeAttentions,person_id:r.person_id,person_type:"001"},{btn:a(({activator:d})=>[e(_,W(d,{density:"comfortable",icon:"mdi-pencil",class:"text-button",variant:"tonal"}),null,16)]),_:2},1032,["form-state","offices","type-attentions","person_id"]),e(k,{id:r.id,onOnSuccess:u},null,8,["id"])]),_:1},8,["items-per-page","items","items-length","search","loading"])]}),_:1})}}}),ne=E({__name:"AllReportWindow",props:{typeAttentions:{type:Array,default:()=>[]},offices:{type:Array,default:()=>[]},users:{type:Array,default:()=>[]}},setup(m){return(f,v)=>(N(),C(ae,{"type-attentions":m.typeAttentions,offices:m.offices,type:"000",users:m.users},null,8,["type-attentions","offices","users"]))}}),pe=E({__name:"index",setup(m){const f=c([]),v=c([]),b=c([]),x=c("stu, dent");return(async()=>{f.value=await q(),v.value=await z(),b.value=await G()})(),(s,l)=>{const u=o("v-tab"),i=o("v-tabs"),t=o("v-toolbar"),n=o("v-tabs-window-item"),_=o("v-tabs-window");return N(),L(M,null,[e(t,null,{default:a(()=>[e(i,{modelValue:x.value,"onUpdate:modelValue":l[0]||(l[0]=y=>x.value=y)},{default:a(()=>[e(u,{value:"student"},{default:a(()=>[g("Estudiantes")]),_:1}),e(u,{value:"professor"},{default:a(()=>[g("Docentes")]),_:1}),e(u,{value:"worker"},{default:a(()=>[g("Adminitrativos / CAS / Obras ")]),_:1}),e(u,{value:"all"},{default:a(()=>[g("Todo ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(_,{modelValue:x.value,"onUpdate:modelValue":l[1]||(l[1]=y=>x.value=y)},{default:a(()=>[e(n,{value:"student"},{default:a(()=>[e(X,{"type-attentions":f.value,offices:v.value,users:b.value},null,8,["type-attentions","offices","users"])]),_:1}),e(n,{value:"professor"},{default:a(()=>[e(Z,{"type-attentions":f.value,offices:v.value,users:b.value},null,8,["type-attentions","offices","users"])]),_:1}),e(n,{value:"worker"},{default:a(()=>[e(te,{"type-attentions":f.value,offices:v.value,users:b.value},null,8,["type-attentions","offices","users"])]),_:1}),e(n,{value:"all"},{default:a(()=>[e(ne,{"type-attentions":f.value,offices:v.value,users:b.value},null,8,["type-attentions","offices","users"])]),_:1})]),_:1},8,["modelValue"])],64)}}});export{pe as default};
