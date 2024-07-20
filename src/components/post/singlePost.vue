<template>
  <li class="w-full">
    <img
      :src="post.coverImg"
      :alt="post.title"
      class="rounded-lg mb-5 w-full h-[240px] object-cover cursor-pointer"
      @click="GoToPostDetails(post.id)"
    />
    <h5 class="w-fit px-3 py-1 rounded-md text-[#4B6BFB] bg-[#4B6BFB0D] mb-3">
      {{ post.category }}
    </h5>
    <p class="text-2xl font-semibold sm:text-lg">
      {{ post.description }}
    </p>
    <div>
      <author :img="post.authorImg" :name="post.authorName" :date="post.date" />
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
  methods: {
    GoToPostDetails(id) {
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
