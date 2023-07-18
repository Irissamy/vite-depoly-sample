<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="wrapper">
      <NavBar></NavBar>
    </div>
  </header>
  <div class="container py-4">
    <RouterView />
  </div>
</template>

<script>
import {  RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    RouterView,NavBar
  }
}
</script>