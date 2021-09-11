<template>
  <div class="bg-dark p-4 text-white rounded-3">
    <div class="mb-2">
      <TodoForm @addNewToDo="addNewToDo" />
    </div>
    <div class="todo-content">
      <div class="clearfix" v-if="listTodo.length">
        <div class="clearfix mb-2">
          <div class="mb-2">
            <div class="text-end text-info">
              <small><i>DoubleClick vào title để edit</i></small>
            </div>
          </div>
          <transition-group
            tag="ul"
            class="list-group list-group-flush mb-4"
            name="animate"
          >
            <li
              class="list-group-item"
              v-for="(item, index) in getListToDo"
              :key="index"
            >
              <TodoItem
                :item="item"
                :index="index"
                @editTodo="editTodo"
                @canotEdit="canotEdit"
                @updateToDo="updateToDo"
                @deleteToDo="deleteToDo"
              />
            </li>
          </transition-group>
        </div>
        <div class="clearfix mb-4">
          <TodoResult
            :getNotComplete="getNotComplete"
            :isCheckAll="isCheckAll"
            @checkAllComplete="checkAllComplete"
          />
        </div>
        <div class="clearfix mb-4">
          <TodoControl
            :disabledBtnIsComplete="disabledBtnIsComplete"
            :disabledBtnNotComplete="disabledBtnNotComplete"
            :showBtnClearComplete="showBtnClearComplete"
            :clearComplete="clearComplete"
          />
        </div>
      </div>
      <transition v-else name="animate">
        <TodoFooter />
      </transition>
    </div>
  </div>
</template>

<script>
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoControl from "./TodoControl";
import TodoResult from "./TodoResult";
import TodoFooter from "./TodoFooter";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TodoWrapper",
  components: {
    TodoForm,
    TodoItem,
    TodoControl,
    TodoResult,
    TodoFooter
  },
  data() {
    return {
      listTodo: [
        {
          id: 1,
          content: "Lorem ipsum dolor sit amet.",
          isComplete: true,
          isEdit: false
        },
        {
          id: 2,
          content: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          isComplete: false,
          isEdit: false
        },
        {
          id: 3,
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, cumque.",
          isComplete: false,
          isEdit: false
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getFilter", "getBeforeEdit"]),
    getListToDo() {
      if (this.getFilter == "all") {
        return this.listTodo;
      } else if (this.getFilter == "notDone") {
        return this.listTodo.filter(item => !item.isComplete);
      } else if (this.getFilter == "done") {
        return this.listTodo.filter(item => item.isComplete);
      }
      return this.listTodo;
    },
    getNotComplete() {
      return this.listTodo.filter(item => item.isComplete == false).length;
    },
    getIDLast() {
      return this.listTodo.length == 0
        ? 1
        : this.listTodo[this.listTodo.length - 1].id;
    },
    isCheckAll() {
      return this.getNotComplete == 0;
    },
    showBtnClearComplete() {
      return this.listTodo.filter(item => item.isComplete).length;
    },
    disabledBtnIsComplete() {
      return this.listTodo.filter(item => item.isComplete).length;
    },
    disabledBtnNotComplete() {
      return this.listTodo.filter(item => !item.isComplete).length;
    }
  },
  methods: {
    ...mapMutations(["setFilter", "setBeforeEdit"]),
    addNewToDo(item) {
      if (item.trim() == "") {
        return;
      }
      this.listTodo.push({
        id: this.getIDLast + 1,
        content: item,
        isComplete: false,
        isEdit: false
      });
    },
    deleteToDo(index) {
      this.listTodo.splice(index, 1);
    },
    editTodo(item) {
      this.setBeforeEdit(item.content);
      item.isEdit = true;
    },
    canotEdit(item) {
      this.setBeforeEdit("");
      item.isEdit = false;
    },
    updateToDo(item) {
      if (item.content.trim() == "") {
        item.content = this.getBeforeEdit;
      }
      item.isEdit = false;
    },
    checkAllComplete() {
      this.listTodo.forEach(item => (item.isComplete = event.target.checked));
    },
    clearComplete() {
      this.listTodo = this.getListToDo.filter(item => !item.isComplete);
    }
  }
};
</script>

<style lang="sass">
.list-group-item
  border: 1px solid rgba(255,255,255,.125)
.list-group-flush>.list-group-item
  background-color: transparent
  color: currentColor
</style>
