import { defineStore } from 'pinia'
import axios from 'axios'

export default defineStore('cartStore',{
    state: () => ({
        cartList: [],
        cartLen: 0,
        isLoading: false,
        isShow: false
    }),
    actions: {
        async getCartList(){
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart`
            this.isLoading = true
            await axios.get(api)
                .then((res) => {
                this.cartList = res.data.data
                this.cartLen = this.cartList.carts.length
                this.isLoading = false
            })
        },
        async addToCart (item) {
            this.isShow = true
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart`
            const cart = {
              product_id: item.id,
              qty: 1
            }
            await axios.post(api, { data: cart })
              .then((res) => {
                if(res.data.success){
                  this.getCartList()
                } else {
                    console.log(res.data.message)
                }
              })
            setTimeout(() => {
              this.isShow = false
            },5000)
        },
        async changeCartQty(event,productId){
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart/${productId}`
            const setQty = {
                product_id: productId,
                qty: event.target.value * 1
            }
            await axios.put(api, { data: setQty })
              .then((res) => {
                if(res.data.success){
                  this.getCartList()
                } else {
                  console.log(res.data.message)
                }
                
              })
        },
        async removeCart(productId){
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart/${productId}`
            await axios.delete(api) 
              .then((res) => {
                if(res.data.success){
                    this.getCartList()
                } else {
                    console.log(res.data.message)
                }
              })
        }
    }
})