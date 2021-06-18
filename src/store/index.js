import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {
      name: "",
      occupation: "",
      organization: "",
    },
    films: [],
    ships: [],
    totalDogs: 5,
    name: "John Doe",
    dummyValue: "lorem dollar ipstat",
    books: [
      { type: "nonfiction", title: "Truth about Cats", pages: 200 },
      { type: "nonfiction", title: "Truth about Dogs", pages: 100 },
      { type: "fiction", title: "The Cat Said Meow", pages: 400 },
      { type: "fiction", title: "The Last Dog", pages: 600 },
    ],
  },
  mutations: {
    profileUpdate(state, payload) {
      state.formData = {
        name: payload.name || "",
        occupation: payload.occupation || "",
        organization: payload.organization || "",
      };
    },
    setFilms(state, films) {
      state.films = films;
    },
    setShips(state, ships) {
      state.ships = ships;
    },
    profileClear(state) {
      state.formData = {
        name: "",
        occupation: "",
        organization: "",
      };
    },
    adoptDog(state) {
      state.totalDogs++;
      console.log(state.totalDogs, "total dogs");
    },
    placeDog(state) {
      if (state.totalDogs > 0) state.totalDogs--;
      console.log(state.totalDogs, "total dogs");
    },
    setName(state, name) {
      state.name = name;
    },
  },
  actions: {
    loadBooks(context) {
      fetch("/data/books.json")
        .then((res) => res.json())
        .then((res) => {
          context.commit("setBooks", res);
        });
    },
    loadFilms(context) {
      axios
        .get("https://swapi.dev/api/films")
        .then((res) => {
          context.commit("setFilms", res.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    loadShips(context) {
      axios
        .get("https://swapi.dev/api/starships")
        .then((res) => {
          context.commit("setShips", res.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  modules: {},
  getters: {
    name(state) {
      return `${state.formData.name}`;
    },
    upperCaseDummyText(state) {
      return `${state.dummyValue.toLocaleUpperCase()}`;
    },
    fiction(state) {
      return state.books.filter((book) => book.type === "fiction");
    },
    nonfiction(state) {
      return state.books.filter((book) => book.type === "nonfiction");
    },
    booksByMaxPages(state) {
      return function (pages) {
        return state.books.filter((book) => book.pages <= pages);
      };
    },
    occupation(state) {
      return `${state.formData.occupation}`;
    },
    organization(state) {
      return `${state.formData.organization}`;
    },
  },
});
