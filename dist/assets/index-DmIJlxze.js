import{a as O,D as T}from"./data-table.constants-B0R7xaSt.js";import{y as h,d as D,b as f,r as t,o as P,c as C,w as o,v as j,a as e,f as A,x as B,m as U,g as E,t as M}from"./index-CwOcQJey.js";const F=async u=>{try{let l=localStorage.getItem("token");return(await h(l).post("/students/items",u)).data}catch(l){return console.error(l),O}},G=async u=>{try{let l=localStorage.getItem("token");return await h(l).post("/students",u),!0}catch(l){return console.error(l),!1}},R=async u=>{try{let l=localStorage.getItem("token");return await h(l).put(`/students/${u.id}`,u),!0}catch(l){return console.error(l),!1}},$={id:"",name:"",paternal_surname:"",maternal_surname:"",document_type:"001",document_number:"",birthdate:"",phone_number:"",career_code:"",student_code:"",email:"",gender:"",status:!0},N=D({__name:"Form",props:{formState:{type:Object,default:()=>({})}},emits:["onSuccess"],setup(u,{emit:l}){const v=l,m=f(!1),n=f({...$,...u.formState}),d=async _=>{m.value=!0,n.value.id?await R(n.value)&&(n.value={...$},v("onSuccess"),_.value=!1):await G(n.value)&&(n.value={...$},v("onSuccess"),_.value=!1),m.value=!1};return(_,c)=>{const s=t("v-text-field"),p=t("v-col"),w=t("v-switch"),b=t("v-row"),x=t("v-card-item"),g=t("v-btn"),S=t("v-spacer"),V=t("v-card-actions"),k=t("v-card"),I=t("v-form"),y=t("v-dialog");return P(),C(y,{"max-width":"700"},{activator:o(({props:a})=>[j(_.$slots,"btn",{activator:a})]),default:o(({isActive:a})=>[e(I,{onSubmit:A(i=>d(a),["prevent"])},{default:o(()=>[e(k,{title:n.value.id?"Editar":"Crear"},{default:o(()=>[e(x,null,{default:o(()=>[e(b,null,{default:o(()=>[e(p,{cols:"12"},{default:o(()=>[e(s,{modelValue:n.value.name,"onUpdate:modelValue":c[0]||(c[0]=i=>n.value.name=i),label:"Nombre"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12"},{default:o(()=>[e(w,{label:n.value.status?"Activo":"Inactivo",modelValue:n.value.status,"onUpdate:modelValue":c[1]||(c[1]=i=>n.value.status=i),color:"blue-darken-4",inset:""},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1}),e(V,null,{default:o(()=>[e(g,{text:"Cancel",onClick:i=>a.value=!1},null,8,["onClick"]),e(S),e(g,{text:"Guardar",color:"primary",type:"submit",loading:m.value},null,8,["loading"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["onSubmit"])]),_:3})}}}),q=D({__name:"DataTable",setup(u){const l=[{title:"Nombre",sortable:!0,value:"name"},{title:"Apellido Paterno",sortable:!0,value:"paternal_surname"},{title:"Apellido Materno",sortable:!0,value:"maternal_surname"},{title:"Estado",sortable:!0,value:"status"},{title:"",value:"actions"}],v=[{title:"Activo",value:!0},{title:"Inactivo",value:!1}],m=f(!1),r=f({...T}),n=f({...O}),d=async c=>{m.value=!0,c.value={...c.value,...c},n.value=await F(c.value),m.value=!1};return B(async()=>{await d(r.value)}),(c,s)=>{const p=t("v-btn"),w=t("v-text-field"),b=t("v-col"),x=t("v-select"),g=t("v-row"),S=t("v-card-item"),V=t("v-chip"),k=t("v-data-table-server"),I=t("v-card");return P(),C(I,null,{default:o(()=>{var y;return[e(S,null,{default:o(()=>[e(g,{justify:"space-between"},{default:o(()=>[e(b,{cols:"12",md:"5",class:"d-flex justify-end align-end"},{default:o(()=>[e(N,{onOnSuccess:s[0]||(s[0]=a=>d(r.value))},{btn:o(({activator:a})=>[e(p,U(a,{color:"primary",icon:"mdi-plus-circle-outline",class:"me-2"}),null,16)]),_:1}),e(w,{modelValue:r.value.search,"onUpdate:modelValue":s[1]||(s[1]=a=>r.value.search=a),label:"Buscar"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",md:"2"},{default:o(()=>[e(x,{modelValue:r.value.filters.status,"onUpdate:modelValue":[s[2]||(s[2]=a=>r.value.filters.status=a),s[3]||(s[3]=a=>d(r.value))],label:"Estado",items:v,clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(k,{"items-per-page":r.value.itemsPerPage,"onUpdate:itemsPerPage":s[5]||(s[5]=a=>r.value.itemsPerPage=a),headers:l,items:(y=n.value)==null?void 0:y.data,"items-length":n.value.total,search:r.value.search,"multi-sort":"",loading:m.value,"item-value":"id","onUpdate:options":d},{"item.status":o(({item:a})=>[e(V,{color:a.status?"info":"error"},{default:o(()=>[E(M(a.status?"Activo":"Inactivo"),1)]),_:2},1032,["color"])]),"item.actions":o(({item:a})=>[e(N,{"form-state":a,onOnSuccess:s[4]||(s[4]=i=>d(r.value))},{btn:o(({activator:i})=>[e(p,U(i,{density:"comfortable",icon:"mdi-pencil",class:"text-button",variant:"tonal"}),null,16)]),_:2},1032,["form-state"])]),_:1},8,["items-per-page","items","items-length","search","loading"])]}),_:1})}}}),J=D({__name:"index",setup(u){return(l,v)=>(P(),C(q))}});export{J as default};
