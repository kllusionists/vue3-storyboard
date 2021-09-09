<template>
  <div class="login">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div>Hello</div>
    <div @click="onBack">go back</div>
    <div @click="goTest">go test</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup(props) {
    const router = useRouter();

    const onBack = () => {
      router.back();
    };

    const goTest = () => {
      router.push("/test");
    };

    // 暴露给 template
    return {
      onBack,
      goTest,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scope>
  $color: blue;
  .login {
    height: 100%;
    background-color: $color;
  }
</style>
