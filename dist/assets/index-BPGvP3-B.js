import{p as h,d as y,b as c,r as n,o as v,c as x,w as o,a as e,e as w,h as b,t as A,F as k}from"./index-Bckyz5mu.js";const B=async s=>{try{const t=localStorage.getItem("token");return[{name:"Estudiantes",data:(await h(t).get(`/reports/attentions-by-month/${s}`)).data}]}catch{return[]}},E=async s=>{try{const t=localStorage.getItem("token");let a=await h(t).get(`/reports/attentions-by-month-type/${s}`);return[{name:"Estudiantes",data:a.data["001"]},{name:"Docentes",data:a.data["002"]},{name:"Administrativos",data:a.data["003"]}]}catch{return[]}},M=y({__name:"PerMonthGraph",setup(s){const t=c([{name:"Estudiantes",data:[0,0,0,0,0,0,0,0,0,0,0,0]},{name:"Docentes",data:[0,0,0,0,0,0,0,0,0,0,0,0]},{name:"Administrativos",data:[0,0,0,0,0,0,0,0,0,0,0,0]}]),a=c({chart:{height:350,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"Atenciones por mes y tipo",align:"left"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"]}}),r=async i=>{t.value=await E(i)};return(async()=>{await r(2024)})(),(i,l)=>{const u=n("apexchart"),p=n("v-card-item"),d=n("v-card");return v(),x(d,null,{default:o(()=>[e(p,null,{default:o(()=>[e(u,{width:"100%",type:"line",options:a.value,series:t.value},null,8,["options","series"])]),_:1})]),_:1})}}}),S=y({__name:"index",setup(s){const t=c([{name:"Estudiantes",data:[1,0,0,0,0,0,100,0,0,0,0,0]}]),a=c({chart:{height:350,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"Atenciones por mes",align:"left"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"]}}),r=c(null),_=async l=>{t.value=await B(l)};return(async()=>{await _(2024)})(),(l,u)=>{const p=n("apexchart"),d=n("v-card-item"),f=n("v-card"),m=n("v-col"),g=n("v-row");return v(),w(k,null,[e(g,null,{default:o(()=>[e(m,{cols:"12",md:"6"},{default:o(()=>[e(f,null,{default:o(()=>[e(d,null,{default:o(()=>[e(p,{width:"100%",type:"line",options:a.value,series:t.value},null,8,["options","series"])]),_:1})]),_:1})]),_:1}),e(m,{cols:"12",md:"6"},{default:o(()=>[e(M)]),_:1})]),_:1}),b("pre",null,"    "+A(r.value)+`
  `,1)],64)}}});export{S as default};
