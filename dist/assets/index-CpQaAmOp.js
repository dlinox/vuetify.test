import{a as U,D as j}from"./data-table.constants-B0R7xaSt.js";import{y as x,d as P,b as d,r as a,o as $,c as C,w as n,x as B,a as e,f as O,v as T,m as D,h as M}from"./index-DTYwYFXP.js";const E=async l=>{var o,r;try{let s=localStorage.getItem("token"),p=await x(s).post("/roles/items",l);for(let t of p.data.data)t.permissions=(o=t.permissions)==null?void 0:o.split(","),t.permissions=(r=t.permissions)==null?void 0:r.map(m=>parseInt(m));return p.data}catch(s){return console.error(s),U}},F=async()=>{try{let l=localStorage.getItem("token");return(await x(l).get("/roles/permissions")).data}catch(l){return console.error(l),[]}},G=async l=>{try{let o=localStorage.getItem("token");return await x(o).post("/roles",l),!0}catch(o){return console.error(o),!1}},R=async l=>{try{let o=localStorage.getItem("token");return await x(o).put(`/roles/${l.id}`,l),!0}catch(o){return console.error(o),!1}},N=P({__name:"Form",props:{formState:{type:Object,default:()=>({})},permissions:{type:Array,default:()=>[]}},emits:["onSuccess"],setup(l,{emit:o}){const r=o,s=d(!1),t=d({id:null,name:"",permissions:[],...l.formState}),m=async v=>{s.value=!0,t.value.id?await R(t.value)&&(t.value={id:null,name:"",permissions:[]},r("onSuccess"),v.value=!1):await G(t.value)&&(t.value={id:null,name:"",permissions:[]},r("onSuccess"),v.value=!1),s.value=!1};return(v,i)=>{const c=a("v-text-field"),_=a("v-col"),S=a("v-select"),k=a("v-row"),V=a("v-card-item"),g=a("v-btn"),h=a("v-spacer"),I=a("v-card-actions"),b=a("v-card"),u=a("v-form"),y=a("v-dialog");return $(),C(y,{"max-width":"500"},{activator:n(({props:w})=>[B(v.$slots,"btn",{activator:w})]),default:n(({isActive:w})=>[e(u,{onSubmit:O(f=>m(w),["prevent"])},{default:n(()=>[e(b,{title:t.value.id?"Editar":"Crear"},{default:n(()=>[e(V,null,{default:n(()=>[e(k,null,{default:n(()=>[e(_,{cols:"12"},{default:n(()=>[e(c,{modelValue:t.value.name,"onUpdate:modelValue":i[0]||(i[0]=f=>t.value.name=f),label:"Nombre"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:n(()=>[e(S,{modelValue:t.value.permissions,"onUpdate:modelValue":i[1]||(i[1]=f=>t.value.permissions=f),items:l.permissions,label:"Permisos",chips:"",multiple:""},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),e(I,null,{default:n(()=>[e(g,{text:"Cancel",onClick:f=>w.value=!1},null,8,["onClick"]),e(h),e(g,{text:"Guardar",color:"primary",type:"submit",loading:s.value},null,8,["loading"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["onSubmit"])]),_:3})}}}),q={class:"d-flex justify-end"},z=P({__name:"DataTable",setup(l){const o=[{title:"Nombre",sortable:!0,value:"name"},{title:"",value:"actions"}],r=d(!1),s=d({...j}),p=d([]),t=d({...U}),m=async i=>{r.value=!0,i.value={...i.value,...i},t.value=await E(i.value),r.value=!1};return T(async()=>{await m(s.value),p.value=await F()}),(i,c)=>{const _=a("v-btn"),S=a("v-text-field"),k=a("v-col"),V=a("v-row"),g=a("v-card-item"),h=a("v-data-table-server"),I=a("v-card");return $(),C(I,null,{default:n(()=>{var b;return[e(g,null,{default:n(()=>[e(V,{justify:"space-between"},{default:n(()=>[e(k,{cols:"12",md:"5",class:"d-flex justify-end align-end"},{default:n(()=>[e(N,{onOnSuccess:c[0]||(c[0]=u=>m(s.value)),permissions:p.value},{btn:n(({activator:u})=>[e(_,D(u,{color:"primary",icon:"mdi-plus-circle-outline",class:"me-2"}),null,16)]),_:1},8,["permissions"]),e(S,{modelValue:s.value.search,"onUpdate:modelValue":c[1]||(c[1]=u=>s.value.search=u),label:"Buscar"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(h,{"items-per-page":s.value.itemsPerPage,"onUpdate:itemsPerPage":c[3]||(c[3]=u=>s.value.itemsPerPage=u),headers:o,items:(b=t.value)==null?void 0:b.data,"items-length":t.value.total,search:s.value.search,"multi-sort":"",loading:r.value,"item-value":"id","items-per-page-text":"Número de filas por página:","onUpdate:options":m},{"item.actions":n(({item:u})=>[M("div",q,[e(N,{"form-state":u,onOnSuccess:c[2]||(c[2]=y=>m(s.value)),permissions:p.value},{btn:n(({activator:y})=>[e(_,D(y,{density:"comfortable",icon:"mdi-pencil",class:"text-button",variant:"tonal"}),null,16)]),_:2},1032,["form-state","permissions"])])]),_:1},8,["items-per-page","items","items-length","search","loading"])]}),_:1})}}}),K=P({__name:"index",setup(l){return(o,r)=>($(),C(z))}});export{K as default};
