import Vue from 'vue'
import Router from 'vue-router'
import goods from 'components/goods/goods.vue';
import seller from 'components/seller/seller';
import ratings from 'components/ratings/ratings'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods'
    },
    {path:'/goods',component:goods},
    {path:'/ratings',component:ratings},
    {path:'/seller',component:seller}
  ],
  linkActiveClass:'active'


})
