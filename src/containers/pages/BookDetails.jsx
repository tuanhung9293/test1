import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom'
import { MasterLayout } from '../../components/layouts';

class BookDetails extends Component {
	componentDidMount = () => {
		this.props.actions.getBookDetail(this.props.match.params.id);
	}

	render() {
		const { bookDetail } = this.props;
		return (
			<MasterLayout>
				<h1>Books Detail page</h1>
				<div>
					{bookDetail.title}
				</div>
				<div>
					{bookDetail.author}
				</div>
				<div>
					{bookDetail.description}
				</div>
			</MasterLayout>

		);
	}
}

const mapStateToProps = state => ({
	bookDetail: state.books.bookDetail || {},
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookDetails);

