<template>
  <div v-cloak>
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
        <h3 class="mb-4 pageHeader" style="font-weight:600;">Gelecekteki Filmler</h3>
         <b-row  >
                <b-col lg="6" class="mb-3" v-for="entry in upcoming.results" :key="entry.id">
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
      upcoming: {},
      showModal: false,
      Vmodal: {
        id: null,     
      }
    }
  },
  methods: {

    viewModal (param) {
      this.Vmodal.id = param
      this.showModal = true
    },
    getTotalRecord () {
      axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=f9261403d3de49a0151e3debf139d4b6&language=tr&page=1')
      .then(response => {
        this.totalRecords = parseInt(response.data.total_results)
      })
    },
    getPageData (page) {
      axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=f9261403d3de49a0151e3debf139d4b6&language=tr&page='+page)
      .then(response => {
        this.upcoming = response.data
      })
    },
    myCallback () {
      this.$router.push({ name: 'Upcoming', params: {page: this.currentPage}})
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
      this.ifNavigated()
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
.slide-enter,
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

.pagination > li > a
{
    color: #000000;
}
.page-item.active .page-link {
  z-index: 1;
  color: #fff; 
  background-color: #000000;
 
}

</style>
