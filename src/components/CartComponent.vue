<template>
    <div class="bg-light p-4 my-4">
    <div v-if="!cartList.carts">購物車沒有任何品項</div>
    <table v-else class="table align-middle">
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
          <td width="100">
            <a href="#" class="text-dark" @click.prevent="removeCart(item.id)"><i class="bi bi-x"></i></a>
          </td>
          <td width="100">
            <img
              :src="item.product.imageUrl"
              class="table-image"
              alt=""
            />
          </td>
          <td>{{ item.product.title }}</td>
          <td width="200">
            <select name="" id="" class="form-select" :value="item.qty" @change="(event) => changeCartQty(event,item.id)">
              <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
            </select>
          </td>
          <td width="200" class="text-end">$ {{ currency(item.final_total) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額 NT${{ currency(cartList.final_total) }}</td>
        </tr>
      </tfoot>
    </table>
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
    ...mapState(cartStore,['cartList'])
  },
  methods: {
    ...mapActions(cartStore,['getCartList','changeCartQty','removeCart'])
  },
  created() {
    this.getCartList()
  }
}
</script>

<style scoped>
  .table-image {
    width: 75px;
    height: 75px;
    object-fit: cover;
  }
</style>