import { defineStore } from 'pinia'
import productStore from '@/store/productStore'

export default defineStore('cartStore',{
    state: () => ({
        cartList: []
    }),
    actions: {
        addToCart(productId,qty=1) {
            const currentCart = this.cartList.find(item => item.productId === productId)
            if(currentCart){
                currentCart.qty += qty
            }else {
                this.cartList.push({
                    id: new Date().getTime(),
                    productId,
                    qty
                    }
                )
            }
        },
        setCartQty(e,itemId){
            const currentCart = this.cartList.find(item => item.id === itemId)
            if(currentCart){
                currentCart.qty = e.target.value * 1
            }
        },
        removeCartItem(itemId){
            const itemIndex = this.cartList.findIndex(item => item.id === itemId)
            this.cartList.splice(itemIndex,1)
        }
    },
    getters: {
        getCartList: ({cartList}) => {
            const { products } = productStore()
            const carts = cartList.map(item => {
                const product = products.find((product) => product.id === item.productId)
                return {
                    ...item,
                    product,
                    subTotal: product.price * item.qty
                }
            })
            const total = carts.reduce((a,b) => a + b.subTotal,0)
            return {
                carts,
                total
            }
        }
    }
})