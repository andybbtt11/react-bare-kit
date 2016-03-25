import React, {Component} from 'react';
import "./List.scss";

class ListItem extends Component {

  handleComplete() {
    this.props.completeList(this.props.item.id)
  }

  handleDelete() {
    this.props.deleteList(this.props.item.id)
  }

  render() {
    return (
        <li>
          {this.props.item.name}
          <button onClick={this.handleComplete.bind(this)}>Complete</button>
          <button onClick={this.handleDelete.bind(this)}>Delete</button>
        </li>
    )
  }
}

export default ListItem