import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/counter',
      name: 'counter-page',
      component: require('@/components/CounterPage').default,
      props: true,
    },
    {
      path: '/preparation',
      name: 'preparation-page',
      component: require('@/components/PreparationPage').default,
    },
    {
      path: '*',
      redirect: '/preparation',
    },
  ],
});
