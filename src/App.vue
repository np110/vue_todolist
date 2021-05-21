<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <ToDoNew msg="Hello Vue 3 in CodeSandbox!" /> -->
  <ToDoNew></ToDoNew>
  <ToDoList></ToDoList>
</template>

<script>
import ToDoNew from "./components/TodoNew.vue";
import ToDoList from "./components/TodoList.vue";
export default {
  name: "App",
  components: {
    ToDoNew: ToDoNew,
    ToDoList: ToDoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
