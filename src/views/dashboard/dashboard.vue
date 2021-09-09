<template>
  <div class="dashboard">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <div @click="onClick">go to login</div>
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// rotate-clockwise
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "@/components/HelloWorld.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      show: false,
    };
  },
  setup(props) {
    const router = useRouter();

    const onClick = () => {
      router.push("/login");
    };

    // 暴露给 template
    return {
      onClick,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scope>
  $color: red;
  .dashboard {
    height: 100%;
    background-color: $color;
  }
</style>
