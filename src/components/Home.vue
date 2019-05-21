<template>
  <div class="container-fluid p-0" id="carousel-container" v-bind:style="[{'background-image': 'url(' + carouselBg + ')' }]">
    <div class="container">
      <Carousel/>
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
  min-height: calc(100vh - 80px);
   display: flex;
  align-items: center;
}


@media only screen and (max-width: 991px) {
 #carousel-container {
     min-height: calc(100vh - 56px);

  }

}
</style>
