import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue'
import About from './components/About.vue'

const routes = [
  { path: '/', 
    component: Home
  },
  {
    path: "/Post",
    component: List,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
  },
  {
    path : "/about",
    component : About,
  },
  {
    path : '/:pathMatch(.*)',
    component : Home
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 