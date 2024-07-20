<template>
  <div
    class="w-[60%] bg-[#F6F6F7] px-10 py-5 flex justify-center items-center rounded-lg italic text-2xl xs:w-[95%] xs:text-lg sm:w-full sm:text-xl md:w-full lg-w-[80%]"
  >
    <q class="Source">{{ quot }}</q>
  </div>
</template>

<script>
export default {
  props: {
    quot: String,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap");

.Source {
  font-family: "Source Serif 4", serif !important;
}
</style>
