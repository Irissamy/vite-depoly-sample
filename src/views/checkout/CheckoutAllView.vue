<template>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/checkout/checkoutAll">結帳</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">訂單總覽</li>
        </ol>
      </nav>
      <LoadingOverlay :active="isLoading"></LoadingOverlay>
      <div class="container text-center">
        <div class="row py-2 bg-warning">
            <div class="col">訂單編號</div>
            <div class="col">建立日期</div>
            <div class="col">付款狀態</div>
            <div class="col">總金額</div>
        </div>
        <div class="row py-2 border-bottom" v-for="item in orderList" :key="item.id">
            <a class="col bg-warning-subtle" href="#" @click.prevent="checkoutOrderId(item)">{{ item.id }}</a>
            <div class="col">{{ $dayjs(item.create_at).format('YYYY-MM-DD') }}</div>
            <div class="col">
                <span v-if="item.is_paid === true" class="text-success">付款完成</span>
                <span v-else class="text-danger">尚未付款</span>
            </div>
            <div class="col">{{ currency(item.total) }}</div>
        </div>
      </div>
    </div>
</template>

<script>
import { currency } from '@/methods/filterFn.js'

export default {
    data() {
        return{
            currency,
            orderId:'',
            orderList: {},
            paginaition: {}, 
            isLoading: false
        }
    },
    methods:{
        getOrder(page=1){
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/orders?page=${page}`
            this.$http.get(api)
                .then((res) => {
                    if (res.data.success) {
                        this.orderList = res.data.orders
                        this.pagination = res.data.pagination
                    }
                })
        },
        checkoutOrderId(orderItem){
            this.$router.push(`/checkout/${orderItem.id}`)
        }
    },
    created() {
        this.getOrder()
    }
}
</script>
