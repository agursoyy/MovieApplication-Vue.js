<template>
  <div v-cloak class="backgroundStyle" v-bind:style="[{'background-image': 'url(' + background + ')' }]">
  <!-- use the modal component, pass in the prop -->
  <!-- use the modal component, pass in the prop -->
  <movie-detail v-if="showModal" :id="Vmodal.id" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">custom header</h3>
  </movie-detail>
    <transition name="slide">
      <router-view/>
    </transition>
    <b-container>
        <h3 class="mb-4 pageHeader">Arama Sonucu</h3>
         <b-row  >
                <b-col lg="6" class="mb-3" v-for="entry in movies.results" :key="entry.id">
                     <div >
                      <movie-entry :movie="entry" @openModal="viewModal($event)"></movie-entry>
                    </div>
                </b-col>
          </b-row>
          <pagination v-model="currentPage" :records="totalRecords" :per-page="recordPerPage" @paginate="myCallback" v-scroll-to="'.pageHeader'"></pagination>
    </b-container>

  </div>
</template>
<script>

import MovieEntry from './MovieEntry'
import axios from 'axios'
import Pagination from 'vue-pagination-2'
import MovieDetail from './MovieDetail'

export default {
  props: {
    page: {
       default: '1',
      required: true
    }
  },     
  data () {
    return {
      currentPage: 1,
      totalRecords: 1,
      recordPerPage: 20,
      searchTerm: this.$route.query.q,
      movies: {},
      showModal: false,
      Vmodal: {
        id: null,     
      }
    }
  },
  computed: {
    background: function () {
         return require('@/assets/movieBackground.jpg')
    }
  },
  methods: {
    viewModal (param) {
      this.Vmodal.id = param
      this.showModal = true
    },
    getTotalRecord () {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=f9261403d3de49a0151e3debf139d4b6&language=tr&query=' + this.searchTerm + '&page=1')
      .then(response => {
        this.totalRecords = parseInt(response.data.total_results)
      })
    },
    getPageData (page) {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=f9261403d3de49a0151e3debf139d4b6&language=tr&query=' + this.searchTerm + '&page=' + this.page)
      .then(response => {
        this.movies = response.data
      })
    },
    myCallback () {
      this.$router.push({ name: 'Search', params: {page: this.currentPage}, query: { q: this.searchTerm }})
      this.getPageData(this.currentPage)
    },
    fetchPagination () {
      this.currentPage = parseInt(this.page)
    },
    ifNavigated () {
      this.fetchPagination()
      this.getPageData(this.page)
    }
  },
  created () {
    this.fetchPagination()
    this.getTotalRecord()
    this.getPageData(this.currentPage)
  },
  watch: {
    '$route' (to, from) {
      this.searchTerm = this.$route.query.q
      this.getTotalRecord()
      this.fetchPagination()
      this.getPageData(this.page)
    }
  },
  components: {
    MovieEntry,
    Pagination,
    MovieDetail
  }
}
</script>

<style>
.slide-leave-to {
    opacity: 0;
    transform: translate3d(0,-100%,0);
}

.slide-enter-to,
.slide-leave {
    opacity: 1;
    transform: translate3d(0,-100%,0);
}
.slide-enter-active {
    transition: all 0.4s ease-out;
}
.slide-leave-active {
    transition: all 0.2s ease-in;
}


</style>
