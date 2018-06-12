import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { createHashHistory } from 'history';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: true
        }
    }

    handleChange = (event) => {
        const history = createHashHistory({
            forceRefresh: true
        })
        if (this.refs.account.value == "931634776" && this.refs.password.value == "931634776") {
            history.push("/Home")
        } else {
            alert(this.refs.account.value + "账号错误！")
        }
    }
    render() {

        const titleCss = {
            color: "blue",
            fontSize: 40,
            fontWeight: "normal"
        }
        let account = this.state.language ? "账号" : "account"
        let password = this.state.language ? "密码" : "password"
        return (
            <div>
                <span style={titleCss}>我的博客</span>
                <div>
                    <span>{account}&nbsp;
                    </span>
                    <input ref="account" type="text"></input>
                </div><br></br><div>
                    <span>{password}&nbsp;
                    </span>
                    <input ref="password" type="password"></input>
                </div>
                <button onClick={this.handleChange}>登录</button>
                <button onClick={() => this.setState({ language: !this.state.language })}>中英文</button>
            </div>
        );
    }
}

export default Login;