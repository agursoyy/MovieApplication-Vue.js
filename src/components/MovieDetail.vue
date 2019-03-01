<template>
  <transition name="modal" v-if="loaded">
    <div class="modal-mask">
      <div class="modal-wrapper p-2">
        <div class="modal-container" v-bind:style="{ 'background-image': 'url(' + movieDetail.background + ')' }">
          <div class="opacity">
            <i class="fa fa-times-circle-o" id="closeIcon" aria-hidden="true" @click="$emit('close')"></i>
            <b-container >
             <div class="movie-container">
              <img :src='movieDetail.poster' class="poster-img d-none d-lg-block" alt="poster">
              <div id="text-content">
                  <div>
                    <div>
                      <span class="movie-title mr-1">{{movieDetail.movie.data.title}}</span>                 
                      (<span v-for="(item,index) in movieDetail.movie.data.genres" :key="item.id" class="genre">{{item.name}}<span v-if="index != movieDetail.movie.data.genres.length-1">, </span></span>)                             
                    </div>
                  <div class="subtitle-detail mt-2 mb-4">
                      <span class="mr-3"><i class="fa fa-star mr-1 starIcon" aria-hidden="true"></i>{{movieDetail.movie.data.vote_average}}</span>{{movieDetail.movie.data.release_date}}
                  </div>
                </div>               
                <div class="movie-overview">
                    {{movieDetail.movie.data.overview}}
                </div>           
              </div>
             </div>
            </b-container>
          </div>         
        </div>      
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import {mapState, mapActions} from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      loaded: false
    }
  },
  computed: {
    ...mapState(['movieDetail'])
  },
  methods: {
    ...mapActions(['getMovieDetailData']),
  },
  created () {
    this.getMovieDetailData(this.id)
    setTimeout(() => {
      this.loaded = true;
    },200);
  }
}
</script>

<style>
.opacity {
  padding: 37px 0;
  background-color: #2c3e50;
  opacity: 0.77;
  position: relative;
}
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
  margin-top:55px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  background-size: 100% 100%;
}
.movie-container {
  display: flex;
  color: white;
 
}
.poster-img {
  height: 450px;
  width: 325px;
}
#text-content {
  padding: 20px 35px;
  height: 430px;
  overflow-y: scroll;
}
#text-content::-webkit-scrollbar-track {
  border: 1px solid #000;
  padding: 2px 0;
  background-color: #404040;
  }

 #text-content::-webkit-scrollbar {
  width: 10px;
}

#text-content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #737272;
  border: 1px solid #000;
}
.movie-title {
  font-weight: 750;
    font-size: 28px;
}
  .genre {
    font-weight: 700;
    font-size:23px;
  }
  .subtitle-detail {
    font-weight: 700;
    font-size: 20px;
  }
  .starIcon {
    color: #FFDF00;
  }
  .movie-overview {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    margin-top: 20px;
  }

  #closeIcon {
    font-size: 40px;
    cursor: pointer;
    color: white;
    font-weight: 2000;
    background-color:black;
    border-radius: 30px;
    position: absolute;
    top: -10px;
    right: -10px;
  }
  #closeIcon:hover {
    font-size: 45px;
    top: -12px;
    right: -12px;
  }
   @media only screen and (max-width: 991px) {
    .modal-container {
      margin-left: 7px;
      margin-right: 7px;
    }
     .movie-title {
      font-size: 21px;
    }
   .genre {
      font-size:18px;
    }
    .subtitle-detail {
      font-size: 16px;
    }
    .movie-overview {
      font-size: 13.8px;
   }
   
   #closeIcon {
     font-size: 30px;
     top: -5px;
     right: -5px;
   }
   #closeIcon:hover {
     font-size: 35px;
     top: -7px;
     right: -7px;
   }
   #text-content {
     padding: 20px;
   }
   .movie-overview {
     margin-top: 15px;
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
