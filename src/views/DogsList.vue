<template>
  <div id="app">
    <h1>About Me</h1>
    <p>My name is {{ name }} and I have {{ totalDogs }} dogs.</p>
    <p>some dummy text{{ upperCaseDummyText }}</p>
    <!-- <p>
      My name is {{ $store.state.name }} and I have
      {{ $store.state.totalDogs }} dogs.
    </p> -->
    <p>
      <input v-model="newName" />
      <button @click="setName" :disabled="!newName">Update Name</button>
    </p>
    <Dog />
  </div>
</template>
<script>
import Dog from "../components/Dogs.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "app",
  components: {
    Dog,
  },
  data() {
    return {
      newName: "",
    };
  },
  computed: {
    ...mapState(["name", "totalDogs"]),
    ...mapGetters(["upperCaseDummyText"]),
  },
  methods: {
    setName() {
      if (this.newName) {
        this.$store.commit("setName", this.newName);
        this.newName = "";
      }
    },
  },
};
</script>
