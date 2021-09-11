module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-todo-list-simple/'
    : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Vuejs - Todo List',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
}
