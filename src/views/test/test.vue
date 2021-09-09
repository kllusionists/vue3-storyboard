<template>
  <div class="test">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div>test</div>
    <div @click="onBack">go test0</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup(props) {
    const router = useRouter();

    const onBack = () => {
      router.push("/test0");
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
  $color: green;
  .test {
    height: 100%;
    background-color: $color;
  }
</style>
