import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/state-example', component: '@/pages/state-example' },
    { path: '/from-to-example', component: '@/pages/from-to-example' },
  ],
  fastRefresh: {},
});
