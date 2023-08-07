<template>
    <!-- <LoadingOverlay :active="isLoading"></LoadingOverlay> -->
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">商品頁</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ productDetail.title }}</li>
        </ol>
      </nav>
      <div class="row justify-content-center">
        <article class="col-8">
          <h2>{{ productDetail.title }}</h2>
          <div>{{ productDetail.description }}</div>
          <div>{{ productDetail.content }}</div>
          <img :src="productDetail.imageUrl" alt="" class="img-fluid mb-3">
        </article>
        <div class="col-4">
          <div class="h5" v-if="!productDetail.price">${{ productDetail.origin_price }}元</div><!-- 完全沒特價的狀態 -->
          <del class="h6" v-if="productDetail.price">原價 ${{ productDetail.origin_price }} 元</del>
          <div class="h5" v-if="productDetail.price">現在只要 ${{ productDetail.price }} 元</div>
          <hr>
          <button type="button" class="btn btn-outline-danger" @click="addToCart(productDetail,1)">
            加到購物車
          </button>
        </div>
      </div>
    </div>
  </template>

<script>
import cartStore from '@/store/cartStore.js'
import { mapActions } from 'pinia'

export default {
    name: 'ShoppingView',
    data() {
        return {
          productDetail: {},
          productId: '',
          productCategory: '',
          isLoading: false
        }
    },
    methods: {
      ...mapActions(cartStore,['addToCart']),
      getProduct () {
        const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/product/${this.productId}`
        this.isLoading = true
        this.$http.get(api)
          .then((res) => {
            if (res.data.success) {
              this.productDetail = res.data.product
              this.isLoading = false
            } else {
              console.log(res.data.message)
            }
          })
      },
    },
    created() {
      this.productId = this.$route.params.productId
      this.productCategory = this.$route.params.productCategory
      this.getProduct()
    }
}
</script>