import{_ as v,j as g,r as _,o,c as a,f as r,a as s,u as b,F as h,g as k,h as f,l as m,b as y,t as n}from"./index-992241f8.js";const L={data(){return{currency:g,orderId:"",orderList:{},paginaition:{},isLoading:!1}},methods:{getOrder(t=1){const d=`https://vue3-course-api.hexschool.io/api/iris-lai-api/orders?page=${t}`;this.isLoading=!0,this.$http.get(d).then(c=>{c.data.success&&(this.orderList=c.data.orders,this.pagination=c.data.pagination,this.isLoading=!1)})},checkoutOrderId(t){this.$router.push(`/checkout/${t.id}`)}},created(){this.getOrder()}},x={class:"container"},w={"aria-label":"breadcrumb"},$={class:"breadcrumb"},O={class:"breadcrumb-item"},C=s("li",{class:"breadcrumb-item active","aria-current":"page"},"訂單總覽",-1),V={class:"container text-center"},N=f('<div class="row py-2 bg-warning"><div class="col">訂單編號</div><div class="col">建立日期</div><div class="col">付款狀態</div><div class="col">總金額</div></div>',1),Y=["onClick"],B={class:"col"},D={class:"col"},I={key:0,class:"text-success"},M={key:1,class:"text-danger"},j={class:"col"};function A(t,d,c,F,i,u){const l=_("LoadingOverlay"),p=_("router-link");return o(),a(h,null,[r(l,{active:i.isLoading},null,8,["active"]),s("div",x,[s("nav",w,[s("ol",$,[s("li",O,[r(p,{to:"/checkout/checkoutAll"},{default:b(()=>[m("結帳")]),_:1})]),C])]),r(l,{active:i.isLoading},null,8,["active"]),s("div",V,[N,(o(!0),a(h,null,k(i.orderList,e=>(o(),a("div",{class:"row py-2 border-bottom",key:e.id},[s("a",{class:"col bg-warning-subtle",href:"#",onClick:y(S=>u.checkoutOrderId(e),["prevent"])},n(e.id),9,Y),s("div",B,n(t.$dayjs(e.create_at).format("YYYY-MM-DD")),1),s("div",D,[e.is_paid===!0?(o(),a("span",I,"付款完成")):(o(),a("span",M,"尚未付款"))]),s("div",j,n(i.currency(e.total)),1)]))),128))])])],64)}const T=v(L,[["render",A]]);export{T as default};
