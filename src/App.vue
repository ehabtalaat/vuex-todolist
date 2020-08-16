<template>
  <div id="app">
    <div class="container">
      <add-todo></add-todo>
      <filter-todos />
    <todos></todos>
  </div>
  </div>
</template>
<script>
import Todos from "./components/Todos.vue"
import AddTodo from "./components/AddTodo.vue"
import FilterTodos from "./components/FilterTodos.vue"
  export default{
    components:{
      Todos,
      AddTodo,
      FilterTodos
    }
  };
</script>
<style>


</style>
