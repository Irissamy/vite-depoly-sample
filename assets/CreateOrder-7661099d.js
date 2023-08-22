import{_ as j,j as M,m as E,e as F,r as u,o as c,c as r,f as l,a as e,u as v,F as f,g,w as y,v as C,n,t as d,k as x,l as b,b as k,y as S}from"./index-f2e24bfa.js";const U={data(){return{currency:M,isLoading:!1,current:-1,couponCode:"",isCoupon:"",isCouponMsg:null,CouponErrors:"",form:{user:{name:"",email:"",tel:"",address:""},message:""},payment:[{id:"貨到付款",iconClass:"bi-shop"},{id:"ATM轉帳",iconClass:"bi-cash-coin"},{id:"信用卡",iconClass:"bi-credit-card"}]}},computed:{...E(x,["cartList","cartLen"])},methods:{...F(x,["getCartList","removeCart"]),createOrder(){const a="https://vue3-course-api.hexschool.io/api/iris-lai-api/order",t=this.form;this.$http.post(a,{data:t}).then(m=>{m.data.success?(this.getCartList(),this.$router.push(`/checkout/${m.data.orderId}`)):console.log(m)})},choosePay(a){this.current=a},useCoupon(){const a="https://vue3-course-api.hexschool.io/api/iris-lai-api/coupon";this.isLoading=!0,this.$http.post(a,{data:{code:this.couponCode}}).then(t=>{t.data.success?(this.isCoupon="is-valid",this.isCouponMsg=!0,this.getCartList()):(this.isCoupon="is-invalid",this.isCouponMsg=!1,this.CouponErrors=t.data.message)}),this.isLoading=!1}}},q={class:"container"},O={"aria-label":"breadcrumb"},N={class:"breadcrumb"},T={class:"breadcrumb-item"},B=e("li",{class:"breadcrumb-item active","aria-current":"page"},"填寫訂單",-1),A=e("div",{class:"col-md-6 m-auto d-flex justify-content-center align-items-center p-4 bg-light"},[e("span",null,"購物車列表")],-1),D={key:0,class:"d-flex flex-column align-items-center cart-empty"},I=e("img",{class:"cart-empty__image",src:S,alt:""},null,-1),P=e("p",null,[b("訂單中沒有任何品項"),e("br"),b("趕快帶我回家( ´•̥̥̥ω•̥̥̥` )")],-1),z=[I,P],G={key:1,class:"my-5 d-flex flex-column align-items-center"},H={class:"col-md-6 mb-4"},J={class:"cart-list"},K={class:"col-2 px-0"},Q=["src"],R={class:"col-9 align-items-center"},W={class:"pb-2"},X={class:"d-flex align-items-center"},Y=e("i",{class:"bi bi-x"},null,-1),Z={class:"text-nowrap cart__item-price"},$={class:"d-flex col-1 px-0 justify-content-center align-items-center"},ee=["onClick"],se=e("i",{class:"bi bi-trash text-black-50"},null,-1),te=[se],oe={class:"d-flex mb-3 input-group needs-validation",novalidate:""},ie=e("span",{class:"input-group-text",id:"basic-addon1"},[e("i",{class:"bi bi-ticket-perforated"})],-1),le={class:"text-end mb-2"},ae=e("div",{class:"col-md-6 m-auto d-flex justify-content-center align-items-center p-4 bg-light"},[e("span",null,"付款方式")],-1),ne={class:"my-5 mt-2 row justify-content-center"},ce={class:"row row-cols-1 row-cols-md-6 g-4 justify-content-center"},re=["onClick"],de={class:"card-body"},ue={class:"d-flex justify-content-center mb-2"},me={class:"card-title fs-6 text-center"},_e=e("div",{class:"col-md-6 m-auto d-flex justify-content-center align-items-center p-4 bg-light"},[e("span",null,"購買資料")],-1),pe={class:"my-5 row justify-content-center"},he={class:"mb-3"},fe=e("label",{for:"email",class:"form-label"},"Email",-1),be={class:"mb-3"},ve=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),ge={class:"mb-3"},ye=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),Ce={class:"mb-3"},xe=e("label",{for:"address",class:"form-label"},"收件人地址",-1),ke={class:"mb-3"},Ve=e("label",{for:"message",class:"form-label"},"留言",-1),Le=e("div",{class:"text-end"},[e("button",{class:"btn btn-danger"},"送出訂單")],-1);function we(a,t,m,je,s,_){const V=u("LoadingOverlay"),L=u("router-link"),p=u("V-Field"),h=u("V-ErrorMessage"),w=u("V-Form");return c(),r(f,null,[l(V,{active:s.isLoading},null,8,["active"]),e("div",q,[e("nav",O,[e("ol",N,[e("li",T,[l(L,{to:"/"},{default:v(()=>[b("商品頁")]),_:1})]),B])]),A,a.cartLen===0?(c(),r("div",D,z)):(c(),r("div",G,[e("div",H,[e("div",J,[(c(!0),r(f,null,g(a.cartList.carts,o=>(c(),r("div",{class:"row mx-0 mb-2 pb-2 border-bottom",key:o.id},[e("div",K,[e("img",{src:o.product.imageUrl,class:"cart__image",alt:""},null,8,Q)]),e("div",R,[e("div",W,d(o.product.title),1),e("div",X,[e("div",null,d(o.qty),1),Y,e("div",Z,"$"+d(s.currency(o.product.price)),1)])]),e("div",$,[e("a",{href:"#",class:"text-dark",onClick:k(i=>a.removeCart(o.id),["prevent"])},te,8,ee)])]))),128))]),e("div",oe,[ie,y(e("input",{type:"text",id:"validationServer02",ref:"couponInput",class:n(["form-control",s.isCoupon]),placeholder:"Coupon折扣碼","aria-label":"Coupon","aria-describedby":"basic-addon1",required:"","onUpdate:modelValue":t[0]||(t[0]=o=>s.couponCode=o)},null,2),[[C,s.couponCode]]),e("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:t[1]||(t[1]=(...o)=>_.useCoupon&&_.useCoupon(...o)),style:{"white-space":"nowrap"}},"套用")]),e("div",{id:"validationServer02Feedback",class:n(["d-flex",[s.isCouponMsg?"valid-feedback":"invalid-feedback"]])},d(s.CouponErrors),3),e("div",null,[e("div",le,"總金額 NT$"+d(s.currency(a.cartList.final_total)),1)])])])),ae,e("div",ne,[e("div",ce,[(c(!0),r(f,null,g(s.payment,(o,i)=>(c(),r("div",{class:"col",key:o.id},[e("a",{class:n(["card h-100 pay-card",{"pay-card--active":i==s.current}]),href:"#",onClick:k(Me=>_.choosePay(i),["prevent"])},[e("div",de,[e("div",ue,[e("i",{class:n(["bi fs-2",o.iconClass])},null,2)]),e("h5",me,d(o.id),1)])],10,re)]))),128))])]),_e,e("div",pe,[l(w,{class:"col-md-6",onSubmit:_.createOrder},{default:v(({errors:o})=>[e("div",he,[fe,l(p,{id:"email",name:"email",type:"email",class:n(["form-control",{"is-invalid":o.email}]),rules:"email|required",placeholder:"請輸入 Email",modelValue:s.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=i=>s.form.user.email=i)},null,8,["class","modelValue"]),l(h,{name:"email",class:"invalid-feedback"})]),e("div",be,[ve,l(p,{id:"name",name:"姓名",type:"text",class:n(["form-control",{"is-invalid":o.姓名}]),rules:"required",placeholder:"請輸入姓名",modelValue:s.form.user.name,"onUpdate:modelValue":t[3]||(t[3]=i=>s.form.user.name=i)},null,8,["class","modelValue"]),l(h,{name:"姓名",class:"invalid-feedback"})]),e("div",ge,[ye,l(p,{id:"tel",name:"電話",type:"tel",class:n(["form-control",{"is-invalid":o.電話}]),rules:"required",placeholder:"請輸入電話",modelValue:s.form.user.tel,"onUpdate:modelValue":t[4]||(t[4]=i=>s.form.user.tel=i)},null,8,["class","modelValue"]),l(h,{name:"電話",class:"invalid-feedback"})]),e("div",Ce,[xe,l(p,{id:"address",name:"地址",type:"text",class:n(["form-control",{"is-invalid":o.地址}]),rules:"required",placeholder:"請輸入地址",modelValue:s.form.user.address,"onUpdate:modelValue":t[5]||(t[5]=i=>s.form.user.address=i)},null,8,["class","modelValue"]),l(h,{name:"地址",class:"invalid-feedback"})]),e("div",ke,[Ve,y(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[6]||(t[6]=i=>s.form.message=i)},null,512),[[C,s.form.message]])]),Le]),_:1},8,["onSubmit"])])])],64)}const Fe=j(U,[["render",we]]);export{Fe as default};