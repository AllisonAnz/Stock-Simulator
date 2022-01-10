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
                //debugger
                console.log("registration error", error);
                this.setState({ errors: error.response.data.error })
            });
        event.preventDefault();
    }

render(){
    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-md-4">
                    <div className="homepage-description">
                        <img className="center" alt="Bootstrap Preview" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPZuEWez1EkmTNEmokPJuGQ7S7r165Pl_6Q&usqp=CAU" /><br />
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>

                    </div>
                </div>
                <div className="col-md-8">
                    <br />
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
                                </div><br />

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                            </form>
                            <div>
                                <p>Not a member?</p>
                                    <button className="btn btn-dark btn-lg btn-block" onClick={this.props.handleNewUser}>Sign Up</button>
                            </div>

                            {
                                this.state.errors.length > 0 && (
                                    <ul style={{ color: "red" }}>
                                            <li>{this.state.errors}</li>
                                    </ul>
                                )
                            }
                    
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        )
    }
}

