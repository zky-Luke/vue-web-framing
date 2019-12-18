import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./lang";

import "@/plugins/iview.js";
import "@/api"; // 导入api
import "@/icons"; // svg图标 <svg-icon icon-class="id"/>
import "@/errorLog";
import "@/permission";

Vue.config.productionTip = false;

import * as filters from "@/filters"; // global filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
