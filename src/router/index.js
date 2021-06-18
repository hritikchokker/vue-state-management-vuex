import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/profile-form",
    name: "ProfileForm",
    component: () => import("../views/ProfileForm.vue"),
  },
  {
    path: "/books",
    name: "Books",
    component: () => import("../views/Books.vue"),
  },
  {
    path: "/dogs",
    name: "Dog",
    component: () => import("../views/DogsList.vue"),
  },
  {
    path: "/books-async",
    name: "booksAsync",
    component: () => import("../views/BooksAsyncList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
