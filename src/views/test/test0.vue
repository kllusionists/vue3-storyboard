<template>
  <div class="test0">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div>test0</div>
    <div @click="onBack">go test1</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup(props) {
    const router = useRouter();

    const onBack = () => {
      router.push("/test1");
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
  .test0 {
    height: 100%;
    background-color: antiquewhite;
  }
</style>
