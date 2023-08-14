<template>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/checkout/checkoutAll">結帳</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">訂單單筆</li>
        </ol>
      </nav>
      <LoadingOverlay :active="isLoading"></LoadingOverlay>
      <div class="my-5 d-flex flex-column align-items-center">
        <div class="col-md-6 mb-4">
            <div class="cart-list">
                <div class="row mx-0 mb-2 pb-2 border-bottom" v-for="el in orderInfo.products" :key="el.id">
                    <div class="col-2 px-0">
                        <img
                        :src="el.product.imageUrl"
                        class="cart__image"
                        alt=""
                        />
                    </div>
                    <div class="col-10 align-items-center">
                        <div class="pb-2">{{ el.product.title }}</div>
                        <div class="d-flex align-items-center">
                        <div>{{ el.qty }}</div>
                        <i class="bi bi-x"></i>
                        <div class="text-nowrap cart__item-price">${{ currency(el.product.price) }}</div>
                        </div>
                    </div> 
                </div>
            </div>
            <div>
                <div class="text-end mb-2">總金額 NT${{ currency(orderInfo.total) }}</div>
            </div>
            <table class="table">
                <tbody>
                <tr>
                    <th width="100">Email</th>
                    <td>{{ orderInfo.user.email }}</td>
                </tr>
                <tr>
                    <th>姓名</th>
                    <td>{{ orderInfo.user.name }}</td>
                </tr>
                <tr>
                    <th>收件人電話</th>
                    <td>{{ orderInfo.user.tel }}</td>
                </tr>
                <tr>
                    <th>收件人地址</th>
                    <td>{{ orderInfo.user.address }}</td>
                </tr>
                <tr>
                    <th>付款狀態</th>
                    <td>
                    <span v-if="orderInfo.is_paid === true" class="text-success">付款完成</span>
                    <span v-else class="text-danger">尚未付款</span>
                    </td>
                </tr>
                </tbody>
            </table>
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
            orderInfo: {
                user:{}
            },
            paginaition: {}, 
            isLoading: false
        }
    },
    methods:{
        async getOrder(){
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/order/${this.orderId}`
            await this.$http.get(api)
                .then((res) => {
                    if (res.data.success) {
                        this.orderInfo = res.data.order
                    } else {
                        console.log(res.data.message)
                    }
                })
        }
    },
    created() {
        this.orderId = this.$route.params.orderId
        this.getOrder()
    }
}
</script>
