<template>
    <b-container v-cloak id="mainContainer">
            <div id="backdropContainer" v-bind:style="{ 'background-image': 'url(' + getImageUrl(movie.backdrop_path) + ')' }">
               <div id="movieContainer">
                    <img id="poster_Img" class="mr-0 d-none d-lg-block" :src="getImageUrl(movie.poster_path)" alt="poster"/>
                    <div id="overview_content" class="p-3">
                            <div>
                                <span class="mr-2" id="movie_title">{{movie.original_title}}</span>
                               <span id="genre">({{movie.genres[0].name}})</span>
                            </div>
                              <div class="subtitleForMovie">
                                    <div>
                                        {{movie.release_date}}
                                    </div>
                                    <div><i class="fa fa-star mr-1 starIcon" aria-hidden="true"></i>{{movie.vote_average}}</div>
                                </div>
                                <div id="movie_text" class="mt-3 mb-3">
                                    {{movie.overview}}
                                </div>
                                <div class="text-left mb-5">
                                    <router-link :to="backRoute" tag="i" class="fa fa-arrow-circle-left backLink"></router-link>
                                </div>
                    </div>
                </div>
            </div>
    </b-container>
</template>
<script>
import axios from 'axios'
import Vue from 'Vue'
export default{
  props: {
    id: {
      required: true
    },
    backRoute: {
      
    }
  },
  data () {
    return {
      movie: {}
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
    getImageUrl (path) {
      return 'https://image.tmdb.org/t/p/original' + path
    }
  },
  watch: {
    '$route' (to, from) {
      this.fetchEntry()
    }
  },
  created () {
    this.fetchEntry()
  }
}
</script>

<style>
  .backLink {
    color:#fff;
    font-size: 48px;
    cursor: pointer;
  }
  .starIcon {
    color: #FFDF00;
  }
  #mainContainer {
    position: fixed;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
  }
   #backdropContainer {
    width: 100%;
    position: absolute;
    top:55%;
    transform: translate(0,-50%);
    background-size: 100% 100%;
    opacity: 0.96.5;
  }
  #movieContainer{
      display: flex;
      opacity: 0.73;
  }
 
  #poster_Img {
    width: 325px;
    height: 450px;
  }
  #overview_content {
    min-width: 325px;
    color: #fff;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    background-color: #081c24;
  }
  #movie_title {
    font-weight: 750;
    font-size: 30px;
  }
   #genre {
    font-weight: 700;
    font-size:22px;
  }
  .subtitleForMovie {
    font-weight: 650;
    font-size: 20px;
  }
  #movie_text {
    font-size: 18px;
  }
  @media only screen and (max-width: 575px) {
    
     #movie_title {
      font-weight: 750;
      font-size: 23px;
    }
   #genre {
      font-weight: 675;
      font-size:20px;
    }
  .subtitleForMovie {
      font-weight: 650;
      font-size: 17px;
    }
    #movie_text {
      font-size: 14px;
   }
  }
</style>