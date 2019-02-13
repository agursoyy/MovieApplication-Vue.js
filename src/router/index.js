import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NowPlaying from '@/components/NowPlaying'
import Popular from '@/components/Popular'
import TopRated from '@/components/TopRated'
import Upcoming from '@/components/Upcoming'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/VizyondakiFilmler/Page/:page',
      name: 'NowPlaying',
      props: true,
      component: NowPlaying
    },
    {
      path: '/PopulerFilmler/Page/:page',
      name: 'Popular',
      props: true,
      component: Popular
    },
    {
      path: '/EnBegenilenFilmler/Page/:page',
      name: 'TopRated',
      props: true,
      component: TopRated
    },
    {
      path: '/YakindakiFilmler/Page/:page',
      name: 'Upcoming',
      props: true,
      component: Upcoming
    },
    {
      path: '/Search/Page/:page',
      name: 'Search',
      props: true,
      component: Search
    }
  ],
  mode: 'history'
})
