<template>
  <div id="app">
    <nav id="nav">
      <h2 class="hidden">Site Navigation</h2>
      <div>
        <h3 class="hidden">Site Logo</h3>
        <img id="logo" src="./assets/logo-white.png" alt="logo" />
      </div>
    </nav>
    <transition name="display">
      <router-view v-bind:movies="movies" />
    </transition>
    <footer>
      <h2 class="hidden">Site Footer</h2>
      <a href="http://localhost:3000/api/movies">API</a>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movies: []
    };
  },
  created() {
    var vm = this;
    axios
      .get("http://localhost:3000/api/movies")
      .then(function(response) {
        vm.movies = response.data;
        // console.log(vm.movies);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
  color: #f24b4b;
}

#logo {
  width: 10%;
}

#nav {
  background-color: #f24b4b;
  padding: 30px;
  text-align: center;

  li {
    list-style: none;
  }
}

footer {
  background-color: #000;
  padding: 30px;
  text-align: center;

  a {
    color: #fff;
    text-decoration: none;
    list-style: none;
  }
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  #logo {
    width: 15%;
  }
}

// Medium devices (tablets, less than 992px)
@media (min-width: 768px) and (max-width: 991.98px) {
  #logo {
    width: 15%;
  }
}

.display-enter-active,
.display-leave-active {
  transition: 0.5s ease-in-out, transform 0.5s ease;
}

.display-enter-active {
  transition-delay: 0.5s;
}

.display-enter,
.display-leave-to {
  opacity: 0;
}

.display-enter-to,
.display-leave {
  opacity: 1;
}
</style>
