import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions/Actions';
import Logo from '../Logo/Logo';
import ListInput from '../List/ListInput';
import List from '../List/List';
import "../List/List.scss";

// App Entry Point

class App extends Component {

	render() {
		return (
			<main className="app">
				<Logo/>
				<div className="list">
					<ListInput addList={this.props.actions.addList} listItems={this.props.listItems}/>
					<List completeList={this.props.actions.completeList} deleteList={this.props.actions.deleteList}
						  listItems={this.props.listItems}/>
				</div>
			</main>
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

export default connect(mapStateToProps, mapDispatchToProps) (App)