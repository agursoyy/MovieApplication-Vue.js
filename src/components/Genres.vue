<template>
    <div class="container-fluid mb-3" id="#genreContainer">
        <div class="row p-1" v-for="(genreObj,index) in genres" :key="index" >
            <div class="col-sm-6 p-0">
                <div class="text-center genre p-2" v-bind:style="[index % 2 ==1 ? {'background-image': 'url(' + genreBg1 + ')' } : {'background-image': 'url(' + genreBg2 + ')' }]">
                    {{genreObj.genre1.name}}
                </div>
            </div>
            <div class="col-sm-6 p-0">
                <div class="text-center  genre p-2" v-bind:style="[index % 2 ==0 ? {'background-image': 'url(' + genreBg1 + ')' } : {'background-image': 'url(' + genreBg2 + ')' }]">
                    {{genreObj.genre2.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions } from 'vuex'
export default {

    computed: {
        ...mapState(['genres']),
        genreBg1: function () {
            return require('@/assets/genreBg1.jpg')
        },
        genreBg2: function () {
            return require('@/assets/genreBg7.jpg')
        }
    },
    methods: {
        ...mapActions(['getGenresData']),
         fetchData () { // to obtain genres data inside store
            this.getGenresData() 
        }
    },
    created () {
        this.fetchData()
    },
  watch: {
    '$route' (to, from) {
      this.genres.length = 0
    }
  }
}
</script>

<style>
.genre {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    opacity: 0.98;
    font-size: 23px;
    color: #fff;
    font-family: "Times New Roman", Times, serif;
    cursor: context-menu;

}


</style>
