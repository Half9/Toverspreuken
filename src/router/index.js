import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomeView.vue";
import Blog from "@/views/AllBlogPosts.vue";
import BlogPost from "@/views/BlogPost.vue";
import NotFound from "@/views/NotFound.vue";

export const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blog", name: "Blog", component: Blog },
  { path: "/blog/:id", name: "BlogPost", component: BlogPost },

  { path: "/:path(.*)", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
