<template>
  <div>
    <h2>todos</h2>
    <div class="legend row">
      <span class="col-md-4">Double click to mark as complete</span>
      <span class="col-md-4">
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span class="col-md-4">
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="row">
      <div
        class="mx-auto col-md-3 col-5 todo"
        @dblclick="onDblClick(todo)"
        :class="{'is-complete':todo.completed}"
        v-for="todo in allTodos"
        :key="todo.id"
      >
        {{todo.title}}
        <i @click="deleteTodo(todo.id)" class="fa fa-trash-alt float-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  mounted() {
    this.$store.dispatch("fetchTodos");
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(["allTodos"])
};
</script>
<style>
.todo {
  border: 1px solid #ccc;
  background: #0cbdd4;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  margin-top: 1rem;
  text-align: center;
}
.row {
  padding-right: 1rem;
  text-align: center;
}
h2 {
  font-size: 2.5rem;
  font-weight: 5rem;
  color: #0cbdd4;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  margin-bottom: 16px;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #0cbdd4;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
</style>