import router from "./router";
import History from "./router/history";

function popstateHandle() {
  // console.log('监听了返回键')
  router.isBack = true;
}

router.beforeEach((to, from, next) => {
  next();

  // 路由历史
  if (router.isBack) {
    History.pop();
    router.isBack = false;
  } else {
    History.push(to.path);
  }

  // 返回键监听
  window.addEventListener("popstate", popstateHandle, false);
});
