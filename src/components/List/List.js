import React, {Component} from 'react';
import Logo from '../Logo/Logo';
import ListInput from './ListInput'
import { connect } from 'react-redux'
import "./List.scss";

class List extends Component {

	// this.setState({});
	render() {
		return(
			<div className="list">
				<Logo/>
				<ListInput dispatch={this.props.dispatch} listItems={this.props.listItems}/>
				<ul>
					{
						this.props.listItems.map((item) => {
							return <li key={item.id}>{item.name}</li>
						})
					}
				</ul>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps) (List)