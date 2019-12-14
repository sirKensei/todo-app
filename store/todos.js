export const state = () => ({
  todos: [
    'aaaaa', 'bbbb'
  ]
})

export const mutations = {
  insert (state, { obj }) {
    state.todos.push({
      obj,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}
