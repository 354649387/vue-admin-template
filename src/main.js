import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import { Message } from 'element-ui';

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import axios from 'axios'

import '@/icons' // icon
//必须先登录 后期优化代码时可以删掉
// import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
Vue.use(ElementUI, {
  locale
})
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$axios = axios

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  //token在拦截器里获取，不然在上面全局获取在登录接口触发的时候就获取到了，token此时是为空值的
  let token = localStorage.getItem('ApiToken')

  config.headers.Authorization = 'bearer ' + token

  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});



axios.interceptors.response.use(
  (res) => {
    //如果状态码为2001,代表后端校验前端在header里传递的token不通过
    if (res.data.code === 2001) {
      Message({
        message: 'token校验失败,即将跳转至登录页面',
        type: 'error',
        duration:1000
      });

      setTimeout(() => {
        router.replace('/login')
      }, 2000)

    }
  },
  (err) => {

  }
);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
