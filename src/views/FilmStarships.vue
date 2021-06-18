<template>
  <div id="app">
    <h2>Films</h2>
    <ul>
      <li v-for="film in films" :key="film.url">
        {{ film.title }} was released in {{ film.release_date }}
      </li>
    </ul>

    <h2>Starships</h2>
    <ul>
      <li v-for="ship in ships" :key="ship.url">
        {{ ship.name }} is a {{ ship.starship_class }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilmStarship",
  data() {
    return {
      films: [],
      ships: [],
    };
  },
  async created() {
    try {
      const response = await this.axios.get("https://swapi.dev/api/films");
      this.films = response.data.results;
      const ships = await this.axios.get("https://swapi.dev/api/starships");
      this.ships = ships.data.results;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
