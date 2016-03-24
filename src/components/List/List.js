import React, {Component} from 'react';
import Logo from '../Logo/Logo';
import ListInput from './ListInput';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions/Actions';
import "./List.scss";

class List extends Component {

	// this.setState({});
	render() {
		return(
			<div className="list">
				<Logo/>
				<ListInput addList={this.props.actions.addList} listItems={this.props.listItems}/>
				<ul>
					{
						this.props.listItems.map((item) => {
							return (
								<ListItem 
									key={item.id} 
									item={item} 
									completeList={this.props.actions.completeList} 
									deleteList={this.props.actions.deleteList}/>
							)
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

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (List)