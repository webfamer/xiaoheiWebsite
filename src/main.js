import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import { Grid, GridItem, Swipe, SwipeItem } from 'vant';
import { Image as VanImage, Lazyload,NoticeBar,Icon,Button,Search} from 'vant';
import './assets/css/reset.css'
Vue.config.productionTip = false
Vue.use(Grid).use(GridItem).use(VanImage).use(Lazyload).use(NoticeBar).use(Icon).use(Button).use(Search);
Vue.use(Swipe).use(SwipeItem);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


var _hmt = _hmt || [];
window._hmt = _hmt; // 修改为window 全局变量
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f089ba22bcc9f37d1aa1e2af05954a5a";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

router.beforeEach((to, from, next) => {
  if (window._hmt) {
    if (to.path) {
      window._hmt.push(['_trackPageview', '/#' + to.fullPath])
    }
  }
  next()
})
