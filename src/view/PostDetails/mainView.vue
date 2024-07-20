<template>
  <div class="xl:px-64 xl:py-10 lg:px-32 md:px-24 sm:px-14 xs:px-5">
    <div class="">
      <h5 class="w-fit px-3 py-1 rounded-md bg-[#4B6BFB] text-white mb-3">
        {{ postDetails?.category }}
      </h5>
      <p class="text-3xl font-semibold lg:text-2xl">
        {{ postDetails?.description }}
      </p>
      <div>
        <author
          :img="authImg"
          :name="postDetails?.authorName"
          :date="postDetails?.date"
        />
      </div>
    </div>
    <div class="py-5">
      <img
        :src="postDetails?.coverImg"
        :alt="postDetails?.coverImg"
        class="rounded-lg w-full h-[600px] object-cover"
      />
    </div>
    <div
      v-for="(section, ind) in postDetails?.content"
      :key="ind"
      class="mt-5 text-xl"
    >
      <h1 v-if="section.section.title" class="text-2xl font-semibold my-5">
        {{ section.section.title }}
      </h1>
      <p>
        {{ section.section.paragraph1 }}
      </p>
      <br />
      <br />
      <p v-if="section.section.paragraph2">
        {{ section.section.paragraph2 }}
      </p>
      <div class="w-full flex justify-center my-10" v-if="ind == 2">
        <Quot :quot="postDetails?.quot" />
      </div>
      <Ad v-if="ind == 2" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import author from "../../components/authorInfo/authorInfo.vue";
import Ad from "../../components/Ad/AdComponent.vue";
import Quot from "../../components/quot/AppQuot.vue";
import authImg from "../../assets/authImg.jpeg"
export default {
  components: {
    author,
    Ad,
    Quot,
  },
  data() {
    return {
      id: null,
      posts: [],
      postDetails: null,
      authImg
    };
  },
  created() {
    this.id = this.$route.params.id * 1;
    this.fetchPosts();
    this.updatePostDetails();
  },
  watch: {
    posts: "updatePostDetails",
    id: "updatePostDetails",
  },
  methods: {
    async fetchPosts() {
      await axios
        .get("/posts.json")
        .then((response) => {
          this.posts = response.data.posts;
        })
        .catch((error) => {
          console.error("There was an error fetching the posts!", error);
        });
    },
    updatePostDetails() {
      this.postDetails = this.posts.find((post) => post.id === this.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
