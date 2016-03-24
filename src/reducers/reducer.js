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
          id: getId(state),
          completed: false
        }, ...state.listItems]
      })
    case 'COMPLETE_LIST':
    	return Object.assign({}, state, {
    		listItems: state.listItems.map((item) => {
    			return item.id === action.id ? 
    				Object.assign({}, item, {completed: !item.completed}) : item
    		})
    	})
    case 'DELETE_LIST': 
    	return Object.assign({}, state, {
    		listItems: state.listItems.filter((item) => {
    			return item.id !== action.id
    		})
    	})
    default: 
      return state;
  }
}

export default reducer