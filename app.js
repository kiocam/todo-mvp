const app = Vue.createApp({

  data () {
    const today = new Date().toISOString().slice(0, 10)
    return {
      todos: [],
      userInput: '',
      date: today
    }
  },

  methods: {
    addTodo () {
      this.todos.push(this.userInput + ' - ' + this.date)
      this.userInput = ''
    },

    removeTodo (idx) {
      this.todos.splice(idx, 1)
    }
  }
})

app.mount('#app')
