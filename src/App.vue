<template>
  <div id="app">
     <span class="scroll"></span>
     <Header class="sticky-top mb-4"/>
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
  color: #2c3e50;
}

.pageHeader {
  margin-top: 22px;
  font-family: "Arial Black", Gadget, sans-serif;
  font-weight:700;
}
</style>
