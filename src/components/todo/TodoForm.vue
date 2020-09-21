<template>
  <div class="doto-form">
    <div class="form-group">
      <label for="todo-input">Thêm Mới:</label>
      <input type="text" class="form-control form-control-lg" id="todo-input" placeholder="thêm tác vụ mới ... [Enter] để thêm vào" v-model="newTodo" @keyup.enter="emitAddNewTodo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data () {
    return {
      newTodo : ''
    }
  },
  methods: {
    emitAddNewTodo() {
      this.$emit('addNewToDo', this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>

<style scoped lang="sass">

  .doto
    
    &-form 
      margin-bottom: 3rem

      .form-control
        border-radius: 0
        border-width: 0
        box-shadow: .3rem .3rem 0 rgba(0, 123, 255, .8)
  
</style>