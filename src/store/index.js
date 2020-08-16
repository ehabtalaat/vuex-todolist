import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "title one",
      },
      {
        id: 2,
        title: "title two",
      },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(response.data);
      commit("setTodos", response.data);
    },
    async addTodo({ commit }, title) {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        { title, completed: false }
      );
      commit("newTodo", response.data);
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit("deleteTodo", id);
    },
    async filterTodos({ commit }, e) {
      // eslint-disable-line no-unused-vars
      // Get selected number
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      );
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      );
      commit("setTodos", response.data);
    },
    async updateTodo({ commit }, updateTodo) {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${updateTodo.id}`,
        updateTodo
      );
      console.log(response.data);
      commit("updTodo", response.data);
    },
},
    mutations: {
      setTodos: (state, todos) => (state.todos = todos),
      newTodo: (state, todo) => state.todos.unshift(todo),
      deleteTodo: (state, id) => {
        state.todos = state.todos.filter((todo) => todo.id != id);
      },
      updTodo: (state, updateTodo) => {
        const index = state.todos.findIndex(
          (todo) => todo.id === updateTodo.id
        );
        if (index != -1) { /* eslint-disable */
          state.todos.splice(index, 1, updateTodo);
        }
      }
    },
  modules: {},
});
