<template>
  <div class="clearfix">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col-auto">
            <button
              type="button"
              class="btn btn-light border-0"
              :class="{ 'is-active': getFilter == 'all' }"
              @click="setFilter('all')"
            >
              Tất cả
            </button>
          </div>
          <div class="col-auto">
            <button
              type="button"
              class="btn btn-light border-0"
              :disabled="!disabledBtnIsComplete"
              :class="{ 'is-active': getFilter == 'done' }"
              @click="setFilter('done')"
            >
              Đã hoàn thành
            </button>
          </div>
          <div class="col-auto">
            <button
              type="button"
              class="btn btn-light border-0"
              :disabled="!disabledBtnNotComplete"
              :class="{ 'is-active': getFilter == 'notDone' }"
              @click="setFilter('notDone')"
            >
              Chưa hoàn thành
            </button>
          </div>
        </div>
      </div>
      <div class="col-auto">
        <transition name="animate">
          <div class="float-right" v-show="showBtnClearComplete != 0">
            <button type="button" class="btn btn-danger" @click="clearComplete">
              Xóa các mục đã hoàn thành
            </button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "TodoControl",
  props: [
    "disabledBtnIsComplete",
    "disabledBtnNotComplete",
    "showBtnClearComplete",
    "clearComplete"
  ],
  computed: {
    ...mapGetters(["getFilter"])
  },
  methods: {
    ...mapMutations(["setFilter"])
  }
};
</script>

<style scoped lang="sass">
.btn-light.is-active
  color: #fff
  background-color: #007bff
</style>
