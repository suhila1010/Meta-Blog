<template>
  <nav class="px-52 py-5 flex justify-between items-center md:px-24 sm:px-5 overflow-hidden">
    <div class="flex items-center gap-2 flex-grow">
      <img :src="logo" alt="" />
      <h1 class="text-2xl Plus">
        Meta<span class="font-extrabold Plus ml-[2px]">Blog</span>
      </h1>
    </div>
    <div class="flex-grow-[2]">
      <ul class="flex justify-evenly">
        <li v-for="(link, inx) in links" :key="inx">
          <a href="">{{ link }}</a>
        </li>
      </ul>
    </div>
    <div class="flex items-center gap-10 flex-grow justify-end">
      <div class="w-fit relative">
        <input
          type="text"
          placeholder="Search"
          class="bg-[#F4F4F5] p-2 pl-4 rounded-md w-[170px] h-[36px]"
        />
        <i
          class="fa-solid fa-magnifying-glass text-[#52525B] absolute right-2 top-1/2 transform -translate-y-1/2 text-sm"
        ></i>
      </div>
      <div class="relative w-[48px] h-[29.5px]">
        <input type="checkbox" id="toggle" :value="mode" />
        <label for="toggle" class="switch">
          <div class="slider">
            <img :src="sunny" alt="sunny" />
          </div>
        </label>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "../../../assets/logo.svg";
import sunny from "../../../assets/sunny.svg";
export default {
  data() {
    return {
      logo,
      sunny,
      links: ["Home", "Blog", "Single Post", "Pages", "Contact"],
      mode: true,
    };
  },
};
</script>

<style scoped>
input[type="checkbox"] {
  display: none;
}
.switch {
  position: absolute;
  cursor: pointer;
  background-color: #e8e8ea;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  transition: background-color 0.3s;
}
.slider {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  top: 2px;
  left: 2px;
  transition: transform 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
}
input:checked + .switch {
  background-color: #d1d5db;
}
input:checked + .switch .slider {
  transform: translateX(15px);
}
</style>
