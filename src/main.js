import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/css/tailwind.css";
import store from "./store";
import axiosPlugin from "./plugins/axios";
Vue.config.productionTip = false;
Vue.use(axiosPlugin);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
