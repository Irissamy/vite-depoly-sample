<template>
  <div class="row row-cols-3 my-3 g-4">
    <div class="col" v-for="item in product" :key="item.id">
      <div class="card">
        <img
          :src="item.imageUrl"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h6 class="card-title">
            {{ item.title }}
            <span class="float-end">$ {{ currency(item.price) }}</span>
          </h6>
          <a href="#" class="btn btn-outline-secondary w-100 mb-2" @click.prevent="getProductDetail(item)">查看更多</a>
          <a href="#" class="btn btn-outline-primary w-100" @click.prevent="addToCart(item)">加入購物車</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/store/cartStore'
import { mapActions } from 'pinia'
import { currency } from '@/methods/filterFn.js'

export default {
  props: {
    product: {
      type: Object,
      default () { return {} }
    }
  },
  data() {
    return {
      currency
    }
  },
  methods: {
    ...mapActions(cartStore,['addToCart']),
    getProductDetail(item) {
      this.$router.push(`${this.$route.path}/${item.id}`)
    }
  }
}
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
}
.btn-zindex{
  z-index:1;
}
</style>
