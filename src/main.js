// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import showBlog from "./components/showBlog"
import addBlog from "./components/addBlog"

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

//配置路由
const router = new VueRouter({
  routes: [{
      path: "/",
      component: showBlog
    },
    {
      path: "/addBlog",
      component: addBlog
    }
  ],
  mode: "history"
})




Vue.directive("rainbow", {
  bind(el, binding, vnode) {
    el.style.color = "red";
  }
})
Vue.directive("wide", {
  bind(el, binding, vnode) {
    if (binding.value == "wide") {}
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router
})
