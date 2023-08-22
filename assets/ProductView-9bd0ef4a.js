import{_ as p,e as _,r as n,o as i,c,f as l,a as t,u as h,t as o,x as a,F as m,k as g,l as v}from"./index-f2e24bfa.js";const D={name:"ShoppingView",data(){return{productDetail:{},productId:"",productCategory:"",isLoading:!1}},methods:{..._(g,["addToCart"]),getProduct(){const r=`https://vue3-course-api.hexschool.io/api/iris-lai-api/product/${this.productId}`;this.isLoading=!0,this.$http.get(r).then(s=>{s.data.success?(this.productDetail=s.data.product,this.isLoading=!1):console.log(s.data.message)})}},created(){this.productId=this.$route.params.productId,this.productCategory=this.$route.params.productCategory,this.getProduct()}},b={class:"container"},f={"aria-label":"breadcrumb"},y={class:"breadcrumb"},k={class:"breadcrumb-item"},C={class:"breadcrumb-item active","aria-current":"page"},x={class:"row justify-content-center"},L={class:"col-8"},V=["src"],w={class:"col-4"},I={key:0,class:"h5"},N={key:1,class:"h6"},B={key:2,class:"h5"},P=t("hr",null,null,-1);function S(r,s,T,F,e,O){const d=n("LoadingOverlay"),u=n("router-link");return i(),c(m,null,[l(d,{active:e.isLoading},null,8,["active"]),t("div",b,[t("nav",f,[t("ol",y,[t("li",k,[l(u,{to:"/"},{default:h(()=>[v("商品頁")]),_:1})]),t("li",C,o(e.productDetail.title),1)])]),t("div",x,[t("article",L,[t("h2",null,o(e.productDetail.title),1),t("div",null,o(e.productDetail.description),1),t("div",null,o(e.productDetail.content),1),t("img",{src:e.productDetail.imageUrl,alt:"",class:"img-fluid mb-3"},null,8,V)]),t("div",w,[e.productDetail.price?a("",!0):(i(),c("div",I,"$"+o(e.productDetail.origin_price)+"元",1)),e.productDetail.price?(i(),c("del",N,"原價 $"+o(e.productDetail.origin_price)+" 元",1)):a("",!0),e.productDetail.price?(i(),c("div",B,"現在只要 $"+o(e.productDetail.price)+" 元",1)):a("",!0),P,t("button",{type:"button",class:"btn btn-outline-danger",onClick:s[0]||(s[0]=j=>r.addToCart(e.productDetail,1))}," 加到購物車 ")])])])],64)}const E=p(D,[["render",S]]);export{E as default};