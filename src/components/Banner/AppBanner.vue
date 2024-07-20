<template>
  <div
    class="px-52 w-full h-[80vh] relative mb-20 md:px-16 sm:px-5 xl:px-32 lg:px-16 xs:px-5"
  >
    <div class="w-full h-full rounded-xl">
      <img
        :src="BannerImg"
        alt="Banner-Img"
        class="w-full h-full object-cover rounded-xl"
      />
    </div>
    <div
      class="w-[30%] bg-white absolute -bottom-12 left-64 rounded-xl shadow-md px-10 py-5 lg:w-[40%] lg:left-32 md:left-28 md:w-[50%] sm:left-16 sm:w-[60%] xs:left-8 xs:w-[80%] xs:px-3"
    >
      <h5 class="w-fit px-3 py-1 rounded-md bg-[#4B6BFB] text-white mb-3 ">
        Technology
      </h5>
      <p class="text-3xl font-semibold lg:text-xl md:text-lg sm:text-lg xs:text-sm">
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
