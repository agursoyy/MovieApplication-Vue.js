<template>
          <div id="movieEntry">
              {{backRoute}}
                <figure class="border-bottom border-right" >
                    <div style="display:flex;">
                        <div class="imgContainer"><img :src="posterUrl" id="posterImage" alt="Poster" @click="open()"/></div>
                        <div class="overviewContainer pt-1 pl-3 pr-2 d-none d-sm-block">
                            <div>
                                <div class="mb-1 title">
                                    <div>{{movie.title}}</div>
                                </div>
                                <div class="subtitle">
                                    <span class="mr-3"><i class="fa fa-star mr-1 starIcon" aria-hidden="true"></i>{{movie.vote_average}}</span>{{movie.release_date}}
                                </div>
                            </div>
                            <div class="text mt-2 mb-2">
                                {{movieOverview}}...
                            </div>
                        </div>
                    </div>
                    <div class="text-center border p-1 d-block d-sm-none">
                        <div class="title"><span class="mr-2">{{movie.title}}</span></div>
                        <div class="subtitle"><i class="fa fa-star starIcon" aria-hidden="true"></i>8.8<span class="ml-3">{{movie.release_date}}</span></div>
                    </div>
                </figure>
        </div>

</template>

<script>
export default {
   props: ['movie', 'backRoute'],
  data () {
    return {
      posterUrl: '',
      movieOverview: ''
    }
  },
  methods: {
      open: function(){
          if(this.modelable())
          {
            this.$emit('openModal',this.movie.id)
          }
      },
      modelable: function () {
          if( this.movie.overview != null) 
          {
              return true;
          }
          else 
            return false;
      },
      fetchPoster () {
        if(this.movie.poster_path != null){
            this.posterUrl = 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path
        }
        else {
            this.posterUrl = require('@/assets/noImage.png')
        }
      },
        fetchOverview () {
          this.movieOverview = this.movie.overview.substring(0,211)
   }
  },
  created () {
      this.fetchPoster()
      this.fetchOverview()
  }
}
</script>

<style>
.starIcon {
    color: #FFDF00;
}
#movieEntry {
    text-decoration: none;
}
#movieEntry :hover > .imgContainer{
    opacity: 0.4;
}
.overviewContainer {
    color: black;
}
.text {
    font-family: 'Source Sans Pro', Arial, sans-serif;
}

.title {
    color: #000000;
    font-weight: 760;
    font-size: 20px;
}
.subtitle {
    color: #000000;
    font-weight: 700;
    font-size: 18px;
}

#posterImage {
    width:200px; 
    height:250px;
    cursor: pointer;
}

@media only screen and (max-width: 575px) {
    #posterImage {
        width:100%;
        height: 350px;
    }
    .title {
        font-size: 18px;
    }
    .subtitle {
        font-size: 16px;
    }
}
</style>
