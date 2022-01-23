import React, { Component } from "react";

import axios from "axios";

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password } = this.state;

        axios
            .post(
                "http://localhost:3000/sessions",
                {
                    user: {
                        email: email,
                        password: password,
                    }
                },

                { withCredentials: true }
            )
            .then(response => {
                if (response.data.logged_in) {
                    this.props.handleSuccessfulAuth(response.data)
                }
            })
            .catch(error => {
               
                console.log("registration error", error);
                this.setState({ errors: error.response.data.error })
            });
        event.preventDefault();
    }

render(){
    return (
                    <div className="login-container">
                        
                        <div className="container-sm">
                            <form onSubmit={this.handleSubmit}>
                                <h3>Log in</h3>
                                <div className="form-group">
                                    <label>Email: </label>
                                    <br />
                                    <input
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </div><br />

                                <div className="form-group">
                                    <label>Password: </label>
                                    <br />
                                    <input
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                    {
                                        this.state.errors.length > 0 && (
                                            <ul style={{ color: "red" }}>
                                                <ul>{this.state.errors}</ul>
                                            </ul>
                                        )
                                    }
                                </div><br />
                                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                            </form>
                            <div><br/>
                                <p>Not a member?</p>
                                    <button className="btn btn-dark btn-lg btn-block" onClick={this.props.handleNewUser}>Sign Up</button>
                            </div>
                        </div>
                    </div>
        )
    }
}

