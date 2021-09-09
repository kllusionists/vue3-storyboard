<template>
  <div class="test1">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div>test1</div>
    <div @click="onBack">go test2</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup(props) {
    const router = useRouter();

    const onBack = () => {
      router.push("/test2");
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
  .test1 {
    height: 100%;
    background-color: darkgray;
  }
</style>
