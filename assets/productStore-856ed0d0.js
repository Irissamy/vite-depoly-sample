import{_ as p,o as e,c as o,a as t,F as _,g as b,h as v,n as g,p as y,i as f,j as m,e as $,k as x,l as S,t as i,b as u,q as k,s as I}from"./index-5b696e1b.js";const P={props:{bannerImage:{Object}}},w=a=>(y("data-v-a817487f"),a=a(),f(),a),C={id:"carouselExampleAutoplaying",class:"carousel slide","data-bs-ride":"carousel"},E=w(()=>t("div",{class:"carousel-indicators"},[t("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),t("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}),t("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"})],-1)),T={class:"carousel-inner"},B=["src"],A=v('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" data-v-a817487f><span class="carousel-control-prev-icon" aria-hidden="true" data-v-a817487f></span><span class="visually-hidden" data-v-a817487f>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" data-v-a817487f><span class="carousel-control-next-icon" aria-hidden="true" data-v-a817487f></span><span class="visually-hidden" data-v-a817487f>Next</span></button>',2);function N(a,r,c,h,d,l){return e(),o("div",C,[E,t("div",T,[(e(!0),o(_,null,b(c.bannerImage,(s,n)=>(e(),o("div",{key:n,class:g(n===0?"carousel-item active":"carousel-item")},[t("img",{src:s,class:"carousel-item__img d-block w-100",alt:"..."},null,8,B)],2))),128))]),A])}const H=p(P,[["render",N],["__scopeId","data-v-a817487f"]]);const j={props:{product:{type:Object,default(){return{}}}},data(){return{currency:m}},methods:{...$(x,["addToCart"]),getProductDetail(a){this.$router.push(`${this.$route.path}/${a.id}`)}}},D={class:"row row-cols-3 my-3 g-4"},V={class:"card"},F=["src"],L={class:"card-body"},O={class:"card-title"},q={class:"float-end"},z=["onClick"],M=["onClick"];function U(a,r,c,h,d,l){return e(),o("div",D,[(e(!0),o(_,null,b(c.product,s=>(e(),o("div",{class:"col",key:s.id},[t("div",V,[t("img",{src:s.imageUrl,class:"card-img-top",alt:"..."},null,8,F),t("div",L,[t("h6",O,[S(i(s.title)+" ",1),t("span",q,"$ "+i(d.currency(s.price)),1)]),t("a",{href:"#",class:"btn btn-outline-secondary w-100 mb-2",onClick:u(n=>l.getProductDetail(s),["prevent"])},"查看更多",8,z),t("a",{href:"#",class:"btn btn-outline-primary w-100",onClick:u(n=>a.addToCart(s),["prevent"])},"加入購物車",8,M)])])]))),128))])}const J=p(j,[["render",U],["__scopeId","data-v-6764847a"]]),K=k("productStore",{state:()=>({products:[]}),getters:{sortProducts:({products:a})=>a.sort((r,c)=>r.price-c.price)},actions:{getProductList(){const a="https://vue3-course-api.hexschool.io/api/iris-lai-api/products/all";I.get(a).then(r=>{this.products=r.data.products})}}});export{H as P,J as T,K as p};