import{d as g,b,r as n,k as D,o as p,c as u,w as t,a as e,l as s,m as v,n as T,i as U,u as m,p as B,g as O,h as k,t as y}from"./index-Dcw02d0D.js";const E=g({__name:"AppMenu",setup(x){const r=b([""]);return(c,d)=>{const o=n("v-list-item"),l=n("v-list-group"),_=n("v-list"),a=D("permission");return p(),u(_,{nav:"",density:"compact",opened:r.value,"onUpdate:opened":d[0]||(d[0]=i=>r.value=i),color:"primary"},{default:t(()=>[e(o,{key:"dashboard",to:"/a",title:"Dashboard","prepend-icon":"mdi-view-dashboard",link:"",exact:""}),s(e(o,{key:"attentions",to:"/a/attentions",title:"Atenciones","prepend-icon":"mdi-account",link:"",exact:""},null,512),[[a,["attentions"]]]),s((p(),u(l,{value:"reports"},{activator:t(({props:i})=>[e(o,v(i,{"prepend-icon":"mdi-chart-line",title:"Reportes"}),null,16)]),default:t(()=>[e(o,{key:"reports.attentions",to:"/a/reports",title:"Atenciones","prepend-icon":"mdi-chart-line",link:"",exact:""}),e(o,{key:"reports.users",to:"/a/reports/users",title:"Usuarios","prepend-icon":"mdi-account",link:"",exact:""})]),_:1})),[[a,["reports"]]]),s(e(o,{key:"students",to:"/a/students",title:"Estudiantes","prepend-icon":"mdi-account",link:"",exact:""},null,512),[[a,["students"]]]),s(e(o,{key:"professors",to:"/a/professors",title:"Profesores","prepend-icon":"mdi-account",link:"",exact:""},null,512),[[a,["professors"]]]),s(e(o,{key:"workers",to:"/a/workers",title:"Trabajadores","prepend-icon":"mdi-account",link:"",exact:""},null,512),[[a,["workers"]]]),s((p(),u(l,{value:"config"},{activator:t(({props:i})=>[e(o,v(i,{"prepend-icon":"mdi-cog",title:"Configuración"}),null,16)]),default:t(()=>[s(e(o,{key:"offices",to:"/a/offices",title:"Oficinas","prepend-icon":"mdi-office-building",link:"",exact:""},null,512),[[a,["offices"]]]),s(e(o,{key:"attention-types",to:"/a/attention-types",title:"Tipos de atención","prepend-icon":"mdi-account",link:"",exact:""},null,512),[[a,["type-attentions"]]])]),_:1})),[[a,["offices","type-attentions"]]]),s((p(),u(l,{value:"security"},{activator:t(({props:i})=>[e(o,v(i,{"prepend-icon":"mdi-shield-lock",title:"Seguridad"}),null,16)]),default:t(()=>[s(e(o,{key:"users",to:"/a/users",title:"Usuarios","prepend-icon":"mdi-account",link:"",exact:""},null,512),[[a,["users"]]]),s(e(o,{key:"roles",to:"/a/roles",title:"Roles","prepend-icon":"mdi-account",link:"",exact:""},null,512),[[a,["roles"]]])]),_:1})),[[a,["users","roles"]]])]),_:1},8,["opened"])}}}),G={class:"text-h5 font-weight-bold"},M=g({__name:"AdminLayout",setup(x){const r=T(),c=b(!0),d=U();return(o,l)=>{const _=n("v-btn"),a=n("v-list-item"),i=n("v-navigation-drawer"),h=n("v-icon"),w=n("v-app-bar"),V=n("v-toolbar-title"),R=n("v-toolbar"),A=n("RouterView"),C=n("v-main"),S=n("v-spacer"),N=n("v-footer"),P=n("v-app");return p(),u(P,{app:""},{default:t(()=>[e(i,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=f=>c.value=f),app:""},{append:t(()=>[e(a,{class:"py-2 border-t",title:m(r).authState.user.name,subtitle:m(r).authState.user.role,"prepend-avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPYGvsOKyoPhMLvER1SNT4W3RyX6VPeXTxg&s"},{append:t(()=>[e(_,{onClick:m(B),color:"grey-lighten-1",icon:"mdi-power",variant:"text",size:"small"},null,8,["onClick"])]),_:1},8,["title","subtitle"])]),default:t(()=>[e(E)]),_:1},8,["modelValue"]),e(w,{floating:"",elevation:"0"},{default:t(()=>[e(_,{icon:"",onClick:l[1]||(l[1]=f=>c.value=!c.value)},{default:t(()=>[e(h,null,{default:t(()=>[O("mdi-menu")]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(R,{flat:""},{default:t(()=>[e(V,null,{default:t(()=>[k("h5",G,y(m(d).name),1)]),_:1})]),_:1}),e(A)]),_:1}),e(N,{color:"grey-lighten-4",app:""},{default:t(()=>[e(S),k("small",null," UNAP © "+y(new Date().getFullYear()),1)]),_:1})]),_:1})}}});export{M as default};