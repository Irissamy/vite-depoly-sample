<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/checkout/checkoutAll">結帳</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">訂單單筆</li>
        </ol>
      </nav>
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
                    <div class="col-4 align-items-center">
                        <div class="text-secondary">商品</div>
                        <div class="pb-2">{{ el.product.title }}</div>
                    </div> 
                    <div class="col-3 align-items-center">
                        <div class="text-center text-secondary">數量</div>
                        <div class="text-center">{{ el.qty }}</div>
                    </div> 
                    <div class="col-3 align-items-center justify-content-end">
                        <div class="text-center text-secondary">小計</div>
                        <div class="text-center text-nowrap cart__item-price" :class="{ 'text-decoration-line-through': el.coupon }">${{ currency(el.product.price) }}</div>
                        <div v-if="el.coupon" class="text-center text-nowrap cart__item-price ps-2">${{ currency(el.final_total) }}</div>
                    </div> 
                </div>
            </div>
            <div class="d-flex">
                <div v-if="couponCode !== ''">使用折扣碼<span class="ps-2 fw-bolder">{{ couponCode }}</span></div>
                <div class="text-end fw-bolder mb-2 ms-auto">總金額 NT${{ currency(orderInfo.total) }}</div>
            </div>
            <table class="table mt-4">
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
            <div class="text-end">
                <router-link to="/checkout/checkoutAll" class="btn btn-success me-2">查看全部訂單</router-link>
                <button v-if="orderInfo.is_paid === false" class="btn btn-danger" @click="checkoutPay">確認付款</button>
            </div>
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
            couponCode: '',
            isLoading: false
        }
    },
    methods:{
        getOrder(){
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/order/${this.orderId}`
            this.isLoading = true
            this.$http.get(api)
                .then((res) => {
                    if (res.data.success) {
                        this.orderInfo = res.data.order
                        this.couponCode = (Object.values(this.orderInfo.products)[0].coupon) ? (Object.values(this.orderInfo.products)[0].coupon.code) : ''
                        this.isLoading = false
                    } else {
                        console.log(res.data.message)
                    }
                })
        },
        checkoutPay(){
            const api =  `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/pay/${this.orderId}`
            this.isLoading = true
            this.$http.post(api,this.orderId)
                .then((res) => {
                    if(res.data.success){
                        this.getOrder()
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
