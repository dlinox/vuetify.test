import{p as r}from"./index-DWJSz5qk.js";import{a}from"./data-table.constants-B0R7xaSt.js";const u=async(e,t)=>{try{let o=localStorage.getItem("token"),n=await r(o).post("/attentions/items-students/"+t,e);return console.log(n.data),n.data}catch(o){return console.error(o),a}},g=async e=>{try{let t=localStorage.getItem("token");return await r(t).delete("/attentions/"+e),!0}catch{return!1}},i=async e=>{try{let t=localStorage.getItem("token");return(await r(t).get("/attentions/history/"+e)).data}catch{return[]}},p=async e=>{try{let t=localStorage.getItem("token");return await r(t).post(`/attentions/student/receive/${e.document_number}`,e),!0}catch{return!1}},d=async e=>{try{let t=localStorage.getItem("token");return(await r(t).get(`/attentions/student/by-document/${e}`)).data}catch{return null}},y=async e=>{try{let t=localStorage.getItem("token");return(await r(t).get(`/attentions/professor/by-document/${e}`)).data}catch{return null}},m=async e=>{try{let t=localStorage.getItem("token");return(await r(t).get(`/attentions/worker/by-document/${e}`)).data}catch{return null}},k=async(e,t)=>{let o=localStorage.getItem("token");return(await r(o).post(`/attentions/${t}`,e)).data},w=async e=>{let t=localStorage.getItem("token");return(await r(t).put("/attentions",e)).data},h=async()=>{let e=localStorage.getItem("token");return(await r(e).get("/attentions/today")).data},I=async e=>{let t=localStorage.getItem("token");return(await r(t).get(`/attentions/worker/search/${e}`)).data},f=async e=>{let t=localStorage.getItem("token");return(await r(t).get(`/attentions/professor/search/${e}`)).data},S=async()=>{try{let e=localStorage.getItem("token");return(await r(e).get("/selects/type-attentions")).data}catch{return[]}},b=async()=>{try{let e=localStorage.getItem("token");return(await r(e).get("/selects/offices")).data}catch(e){return console.error(e),[]}},D=async e=>{console.log(e);try{let o=await r().post("/pdf/report",e,{responseType:"blob"});console.log(o);let n=await o.data,s=window.URL.createObjectURL(n);var t=document.createElement("a");t.href=s,t.download="downloaded.pdf",document.body.appendChild(t),t.click(),window.URL.revokeObjectURL(s),document.body.removeChild(t)}catch(o){console.error("Error al generar o descargar el PDF:",o)}},$=async()=>{try{let e=localStorage.getItem("token");return(await r(e).get("/selects/users")).data}catch(e){return console.error(e),[]}},v={id:null,person_id:null,type_attention_id:null,report_number:"",description:"",derivate_to:[]};export{v as A,I as a,S as b,b as c,k as d,d as e,y as f,h as g,m as h,i,D as j,u as k,$ as l,g as m,p as r,f as s,w as u};
