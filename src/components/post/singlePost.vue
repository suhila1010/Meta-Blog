<template>
  <li>
    <img :src="post.coverImg" :alt="post.title" class="rounded-lg mb-5 w-full h-[240px] object-cover" />
    <h5 class="w-fit px-3 py-1 rounded-md text-[#4B6BFB] bg-[#4B6BFB0D] mb-3">
      {{ post.category }}
    </h5>
    <p class="text-2xl font-semibold">
      {{ post.description }}
    </p>
    <div>
      <author :img="authImg" :name="post.authorName" :date="post.date" />
    </div>
  </li>
</template>

<script>
import author from "../../components/authorInfo/authorInfo.vue";
export default {
  components: {
    author,
  },
  props: {
    post: Object,
  },
};
</script>

<style lang="scss" scoped></style>
