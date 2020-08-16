<template>
  <div class="container">
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo..." class="col-md-10" />
        <input type="submit" value="Submit" class="col-md-2" />
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    }
  }
};
</script>

<style scoped>
h3 {
  color: #0cbdd4;
  font-weight: 4rem;
  font-size: 2rem;
}
form {
  display: flex;
}
input[type="text"] {
  padding: 10px;
  border: 1px solid #0cbdd4;
  outline: 0;
}
input[type="submit"] {
  background: #0cbdd4;
  color: #fff;
  border: 1px #0cbdd4 solid;
  cursor: pointer;
}
</style>