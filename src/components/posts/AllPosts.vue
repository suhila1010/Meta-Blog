<template>
  <div class="px-52 w-full mb-20">
    <h1 class="text-2xl font-bold mb-7">Latest Post</h1>
    <ul class="flex gap-5 flex-wrap">
      <Post
        v-for="post in PaginatedPosts"
        :key="post.id"
        :post="post"
        class="basis-[32%] p-4 border rounded-lg"
      />
    </ul>
    <div class="w-full flex justify-center my-10">
      <button
        class="text-[#696A75] border border-[#696A75] rounded-lg px-5 py-3"
        @click="LoadMore"
        v-if="posts.length > PaginatedPosts.length"
      >
        View All Post
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "../post/singlePost.vue";
export default {
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
      PageSize: 6,
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios
        .get("/posts.json")
        .then((response) => {
          this.posts = response.data.posts;
        })
        .catch((error) => {
          console.error("There was an error fetching the posts!", error);
        });
    },
    LoadMore(){
        this.PageSize = this.PageSize + 3
    }
  },
  computed: {
    PaginatedPosts() {
      return this.posts.slice(0, this.PageSize);
    },
  },
};
</script>

<style scoped></style>
