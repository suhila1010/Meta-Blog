<template>
  <div>
    <Banner />
    <Ad />
    <Posts />
    <Ad />
  </div>
</template>

<script>
import Banner from "../../components/Banner/AppBanner.vue";
import Ad from "../../components/Ad/AdComponent.vue";
import Posts from "../../components/posts/AllPosts.vue";
export default {
  setup() {
    return {};
  },
  components: {
    Ad,
    Banner,
    Posts,
  },
};
</script>

<style lang="scss" scoped></style>
