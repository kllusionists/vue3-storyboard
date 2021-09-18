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
import { getCurrentInstance, onMounted } from "vue";
import { mapGetters } from "vuex";
import { useStore } from "vuex";

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      show: false,
    };
  },
  setup(props, context) {
    const internalInstance = getCurrentInstance();
    const store = useStore();

    const router = useRouter();
    console.log(context);

    const onClick = () => {
      store.commit("USER_INFO_UPDATE", { name: "KKK" });
      console.log(store.getters.userInfo);
      router.push("/login");
    };

    onMounted(() => {});

    // 暴露给 template
    return {
      onClick,
    };
  },
  mounted() {
    console.log(11111111111);
  },
  methods: {},
  computed: {
    ...mapGetters(["userInfo"]),
  },
};
</script>

<style lang="scss" scope>
  .dashboard {
    height: 100%;
    background-color: beige;
  }
</style>
