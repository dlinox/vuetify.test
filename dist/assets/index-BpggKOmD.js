import{a as T,D as M}from"./data-table.constants-B0R7xaSt.js";import{p as C,d as D,b as f,r as t,o as P,c as N,w as a,y as q,a as e,f as A,g as j,h as F,x as G,m as O,t as R}from"./index-C_92ZVsy.js";const z=async c=>{try{let o=localStorage.getItem("token");return(await C(o).post("/offices/items",c)).data}catch(o){return console.error(o),T}},J=async c=>{try{let o=localStorage.getItem("token");return await C(o).post("/offices",c),!0}catch(o){return console.error(o),!1}},K=async c=>{try{let o=localStorage.getItem("token");return await C(o).put(`/offices/${c.id}`,c),!0}catch(o){return console.error(o),!1}},U={id:null,name:"",status:!0},L=F("small",null," Habilitar esta opción permitirá que este elemento sea visible y seleccionable en otros formularios. ",-1),B=D({__name:"Form",props:{formState:{type:Object,default:{...U}}},emits:["onSuccess"],setup(c,{emit:o}){const _=o,u=f(!1),s=f({...U,...c.formState}),m=async d=>{u.value=!0,s.value.id?await K(s.value)&&(_("onSuccess"),d.value=!1):await J(s.value)&&(_("onSuccess"),d.value=!1),u.value=!1};return(d,i)=>{const n=t("v-text-field"),p=t("v-col"),S=t("v-checkbox-btn"),b=t("v-list-item-action"),k=t("v-list-item-title"),V=t("v-list-item-subtitle"),I=t("v-list-item"),$=t("v-row"),h=t("v-card-item"),g=t("v-btn"),x=t("v-spacer"),l=t("v-card-actions"),y=t("v-card"),E=t("v-form"),H=t("v-dialog");return P(),N(H,{"max-width":"500"},{activator:a(({props:w})=>[q(d.$slots,"btn",{activator:w})]),default:a(({isActive:w})=>[e(E,{onSubmit:A(v=>m(w),["prevent"])},{default:a(()=>[e(y,{title:s.value.id?"Editar":"Crear"},{default:a(()=>[e(h,null,{default:a(()=>[e($,null,{default:a(()=>[e(p,{cols:"12"},{default:a(()=>[e(n,{modelValue:s.value.name,"onUpdate:modelValue":i[0]||(i[0]=v=>s.value.name=v),label:"Nombre"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12"},{default:a(()=>[e(I,{lines:"two",class:"rounded-lg",active:s.value.status,onClick:i[1]||(i[1]=v=>s.value.status=!s.value.status)},{prepend:a(({isActive:v})=>[e(b,{start:""},{default:a(()=>[e(S,{"model-value":v},null,8,["model-value"])]),_:2},1024)]),default:a(()=>[e(k,null,{default:a(()=>[j(" Habilitado ")]),_:1}),e(V,null,{default:a(()=>[L]),_:1})]),_:2},1032,["active"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(l,null,{default:a(()=>[e(g,{class:"text-overline",text:"Cancel",onClick:v=>w.value=!1},null,8,["onClick"]),e(x),e(g,{class:"text-overline",text:"Guardar",color:"primary",type:"submit",variant:"tonal",loading:u.value},null,8,["loading"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["onSubmit"])]),_:3})}}}),Q=D({__name:"DataTable",setup(c){const o=[{title:"Nombre",sortable:!0,value:"name"},{title:"Estado",sortable:!0,value:"status"},{title:"",value:"actions"}],_=[{title:"Activo",value:!0},{title:"Inactivo",value:!1}],u=f(!1),r=f({...M}),s=f({...T}),m=async i=>{u.value=!0,i.value={...i.value,...i},s.value=await z(i.value),u.value=!1};return G(async()=>{await m(r.value)}),(i,n)=>{const p=t("v-btn"),S=t("v-text-field"),b=t("v-col"),k=t("v-select"),V=t("v-row"),I=t("v-card-item"),$=t("v-chip"),h=t("v-data-table-server"),g=t("v-card");return P(),N(g,null,{default:a(()=>{var x;return[e(I,null,{default:a(()=>[e(V,{justify:"space-between"},{default:a(()=>[e(b,{cols:"12",md:"5",class:"d-flex justify-end align-end"},{default:a(()=>[e(B,{onOnSuccess:n[0]||(n[0]=l=>m(r.value))},{btn:a(({activator:l})=>[e(p,O(l,{color:"primary",icon:"mdi-plus-circle-outline",class:"me-2"}),null,16)]),_:1}),e(S,{modelValue:r.value.search,"onUpdate:modelValue":n[1]||(n[1]=l=>r.value.search=l),label:"Buscar"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",md:"2"},{default:a(()=>[e(k,{modelValue:r.value.filters.status,"onUpdate:modelValue":[n[2]||(n[2]=l=>r.value.filters.status=l),n[3]||(n[3]=l=>m(r.value))],label:"Estado",items:_,clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(h,{"items-per-page":r.value.itemsPerPage,"onUpdate:itemsPerPage":n[5]||(n[5]=l=>r.value.itemsPerPage=l),headers:o,items:(x=s.value)==null?void 0:x.data,"items-length":s.value.total,search:r.value.search,loading:u.value,"multi-sort":"","item-value":"id","items-per-page-text":"Número de filas por página:","onUpdate:options":m},{"item.status":a(({item:l})=>[e($,{color:l.status?"info":"error"},{default:a(()=>[j(R(l.status?"Activo":"Inactivo"),1)]),_:2},1032,["color"])]),"item.actions":a(({item:l})=>[e(B,{"form-state":l,onOnSuccess:n[4]||(n[4]=y=>m(r.value))},{btn:a(({activator:y})=>[e(p,O(y,{density:"comfortable",icon:"mdi-pencil",class:"text-button",variant:"tonal"}),null,16)]),_:2},1032,["form-state"])]),_:1},8,["items-per-page","items","items-length","search","loading"])]}),_:1})}}}),Y=D({__name:"index",setup(c){return(o,_)=>(P(),N(Q))}});export{Y as default};