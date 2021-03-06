import React, { Component } from 'react';
import './form.scss';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            email: "",
            password: "",
            passwordAgain: "",
            isUserName: true,
            isEmail: true,
            isPassword: true,
            isPasswordAgain: true,
            userChange: false,
            emailChange: false,
            passwordChange: false,
            passwordAgainChange: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        const record = target.getAttribute("record");

        this.setState({
            [name]: value,
            [record]: true
        })

        switch (name) {
            case 'userName': 
                this.checkUserName(value);
                break;
            case 'email':
                this.checkEmail(value);
                break;
            case 'password':
                this.checkPassword(value);
                break;
            case 'passwordAgain':
                this.checkPasswordAgain(value);
                break;
        }

    }

    handleSubmit(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

    }

    checkUserName(value) {
        this.setState({
            isUserName: value.length > 2
        })
    }

    checkEmail(value) {
        const regular = /\S+@\S+\.\S+/;
        this.setState({
            isEmail: regular.test(value)
        })
    }

    checkPassword(value) {
        const regular = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        this.setState({
            isPassword: regular.test(value)
        })
    }

    checkPasswordAgain(value) {
        this.setState({
            isPasswordAgain: this.state.password === value
        })
    }

    render() {

        return (
            
            <div className="container">
                <div className="form">
                    <div className="title">
                        <h2>????????????</h2>
                    </div>
                    <form action="" className="formItem">
                        <div className={this.state.userChange ? !this.state.isUserName ? "error" : "success" : ""}>
                            <label htmlFor="Username">?????????</label>
                            <input 
                                type="text" 
                                placeholder="??????????????????" 
                                name="userName"
                                record="userChange"
                                value={this.state.userName}
                                onChange={this.handleChange}
                            />
                            { !this.state.isUserName && <small>?????????????????????3?????????</small>} 
                        </div>
                        <div className={this.state.emailChange ? !this.state.isEmail ? "error" : "success" : ""}>
                            <label htmlFor="Email">??????</label>
                            <input 
                                type="email" 
                                placeholder="???????????????" 
                                name="email"
                                record="emailChange"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            { !this.state.isEmail && <small>??????????????????</small> }
                        </div>
                        <div className={this.state.passwordChange ? !this.state.isPassword ? "error" : "success" : ""}>
                            <label htmlFor="Password">??????</label>
                            <input 
                                type="password" 
                                placeholder="???????????????" 
                                name="password"
                                record="passwordChange"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            { !this.state.isPassword && <small>?????????????????????????????????&?????????8-16???</small> }
                        </div>
                        <div className={this.state.passwordAgainChange ? !this.state.isPasswordAgain ? "error" : "success" : ""}>
                            <label htmlFor="Password" >??????</label>
                            <input 
                                type="password" 
                                placeholder="?????????????????????"
                                name="passwordAgain" 
                                record="passwordAgainChange"
                                value={this.state.passwordAgain}
                                onChange={this.handleChange}
                            />
                            { !this.state.isPasswordAgain && <small>????????????????????????????????????</small> }
                        </div>
                        <div>
                            <input 
                                type="submit" 
                                value="Submit" 
                                onClick={this.handleSubmit}
                            />
                        </div>
                        
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default Form;