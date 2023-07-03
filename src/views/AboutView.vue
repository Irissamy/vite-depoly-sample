<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

export default {
  name: 'AboutView',
  mounted() {
    console.log(import.meta.env.VITE_TEXT)
    const api = import.meta.env.VITE_PATH
    this.$http.get(api)
      .then((res) => {
        console.log(res.data)
      })
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
