import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom'
import { MasterLayout } from '../../components/layouts';

class BookCreation extends Component {
	state = {
		form: {
			title: '',
			author: '',
			description: '',
		},
		errors: {
			title: null,
			author: null
		}
	}

	handleChangeInput = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			form: {
				...this.state.form,
				[name]: value
			},
			errors: {
				title: null,
				author: null
			}
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		if (this.state.form.title.trim() === '') {
			return this.setState({
				errors: {
					title: 'User name is required',
					author: null
				}
			});
		}

		if (this.state.form.author.trim() === '') {
			return this.setState({
				errors: {
					title: null,
					author: 'Password is required'
				}
			});
		}

		this.props.actions.createBook(this.state.form)
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<MasterLayout>
				<h1>Book Creation page</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="bookTitleCreation">Title</label>
						<input type="text"
							className="form-control"
							id="bookTitleCreation"
							name="title"
							placeholder="Book Title"
							value={this.state.form.title}
							onChange={this.handleChangeInput} />
						{
							this.state.errors.title &&
							<span className="text-validate error">{this.state.errors.title}</span>
						}
					</div>

					<div className="form-group">
						<label htmlFor="bookAuthorCreation">Author</label>
						<input type="text"
							className="form-control"
							id="bookAuthorCreation"
							name="author"
							placeholder="Book author"
							value={this.state.form.author}
							onChange={this.handleChangeInput} />
						{
							this.state.errors.author &&
							<span className="text-validate error">{this.state.errors.author}</span>
						}
					</div>
					<div className="form-group">
						<label htmlFor="bookDescriptionCreation">Description</label>
						<textarea type="text"
							className="form-control"
							id="bookAuthorCreation"
							name="description"
							placeholder="Book Description"
							value={this.state.form.description}
							onChange={this.handleChangeInput} />
					</div>
					<button type="submit" className="btn btn-primary">Creat Book</button>
				</form>
				<br />
				{/* <Link to={"./register"}>
                <button className="btn btn-info">Register</button>				
            </Link> */}
			</MasterLayout>
		);
	}
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookCreation);

