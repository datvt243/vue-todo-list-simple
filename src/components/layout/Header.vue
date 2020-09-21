<template>
  <header class="header-wrapper">
    <nav class="navbar navbar-light">
      <a class="navbar-brand" href="#">
        <img src="../../assets/logo.png" width="30" class="d-inline-block align-top" alt="" loading="lazy">
        <span class="eng">{{ projectName }}</span>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['projectName']
}
</script>

<style lang="sass">

.navbar 
  box-shadow: none
  color: 1
  background-color: rgba(17, 167, 224, .5)

.eng
  margin-left: 1rem
  color: #fff

</style>