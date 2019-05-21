<template>
<div class="container-fluid p-0" id="homeContainer">
  <div class="container-fluid p-0" id="carousel-container" v-bind:style="[{'background-image': 'url(' + carouselBg + ')' }]">
    <div class="container">
      <Carousel class="pt-5" style="padding-bottom: 70px;"/>
    </div>
  </div>
  <div class="container-fluid" id="genre-container" v-bind:style="[{'background-image': 'url(' + genreBg + ')' }]">
    <div class="container pt-5 pb-5">
      <Genres/>
    </div>
  </div>

</div>

</template>

<script>
import Carousel from './Carousel'
import Genres from './Genres'

export default {
  components: {
   Carousel,
   Genres
  },
  computed: {
     carouselBg: function () {
         return require('@/assets/bg7.gif')
      },
      genreBg: function () {
         return require('@/assets/genreBg6.png')
      }
    }
}

</script>

<style>
#carousel-container {
  background-repeat: none;
  background-size: 50% 50%;
  height: 768px;
}


@media only screen and (max-width: 991px) {
 #carousel-container {
     height: auto;
  }

}
</style>
