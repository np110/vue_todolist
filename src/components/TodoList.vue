<template>
  <span>总数为：{{ todocounts > 0 ? todocounts : "0" }}</span>
  <ul style="width: 500px">
    <li
      class="todoLi"
      v-for="(todo, index) in todos"
      :key="todo.id"
      @dblclick="delTodo(index)"
    >
      {{ todo.task }}
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      todocount: null,
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
    todocounts() {
      return this.$store.getters.todoCount;
    },
  },
  methods: {
    delTodo(delindex) {
      console.log(delindex);
      this.$store.commit("deltodo", delindex);
    },
  },
};
</script>
<style scoped>
.todoLi {
  height: 30px;
  line-height: 30px;
  text-indent: 5px;
  /* border-bottom: 1px solid grey; */
  cursor: pointer;
}
.todoLi:nth-child(2n) {
  background: rgb(225, 244, 250);
}
.todoLi:nth-child(2n + 1) {
  background: rgb(238, 243, 229);
}
</style>