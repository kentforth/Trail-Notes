import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueModalTor from "vue-modaltor";
Vue.use(VueModalTor);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
