<template>
  <LoadingOverlay :active="isLoading" :is-full-page="false"></LoadingOverlay>
  <div class="bg-light p-3">
    <div v-if="cartLen === 0" class="d-flex flex-column align-items-center cart-empty">
      <img class="cart-empty__image" src="@/assets/image/shopping-cart_empty.png" alt="">
      <p>購物車沒有任何品項<br>趕快帶我回家( ´•̥̥̥ω•̥̥̥` )</p>
    </div>
    <div v-else class="align-middle">
      <div class="cart-list">
        <div class="row mx-0 mb-2 pb-2 border-bottom" v-for="item in cartList.carts" :key="item.id">
          <div class="d-flex col-1 px-0 align-items-center">
            <a href="#" class="text-dark" @click.prevent="removeCart(item.id)"><i class="bi bi-trash text-black-50"></i></a>
          </div>
          <div class="col-4 px-0">
            <img
              :src="item.product.imageUrl"
              class="cart__image"
              alt=""
            />
          </div>
          <div class="col-7 align-items-center">
            <div class="pb-2">{{ item.product.title }}</div>
            <div class="d-flex align-items-center">
              <select name="" id="" class="form-select" :value="item.qty" @change="(event) => changeCartQty(event,item.id)">
                <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
              </select>
              <i class="bi bi-x"></i>
              <div class="text-nowrap cart__item-price">${{ currency(item.final_total) }}</div>
            </div>
          </div> 
        </div>
      </div>
      <div>
        <div class="text-end mb-2">總金額 NT${{ currency(cartList.final_total) }}</div>
        <a href="#" class="btn btn-outline-primary w-100" @click.prevent="goToCheckout">要結帳了嗎( • ̀ω•́ )</a>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/store/cartStore.js'
import { mapState,mapActions } from 'pinia'
import { currency } from '@/methods/filterFn.js'

export default {
  data() {
    return {
      currency
    }
  },
  computed: {
    ...mapState(cartStore,['cartList','cartLen','isLoading'])
  },
  methods: {
    ...mapActions(cartStore,['getCartList','changeCartQty','removeCart']),
    goToCheckout(){
      this.$router.push(`/shopping/createOrder`)
    }
  },
  created() {
    this.getCartList()
  }
}
</script>
