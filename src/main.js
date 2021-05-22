import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Icon from "vue-awesome/components/Icon";
import VueScrollTo from "vue-scrollto";
import "vue-awesome/icons/flag";
import "vue-awesome/icons";
Vue.config.productionTip = false;
Vue.component("v-icon", Icon);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
