function getId(state) {
  return state.listItems.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let reducer = function(state, action) {

  switch (action.type) {

    case 'ADD_LIST':
      return Object.assign({}, state, {
        listItems: [{
          name: action.text,
          id: getId(state)
        }, ...state.listItems]
      })
    default: 
      return state;
  }
}

export default reducer