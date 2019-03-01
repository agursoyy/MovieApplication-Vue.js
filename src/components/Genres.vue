<template>
    <div class="container-fluid mb-3" id="#genreContainer">
        <div class="row">
            <div v-for="(genre,index) in genres.slice(0,10)" :key="index" class="col-sm-6 p-0">
                <div v-bind:style="[index % 2 ==1 ? {'background-image': 'url(' + genreBg1 + ')' } : {'background-image': 'url(' + genreBg2 + ')' }]" class="genre text-center p-2 m-1 genre">
                    {{genre.name}}
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
            return require('@/assets/genreBg4.jpg')
        },
        genreBg2: function () {
            return require('@/assets/genreBg4.jpg')
        }
    },
    methods: {
        ...mapActions(['getGenresData']),
        fetchData () { // to obtain genres data inside store
            this.getGenresData() 
            this.movieGenres = this.genres.slice(0,10)
        }
    },
    created () {
        this.fetchData()
    }
}
</script>

<style>
.genre {
    background-repeat: no-repeat;
    background-size: cover;
     opacity: 0.98;
    font-size: 25px;
    color: #c4c3c2;
    border-radius: 25px;
  font-family: "Times New Roman", Times, serif;

}

</style>
