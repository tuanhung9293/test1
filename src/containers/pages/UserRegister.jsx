import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom';
import { MasterLayout } from '../../components/layouts';

class UserRegister extends Component {
    state = {
        form: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
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

        this.props.actions.userRegister(this.state.form)
            .then( () => {
                this.props.history.push('/login');
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <MasterLayout>
                <h1>Register page</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail2">Email address</label>
                        <input type="email"
                            className="form-control"
                            id="exampleInputEmail2"
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
                        <label htmlFor="exampleInputPassword2">Password</label>
                        <input type="password"
                            className="form-control"
                            id="exampleInputPassword2"
                            name="password"
                            placeholder="Password"
                            value={this.state.form.password}
                            onChange={this.handleChangeInput} />
                        {
                            this.state.errors.password &&
                            <span className="text-validate error">{this.state.errors.password}</span>
                        }
                    </div>

                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.form.firstName}
                            onChange={this.handleChangeInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.form.lastName}
                            onChange={this.handleChangeInput} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <br />
                <Link to={"./login"}>
					<button className="btn btn-info">Login</button>				
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
)(UserRegister);

