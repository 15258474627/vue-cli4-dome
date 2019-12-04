
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/HelloWorld.vue"),
    meta: {
      title: '首页'
    }
  },
  {
    path: '*',
    redirect: {
      path: '/'
    }
  }
];
export default routes;