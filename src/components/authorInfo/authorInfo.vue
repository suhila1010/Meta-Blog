<template>
  <div class="flex items-center gap-3 mt-3 text-[#97989F]">
    <img :src="authImg" alt="" class="w-12 h-12 rounded-full" />
    <h5 class="font-semibold">{{ name }}</h5>
    <p>{{ date }}</p>
  </div>
</template>

<script>
import authImg from "../../assets/authImg.jpeg";
export default {
  props: {
    Img: String,
    name: String,
    date: String,
  },
  data() {
    return {
      authImg,
    };
  },
};
</script>

<style scoped></style>
