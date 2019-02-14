<template>
   <transition name="modal"  v-cloak >
    <div class="modal-mask" v-if="isLoaded()">
      <div class="modal-wrapper p-2">
        <b-container class="modal-container" v-bind:style="{ 'background-image': 'url(' + background + ')' }">
             <i class="fa fa-window-close" id="closeIcon" aria-hidden="true" @click="$emit('close')"></i>
             <div class="movie-container">
              <img :src='poster' class="poster-img d-none d-lg-block" alt="poster">
              <div id="text-content">
                <div>
                  <span class="movie-title mr-1">{{movie.title}}</span>
                  (<span v-for="(item,index) in movie.genres" :key="item.id" class="genre">{{item.name}}<span v-if="index != movie.genres.length-1">, </span></span>)
                </div>
                <div class="movie-overview">
                  {{movie.overview}}
                </div>           
              </div>
             </div>
        </b-container>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  data () {
    return {
      movie: {},
      background: null,
      poster: null,
      isLoad: false
    }
  },
  created () {
    this.fetchEntry()
  },
  watch: {
    movie: function () {
      this.fetchImages()
    } 
  },
  methods: {
    fetchEntry () {
      axios.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=f9261403d3de49a0151e3debf139d4b6&language=tr')
        .then(Response => Response.data)
        .then(data => {
          this.movie = data
        })
        .catch(e => {
          console.error('error occured: ' + e)
        })
    },
    fetchImages () {
      if(this.movie.poster_path == null){
        this.poster = require('@/assets/noImage.png')
      }
      else
        this.poster = 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path
      
      if(this.movie.backdrop_path == null){
        this.background = require('@/assets/noImage.png')
      }
      else
        this.background = 'https://image.tmdb.org/t/p/w500' + this.movie.backdrop_path

    },
     isLoaded: function() {
      if (this.background != null && this.poster != null) {
        return true;
      }
      return false;
    },
  }
}
</script>

<style>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  margin-top:45px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  background-size: 100% 100%;
  opacity: 0.95;
  padding: 30px;
  border-radius: 12px;
}
.movie-container {
  display: flex;
  color: white;
  opacity: 0.85; 
}
.poster-img {
  height: 450px;
  width: 325px;
}
#text-content {
  background-color: black;
  padding: 30px 25px;
}

.movie-title {
  font-weight: 750;
    font-size: 25px;
}
  .genre {
    font-weight: 700;
    font-size:20px;
  }
  .movie-overview {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 15px;
    margin-top: 20px;
  }

  #closeIcon {
    font-size: 30px;
    cursor: pointer;
    color: black;
    position: absolute;
    background-color: white;
    top: 1px;
    right: 1px;
  }
   @media only screen and (max-width: 991px) {
    
     .movie-title {
      font-weight: 750;
      font-size: 16.5px;
    }
   .genre {
      font-weight: 650;
      font-size:14px;
    }

    .movie-overview {
      font-size: 12.5px;
   }
   .modal-container {
     padding: 25px 20px;
     margin-top: -10px;   
   }
   #closeIcon {
     font-size: 25px;
     font-weight: 900;
   }
   #text-content {
     padding: 10px;
   }
   .movie-overview {
     margin-top: 10px;
   }
  }
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
