import{a as b,D}from"./data-table.constants-B0R7xaSt.js";import{q as N,d as g,b as _,z as A,r as a,o as h,c as x,w as l,a as s,C as f,g as S,t as T}from"./index-WbBHlAeq.js";const U=async c=>{try{let n=localStorage.getItem("token");return(await N(n).post("/students/items",c)).data}catch(n){return console.error(n),b}},$=g({__name:"DataTable",setup(c){const n=[{title:"Nombre",sortable:!0,value:"name"},{title:"Apellido Paterno",sortable:!0,value:"paternal_surname"},{title:"Apellido Materno",sortable:!0,value:"maternal_surname"},{title:"Estado",sortable:!0,value:"status"},{title:"",value:"actions"}],u=[{title:"Activo",value:!0},{title:"Inactivo",value:!1}],i=_(!1),t=_({...D}),m=_({...b}),v=async r=>{i.value=!0,r.value={...r.value,...r},m.value=await U(r.value),i.value=!1};return A(async()=>{await v(t.value)}),(r,o)=>{const j=a("v-btn"),y=a("v-text-field"),d=a("v-col"),V=a("v-select"),k=a("v-row"),w=a("v-card-item"),P=a("v-chip"),I=a("v-data-table-server"),B=a("v-card");return h(),x(B,null,{default:l(()=>{var p;return[s(w,null,{default:l(()=>[s(k,{justify:"space-between"},{default:l(()=>[s(d,{cols:"12",md:"5",class:"d-flex justify-end align-end"},{default:l(()=>[f("",!0),s(y,{modelValue:t.value.search,"onUpdate:modelValue":o[1]||(o[1]=e=>t.value.search=e),label:"Buscar"},null,8,["modelValue"])]),_:1}),s(d,{cols:"12",md:"2"},{default:l(()=>[s(V,{modelValue:t.value.filters.status,"onUpdate:modelValue":[o[2]||(o[2]=e=>t.value.filters.status=e),o[3]||(o[3]=e=>v(t.value))],label:"Estado",items:u,clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),s(I,{"items-per-page":t.value.itemsPerPage,"onUpdate:itemsPerPage":o[5]||(o[5]=e=>t.value.itemsPerPage=e),headers:n,items:(p=m.value)==null?void 0:p.data,"items-length":m.value.total,search:t.value.search,"multi-sort":"",loading:i.value,"item-value":"id","onUpdate:options":v},{"item.status":l(({item:e})=>[s(P,{color:e.status?"info":"error"},{default:l(()=>[S(T(e.status?"Activo":"Inactivo"),1)]),_:2},1032,["color"])]),"item.actions":l(({item:e})=>[f("",!0)]),_:1},8,["items-per-page","items","items-length","search","loading"])]}),_:1})}}}),M=g({__name:"index",setup(c){return(n,u)=>(h(),x($))}});export{M as default};
