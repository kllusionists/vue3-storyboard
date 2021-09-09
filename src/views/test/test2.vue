<template>
  <div class="test2">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div>test2</div>
    <div @click="onBack">go dashboard</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup(props) {
    const router = useRouter();

    const onBack = () => {
      router.push("/");
    };

    // 暴露给 template
    return {
      onBack,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scope>
  .test2 {
    height: 100%;
    background-color: brown;
  }
</style>
