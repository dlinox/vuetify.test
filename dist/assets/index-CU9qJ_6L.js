import{d as b,b as m,e as h,a as e,w as o,r as a,o as x,f as y,g as V,h as c,s as C}from"./index-BOJw-EQu.js";const B={class:"d-flex align-center justify-center h-screen"},N=c("div",{class:"mb-6"},[c("h3",null,"Bienvenido"),c("small",null," Inicia sesión para acceder a la plataforma ")],-1),M=b({__name:"index",setup(k){const t=m({email:"super@test.com",password:"super@test.com"}),n=m(!1),u=async()=>{n.value=!0;try{await C(t.value)}catch(d){console.error(d)}finally{n.value=!1}};return(d,l)=>{const p=a("v-img"),i=a("v-text-field"),s=a("v-col"),_=a("v-btn"),f=a("v-row"),v=a("v-form"),g=a("v-card-item"),w=a("v-card");return x(),h("div",B,[e(w,{elevation:"0",rounded:"lg",class:"h-md-auto h-screen d-flex align-center justify-center mx-auto bg-white w-100 w-md-auto"},{default:o(()=>[e(g,{class:""},{default:o(()=>[e(p,{src:"https://campus.unap.edu.pe/images/themes/unap/logo.png",alt:"UNAP",width:"250px",class:"mb-6"}),N,e(v,{onSubmit:y(u,["prevent"]),ref:"formAuthRef"},{default:o(()=>[e(f,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[e(i,{modelValue:t.value.email,"onUpdate:modelValue":l[0]||(l[0]=r=>t.value.email=r),modelModifiers:{trim:!0},label:"Correo","append-inner-icon":"mdi-email"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(i,{modelValue:t.value.password,"onUpdate:modelValue":l[1]||(l[1]=r=>t.value.password=r),modelModifiers:{trim:!0},label:"Contraseña","append-inner-icon":"mdi-eye",autocomplete:"off",type:"password"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(_,{color:"primary",block:"",loading:n.value,type:"submit"},{default:o(()=>[V(" Ingresar ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})])}}});export{M as default};
