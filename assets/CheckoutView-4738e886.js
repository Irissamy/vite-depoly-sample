import{_ as m,r as c,o,c as n,a as t,f as u,u as b,F as _,g as h,l as x,t as s}from"./index-adc540a8.js";const f={data(){return{orderId:"",orderList:{},paginaition:{},isLoading:!1}},methods:{getOrder(r=1){const d=`https://vue3-course-api.hexschool.io/api/iris-lai-api/orders?page=${r}`;this.$http.get(d).then(a=>{a.data.success&&(this.orderList=a.data.orders,this.pagination=a.data.pagination)})}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},v={class:"container"},y={"aria-label":"breadcrumb"},k={class:"breadcrumb"},L={class:"breadcrumb-item"},$=t("li",{class:"breadcrumb-item active","aria-current":"page"},"結帳",-1),O={class:"my-5 d-flex flex-column align-items-center"},V={class:"table align-middle"},w=t("thead",null,[t("th",null,"品名"),t("th",null,"數量"),t("th",{class:"text-end"},"單價")],-1),B={class:"text-end"},C=t("td",{colspan:"2",class:"text-end"},"總計",-1),I={class:"text-end"},N={class:"table"},E=t("th",{width:"100"},"Email",-1),F=t("th",null,"姓名",-1),q=t("th",null,"收件人電話",-1),D=t("th",null,"收件人地址",-1),S=t("th",null,"付款狀態",-1),T={key:0,class:"text-success"},j={key:1,class:"text-danger"};function z(r,d,a,A,i,G){const p=c("router-link"),g=c("LoadingOverlay");return o(),n("div",v,[t("nav",y,[t("ol",k,[t("li",L,[u(p,{to:"/"},{default:b(()=>[x("商品頁")]),_:1})]),$])]),u(g,{active:i.isLoading},null,8,["active"]),t("div",O,[(o(!0),n(_,null,h(i.orderList,e=>(o(),n("div",{class:"col-md-6 mb-4",key:e.id},[t("table",V,[w,t("tbody",null,[(o(!0),n(_,null,h(e.products,l=>(o(),n("tr",{key:l.id},[t("td",null,s(l.product.title),1),t("td",null,s(l.qty)+" / "+s(l.product.unit),1),t("td",B,s(l.product.price),1)]))),128))]),t("tfoot",null,[t("tr",null,[C,t("td",I,s(e.total),1)])])]),t("table",N,[t("tbody",null,[t("tr",null,[E,t("td",null,s(e.user.email),1)]),t("tr",null,[F,t("td",null,s(e.user.name),1)]),t("tr",null,[q,t("td",null,s(e.user.tel),1)]),t("tr",null,[D,t("td",null,s(e.user.address),1)]),t("tr",null,[S,t("td",null,[e.is_paid===!0?(o(),n("span",T,"付款完成")):(o(),n("span",j,"尚未付款"))])])])])]))),128))])])}const J=m(f,[["render",z]]);export{J as default};
