import{D as U}from"./data-table.constants-C9jLg9DU.js";import{q as k,d as I,b as v,r as t,o as $,c as B,w as n,z as O,a as e,f as R,u as q,B as M,k as T,l as D,m as N,h as z}from"./index-C5Zp5wUb.js";import{r as E}from"./ruleUtils-B_kFGKyT.js";const F=async l=>{var a,c;try{let s=localStorage.getItem("token"),d=await k(s).post("/roles/items",l);for(let i of d.data.data)i.permissions=(a=i.permissions)==null?void 0:a.split(","),i.permissions=(c=i.permissions)==null?void 0:c.map(o=>parseInt(o));return d.data}catch(s){return console.error(s),U}},G=async()=>{try{let l=localStorage.getItem("token");return(await k(l).get("/roles/permissions")).data}catch(l){return console.error(l),[]}},H=async l=>{try{let a=localStorage.getItem("token");return await k(a).post("/roles",l),!0}catch(a){return console.error(a),!1}},J=async l=>{try{let a=localStorage.getItem("token");return await k(a).put(`/roles/${l.id}`,l),!0}catch(a){return console.error(a),!1}},j=I({__name:"Form",props:{formState:{type:Object,default:()=>({})},permissions:{type:Array,default:()=>[]}},emits:["onSuccess"],setup(l,{emit:a}){const c=a,s=v(!1),d=l,i=v(null),o=v({id:null,name:"",permissions:[],...d.formState}),C=async u=>{var p;const{valid:r}=await((p=i.value)==null?void 0:p.validate());r&&(s.value=!0,o.value.id?await J(o.value)&&(o.value={id:null,name:"",permissions:[]},c("onSuccess"),u.value=!1):await H(o.value)&&(o.value={id:null,name:"",permissions:[]},c("onSuccess"),u.value=!1),s.value=!1)};return(u,r)=>{const p=t("v-text-field"),f=t("v-col"),S=t("v-select"),h=t("v-row"),P=t("v-card-item"),g=t("v-btn"),V=t("v-spacer"),b=t("v-card-actions"),y=t("v-card"),m=t("v-form"),w=t("v-dialog");return $(),B(w,{"max-width":"500"},{activator:n(({props:x})=>[O(u.$slots,"btn",{activator:x})]),default:n(({isActive:x})=>[e(m,{onSubmit:R(_=>C(x),["prevent"]),ref_key:"formRef",ref:i},{default:n(()=>[e(y,{title:o.value.id?"Editar":"Crear"},{default:n(()=>[e(P,null,{default:n(()=>[e(h,null,{default:n(()=>[e(f,{cols:"12"},{default:n(()=>[e(p,{modelValue:o.value.name,"onUpdate:modelValue":r[0]||(r[0]=_=>o.value.name=_),label:"Nombre del rol",rules:[q(E)]},null,8,["modelValue","rules"])]),_:1}),e(f,{cols:"12"},{default:n(()=>[e(S,{modelValue:o.value.permissions,"onUpdate:modelValue":r[1]||(r[1]=_=>o.value.permissions=_),items:l.permissions,label:"Permisos",chips:"",multiple:""},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),e(b,null,{default:n(()=>[e(g,{text:"Cancel",onClick:_=>x.value=!1},null,8,["onClick"]),e(V),e(g,{text:"Guardar",color:"primary",type:"submit",loading:s.value},null,8,["loading"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["onSubmit"])]),_:3})}}}),K={class:"d-flex justify-end"},L=I({__name:"DataTable",setup(l){const a=[{title:"Nombre",sortable:!0,value:"name"},{title:"",value:"actions"}],c=v(!1),s=v({page:1,itemsPerPage:10,search:"",filters:{},sortBy:[],groupBy:""}),d=v([]),i=v({...U}),o=async u=>{c.value=!0,u.value={...u.value,...u},i.value=await F(u.value),c.value=!1};return M(async()=>{await o(s.value),d.value=await G()}),(u,r)=>{const p=t("v-btn"),f=t("v-text-field"),S=t("v-col"),h=t("v-row"),P=t("v-card-item"),g=t("v-data-table-server"),V=t("v-card"),b=T("permission");return $(),B(V,null,{default:n(()=>{var y;return[e(P,null,{default:n(()=>[e(h,{justify:"space-between"},{default:n(()=>[e(S,{cols:"12",md:"5",class:"d-flex justify-end align-end"},{default:n(()=>[e(j,{onOnSuccess:r[0]||(r[0]=m=>o(s.value)),permissions:d.value},{btn:n(({activator:m})=>[D(e(p,N(m,{color:"primary",icon:"mdi-plus-circle-outline",class:"me-2"}),null,16),[[b,["roles.create"]]])]),_:1},8,["permissions"]),e(f,{modelValue:s.value.search,"onUpdate:modelValue":r[1]||(r[1]=m=>s.value.search=m),label:"Buscar"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(g,{"items-per-page":s.value.itemsPerPage,"onUpdate:itemsPerPage":r[3]||(r[3]=m=>s.value.itemsPerPage=m),headers:a,items:(y=i.value)==null?void 0:y.data,"items-length":i.value.total,search:s.value.search,"multi-sort":"",loading:c.value,"item-value":"id","items-per-page-text":"Número de filas por página:"},{"item.actions":n(({item:m})=>[z("div",K,[e(j,{"form-state":m,onOnSuccess:r[2]||(r[2]=w=>o(s.value)),permissions:d.value},{btn:n(({activator:w})=>[D(e(p,N(w,{density:"comfortable",icon:"mdi-pencil",class:"text-button",variant:"tonal"}),null,16),[[b,["roles.update"]]])]),_:2},1032,["form-state","permissions"])])]),_:1},8,["items-per-page","items","items-length","search","loading"])]}),_:1})}}}),Y=I({__name:"index",setup(l){return(a,c)=>($(),B(L))}});export{Y as default};
