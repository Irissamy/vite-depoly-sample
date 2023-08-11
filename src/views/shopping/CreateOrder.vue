<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">商品頁</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">填寫訂單</li>
            </ol>
        </nav>
        <LoadingOverlay :active="isLoading"></LoadingOverlay>
        <!-- 送出訂單表單 -->
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
export default {
    data() {
        return{
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
    methods: {
        createOrder () {
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/order`
            const order = this.form
            this.$http.post(api, { data: order })
                .then((res) => {
                if (res.data.success) {
                    this.$router.push(`/shopping/checkout/${res.data.orderId}`)
                } else {
                    console.log(res)
                }
                })
            }
    }
}
</script>