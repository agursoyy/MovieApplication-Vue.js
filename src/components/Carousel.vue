<template>
<div id="carousel-example-1z" class="carousel slide carousel-fade m-0" data-ride="carousel">
  <!--Indicators-->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-1z" data-slide-to="0" class="active "></li>
    <li data-target="#carousel-example-1z" data-slide-to="1"></li>
    <li data-target="#carousel-example-1z" data-slide-to="2"></li>
    <li data-target="#carousel-example-1z" data-slide-to="3"></li>
  </ol>
  <!--/.Indicators-->
  <!--Slides-->
  <div class="carousel-inner" role="listbox">
    <!--First slide-->
    <div v-for="(item,index) in carousel" :key="index" :class="['carousel-item', index == 0 ? 'active' : '']">
        <div class="row">
          <div class="col-6 p-0">
            <img class="d-block w-100 carouselImg" :src="posterUrl+item.movie1.poster_path" alt="movie_poster">
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-6 p-0">
               <img class="d-block w-100 biggerImg" :src="posterUrl+item.movie2.poster_path" alt="movie_poster">
              </div>
              <div class="col-6 p-0">
                 <img class="d-block w-100 smallerImg" :src="posterUrl+item.movie3.poster_path" alt="movie_poster">
                 <img class="d-block w-100 smallerImg" :src="posterUrl+item.movie4.poster_path" alt="movie_poster">
              </div>
            </div>
            <div class="row">
             <img class="d-block w-100 biggerImg" :src="posterUrl+item.movie5.poster_path" alt="movie_poster">
            </div>
          </div>
        </div>
    </div>
    <!--/Third slide-->
  </div>
  <!--/.Slides-->
  <!--Controls-->
 <!-- <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> --->
  <!--/.Controls-->
</div>
   

</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    data () {
        return {
        }
    },
    computed: {
        ...mapState(['carousel']),
        posterUrl: function () {
            return 'https://image.tmdb.org/t/p/original'
        }
    },
    methods: {
        ...mapActions(['getCarouselData']),
        fetchData () {
            this.getCarouselData()
        }
    },
    created () {
        this.fetchData()
    }
}
</script>

<style>
html {
    overflow-x: hidden;
}
.carouselImg {
    height: 480px;
}
.biggerImg {
  height: 240px;
}
.smallerImg {
  height: 120px;
}

 @media only screen and (max-width: 991px) {
     .carouselImg{
       height: 395px;
    }
    .biggerImg {
      height: 192.5px;
    }
    .smallerImg {
      height: 95px;
    }
  }
</style>
