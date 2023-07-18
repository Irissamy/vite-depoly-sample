<template>
    <div class="bg-light p-4 my-4">
    <div v-if="!getCartList.carts.length">購物車沒有任何品項</div>
    <table v-else class="table align-middle">
      <tbody>
        <tr v-for="item in getCartList.carts" :key="item.id">
          <td width="100">
            <a href="#" class="text-dark" @click.prevent="removeCartItem(item.id)"><i class="bi bi-x"></i></a>
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
            <select name="" id="" class="form-select" :value="item.qty" @change="(e) => setCartQty(e,item.id)">
              <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
            </select>
          </td>
          <td width="200" class="text-end">$ {{ item.subTotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額 NT${{ getCartList.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import cartStore from '@/store/cartStore.js';
import { mapState, mapActions } from 'pinia';
export default {
    computed: {
        ...mapState(cartStore,['getCartList'])
    },
    methods: {
        ...mapActions(cartStore,['setCartQty','removeCartItem'])
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