import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const Home = () => import('../views/home/home.vue')
const Kind = () => import('../views/kind/kind.vue')
const Buycar = () => import('../views/buycar/buycar.vue')
const Person = () => import('../views/person/person.vue')
const Detail = () => import('../views/detail/Detail.vue')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/kind',
    component:Kind
  },
  {
    path:'/buycar',
    component:Buycar
  },
  {
    path:'/person',
    component:Person
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]

const router = new VueRouter({
  routes,
  // mode:'history'
})

router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
});
export default router
