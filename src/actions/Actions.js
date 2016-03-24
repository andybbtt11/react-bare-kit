let actions = {
  addList: function(text) {
    return {
      type: 'ADD_LIST',
      text: text
    }
  },

  completeList: function(id) {
  	return {
  		type: 'COMPLETE_LIST',
  		id: id
  	}
  },

  deleteList: function(id) {
  	return {
  		type: 'DELETE_LIST',
  		id: id
  	}
  }
}

export default actions