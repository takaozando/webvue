import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Favs.vue')
  },
  {
    path: '/about',
    name: 'About',

    component: () => import( '../views/Favs.vue')
  },
  {
    path: '/favs',
    name: 'Favoritos',

    component: () => import( '../views/Favs.vue')
  },
  {
    path: '/stream',
    name: 'Live',

    component: () => import( '../views/Streaming.vue')
  },
  {
    path: '/playlist',
    name: 'Playlist',

    component: () => import( '../views/MyPlaylist.vue')
  },
  {
    path: '/friends',
    name: 'Amigos',

    component: () => import( '../views/Friends.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
