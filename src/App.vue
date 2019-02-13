<template>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.pageHeader {
  font-family: "Arial Black", Gadget, sans-serif;
  font-weight:700;
}

</style>
