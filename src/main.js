import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 样式重制
import "@/assets/stylus/reset.styl";

// 页面加载进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");