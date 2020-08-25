import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Money from '../views/Money.vue';
import Labels from '../views/Labels.vue';
import Statistics from '../views/Statistics.vue';
import NotFound from '../views/NotFound.vue'
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money'
    /* redirect重定向到 /money 页面
    * JS 潜规则,若是之间引用目录,会直接找到目录里面的的 index.js 文件
    *  */
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path:'*',
    component:NotFound
    /* path:'*', 路由中首先查询匹配/.然后匹配/money,/labels等等路径,
    当发现路径都不匹配的时候就会,匹配*,然后指向特定的NotFound页面 */
  }
];

const router = new VueRouter({
  routes
});

export default router;
