import{D as E}from"./data-table.constants-C9jLg9DU.js";import{v as D,d as C,b as d,r as t,o as T,c as U,w as a,y as R,a as e,f as q,u as A,l as F,m as B,n as O,g as G,t as H}from"./index-K3GGTNWJ.js";import{r as M}from"./ruleUtils-DvAtGyw3.js";const Q=async u=>{try{let l=localStorage.getItem("token");return(await D(l).post("/offices/items",u)).data}catch(l){return console.error(l),E}},z=async u=>{try{let l=localStorage.getItem("token");return await D(l).post("/offices",u),!0}catch(l){return console.error(l),!1}},J=async u=>{try{let l=localStorage.getItem("token");return await D(l).put(`/offices/${u.id}`,u),!0}catch(l){return console.error(l),!1}},$={id:null,name:"",status:!0},j=C({__name:"Form",props:{formState:{type:Object,default:{...$}}},emits:["onSuccess"],setup(u,{emit:l}){const _=l,b=u,o=d(!1),p=d(null),n=d({...$,...b.formState}),g=async f=>{var m;const{valid:c}=await((m=p.value)==null?void 0:m.validate());c&&(o.value=!0,n.value.id?await J(n.value)&&(_("onSuccess"),f.value=!1):await z(n.value)&&(n.value={...$},_("onSuccess"),f.value=!1),o.value=!1)};return(f,c)=>{const m=t("v-text-field"),s=t("v-col"),y=t("v-switch"),S=t("v-row"),w=t("v-card-item"),x=t("v-btn"),V=t("v-spacer"),k=t("v-card-actions"),h=t("v-card"),I=t("v-form"),P=t("v-dialog");return T(),U(P,{"max-width":"500"},{activator:a(({props:v})=>[R(f.$slots,"btn",{activator:v})]),default:a(({isActive:v})=>[e(I,{onSubmit:q(i=>g(v),["prevent"]),ref_key:"formRef",ref:p},{default:a(()=>[e(h,{title:n.value.id?"Editar":"Crear"},{default:a(()=>[e(w,null,{default:a(()=>[e(S,null,{default:a(()=>[e(s,{cols:"12"},{default:a(()=>[e(m,{modelValue:n.value.name,"onUpdate:modelValue":c[0]||(c[0]=i=>n.value.name=i),label:"Nombre",rules:[A(M)]},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12"},{default:a(()=>[e(y,{label:n.value.status?"Activo":"Inactivo",modelValue:n.value.status,"onUpdate:modelValue":c[1]||(c[1]=i=>n.value.status=i),color:"blue-darken-4",inset:"",hint:`Habilitar esta opción permitirá que este elemento sea\r
                      visible y seleccionable en otros formularios.`,"persistent-hint":""},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1}),e(k,null,{default:a(()=>[e(x,{class:"text-overline",text:"Cancel",color:"secondary",onClick:i=>v.value=!1},null,8,["onClick"]),e(V),e(x,{class:"text-overline",text:"Guardar",color:"primary",type:"submit",variant:"tonal",loading:o.value},null,8,["loading"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["onSubmit"])]),_:3})}}}),K=C({__name:"DataTable",setup(u){const l=[{title:"Nombre",sortable:!0,value:"name"},{title:"Estado",sortable:!0,value:"status"},{title:"",value:"actions"}],_=[{title:"Activo",value:!0},{title:"Inactivo",value:!1}],b=d(!1),o=d({page:1,itemsPerPage:10,search:"",filters:{},sortBy:[]}),p=d({...E}),n=d(o.value.search);let g;const f=()=>{g&&clearTimeout(g),g=setTimeout(()=>{o.value.search=n.value},400)},c=async m=>{b.value=!0,o.value={...o.value,...m,filters:{...o.value.filters}},p.value=await Q(o.value),b.value=!1};return(m,s)=>{const y=t("v-btn"),S=t("v-text-field"),w=t("v-col"),x=t("v-select"),V=t("v-row"),k=t("v-card-item"),h=t("v-chip"),I=t("v-data-table-server"),P=t("v-card"),v=F("permission");return T(),U(P,null,{default:a(()=>{var i;return[e(k,null,{default:a(()=>[e(V,{justify:"space-between"},{default:a(()=>[e(w,{cols:"12",md:"5",class:"d-flex justify-end align-end"},{default:a(()=>[e(j,{onOnSuccess:s[0]||(s[0]=r=>c(o.value))},{btn:a(({activator:r})=>[B(e(y,O(r,{color:"primary",icon:"mdi-plus-circle-outline",class:"me-2"}),null,16),[[v,["offices.create"]]])]),_:1}),e(S,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=r=>n.value=r),label:"Buscar",onInput:f},null,8,["modelValue"])]),_:1}),e(w,{cols:"12",md:"2"},{default:a(()=>[e(x,{modelValue:o.value.filters.status,"onUpdate:modelValue":[s[2]||(s[2]=r=>o.value.filters.status=r),s[3]||(s[3]=r=>c(o.value))],label:"Estado",items:_,clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(I,{"items-per-page":o.value.itemsPerPage,"onUpdate:itemsPerPage":s[5]||(s[5]=r=>o.value.itemsPerPage=r),headers:l,items:(i=p.value)==null?void 0:i.data,"items-length":p.value.total,search:o.value.search,loading:b.value,"multi-sort":"","item-value":"id","items-per-page-text":"Número de filas por página:","onUpdate:options":c},{"item.status":a(({item:r})=>[e(h,{color:r.status?"info":"error"},{default:a(()=>[G(H(r.status?"Activo":"Inactivo"),1)]),_:2},1032,["color"])]),"item.actions":a(({item:r})=>[e(j,{"form-state":r,onOnSuccess:s[4]||(s[4]=N=>c(o.value))},{btn:a(({activator:N})=>[B(e(y,O(N,{density:"comfortable",icon:"mdi-pencil",class:"text-button",variant:"tonal",color:"black"}),null,16),[[v,["offices.update"]]])]),_:2},1032,["form-state"])]),_:1},8,["items-per-page","items","items-length","search","loading"])]}),_:1})}}}),Y=C({__name:"index",setup(u){return(l,_)=>(T(),U(K))}});export{Y as default};
