import React, {Component} from 'react';
import "./List.scss";

class ListInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.listItems);
    this.props.addList(this.state.inputText);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
              type="text"
              placeholder="Create a list"
              value={this.state.inputText}
              onChange={this.handleChange.bind(this)}/>
          <input type="submit"/>
        </form>
    )
  }
}

export default ListInput