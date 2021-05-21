import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      todo: []
    };
  },
  mutations: {
    addtodo(state, item) {
      state.todo.unshift(item);
    },
    deltodo(state, item) {
      state.todo.splice(item, 1);
    }
  },
  getters: {
    getTodos(state) {
      return state.todo;
    },
    // 计算todo的数量
    todoCount(state) {
      return state.todo.length;
    }
  }
});
