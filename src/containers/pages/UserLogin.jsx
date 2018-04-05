import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom'
import { MasterLayout } from '../../components/layouts';

class UserLogin extends Component {
	state = {
		form: {
			email: '',
			password: ''
		},
		errors: {
			email: null,
			password: null
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
				email: null,
				password: null
			}
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		if (this.state.form.email.trim() === '') {
			return this.setState({
				errors: {
					email: 'User name is required',
					password: null
				}
			});
		}

		if (this.state.form.password.trim() === '') {
			return this.setState({
				errors: {
					email: null,
					password: 'Password is required'
				}
			});
		}

		this.props.actions.userLogin(this.state.form)
			.then( () => {
				this.props.history.push('/books-list');
			})
			.catch(err => {
				this.setState({
					errors: {
						password: err.message
					}
				});
			});
	}

	render() {
		return (
			<MasterLayout>
				<h1>Login page</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input type="email"
							className="form-control"
							id="exampleInputEmail1"
							name="email"
							placeholder="User Email"
							value={this.state.form.email}
							onChange={this.handleChangeInput} />
						{
							this.state.errors.username &&
							<span className="text-validate error">{this.state.errors.username}</span>
						}
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input type="password"
							className="form-control"
							id="exampleInputPassword1"
							name="password"
							placeholder="Password"
							value={this.state.form.password}
							onChange={this.handleChangeInput} />
						{
							this.state.errors.password &&
							<span className="text-validate error">{this.state.errors.password}</span>
						}
					</div>

					<button type="submit" className="btn btn-primary">Login</button>
				</form>
				<br/>
				<Link to={"./register"}>
					<button className="btn btn-info">Register</button>				
				</Link>
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
)(UserLogin);

