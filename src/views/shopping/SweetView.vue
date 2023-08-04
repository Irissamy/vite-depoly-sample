<template>
    <ProductBanner :banner-image="bannerImage"></ProductBanner>
    <CartComponent></CartComponent>
    <TheProduct :product="productList"></TheProduct>
</template>

<script>
import ProductBanner from '@/components/ProductBanner.vue'
import TheProduct from '@/components/TheProduct.vue'
import CartComponent from '@/components/CartComponent.vue'
import productStore from '@/store/productStore.js'
import { mapState,mapActions } from 'pinia'

export default {
    name: 'ShoppingView',
    components:{
        TheProduct,CartComponent,
        ProductBanner
    },
    data() {
        return {
            bannerImage: [
                'https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            ],
        }
    },
    computed: {
        ...mapState(productStore,['sortProducts']),
        ...mapState(productStore,{
            products: 'sortProducts',
            productList() {
                return this.products.filter(item => item.category === '零食')
            }
        }),
    },
    methods: {
        ...mapActions(productStore,['getProductList'])
    },
    created() {
        this.getProductList()
    }
}
</script>