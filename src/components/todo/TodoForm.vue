<template>
  <div class="doto-form">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon3">
        <strong class="h5 mb-0">Thêm Mới</strong>
      </span>
      <input
        type="text"
        class="form-control form-control-lg"
        id="todo-input"
        placeholder="thêm tác vụ mới ... [Enter] để thêm vào"
        v-model="newTodo"
        @keyup.enter="emitAddNewTodo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    emitAddNewTodo() {
      this.$emit("addNewToDo", this.newTodo);
      this.newTodo = "";
    }
  }
};
</script>

<style scoped lang="sass"></style>
