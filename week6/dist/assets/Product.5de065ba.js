import{_ as a,c,d as r,t as n,a as d,o as p}from"./index.2a5db641.js";const u={name:"Product",data(){return{product:{}}},mounted(){const{id:t}=this.$route.params,e=`https://vue3-course-api.hexschool.io/v2/api/hexschoolvue/product/${t}`;this.$http.get(e).then(()=>{this.product=res.data.product}).catch(o=>{alert(o.response.data.message)})}},i={class:"about"},h=d("h1",null,"This is \u55AE\u4E00\u7522\u54C1\u9801\u9762",-1);function l(t,e,o,_,s,m){return p(),c("div",i,[h,r(" "+n(s.product.title),1)])}const f=a(u,[["render",l]]);export{f as default};