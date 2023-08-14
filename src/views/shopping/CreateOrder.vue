<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">商品頁</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">填寫訂單</li>
            </ol>
        </nav>
        <LoadingOverlay :active="isLoading"></LoadingOverlay>
        <!-- 購物車列表 -->
        <div class="my-5 d-flex flex-column align-items-center">
            <div class="col-md-6 mb-4">
                <table class="table align-middle">
                    <thead>
                    <th>品名</th>
                    <th>數量</th>
                    <th class="text-end">單價</th>
                    </thead>
                    <tbody>
                    <tr v-for="el in cartList.carts" :key="el.id">
                        <td>{{ el.product.title }}</td>
                        <td>{{ el.qty }}</td>
                        <td class="text-end">{{ currency(el.product.price) }}</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colspan="2" class="text-end">總計</td>
                        <td class="text-end">{{ currency(cartList.final_total) }}</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <!-- 填寫購買資料 -->
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
            form: {
                user: {
                name: '',
                email: '',
                tel: '',
                address: ''
                },
                message: ''
            }
        }
    },
    computed: {
        ...mapState(cartStore,['cartList'])
    },
    methods: {
        ...mapActions(cartStore,['getCartList']),
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
            }
    }
}
</script>