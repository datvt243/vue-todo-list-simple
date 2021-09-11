<template>
  <header class="header-wrapper mb-4">
    <nav class="navbar bg-dark px-4 rounded-3">
      <span class="navbar-brand">
        <img
          src="@/assets/logo.png"
          width="30"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        <strong class="ms-2 h5">{{ projectName }}</strong>
      </span>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["projectName"]
};
</script>

<style lang="sass"></style>
