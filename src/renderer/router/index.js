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
      path: '/summary',
      name: 'summary-page',
      component: require('@/components/SummaryPage').default,
      props: true,
    },
    {
      path: '/congrats',
      name: 'congrats-page',
      component: require('@/components/CongratsPage').default,
      props: true,
    },
    {
      path: '*',
      redirect: '/preparation',
    },
  ],
});
