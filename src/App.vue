<template >
  <div id="app">
     <span class="scroll"></span>
     <Header class="sticky-top"/>
<!-- navbar-1.vue -->
   <router-view/> 
  </div>
</template>

<script>
import Header from './components/Header' 
export default {
  components: {
    Header
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
  color: #2c3e50;
}

.pageHeader {
  padding-top: 22px;
  font-family: "Arial Black", Gadget, sans-serif;
  font-weight:700;
}
.backgroundStyle {
  min-height: calc(100vh - 80px); /* header menu height is extracted.*/
  background-size:cover;
  background-repeat: none;
}
.pagination > li > a
{
    color: #000000;
}
.page-item.active .page-link {
  z-index: 1;
  color: #fff; 
  background-color: #000000;
 
}
@media only screen and (max-width: 600px) {
  .backgroundStyle {
      min-height: calc(100vh - 55px); /* header menu height is extracted.*/

  }
}
</style>
