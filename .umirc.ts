import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/state-example', component: '@/pages/state-example' },
    { path: '/from-to-example', component: '@/pages/from-to-example' },
    {
      path: '/interpolates-example',
      component: '@/pages/interpolates-example',
    },
    { path: '/tween-one', component: '@/pages/tween-one' },
    { path: '/usesprings-example', component: '@/pages/usesprings-example' },
    { path: '/usechain-example', component: '@/pages/usechain-example' },
  ],
  fastRefresh: {},
});
