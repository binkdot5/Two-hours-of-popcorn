<template>
  <div>
    <h2 class="hidden">Movie Info</h2>
    <div class="movieDetails">
      <h2 id="fancyTitle">{{ movie.title }} ({{ movie.year }})</h2>
      <img :src="`/static/${movie.image}`" alt="movie-poster" />
      <p>{{ movie.summary }}</p>
      <h4>Directed by {{ movie.director }}</h4>
      <h4>{{ movie.genres }}</h4>
      <router-link to="/movies">Back to Movies</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movie: {}
    };
  },
  created() {
    var vm = this;
    var id = this.$route.params.id;
    axios
      .get(`http://localhost:3000/api/movie/${id}`)
      .then(function(response) {
        vm.movie = response.data;
        console.log(vm.movie);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#fancyTitle {
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
}
.movieDetails {
  padding: 100px;
  background-color: #302140;
  text-align: center;
  img {
    width: 30%;
    height: auto;
    border-radius: 5px;
  }
  a {
    color: #fff;
  }
}
</style>
