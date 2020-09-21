<template>
  <div class="todo-item d-flex align-items-center">
    <div class="checked">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" 
          :id="'doto-' + index" 
          v-model="item.isComplete">
        <label class="custom-control-label" 
          :for="'doto-' + index"></label>
      </div>
    </div>
    <div class="content">
      <p :class="{ del : item.isComplete }" v-if="!item.isEdit" @dblclick="emitEditTodo(item)">
        {{ item.content }}
      </p>
      <div class="form-group" v-else>
        <input type="text" class="form-control" 
          v-focus 
          v-model="item.content" 
          @blur="emitUpdateToDo(item)" 
          @keyup.enter="emitUpdateToDo(item)" 
          @keyup.esc="emitCanNotEdit(item)">
      </div>
    </div>
    <div class="control">
      <span class="btn" @click="emitDeleteToDo(index)">
        <base-icon-delete />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['item', 'index'],
  methods: {
    emitEditTodo(item) {
      this.$emit('editTodo', item)
    },
    emitCanNotEdit(item) {
      this.$emit('canotEdit', item)
    },
    emitUpdateToDo(item) {
      this.$emit('updateToDo', item)
    },
    emitDeleteToDo(item) {
      this.$emit('deleteToDo', item)
    }
  }
}
</script>

<style lang="sass">

  .custom-control-label 
    cursor: pointer

  .todo
    
    &-list 
      position: relative
      list-style-type: none
      padding: 0
      margin: 0

      li 
        padding: 1rem 0
        border-bottom: .1rem solid rgba(255,255,255,.1)

    &-item 
      display: flex
      align-items: center

      .checked, .control 
        flex: 0 0 3rem
        max-width: 3rem

      .content
        width: 100%
        flex-grow: 1
        font-size: 1.4rem

      .form-group
        margin-bottom: 0

</style>