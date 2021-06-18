<template>
  <div>
    <button @click="addDog">More Dogs!</button>
    <button @click="removeDog">Less Dogs :(</button>
  </div>
</template>

<script>
export default {
  name: "Dog",
  methods: {
    addDog() {
      this.$store.commit("adoptDog");
    },
    removeDog() {
      this.$store.commit("placeDog");
    },
  },
};
</script>
