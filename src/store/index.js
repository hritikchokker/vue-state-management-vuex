import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {
      name: "",
      occupation: "",
      organization: "",
    },
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
