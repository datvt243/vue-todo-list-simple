<template>
  <div class="todo-item">
    <div class="row align-items-center">
      <div class="col-auto">
        <input
          type="checkbox"
          class="form-check-input"
          :id="'doto-' + index"
          v-model="item.isComplete"
        />
      </div>
      <div class="col flex-grow-1">
        <p
          :class="{ del: item.isComplete }"
          v-if="!item.isEdit"
          @dblclick="emitEditTodo(item)"
        >
          {{ item.content }}
        </p>
        <div class="form-group" v-else>
          <input
            type="text"
            class="form-control"
            v-focus
            v-model="item.content"
            @blur="emitUpdateToDo(item)"
            @keyup.enter="emitUpdateToDo(item)"
            @keyup.esc="emitCanNotEdit(item)"
          />
        </div>
      </div>
      <div class="col-auto">
        <span class="btn text-white" @click="emitDeleteToDo(index)">
          <base-icon-delete />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item", "index"],
  methods: {
    emitEditTodo(item) {
      this.$emit("editTodo", item);
    },
    emitCanNotEdit(item) {
      this.$emit("canotEdit", item);
    },
    emitUpdateToDo(item) {
      this.$emit("updateToDo", item);
    },
    emitDeleteToDo(item) {
      this.$emit("deleteToDo", item);
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style lang="sass"></style>
