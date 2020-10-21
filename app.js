const app = Vue.createApp({

  data () {
    const today = new Date().toISOString().slice(0, 10)
    return {
      todos: [],
      completedTodos: [],
      userInput: '',
      date: today
    }
  },

  methods: {
    /* takes user input & add to array of todos */
    addTodo () {
      this.todos.push(this.userInput)
      this.userInput = ''
    },

    /* removes selected todo from todos array by getting index of todo */
    removeTodo (idx) {
      this.todos.splice(idx, 1)
    },

    /* allows user to edit selected todo by grabbing index of selected todo
        and replacing user input with that todo and lastly removing it from todos array */
    editTodo (idx) {
      this.userInput = this.todos[idx]
      this.todos.splice(idx)
    },

    /* get the index and content of selected todo, pushes content to new completedTodos array and remove that todo index from todos array */
    completeTodo (todo, idx) {
      this.completedTodos.push(todo)
      this.todos.splice(idx)
    }
  }
})

app.mount('#app')
