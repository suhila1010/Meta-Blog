<template>
  <footer class="bg-[#F6F6F7] border-t border-[#E8E8EA] overflow-hidden">
    <div class="px-52 py-14 flex justify-between md:px-24 sm:px-5 sm:flex-col sm:gap-8">
      <div class="basis-1/4">
        <h1 class="font-bold mb-4 Plus text-black">About</h1>
        <p class="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <p>
          <span class="font-semibold">Email : </span><span>{{ email }}</span>
        </p>
        <p>
          <span class="font-semibold">Phone : </span>
          <span>{{ phone }}</span>
        </p>
      </div>
      <div class="basis-1/4 flex gap-32">
        <div>
          <h1 class="font-bold mb-4 Plus text-black">Quick Link</h1>
          <ul>
            <li v-for="(link, inx) in QuickLink" :key="inx">{{ link }}</li>
          </ul>
        </div>
        <div>
          <h1 class="font-bold mb-4 Plus text-black">Category</h1>
          <ul>
            <li v-for="(link, inx) in Category" :key="inx">{{ link }}</li>
          </ul>
        </div>
      </div>
      <div class="basis-1/4">
        <div class="bg-white rounded-lg flex flex-col items-center py-7">
          <h1 class="font-bold mb-1 Plus text-black text-lg">
            Weekly Newsletter
          </h1>
          <p class="text-[#696A75] text-sm w-[70%]">
            Get blog articles and offers via email
          </p>
          <div class="flex flex-col mt-5 w-4/5">
            <div class="relative">
              <input
                type="text"
                :placeholder="'Your Email'"
                class="border border-[#DCDDDF] rounded-md py-2 px-4 w-full"
              />
              <i
                class="fa-regular fa-envelope text-[#696A75] absolute right-2 top-1/2 transform -translate-y-1/2 text-sm"
              ></i>
            </div>
            <button class="mt-2 w-full bg-[#4B6BFB] text-white py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="px-52 md:px-24 sm:px-5 ">
      <div
        class="border-t border-[#E8E8EA] py-10 flex justify-between items-center sm:flex-col-reverse sm:gap-5"
      >
        <div class="flex items-center gap-3">
          <img :src="logo" alt="logo" class="w-12 h-12" />
          <div>
            <h1 class="text-lg Plus font-medium">
              Meta<span class="font-bold Plus ml-[2px]">Blog</span>
            </h1>
            <p class="Plus font-medium">
              © JS Template 2023. All Rights Reserved.
            </p>
          </div>
        </div>
        <div>
          <ul class="flex items-center">
            <li
              v-for="(link, index) in links"
              :key="index"
              class="flex items-center"
            >
              <p>{{ link }}</p>
              <div
                v-if="index < links.length - 1"
                class="mx-5 w-[1px] h-[16px] bg-[#E8E8EA]"
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from "../../../assets/logo.svg";
export default {
  data() {
    return {
      email: "info@jstemplate.net",
      phone: "880 123 456 789",
      logo,
      QuickLink: ["Home", "About", "Blog", "Archived", "Author", "Contact"],
      Category: [
        "Lifestyle",
        "Technology",
        "Travel",
        "Business",
        "Economy",
        "Sports",
      ],
      links: ["Terms of Use", "Privacy Policy", "Cookie Policy"],
    };
  },
};
</script>

<style scoped></style>
