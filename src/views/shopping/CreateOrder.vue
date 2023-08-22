<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">商品頁</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">填寫訂單</li>
            </ol>
        </nav>
        <!-- 購物車列表 -->
        <div class="col-md-6 m-auto d-flex justify-content-center align-items-center p-4 bg-light">
            <span>購物車列表</span>
        </div>
        <div v-if="cartLen === 0" class="d-flex flex-column align-items-center cart-empty">
            <img class="cart-empty__image" src="@/assets/image/shopping-cart_empty.png" alt="">
            <p>訂單中沒有任何品項<br>趕快帶我回家( ´•̥̥̥ω•̥̥̥` )</p>
        </div>
        <div v-else class="my-5 d-flex flex-column align-items-center">
            <div class="col-md-6 mb-4">
                <div class="cart-list">
                    <div class="row mx-0 mb-2 pb-2 border-bottom" v-for="el in cartList.carts" :key="el.id">
                        <div class="col-2 px-0">
                            <img
                            :src="el.product.imageUrl"
                            class="cart__image"
                            alt=""
                            />
                        </div>
                        <div class="col-9 align-items-center">
                            <div class="pb-2">{{ el.product.title }}</div>
                            <div class="d-flex align-items-center">
                            <div>{{ el.qty }}</div>
                            <i class="bi bi-x"></i>
                            <div class="text-nowrap cart__item-price">${{ currency(el.product.price) }}</div>
                            </div>
                        </div> 
                        <div class="d-flex col-1 px-0 justify-content-center align-items-center">
                            <a href="#" class="text-dark" @click.prevent="removeCart(el.id)"><i class="bi bi-trash text-black-50"></i></a>
                        </div>
                    </div>
                </div>
                <div class="d-flex mb-3 input-group needs-validation" novalidate> 
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-ticket-perforated"></i></span>
                    <input type="text" id="validationServer02" ref="couponInput" class="form-control" :class="isCoupon" placeholder="Coupon折扣碼" aria-label="Coupon" aria-describedby="basic-addon1" required v-model="couponCode">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="useCoupon" style="white-space:nowrap">套用</button>
                </div>
                <div id="validationServer02Feedback" class="d-flex" :class="[isCouponMsg ? 'valid-feedback' : 'invalid-feedback' ]">{{ CouponErrors }}</div>
                <div>
                    <div class="text-end mb-2">總金額 NT${{ currency(cartList.final_total) }}</div>
                </div>
            </div>
        </div>
        <div class="col-md-6 m-auto d-flex justify-content-center align-items-center p-4 bg-light">
            <span>付款方式</span>
        </div>
        <div class="my-5 mt-2 row justify-content-center">
            <div class="row row-cols-1 row-cols-md-6 g-4 justify-content-center">
                <div class="col" v-for="(pay,index) in payment" :key="pay.id">
                    <a class="card h-100 pay-card" :class="{'pay-card--active':index==current }" href="#" @click.prevent="choosePay(index)">
                        <div class="card-body">
                            <div class="d-flex justify-content-center mb-2">
                                <i class="bi fs-2" :class="pay.iconClass"></i>
                            </div>
                            <h5 class="card-title fs-6 text-center">{{ pay.id }}</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-md-6 m-auto d-flex justify-content-center align-items-center p-4 bg-light">
            <span>購買資料</span>
        </div>
        <div class="my-5 row justify-content-center">
            <V-Form class="col-md-6" v-slot="{ errors }" @submit="createOrder">
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <V-Field id="email" name="email" type="email" class="form-control"
                        :class="{'is-invalid': errors['email']}"
                        rules="email|required"
                        placeholder="請輸入 Email" v-model="form.user.email"></V-Field>
                    <V-ErrorMessage name="email" class="invalid-feedback"></V-ErrorMessage>
                </div>

                <div class="mb-3">
                    <label for="name" class="form-label">收件人姓名</label>
                    <V-Field id="name" name="姓名" type="text" class="form-control"
                            :class="{'is-invalid': errors['姓名']}"
                            rules="required"
                            placeholder="請輸入姓名" v-model="form.user.name"></V-Field>
                    <V-ErrorMessage name="姓名" class="invalid-feedback"></V-ErrorMessage>
                </div>

                <div class="mb-3">
                    <label for="tel" class="form-label">收件人電話</label>
                    <V-Field id="tel" name="電話" type="tel" class="form-control"
                            :class="{'is-invalid': errors['電話']}"
                            rules="required"
                            placeholder="請輸入電話" v-model="form.user.tel"></V-Field>
                    <V-ErrorMessage name="電話" class="invalid-feedback"></V-ErrorMessage>
                </div>

                <div class="mb-3">
                    <label for="address" class="form-label">收件人地址</label>
                    <V-Field id="address" name="地址" type="text" class="form-control"
                            :class="{'is-invalid': errors['地址']}"
                            rules="required"
                            placeholder="請輸入地址" v-model="form.user.address"></V-Field>
                    <V-ErrorMessage name="地址" class="invalid-feedback"></V-ErrorMessage>
                </div>

                <div class="mb-3">
                    <label for="message" class="form-label">留言</label>
                    <textarea name="" id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                </div>
                <div class="text-end">
                    <button class="btn btn-danger">送出訂單</button>
                </div>
            </V-Form>
        </div>
    </div>
</template>

<script>
import cartStore from '@/store/cartStore.js'
import { mapActions,mapState } from 'pinia'
import { currency } from '@/methods/filterFn.js'

export default {
    data() {
        return{
            currency,
            isLoading: false,
            current: -1,
            couponCode: '',
            isCoupon: '',
            isCouponMsg: null,
            CouponErrors:'',
            form: {
                user: {
                name: '',
                email: '',
                tel: '',
                address: ''
                },
                message: ''
            },
            payment: [
                {
                    id: '貨到付款',
                    iconClass: 'bi-shop'
                },
                {
                    id: 'ATM轉帳',
                    iconClass: 'bi-cash-coin'
                },
                {
                    id: '信用卡',
                    iconClass: 'bi-credit-card'
                }
            ]
        }
    },
    computed: {
        ...mapState(cartStore,['cartList','cartLen'])
    },
    methods: {
        ...mapActions(cartStore,['getCartList','removeCart']),
        createOrder () {
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/order`
            const order = this.form
            this.$http.post(api, { data: order })
                .then((res) => {
                if (res.data.success) {
                    this.getCartList()
                    this.$router.push(`/checkout/${res.data.orderId}`)
                } else {
                    console.log(res)
                }
            })
        },
        choosePay(index){
            this.current = index
        },
        useCoupon(){
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/coupon`
            this.isLoading = true
            this.$http.post(api, {data: {code: this.couponCode}})
                .then((res) => {
                    if(res.data.success){
                        this.isCoupon = 'is-valid'
                        this.isCouponMsg = true
                        this.getCartList()
                    } else {
                        this.isCoupon = 'is-invalid'
                        this.isCouponMsg = false
                        this.CouponErrors = res.data.message
                    }
                })
            this.isLoading = false
        }
    }
}
</script>