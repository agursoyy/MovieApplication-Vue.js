<template v-cloak>
  <div class="backgroundStyle" v-bind:style="[{'background-image': 'url(' + background + ')' }]">
  <!-- use the modal component, pass in the prop -->
  <!-- use the modal component, pass in the prop -->
  <movie-detail v-if="showModal" :id="Vmodal.id" @close="showModal = false"></movie-detail>
    <transition name="slide">
      <router-view/>
    </transition>
    <b-container>
        <h3 class="mb-4 pageHeader">Gelecekteki Filmler</h3>
         <b-row  >
                <b-col lg="6" class="mb-3" v-for="entry in upcoming.results" :key="entry.id">
                     <div >
                      <MovieEntry :movie="entry" @openModal="viewModal($event)"/>
                    </div>
                </b-col>
          </b-row>
          <Pagination class="pagination" v-model="currentPage" :records="upcoming.total" :per-page="upcoming.pageSize" @paginate="myCallback" v-scroll-to="'.pageHeader'"/>
    </b-container>

  </div>
</template>
<script>

import MovieEntry from './MovieEntry'
import Pagination from 'vue-pagination-2'
import MovieDetail from './MovieDetail'
import {mapState, mapActions} from 'vuex'

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
      showModal: false,
      Vmodal: {
        id: null,     
      }
    }
  },
  computed: {
    ...mapState(['upcoming']),
    background: function () {
         return require('@/assets/movieBackground.jpg')
    }
  },
  methods: {
    ...mapActions(['getUpcomingData']),
    viewModal (param) {
      this.Vmodal.id = param
      this.showModal = true
    },
    myCallback () {
      this.$router.push({ name: 'Upcoming', params: {page: this.currentPage}})
    },
    fetchPagination () {
      this.currentPage = Number(this.page)
    },
    setData () {
      this.fetchPagination()
      this.getUpcomingData(this.currentPage)
    }
  },
  created () {
    this.setData()
  },
  watch: {
    '$route' (to, from) {
      this.setData()
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
