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
                        <h2>加入我们</h2>
                    </div>
                    <form action="" className="formItem">
                        <div className={this.state.userChange ? !this.state.isUserName ? "error" : "success" : ""}>
                            <label htmlFor="Username">用户名</label>
                            <input 
                                type="text" 
                                placeholder="请输入用户名" 
                                name="userName"
                                record="userChange"
                                value={this.state.userName}
                                onChange={this.handleChange}
                            />
                            { !this.state.isUserName && <small>用户名至少需要3个字母</small>} 
                        </div>
                        <div className={this.state.emailChange ? !this.state.isEmail ? "error" : "success" : ""}>
                            <label htmlFor="Email">邮箱</label>
                            <input 
                                type="email" 
                                placeholder="请输入邮箱" 
                                name="email"
                                record="emailChange"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            { !this.state.isEmail && <small>邮箱格式错误</small> }
                        </div>
                        <div className={this.state.passwordChange ? !this.state.isPassword ? "error" : "success" : ""}>
                            <label htmlFor="Password">密码</label>
                            <input 
                                type="password" 
                                placeholder="请输入密码" 
                                name="password"
                                record="passwordChange"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            { !this.state.isPassword && <small>密码必须是数字字母组合&长度在8-16位</small> }
                        </div>
                        <div className={this.state.passwordAgainChange ? !this.state.isPasswordAgain ? "error" : "success" : ""}>
                            <label htmlFor="Password" >密码</label>
                            <input 
                                type="password" 
                                placeholder="请再次输入密码"
                                name="passwordAgain" 
                                record="passwordAgainChange"
                                value={this.state.passwordAgain}
                                onChange={this.handleChange}
                            />
                            { !this.state.isPasswordAgain && <small>请确认密码输入的是否一致</small> }
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