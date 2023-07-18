<template>
    <ProductBanner></ProductBanner>
    <CartComponent></CartComponent>
    <ProductComponent></ProductComponent>
</template>

<script>
import ProductBanner from '@/components/ProductBanner.vue'
import ProductComponent from '@/components/ProductComponent.vue'
import CartComponent from '@/components/CartComponent.vue'

export default {
    name: 'ShoppingView',
    components:{
        ProductComponent,CartComponent,
        ProductBanner
    },
    data() {
        return {
        }
    }
}
</script>
