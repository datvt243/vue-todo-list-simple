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

import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import TodoWrapper from "./components/todo/TodoWrapper"

export default {
  name: "app",
  components: {
    Header,
    Footer,
    TodoWrapper
  },
  data () {
    return {
      projectName: "Todo List",
    }
  },
}
</script>

<style lang="sass">

h1, h2, h3, h4, h5 
  font-family: "Roboto Slab", serif
  font-weight: 700

.eng 
  font-family: "Roboto Slab", serif
  font-weight: 700

.del 
  text-decoration: line-through

.delete 
  color: #fff

.btn
  border-radius: 0
  border-width: 0
  transition: all .3s ease

#app
  position: relative
  font-family: "Roboto", sans-serif
  color: #333
  padding: 5rem 1rem 0 1rem
  background: url('./assets/todo.jpg') no-repeat center / cover
  &:before
    content: ''
    pointer-events: none
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    background-color: rgba(0,123,255,.2)

.container
  &.is-flex 
    display: flex
    flex-direction: column
    justify-content: space-between
    min-height: calc(100vh - 5rem)

.header-wrapper 
  margin-bottom: 4rem

.main-wrapper 
  flex-grow: 1
  position: relative

.footer-wrapper 
  border-top: .1rem solid rgba(0,0,0,.1)
  padding: 2rem 0
  text-align: center

section, div, ul, ol, li, dl, dt, dd, th, td, address, blockquote
  > *
    margin-bottom: 0

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


