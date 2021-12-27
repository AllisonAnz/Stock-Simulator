
import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            errors: []
        };
        //bind() method creates a new function that, when called, has its this keyword 
        //set to the provided value.
        //binding the function so it has access to state and other variables in your class, 
        //not just the params that pass when you execute
        //allows you to call the function from within the component
        //without is, the component won't know about it
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password, password_confirmation} = this.state;
        
        axios
            .post(
                "http://localhost:3000/registrations",
                {
                    user: {
                        email: email,
                        password: password,
                        password_confirmation: password_confirmation
                    }
                },
                
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.status === "created") {
                    this.props.handleSuccessfulAuth(response.data)
                }
            })
            .catch(error => {
                console.log("registration error", error);
                this.setState({errors: error.response.data.errors})
            });
        event.preventDefault();
    }

render () {
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
                    <div className="login-container">
                        <div className="container-sm">
                            <form onSubmit={this.handleSubmit}>
                                <h3>Sign up!</h3>

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
                                    <label>Confirm Password : </label>
                                    <br/>
                                    <input
                                        type="password"
                                        name="password_confirmation"
                                        value={this.state.password_confirmation}
                                        onChange={this.handleChange}
                                    />
                                </div><br />
                                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                            </form><br/>
                            {
                                this.state.errors.length > 0 && (
                                    <ul style={{ color: "red" }}>
                                        {this.state.errors.map((error) => (
                                            <li key={error}>{error}</li>
                                        ))}
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
