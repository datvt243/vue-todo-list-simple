<template>
  <div class="row align-items-center justify-content-between">
    <div class="mb-4">
      <hr />
    </div>
    <div class="col-auto">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkall"
          :checked="isCheckAll"
          @change="emitCheckAllComplete"
        />
        <label class="form-check-label" for="checkall">
          Đánh dấu tất cả là "Đã hoàn thành"
        </label>
      </div>
    </div>
    <div class="col-auto">
      <p class="text-right">
        Có <strong>[{{ getNotComplete }}]</strong> mục chưa hoàn thành
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoResult",
  props: ["getNotComplete", "isCheckAll"],
  methods: {
    emitCheckAllComplete() {
      this.$emit("checkAllComplete");
    }
  }
};
</script>

<style scoped lang="sass"></style>
