<template>
<div class="container-fluid p-0">
  <div class="container">
    <Carousel class="mt-4 mb-4"/>
    <Genres/>

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
  }
}

</script>

<style>


</style>
