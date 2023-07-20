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
            <span class="float-end">$ {{ item.price }}</span>
          </h6>
          <a href="#" class="btn btn-outline-primary w-100">加入購物車</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default () { return {} }
    }
  },
}
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>
