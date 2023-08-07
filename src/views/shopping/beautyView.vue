<template>
    <ProductBanner :banner-image="bannerImage"></ProductBanner>
    <TheProduct :product="productList"></TheProduct>
</template>

<script>
import ProductBanner from '@/components/ProductBanner.vue'
import TheProduct from '@/components/TheProduct.vue'
import productStore from '@/store/productStore.js'
import { mapState,mapActions } from 'pinia'

export default {
    name: 'ShoppingView',
    components:{
        ProductBanner,TheProduct
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
        ...mapState(productStore,['sortProducts']),
        ...mapState(productStore,{
            products: 'sortProducts',
            productList() {
                return this.products.filter(item => item.category === '彩妝')
            }
        })
    },
    methods: {
        ...mapActions(productStore,['getProductList'])
    },
    created() {
        this.getProductList()
    }
}
</script>