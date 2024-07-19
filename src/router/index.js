import {createWebHistory, createRouter} from "vue-router";
import Home from "../view/Home/mainView.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
