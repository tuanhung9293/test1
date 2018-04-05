import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom'
import { MasterLayout } from '../../components/layouts';

class BookList extends Component {

	componentDidMount = () => {
		this.props.actions.getBookList();
	}

	render() {
		const { bookList } = this.props;

		return (
			<MasterLayout>
				<h1>Books List page</h1>
				<div className="list-group">
					{
						bookList.map((item, key) =>
							<Link to={`./book/${item.id}`} className="list-group-item list-group-item-action" key={key}>
								<div>{item.title}</div>
								<div>{item.author}</div>
							</Link>
						)
					}
				</div>

				<br />
			</MasterLayout>
		);
	}
}

const mapStateToProps = state => ({
	bookList: state.books.bookList || [],
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookList);

