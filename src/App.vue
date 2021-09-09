<template>
  <router-view v-slot="{ Component, route }">
    <!-- mode="out-in" -->
    <transition :name="route.meta.transition">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
</script>

<style>
  @import "style/animation.scss";

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    overflow: hidden;
  }
</style>
