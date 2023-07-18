<template>
  <div class="row row-cols-3 my-3 g-4">
    <div class="col" v-for="item in sortProducts" :key="item.id">
      <div class="card">
        <img
          :src="item.imageUrl"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h6 class="card-title">
            {{ item.title }}
            <span class="float-end">$ {{ item.price }}</span>
          </h6>
          <a href="#" class="btn btn-outline-primary w-100" @click.prevent="addToCart(item.id,item.qty)">加入購物車</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productStore from '@/store/productStore';
import cartStore from '@/store/cartStore';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'ProductComponent',
  computed: {
    ...mapState(productStore,['sortProducts'])
  },
  methods: {
    ...mapActions(cartStore,['addToCart'])
  }
}
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>
