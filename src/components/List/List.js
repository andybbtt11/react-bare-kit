import React, {Component} from 'react';
import ListItem from './ListItem';
import "./List.scss";

class List extends Component {

	// this.setState({});
	render() {
		return(
			<ul>
				{
					this.props.listItems.map((item) => {
						return (
							<ListItem 
								key={item.id} 
								item={item} 
								completeList={this.props.completeList} 
								deleteList={this.props.deleteList}/>
						)
					})
				}
			</ul>
		)
	}
}

export default List