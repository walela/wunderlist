export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      // return current state if empty
      if (!action.payload) {
        return state
      }
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case 'COMPLETE':
      return {
        ...state,
        todos: state.todos.filter(t => t.title !== action.payload.title),
      }
    case 'EDIT':
      return state
    default:
      return state
  }
}
