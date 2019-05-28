import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AdminPodcast from './views/AdminPodcast.vue'
import Podcast from './views/Podcast.vue'
import Blog from './views/Blog.vue'
import AlbumsVideo from '@/components/podcast/AlbumsVideo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/adminpodcast',
      name: 'adminpodcast',
      component: AdminPodcast
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/podcast',
      name: 'podcast',
      component: Podcast
    },
    {
      path: '/albumsVideo',
      name: 'albumsvideo',
      component: AlbumsVideo
    }
  ]
})
