import {createWebHistory, createRouter} from "vue-router";
import Home from "../view/Home/mainView.vue";
import PostDetails from "../view/PostDetails/mainView.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/post/:id",
    component: PostDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
