<template>
  <div id="movies">
    <h2 class="hidden">List of Movies</h2>
    <ul class="layout">
      <li class="movieBox" v-for="movie in movies" v-bind:key="movie.id">
        <img :src="`/static/${movie.image}`" alt="#" />
        <div id="sidebar">
          <h3 id="fancyTitle">{{ movie.title }}</h3>
          <h4 id="fancyTitle">by {{ movie.director }}</h4>
          <p id="fancyTitle">{{ movie.year }}</p>
          <p>
            <router-link id="fancyTitle" :to="`/movie/${movie._id}`"
              >More info</router-link
            >
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["theTitle", "movies"]
};
</script>

<style scoped lang="scss">
li {
  list-style: none;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  grid-gap: 10px;
}

.movieBox {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #302140;
  border-radius: 5px;
  width: 70vh;
  margin: 25px;
  padding: 60px;
  img {
    width: 40vh;
    border-radius: 5px;
  }
  a {
    text-decoration: none;
  }
}

#sidebar {
  display: flex;
  flex-direction: column;
  padding-left: 40px;
}

#fancyTitle {
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  display: inline-block;
  margin-left: 5%;
}

.fade-transition {
  transition: all 0.3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  .layout {
    grid-template-columns: 100%;
    grid-template-rows: 1fr;
  }
  .movieBox {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 30vh;
    margin-left: 15%;
    padding: 55px;
    img {
      width: 35vh;
    }
  }
  #sidebar {
    padding-left: 0px;
  }
  #fancyTitle {
    margin-left: 0;
  }
}

// Medium devices (tablets, less than 992px)
@media (min-width: 768px) and (max-width: 991.98px) {
  .layout {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 10px;
  }
  .movieBox {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 30vh;
    margin-left: 5%;
    padding: 55px;
    img {
      width: 35vh;
    }
  }
  #sidebar {
    padding-left: 0px;
  }
  #fancyTitle {
    margin-left: 0;
  }
}

// Large devices (desktops, less than 1200px)
@media (min-width: 992px) and (max-width: 1199.98px) {
  .layout {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 10px;
  }
  .movieBox {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 30vh;
    padding: 55px;
    img {
      width: 35vh;
    }
  }
  #sidebar {
    padding-left: 0px;
  }
  #fancyTitle {
    margin-left: 0;
  }
}

// Remaining devices (desktops, more than 1200px)
@media (min-width: 1200px) {
  .layout {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 10px;
  }
}
</style>
