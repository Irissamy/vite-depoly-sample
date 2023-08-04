import { defineStore } from 'pinia'
import productStore from '@/store/productStore'

export default defineStore('cartStore',{
    state: () => ({
        cartList: []
    }),
    actions: {
        addToCart(productId,qty=1) {
            const currentCart = this.cartList.find((item) => item.productId === productId)
            if(currentCart){
                currentCart.qty += qty
            } else {
                this.cartList.push({
                    id: new Date().getTime(),
                    productId,
                    qty
                })
            }
        },
        setCartQty(event,productId){
            const currentCart = this.cartList.find((item) => item.id === productId)
            currentCart.qty = event.target.value * 1 
        },
        removeCart(productId){
            const currentCartIndex = this.cartList.findIndex((item) => item.id === productId)
            this.cartList.splice(currentCartIndex,1)
        }
    },
    getters: {
        getCartList: ({cartList}) => {
            const products = productStore().products
            const carts = cartList.map(item => {
                const product = products.find((productItem) => productItem.id === item.productId)
                return {
                    ...item,
                    product,
                    subTotal: product.price * item.qty
                }
            })
            const total = carts.reduce((a, b) => a + b.subTotal,0)
            return {
                carts,
                total
            }
        }
    }
})