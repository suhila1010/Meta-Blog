<template>
  <div class="px-52 w-full h-[80vh] relative mb-20">
    <div class="w-full h-full overflow-hidden rounded-xl">
      <img
        :src="BannerImg"
        alt="Banner-Img"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="w-[30%] bg-white absolute -bottom-12 left-64 rounded-xl shadow-md px-10 py-5"
    >
      <h5 class="w-fit px-3 py-1 rounded-md bg-[#4B6BFB] text-white mb-3">
        Technology
      </h5>
      <p class="text-3xl font-semibold">
        The Impact of Technology on the Workplace: How Technology is Changing
      </p>
      <div>
        <author :img="authImg" :name="name" :date="date" />
      </div>
    </div>
  </div>
</template>

<script>
import BannerImg from "../../assets/bannerImg.jpeg";
import author from "../../components/authorInfo/authorInfo.vue";
import authImg from "../../assets/authImg.jpeg";
export default {
  components: {
    author,
  },
  data() {
    return {
      BannerImg,
      authImg,
      name: "Jason Francisco",
      date: "August 20, 2022",
    };
  },
};
</script>

<style lang="scss" scoped></style>
