<template>
  <div class="flex items-center gap-3 mt-3 text-[#97989F] sm:text-xs xs:text-xs xs:gap-1 sm:gap-1">
    <img :src="img" alt="" class="w-12 h-12 rounded-full" />
    <h5 class="font-semibold">{{ name }}</h5>
    <p>{{ date }}</p>
  </div>
</template>

<script>
import authImg from "../../assets/authImg.jpeg";
export default {
  props: {
    img: String,
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
