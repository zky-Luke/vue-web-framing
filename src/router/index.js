import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/**
 * 元信息
 * meta
 * disAnimation 路由跳转是否需要动画
 */

const router = new Router({
  routes: [
    { path: "*", redirect: "/home", hidden: true },
    {
      path: "/home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/about",
      component: () => import("@/views/About.vue")
    }
  ]
});

export default router;
