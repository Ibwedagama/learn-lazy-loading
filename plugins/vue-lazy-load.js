import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  observer: true,
  error: "/not-found.png",
});
