import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

const baseURL = 'https://api.themoviedb.org/3/movie'
const apiKey = 'api_key=f9261403d3de49a0151e3debf139d4b6'
const language = 'language=tr'
const popularURL = `${baseURL}/popular?${apiKey}&${language}`
const nowPlayingURL = `${baseURL}/now_playing?${apiKey}&${language}`
const topRatedURL = `${baseURL}/top_rated?${apiKey}&${language}`
const upcomingURL = `${baseURL}/upcoming?${apiKey}&${language}`
const genreURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=f9261403d3de49a0151e3debf139d4b6&language=tr'
const imageURL = 'https://image.tmdb.org/t/p/w500'

export default new Vuex.Store({
  state: {
    popular: {
      results: [],
      total: 0,
      pageSize: 20
    },
    nowPlaying: {
      results: [],
      total: 0,
      pageSize: 20
    },
    topRated: {
      results: [],
      total: 0,
      pageSize: 20
    },
    upcoming: {
      results: [],
      total: 0,
      pageSize: 20
    },
    movieDetail: {
      movie: {},
      background: '',
      poster: ''
    },
    carousel: [],
    genres: []
  },
  mutations: {
    setPopularData (state, data) {
      state.popular.total = data.total_results
      state.popular.results = data.results
    },
    setNowPlayingData (state, data) {
      state.nowPlaying.total = data.total_results
      state.nowPlaying.results = data.results
    },
    setTopRatedData (state, data) {
      state.topRated.total = data.total_results
      state.topRated.results = data.results
    },
    setUpcomingData (state, data) {
      state.upcoming.total = data.total_results
      state.upcoming.results = data.results
    },
    async setMovieDetailData (state, data) {
      state.movieDetail.movie = data
      if (data.data.backdrop_path != null) {
        state.movieDetail.background = imageURL + data.data.backdrop_path
      } else {
        state.movieDetail.background = require('@/assets/noImage.png')
      }
      if (data.data.poster_path != null) {
        state.movieDetail.poster = imageURL + data.data.poster_path
      } else {
        state.movieDetail.poster = require('@/assets/noImage.png')
      }
    },
    async setCarouselData (state) {
      for (let i = 0; i < 16; i = i + 5) {
        let carouselObject = {
          movie1: state.nowPlaying.results[i],
          movie2: state.nowPlaying.results[i + 1],
          movie3: state.nowPlaying.results[i + 2],
          movie4: state.nowPlaying.results[i + 3],
          movie5: state.nowPlaying.results[i + 4]
        }
        state.carousel.push(carouselObject)
      }
    },
    async setGenresData (state, data) {
      state.genres = data.genres
    }
  },
  actions: { // fetch API DATA.
    async getPopularData (context, page) {
      let pageParam = `&page=${page}`
      let data = (await Axios.get(popularURL + pageParam)).data
      context.commit('setPopularData', data)
    },
    async getNowPlayingData (context, page) {
      let pageParam = `&page=${page}`
      let data = (await Axios.get(nowPlayingURL + pageParam)).data
      context.commit('setNowPlayingData', data)
    },
    async getTopRatedData (context, page) {
      let pageParam = `&page=${page}`
      let data = (await Axios.get(topRatedURL + pageParam)).data
      context.commit('setTopRatedData', data)
    },
    async getUpcomingData (context, page) {
      let pageParam = `&page=${page}`
      let data = (await Axios.get(upcomingURL + pageParam)).data
      context.commit('setUpcomingData', data)
    },
    async getMovieDetailData (context, movieId) {
      let data = (await Axios.get(`${baseURL}/${movieId}?${apiKey}&${language}`))
      context.commit('setMovieDetailData', data)
    },
    async callCarouselData (context) {
      context.commit('setCarouselData')
    },
    async getCarouselData  (store) {
      await store.dispatch('getNowPlayingData', 1)
      await store.dispatch('callCarouselData')
    },
    async getGenresData (context) {
      let data = (await Axios.get(genreURL)).data
      context.commit('setGenresData', data)
    }
  }
})
