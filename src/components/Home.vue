<template>
  <div class="container-fluid p-0" id="carousel-container" v-bind:style="[{'background-image': 'url(' + carouselBg + ')' }]">
    <div class="container">
      <Carousel class="pt-5"/>
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
   position: relative;
  height: calc(100vh - 80px);
}


@media only screen and (max-width: 991px) {
 #carousel-container {
     height: auto;
  }

}
</style>
