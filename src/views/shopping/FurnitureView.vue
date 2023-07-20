<template>
    <ProductBanner :banner-image="bannerImage"></ProductBanner>
    <CartComponent></CartComponent>
    <TheProduct :product="sortProducts"></TheProduct>
</template>

<script>
import ProductBanner from '@/components/ProductBanner.vue'
import CartComponent from '@/components/CartComponent.vue'
import TheProduct from '@/components/TheProduct.vue'
import furnitureStore from '@/store/furnitureStore.js'
import { mapState,mapActions } from 'pinia'

export default {
    name: 'ShoppingView',
    components:{
        CartComponent,ProductBanner,TheProduct
    },
    data() {
        return {
            bannerImage: [
                'https://www.ikea.com.tw/dairyfarm/tw/pageImages/page__zh_tw_16255370301793770918.jpeg',
                'https://www.ikea.com.tw/dairyfarm/tw/pageImages/page__zh_tw_15962967350.jpeg',
                'https://img.ltn.com.tw/Upload/style/page/2022/05/25/220525-20211-1-IRdt2.jpg'
            ]
        }
    },
    computed: {
        ...mapState(furnitureStore,['sortProducts'])
    },
    methods: {
        ...mapActions(furnitureStore,['getProductList'])
    },
    created() {
        this.getProductList()
    }
}
</script>