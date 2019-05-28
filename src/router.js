import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AdminPodcast from './views/AdminPodcast.vue'
import AdminBlog from './views/AdminBlog.vue'
import Podcast from './views/Podcast.vue'
import Blog from './views/Blog.vue'
import AlbumsVideo from '@/components/podcast/AlbumsVideo.vue'
import MoreAlbums from '@/components/podcast/MoreAlbums.vue'
import Allblog from '@/components/blog/Allblog.vue'
import BlogFullText from '@/components/blog/BlogFullText.vue'

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
    },
    {
      path: '/morealbums',
      name: 'morealbums',
      component: MoreAlbums
    },
    {
      path: '/adminblog',
      name: 'adminblog',
      component: AdminBlog
    },
    {
      path: '/allblog',
      name: 'allblog',
      component: Allblog
    },
    {
      path: '/blogfulltext',
      name: 'blogfulltext',
      component: BlogFullText
    }
  ]
})
