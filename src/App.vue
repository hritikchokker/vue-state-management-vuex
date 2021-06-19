<template>
  <div id="app">
    My first name is {{ $store.state.firstName }}.<br />
    My full name is {{ $store.getters.name }}.<br />
    I have this many pets - {{ $store.getters.totalPets }}.<br />
    My favorite film is {{ $store.state.favoriteFilm }}.
    <br />
    <br />
    <br />
    <br />
    <h2>Vuex Modules Example</h2>
    <div class="vuex_modules">
      <p>
        My name is {{ $store.getters.name }} and I
        <span v-if="$store.state.resume.forHire"> am looking for work! </span
        ><span v-else> am not looking for work. </span>
      </p>
      <p>I've had {{ $store.getters.totalJobs }} total jobs.</p>
      <h2>Portfolio</h2>
      <ul>
        <li v-for="(site, idx) in $store.state.portfolio.websites" :key="idx">
          <a :href="site" target="_new">{{ site }}</a>
        </li>
      </ul>

      <p>
        <input type="url" placeholder="New site for portfolio" v-model="site" />
        <button @click="addSite">Add Site</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.$store.dispatch("updateFavoriteFilm", "A New Hope");
  },
  data() {
    return {
      site: "",
    };
  },
  methods: {
    addSite() {
      this.$store.commit("addSite", this.site);
      this.site = "";
    },
  },
};
</script>
<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-top: 50vh;
  flex-direction: column;
  // width: 500px;
}
</style>
