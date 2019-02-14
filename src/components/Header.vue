<template>
    <div>
        <b-navbar toggleable="md" type="dark" class="sticky-top mb-4" id="navigationBar">
            <b-container>
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <router-link :to="{ name: 'Home' }" class="navbar-brand" target="_self">MYMOVIE</router-link>
                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                    <router-link :to="{ name: 'NowPlaying', params: { page:'1'} }" tag="li" active-class="active" exact v-scroll-to="'.scroll'"><a class="nav-link">Vizyondakiler</a></router-link>
                    <router-link :to="{ name: 'Popular', params: { page:'1'} }" tag="li" active-class="active" exact v-scroll-to="'.scroll'"><a class="nav-link">Popüler</a></router-link>
                    <router-link :to="{ name: 'TopRated', params: { page:'1'} }" tag="li" active-class="active" exact v-scroll-to="'.scroll'"><a class="nav-link">En Beğenilenler</a></router-link>
                    <router-link :to="{ name: 'Upcoming', params: { page:'1'} }" tag="li" active-class="active" exact v-scroll-to="'.scroll'"><a class="nav-link">Pek Yakında</a></router-link>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                    <b-nav-form @submit.prevent="onSubmit">
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Bir Film Bul..." v-model="searchTerm"/>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Ara</b-button>
                    </b-nav-form>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
export default {
 data () {
    return {
      searchTerm: ''
    }
  },
  methods: {
    onSubmit () {
      this.$router.push({name: 'Search', params: { page: 1 }, query: { q: this.searchTerm }})
    }
  }
}
</script>

<style>
#navigationBar {
  background-color:#081c24;
  min-height: 80px;
}
 @media only screen and (max-width: 991px) {
    
    #navigationBar {
      min-height: auto;
    }
  }
</style>
