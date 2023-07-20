
import axios from 'axios'
import { defineStore } from 'pinia'

export default defineStore('furnitureStore',{
    state: () => ({
        products: [],
    }),
    getters: {
        sortProducts: ({products}) => {
            return products.sort((a,b) => a.price - b.price)
        }
    },
    actions: {
      getProductList () {
          const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/products/all`
          axios.get(api)
            .then((res) => {
              this.products = res.data.products
            })
      }
    }
})