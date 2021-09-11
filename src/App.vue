<template>
  <div id="app">
    <div class="container is-flex">
      <Header :projectName="projectName" />
      <main class="main-wrapper">
        <TodoWrapper />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import TodoWrapper from "./components/todo/TodoWrapper";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    TodoWrapper
  },
  data() {
    return {
      projectName: "TODO List"
    }
  }
};
</script>

<style lang="sass">

h1, h2, h3, h4, h5, .h1, .h2, .h3, .h4, .h5
  font-family: "Roboto Slab", serif
  font-weight: 700

#app
  position: relative
  font-family: "Roboto", sans-serif
  padding: 5rem 1rem 0 1rem
  color: #fff
  background-color: #333

.container
  &.is-flex
    display: flex
    flex-direction: column
    justify-content: space-between
    min-height: calc(100vh - 5rem)

.main-wrapper
  flex-grow: 1
  position: relative

.footer-wrapper
  border-top: .1rem solid rgba(255,255,255,.1)
  padding: 1rem 0
  text-align: center

section, div, ul, ol, li, dl, dt, dd, th, td, address, blockquote
  > *
    margin-bottom: 0

.form-check-input:checked
  position: relative
  top: -.05em

.animate
  &-enter 
    opacity: 0
    transform: translateY(-2rem)
  &-leave-to
    opacity: 0
    transform: translateY(2rem)

  &-enter-active, &-leave-active
    transition: all .3s ease
</style>
